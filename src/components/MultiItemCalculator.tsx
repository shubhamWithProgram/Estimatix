// Enhanced Multi-Item Quotation Calculator
import { useState, useEffect } from 'react'
import { useAuth } from '../lib/auth'
import { pdfService, type QuotationData } from '../lib/pdfService'
import { quoteShareService } from '../lib/shareService'
import { quotationsService, type SavedQuotation } from '../lib/quotationsService'

interface QuotationItem {
  id: string
  name: string
  type: 'window' | 'door'
  width: number
  height: number
  quantity: number
  glassType: string
  frameType: string
  accessories: string[]
  notes: string
  // Auto-calculated fields
  glassArea?: number
  frameWeight?: number
  glassCost?: number
  frameCost?: number
  accessoryCost?: number
  laborCost?: number
  itemTotal?: number
  showBreakdown?: boolean
}

interface QuotationSummary {
  quotationId: string
  customerName: string
  customerPhone: string
  customerEmail: string
  items: QuotationItem[]
  totalGlassArea: number
  totalFrameWeight: number
  subtotal: number
  laborCharges: number
  gst: number
  grandTotal: number
  createdAt: string
  validUntil?: string
  status?: 'draft' | 'finalized' | 'sent' | 'approved' | 'rejected'
}

interface ItemTemplate {
  id: string
  name: string
  type: 'window' | 'door'
  width: number
  height: number
  glassType: string
  frameType: string
  accessories: string[]
  description: string
}

interface EstimationPreset {
  type: 'window' | 'door'
  size: 'small' | 'medium' | 'large' | 'extra-large'
  width: number
  height: number
  glassType: string
  frameType: string
  accessories: string[]
  useCase: string
  confidence: number
  durability: string
  energyEfficiency: 'low' | 'medium' | 'high'
  costSavings?: number
}

type AIEstimationMode = 'residential' | 'commercial' | 'thermal' | 'premium'

interface AIEstimationResult {
  preset: EstimationPreset
  mode: AIEstimationMode
  estimatedCost: {
    material: number
    labor: number
    gst: number
    total: number
  }
  insights: string[]
  confidence: number
  appliedAt: Date
}

interface AIHistoryEntry {
  id: string
  itemName: string
  type: 'window' | 'door'
  dimensions: string
  mode: AIEstimationMode
  appliedAt: Date
  result: AIEstimationResult
}

export default function MultiItemCalculator() {
  const { user } = useAuth()
  const [generatingPDF, setGeneratingPDF] = useState(false)
  const [savingQuotation, setSavingQuotation] = useState(false)
  const [savedQuotations, setSavedQuotations] = useState<SavedQuotation[]>([])
  const [autoSaving, setAutoSaving] = useState(false)
  const [savedTemplates, setSavedTemplates] = useState<ItemTemplate[]>([])
  const [showTemplateModal, setShowTemplateModal] = useState(false)
  const [draggedItemId, setDraggedItemId] = useState<string | null>(null)
  
  // AI Estimation states
  const [aiMode, setAiMode] = useState<AIEstimationMode>('residential')
  const [showAIModal, setShowAIModal] = useState(false)
  const [aiResult, setAiResult] = useState<AIEstimationResult | null>(null)
  const [aiHistory, setAiHistory] = useState<AIHistoryEntry[]>([])
  const [showAIHistory, setShowAIHistory] = useState(false)
  const [currentEstimatingItemId, setCurrentEstimatingItemId] = useState<string | null>(null)
  
  const [quotation, setQuotation] = useState<QuotationSummary>({
    quotationId: '',
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    items: [],
    totalGlassArea: 0,
    totalFrameWeight: 0,
    subtotal: 0,
    laborCharges: 0,
    gst: 0,
    grandTotal: 0,
    createdAt: new Date().toISOString(),
    validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'draft'
  })

  const [pricingSettings, setPricingSettings] = useState({
    glassRatePerM2: 350,
    aluminiumRatePerKg: 280,
    accessoryRatePerItem: 150,
    laborChargePercent: 15,
    gstPercent: 18,
    companyMarkupPercent: 20
  })

  const glassTypes = [
    'Clear Float Glass 5mm',
    'Tinted Glass 6mm',
    'Laminated Glass 6.38mm',
    'Tempered Glass 8mm',
    'Double Glazed Unit',
    'Reflective Glass 6mm'
  ]

  const frameTypes = [
    'Standard Aluminium Frame',
    'Heavy Duty Frame',
    'Powder Coated Frame',
    'Wooden Frame',
    'UPVC Frame'
  ]

  const accessoryOptions = [
    'Standard Handle',
    'Premium Handle',
    'Security Lock',
    'Mesh/Grill',
    'Weather Strip',
    'Hinges Premium',
    'Sliding Mechanism'
  ]

  // AI-Assisted Estimation Presets Database
  const estimationPresets: EstimationPreset[] = [
    // Windows
    { type: 'window', size: 'small', width: 1.0, height: 1.2, glassType: 'Clear Float Glass 5mm', frameType: 'Standard Aluminium Frame', accessories: ['Standard Handle'], useCase: 'Bathroom, Small Kitchen Window', confidence: 92, durability: '8-10 years', energyEfficiency: 'medium', costSavings: 12 },
    { type: 'window', size: 'medium', width: 1.5, height: 1.8, glassType: 'Tempered Glass 8mm', frameType: 'Standard Aluminium Frame', accessories: ['Standard Handle', 'Mesh/Grill'], useCase: 'Bedroom Window, Living Room', confidence: 95, durability: '10-12 years', energyEfficiency: 'medium', costSavings: 8 },
    { type: 'window', size: 'large', width: 2.0, height: 2.5, glassType: 'Tempered Glass 8mm', frameType: 'Heavy Duty Frame', accessories: ['Premium Handle', 'Sliding Mechanism', 'Weather Strip'], useCase: 'Large Living Room, Balcony Window', confidence: 88, durability: '12-15 years', energyEfficiency: 'high', costSavings: 15 },
    { type: 'window', size: 'extra-large', width: 3.0, height: 2.5, glassType: 'Double Glazed Unit', frameType: 'Heavy Duty Frame', accessories: ['Premium Handle', 'Sliding Mechanism', 'Weather Strip'], useCase: 'Panoramic Window, Bay Window', confidence: 90, durability: '15+ years', energyEfficiency: 'high', costSavings: 18 },
    
    // Doors
    { type: 'door', size: 'small', width: 0.9, height: 2.1, glassType: 'Tempered Glass 8mm', frameType: 'Standard Aluminium Frame', accessories: ['Premium Handle', 'Security Lock', 'Hinges Premium'], useCase: 'Bathroom Door, Utility Door', confidence: 93, durability: '10-12 years', energyEfficiency: 'low', costSavings: 10 },
    { type: 'door', size: 'medium', width: 1.2, height: 2.4, glassType: 'Tempered Glass 8mm', frameType: 'Heavy Duty Frame', accessories: ['Premium Handle', 'Security Lock', 'Hinges Premium', 'Weather Strip'], useCase: 'Main Entrance, Bedroom Door', confidence: 96, durability: '12-15 years', energyEfficiency: 'medium', costSavings: 14 },
    { type: 'door', size: 'large', width: 1.5, height: 2.5, glassType: 'Laminated Glass 6.38mm', frameType: 'Powder Coated Frame', accessories: ['Premium Handle', 'Security Lock', 'Hinges Premium', 'Weather Strip'], useCase: 'Premium Main Entrance', confidence: 91, durability: '15+ years', energyEfficiency: 'high', costSavings: 16 },
    { type: 'door', size: 'extra-large', width: 2.0, height: 2.5, glassType: 'Double Glazed Unit', frameType: 'Powder Coated Frame', accessories: ['Premium Handle', 'Security Lock', 'Sliding Mechanism', 'Weather Strip'], useCase: 'Sliding Door, Patio Door', confidence: 89, durability: '15+ years', energyEfficiency: 'high', costSavings: 20 },
  ]

  // Helper: Calculate frame weight based on dimensions and frame type
  const calculateFrameWeight = (width: number, height: number, frameType: string, quantity: number): number => {
    const perimeter = (width + height) * 2 // in meters
    let densityFactor = 2.5 // kg per meter (standard)
    
    switch (frameType) {
      case 'Heavy Duty Frame':
        densityFactor = 3.5
        break
      case 'Powder Coated Frame':
        densityFactor = 2.8
        break
      case 'Wooden Frame':
        densityFactor = 2.0
        break
      case 'UPVC Frame':
        densityFactor = 1.8
        break
      default:
        densityFactor = 2.5
    }
    
    return perimeter * densityFactor * quantity
  }

  // Helper: Get smart recommendations
  const getSmartRecommendations = (item: QuotationItem): string[] => {
    const recommendations: string[] = []
    const area = item.width * item.height
    
    // Glass type recommendations
    if (item.glassType === 'Clear Float Glass 5mm' && area > 5) {
      recommendations.push('💡 Consider tempered glass for larger areas (>5m²) for safety.')
    }
    
    // Frame type recommendations based on glass
    if (item.glassType === 'Double Glazed Unit' && item.frameType === 'Standard Aluminium Frame') {
      recommendations.push('💡 Heavy Duty Frame is recommended for Double Glazed Units.')
    }
    
    // Sliding mechanism for large dimensions
    if ((item.width >= 2 || item.height >= 2.5) && !item.accessories.includes('Sliding Mechanism')) {
      recommendations.push(`💡 For ${item.width.toFixed(1)}m × ${item.height.toFixed(1)}m dimensions, sliding mechanism is recommended.`)
    }
    
    // Security for doors
    if (item.type === 'door' && !item.accessories.includes('Security Lock')) {
      recommendations.push('🔒 Security Lock is recommended for doors.')
    }
    
    // Weather strip for larger openings
    if (area > 4 && !item.accessories.includes('Weather Strip')) {
      recommendations.push('🌤️ Weather Strip recommended for better insulation.')
    }
    
    return recommendations
  }

  // AI Mode Adjustments: Apply mode-specific optimizations
  const applyAIModeOptimizations = (preset: EstimationPreset, mode: AIEstimationMode): EstimationPreset => {
    let optimized = { ...preset }
    
    switch (mode) {
      case 'residential':
        // Cost-efficient choices
        if (preset.glassType === 'Double Glazed Unit') {
          optimized.glassType = 'Tempered Glass 8mm'
          optimized.confidence -= 5
        }
        break
        
      case 'commercial':
        // Durability focus
        if (preset.frameType === 'Standard Aluminium Frame') {
          optimized.frameType = 'Heavy Duty Frame'
        }
        if (!preset.accessories.includes('Security Lock')) {
          optimized.accessories.push('Security Lock')
        }
        optimized.confidence += 3
        break
        
      case 'thermal':
        // Energy efficiency
        if (!preset.glassType.includes('Double Glazed')) {
          optimized.glassType = 'Double Glazed Unit'
        }
        if (!preset.accessories.includes('Weather Strip')) {
          optimized.accessories.push('Weather Strip')
        }
        optimized.energyEfficiency = 'high'
        optimized.confidence += 5
        break
        
      case 'premium':
        // Aesthetic and quality
        optimized.frameType = 'Powder Coated Frame'
        optimized.glassType = preset.glassType.includes('Laminated') ? preset.glassType : 'Laminated Glass 6.38mm'
        if (!preset.accessories.includes('Premium Handle')) {
          optimized.accessories = optimized.accessories.filter(a => a !== 'Standard Handle')
          optimized.accessories.push('Premium Handle')
        }
        optimized.confidence += 2
        break
    }
    
    return optimized
  }

  // Calculate estimated costs for AI result
  const calculateAIEstimatedCosts = (preset: EstimationPreset, quantity: number = 1) => {
    const area = preset.width * preset.height * quantity
    const frameWeight = calculateFrameWeight(preset.width, preset.height, preset.frameType, quantity)
    
    const materialCost = (area * pricingSettings.glassRatePerM2) + 
                        (frameWeight * pricingSettings.aluminiumRatePerKg) + 
                        (preset.accessories.length * pricingSettings.accessoryRatePerItem * quantity)
    
    const laborCost = materialCost * (pricingSettings.laborChargePercent / 100)
    const subtotal = materialCost + laborCost
    const gst = subtotal * (pricingSettings.gstPercent / 100)
    const total = subtotal + gst
    
    return {
      material: materialCost,
      labor: laborCost,
      gst,
      total
    }
  }

  // Generate AI insights
  const generateAIInsights = (preset: EstimationPreset, mode: AIEstimationMode): string[] => {
    const insights: string[] = []
    
    // Weight savings
    if (preset.costSavings) {
      insights.push(`💰 This configuration saves ${preset.costSavings}% material weight vs standard setup`)
    }
    
    // Durability insight
    insights.push(`🛡️ Estimated durability: ${preset.durability}`)
    
    // Energy efficiency
    if (preset.energyEfficiency === 'high') {
      insights.push(`⚡ High energy efficiency - Reduces cooling/heating costs`)
    }
    
    // Mode-specific insights
    switch (mode) {
      case 'residential':
        insights.push(`🏠 Optimized for residential use with cost-efficient materials`)
        break
      case 'commercial':
        insights.push(`🏢 Commercial-grade durability for high-traffic areas`)
        break
      case 'thermal':
        insights.push(`🌡️ Thermal insulation optimized - Best for extreme climates`)
        break
      case 'premium':
        insights.push(`💎 Premium aesthetic finish with superior quality materials`)
        break
    }
    
    return insights
  }

  // AI-Assisted Estimation: Automatically fill item fields with premium modal
  const estimateAutomatically = (itemId: string, itemType: 'window' | 'door') => {
    const item = quotation.items.find(i => i.id === itemId)
    if (!item) return

    setCurrentEstimatingItemId(itemId)

    // Determine best preset based on current item state or default to medium
    let basePreset: EstimationPreset
    
    // If item has dimensions, find closest match
    if (item.width > 0 || item.height > 0) {
      const area = item.width * item.height
      let size: 'small' | 'medium' | 'large' | 'extra-large' = 'medium'
      
      if (area < 1.5) size = 'small'
      else if (area < 4) size = 'medium'
      else if (area < 7) size = 'large'
      else size = 'extra-large'
      
      basePreset = estimationPresets.find(p => p.type === itemType && p.size === size) || estimationPresets.find(p => p.type === itemType && p.size === 'medium')!
    } else {
      // Default to medium size
      basePreset = estimationPresets.find(p => p.type === itemType && p.size === 'medium')!
    }

    // Apply AI mode optimizations
    const optimizedPreset = applyAIModeOptimizations(basePreset, aiMode)
    
    // Calculate costs
    const estimatedCosts = calculateAIEstimatedCosts(optimizedPreset, item.quantity)
    
    // Generate insights
    const insights = generateAIInsights(optimizedPreset, aiMode)
    
    // Create AI result
    const result: AIEstimationResult = {
      preset: optimizedPreset,
      mode: aiMode,
      estimatedCost: estimatedCosts,
      insights,
      confidence: optimizedPreset.confidence,
      appliedAt: new Date()
    }
    
    setAiResult(result)
    setShowAIModal(true)
  }

  // Apply AI estimation to item
  const applyAIEstimation = () => {
    if (!aiResult || !currentEstimatingItemId) return

    const preset = aiResult.preset
    
    // Apply preset to item
    setQuotation(prev => ({
      ...prev,
      items: prev.items.map(i => 
        i.id === currentEstimatingItemId ? {
          ...i,
          width: preset.width,
          height: preset.height,
          glassType: preset.glassType,
          frameType: preset.frameType,
          accessories: [...preset.accessories],
          notes: `🤖 AI Estimated (${aiMode.charAt(0).toUpperCase() + aiMode.slice(1)} Mode)\nUse Case: ${preset.useCase}\nConfidence: ${preset.confidence}%\n${i.notes ? '\n' + i.notes : ''}`
        } : i
      )
    }))

    // Add to history
    const historyEntry: AIHistoryEntry = {
      id: Date.now().toString(),
      itemName: quotation.items.find(i => i.id === currentEstimatingItemId)?.name || 'Unknown',
      type: preset.type,
      dimensions: `${preset.width}m × ${preset.height}m`,
      mode: aiMode,
      appliedAt: aiResult.appliedAt,
      result: aiResult
    }
    
    const newHistory = [historyEntry, ...aiHistory].slice(0, 10) // Keep last 10
    setAiHistory(newHistory)
    localStorage.setItem('ai_estimation_history', JSON.stringify(newHistory))

    // Close modal and reset
    setShowAIModal(false)
    setCurrentEstimatingItemId(null)
    triggerAutoSave()
  }

  // Load AI history on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('ai_estimation_history')
    if (savedHistory) {
      setAiHistory(JSON.parse(savedHistory))
    }
  }, [])

  // Load pricing settings and templates from localStorage
  useEffect(() => {
    const savedPricing = localStorage.getItem('admin_pricing_settings')
    if (savedPricing) {
      setPricingSettings(JSON.parse(savedPricing))
    }
    
    const savedTemplatesData = localStorage.getItem('item_templates')
    if (savedTemplatesData) {
      setSavedTemplates(JSON.parse(savedTemplatesData))
    }
  }, [])

  // Generate auto-incrementing quotation ID using Firebase
  const generateQuotationId = async () => {
    if (!user?.uid) return 'TEMP-001'
    
    try {
      const newId = await quotationsService.generateQuotationId(user.uid)
      return newId
    } catch (error) {
      console.error('Error generating quotation ID:', error)
      // Fallback to old method
      const invoiceSettings = JSON.parse(localStorage.getItem('admin_invoice_settings') || '{"prefix":"VEN","currentYear":2025,"currentSequence":1}')
      const sequence = invoiceSettings.currentSequence.toString().padStart(3, '0')
      const newId = `${invoiceSettings.prefix}${invoiceSettings.currentYear}-${sequence}`
      
      // Update sequence number
      invoiceSettings.currentSequence += 1
      localStorage.setItem('admin_invoice_settings', JSON.stringify(invoiceSettings))
      
      return newId
    }
  }

  // Initialize quotation ID on component mount
  useEffect(() => {
    const initQuotationId = async () => {
      if (!quotation.quotationId) {
        const newId = await generateQuotationId()
        setQuotation(prev => ({
          ...prev,
          quotationId: newId
        }))
      }
    }
    initQuotationId()
  }, [])

  const addNewItem = () => {
    const newItem: QuotationItem = {
      id: Date.now().toString(),
      name: `Item ${quotation.items.length + 1}`,
      type: 'window',
      width: 0,
      height: 0,
      quantity: 1,
      glassType: glassTypes[0],
      frameType: frameTypes[0],
      accessories: [],
      notes: '',
      showBreakdown: false
    }

    setQuotation(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }))
  }

  // Duplicate/Clone item
  const duplicateItem = (itemId: string) => {
    const itemToDuplicate = quotation.items.find(item => item.id === itemId)
    if (!itemToDuplicate) return

    const newItem: QuotationItem = {
      ...itemToDuplicate,
      id: Date.now().toString(),
      name: `${itemToDuplicate.name} (Copy)`,
      showBreakdown: false
    }

    setQuotation(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }))
  }

  // Add item from template
  const addItemFromTemplate = (template: ItemTemplate) => {
    const newItem: QuotationItem = {
      id: Date.now().toString(),
      name: template.name,
      type: template.type,
      width: template.width,
      height: template.height,
      quantity: 1,
      glassType: template.glassType,
      frameType: template.frameType,
      accessories: [...template.accessories],
      notes: template.description,
      showBreakdown: false
    }

    setQuotation(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }))
    setShowTemplateModal(false)
  }

  // Save current item as template
  const saveAsTemplate = (item: QuotationItem) => {
    const templateName = prompt('Enter template name:', item.name)
    if (!templateName) return

    const newTemplate: ItemTemplate = {
      id: Date.now().toString(),
      name: templateName,
      type: item.type,
      width: item.width,
      height: item.height,
      glassType: item.glassType,
      frameType: item.frameType,
      accessories: [...item.accessories],
      description: item.notes
    }

    const updatedTemplates = [...savedTemplates, newTemplate]
    setSavedTemplates(updatedTemplates)
    localStorage.setItem('item_templates', JSON.stringify(updatedTemplates))
    alert(`✅ Template "${templateName}" saved successfully!`)
  }

  // Drag and drop handlers
  const handleDragStart = (itemId: string) => {
    setDraggedItemId(itemId)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (targetItemId: string) => {
    if (!draggedItemId || draggedItemId === targetItemId) {
      setDraggedItemId(null)
      return
    }

    const draggedIndex = quotation.items.findIndex(item => item.id === draggedItemId)
    const targetIndex = quotation.items.findIndex(item => item.id === targetItemId)

    if (draggedIndex === -1 || targetIndex === -1) return

    const newItems = [...quotation.items]
    const [draggedItem] = newItems.splice(draggedIndex, 1)
    newItems.splice(targetIndex, 0, draggedItem)

    setQuotation(prev => ({
      ...prev,
      items: newItems
    }))
    setDraggedItemId(null)
  }

  const updateItem = (itemId: string, field: keyof QuotationItem, value: any) => {
    setQuotation(prev => ({
      ...prev,
      items: prev.items.map(item => 
        item.id === itemId ? { ...item, [field]: value } : item
      )
    }))
    triggerAutoSave()
  }

  const toggleItemBreakdown = (itemId: string) => {
    setQuotation(prev => ({
      ...prev,
      items: prev.items.map(item => 
        item.id === itemId ? { ...item, showBreakdown: !item.showBreakdown } : item
      )
    }))
  }

  // Auto-save functionality (debounced)
  const triggerAutoSave = () => {
    if (!user?.uid) return
    
    setAutoSaving(true)
    // Clear existing timeout
    if ((window as any).autoSaveTimeout) {
      clearTimeout((window as any).autoSaveTimeout)
    }
    
    // Set new timeout for auto-save after 2 seconds of inactivity
    (window as any).autoSaveTimeout = setTimeout(() => {
      autoSaveQuotation()
    }, 2000)
  }

  const autoSaveQuotation = async () => {
    if (!user?.uid || !quotation.customerName || quotation.items.length === 0) {
      setAutoSaving(false)
      return
    }

    try {
      // Save to localStorage as draft
      localStorage.setItem('draft_quotation', JSON.stringify(quotation))
      console.log('✓ Auto-saved to localStorage')
      setAutoSaving(false)
    } catch (error) {
      console.error('Auto-save error:', error)
      setAutoSaving(false)
    }
  }

  // Load draft on mount
  useEffect(() => {
    const draft = localStorage.getItem('draft_quotation')
    if (draft && !quotation.quotationId) {
      const draftData = JSON.parse(draft)
      if (draftData.items && draftData.items.length > 0) {
        const shouldRestore = confirm('Found a saved draft. Would you like to restore it?')
        if (shouldRestore) {
          setQuotation(draftData)
        }
      }
    }
  }, [])

  const removeItem = (itemId: string) => {
    setQuotation(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== itemId)
    }))
  }

  const toggleAccessory = (itemId: string, accessory: string) => {
    setQuotation(prev => ({
      ...prev,
      items: prev.items.map(item => {
        if (item.id === itemId) {
          const accessories = item.accessories.includes(accessory)
            ? item.accessories.filter(a => a !== accessory)
            : [...item.accessories, accessory]
          return { ...item, accessories }
        }
        return item
      })
    }))
  }

  // Calculate totals with item-level breakdowns
  useEffect(() => {
    let totalGlassArea = 0
    let totalFrameWeight = 0
    let subtotal = 0

    // Update each item with auto-calculated values
    const updatedItems = quotation.items.map(item => {
      const glassArea = item.width * item.height * item.quantity
      const frameWeight = calculateFrameWeight(item.width, item.height, item.frameType, item.quantity)
      const glassCost = glassArea * pricingSettings.glassRatePerM2
      const frameCost = frameWeight * pricingSettings.aluminiumRatePerKg
      const accessoryCost = item.accessories.length * pricingSettings.accessoryRatePerItem * item.quantity
      
      const itemSubtotal = glassCost + frameCost + accessoryCost
      const laborCost = itemSubtotal * (pricingSettings.laborChargePercent / 100)
      const itemTotal = itemSubtotal + laborCost

      totalGlassArea += glassArea
      totalFrameWeight += frameWeight
      subtotal += itemSubtotal

      return {
        ...item,
        glassArea,
        frameWeight,
        glassCost,
        frameCost,
        accessoryCost,
        laborCost,
        itemTotal
      }
    })

    const laborCharges = subtotal * (pricingSettings.laborChargePercent / 100)
    const companyMarkup = subtotal * (pricingSettings.companyMarkupPercent / 100)
    const totalBeforeGST = subtotal + laborCharges + companyMarkup
    const gst = totalBeforeGST * (pricingSettings.gstPercent / 100)
    const grandTotal = totalBeforeGST + gst

    setQuotation(prev => ({
      ...prev,
      items: updatedItems,
      totalGlassArea,
      totalFrameWeight,
      subtotal,
      laborCharges: laborCharges + companyMarkup,
      gst,
      grandTotal
    }))
  }, [quotation.items.length, quotation.items.map(i => `${i.width}-${i.height}-${i.quantity}-${i.glassType}-${i.frameType}-${i.accessories.length}`).join(','), pricingSettings])

  // Save quotation to Firebase
  const saveQuotation = async () => {
    if (!user?.uid) {
      alert('Please log in to save quotations')
      return
    }

    if (!quotation.customerName || !quotation.customerPhone) {
      alert('Please fill in customer name and phone number')
      return
    }

    if (quotation.items.length === 0) {
      alert('Please add at least one item')
      return
    }

    setSavingQuotation(true)
    try {
      // Convert items to match SavedQuotation format
      const savedItems = quotation.items.map(item => {
        const areaInSqFt = (item.width * item.height) / 144
        const areaInM2 = areaInSqFt * 0.092903
        const itemRate = pricingSettings.glassRatePerM2
        
        return {
          ...item,
          areaInSqFt,
          areaInM2,
          rate: itemRate,
          itemTotal: areaInM2 * itemRate * item.quantity
        }
      })

      const quotationData: Omit<SavedQuotation, 'id' | 'createdAt' | 'updatedAt'> = {
        quotationId: quotation.quotationId,
        userId: user.uid,
        customerName: quotation.customerName,
        customerPhone: quotation.customerPhone,
        customerEmail: quotation.customerEmail || '',
        customerAddress: '',
        items: savedItems,
        totalGlassArea: quotation.totalGlassArea,
        totalFrameWeight: quotation.totalFrameWeight,
        subtotal: quotation.subtotal,
        laborCharges: quotation.laborCharges,
        gst: quotation.gst,
        grandTotal: quotation.grandTotal,
        status: 'draft',
        notes: `Quotation created from Multi-Item Calculator`
      }

      const docId = await quotationsService.saveQuotation(quotationData)
      
      console.log('Quotation saved successfully with ID:', docId)
      alert(`✅ Quotation ${quotation.quotationId} saved successfully to Firebase!`)
      
      // Reload saved quotations list
      loadSavedQuotations()
    } catch (error) {
      console.error('Error saving quotation:', error)
      alert('❌ Failed to save quotation. Please try again.')
    } finally {
      setSavingQuotation(false)
    }
  }

  // Load saved quotations
  const loadSavedQuotations = async () => {
    if (!user?.uid) return

    try {
      const quotations = await quotationsService.getUserQuotations(user.uid, 20)
      setSavedQuotations(quotations)
    } catch (error) {
      console.error('Error loading quotations:', error)
    }
  }

  // Load saved quotations on mount
  useEffect(() => {
    loadSavedQuotations()
  }, [user?.uid])

  const generatePDF = async () => {
    setGeneratingPDF(true)
    try {
      // Validate required fields
      if (!quotation.customerName || !quotation.customerPhone) {
        alert('Please fill in customer name and phone number before generating PDF')
        setGeneratingPDF(false)
        return
      }

      if (quotation.items.length === 0) {
        alert('Please add at least one item before generating PDF')
        setGeneratingPDF(false)
        return
      }

      // Convert quotation items to PDF format
      const pdfItems = quotation.items.map((item, index) => {
        const areaInSqFt = (item.width * item.height) / 144
        const areaInM2 = areaInSqFt * 0.092903 // Convert sq.ft to sq.m
        const itemRate = pricingSettings.glassRatePerM2
        return {
          name: item.name || `Item ${index + 1}`,
          type: item.type,
          width: item.width,
          height: item.height,
          area: areaInSqFt,
          rate: itemRate,
          total: areaInM2 * itemRate * item.quantity
        }
      })

      // Prepare quotation data for PDF
      const quotationData: QuotationData = {
        invoiceNumber: quotation.quotationId || `QUOT-${Date.now()}`,
        date: quotation.createdAt ? new Date(quotation.createdAt) : new Date(),
        customerName: quotation.customerName,
        customerPhone: quotation.customerPhone,
        customerEmail: quotation.customerEmail || 'N/A',
        customerAddress: '',
        items: pdfItems,
        subtotal: quotation.subtotal || 0,
        tax: quotation.gst || 0,
        grandTotal: quotation.grandTotal || 0,
        notes: `Total Glass Area: ${quotation.totalGlassArea.toFixed(2)} sq.ft\nTotal Frame Weight: ${quotation.totalFrameWeight.toFixed(2)} kg\nLabor Charges: Rs. ${quotation.laborCharges.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`,
        termsAndConditions: '1. Prices are valid for 30 days\n2. Payment terms: 50% advance, 50% on completion\n3. Installation charges may apply\n4. Prices subject to change without notice'
      }
      
      console.log('Quotation data prepared:', quotationData)

      // Create share link for QR code (optional - non-blocking)
      let shareLink = ''
      try {
        console.log('Creating share link for quotation:', quotation.quotationId)
        shareLink = await quoteShareService.createShareLink(quotation.quotationId, {
          readOnly: true,
          expiresInDays: 90,
          isPublic: true,
          allowedUsers: []
        })
        console.log('Share link created:', shareLink)
      } catch (error) {
        console.warn('Could not create share link for QR code (PDF will generate without QR):', error)
        // Continue without QR code - it's optional
      }

      // Generate PDF with QR code
      console.log('Generating PDF with data:', {
        invoiceNumber: quotationData.invoiceNumber,
        itemCount: quotationData.items.length,
        hasShareLink: !!shareLink
      })

      const pdfBlob = await pdfService.generateQuotationPDF(quotationData, {
        branding: {
          companyName: 'Venkatesh Aluminium & Glass',
          address: 'Ram Nagar Dhule',
          phone: '888888999',
          email: 'shubhamj0212@gmail.com'
        },
        qrCode: shareLink ? {
          url: shareLink,
          label: 'Scan to View Online'
        } : undefined
      })
      
      console.log('PDF generated successfully, blob size:', pdfBlob.size)

      // Download the PDF
      const url = URL.createObjectURL(pdfBlob)
      const link = document.createElement('a')
      link.href = url
      link.download = `Quotation_${quotation.quotationId}_${new Date().toISOString().split('T')[0]}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      alert(`PDF generated successfully: ${link.download}`)
    } catch (error) {
      console.error('Detailed PDF generation error:', {
        error,
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      })
      
      // More specific error message
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      alert(`Failed to generate PDF: ${errorMessage}\n\nPlease check the console for details.`)
    } finally {
      setGeneratingPDF(false)
    }
  }

  return (
    <>
      <style>{`
        /* Improved label readability */
        .form-label {
          font-weight: 600 !important;
          color: #1a202c !important;
          font-size: 0.875rem !important;
          margin-bottom: 0.5rem !important;
          text-transform: uppercase;
          letter-spacing: 0.025em;
        }
        
        [data-bs-theme="dark"] .form-label {
          color: #e2e8f0 !important;
        }
        
        /* Special styling for icon labels */
        .form-label i {
          color: #2196f3 !important;
        }
        
        @keyframes pulse {
          0%, 100% { box-shadow: 0 -5px 20px rgba(0,123,255,0.3); }
          50% { box-shadow: 0 -5px 30px rgba(0,123,255,0.6); }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .item-card-dragging {
          opacity: 0.5;
          border: 2px dashed #007bff;
        }
        
        .auto-calc-field {
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%) !important;
          border-left: 4px solid #2196f3 !important;
          font-weight: 600 !important;
          color: #0d47a1 !important;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
        }
        
        /* Dark mode support for auto-calc field */
        [data-bs-theme="dark"] .auto-calc-field {
          background: linear-gradient(135deg, #1e3a5f 0%, #2c5282 100%) !important;
          color: #90caf9 !important;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
          border-left: 4px solid #64b5f6 !important;
        }
        
        /* Improved card header readability */
        .card-header h6 {
          font-weight: 700 !important;
          font-size: 1.1rem !important;
          color: #1a202c !important;
        }
        
        [data-bs-theme="dark"] .card-header h6 {
          color: #2d3748 !important;
        }
        
        .card-header .badge {
          font-size: 0.875rem !important;
          padding: 0.375rem 0.625rem !important;
          font-weight: 700 !important;
        }
        
        .card-header small {
          font-weight: 500 !important;
        }
        
        .ai-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }
        
        .ai-modal-content {
          background: white;
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          max-width: 600px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          animation: fadeInScale 0.4s ease;
        }
        
        .confidence-bar {
          background: #e9ecef;
          border-radius: 10px;
          height: 20px;
          overflow: hidden;
        }
        
        .confidence-fill {
          background: linear-gradient(90deg, #28a745, #20c997);
          height: 100%;
          transition: width 0.5s ease;
        }
        
        .ai-tag {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 500;
          margin-right: 8px;
          margin-bottom: 8px;
        }
        
        .ai-tag.glass { background: #cfe2ff; color: #084298; }
        .ai-tag.frame { background: #d3d3d3; color: #495057; }
        .ai-tag.size { background: #fff3cd; color: #997404; }
        .ai-tag.mode { background: #d1e7dd; color: #0f5132; }
      `}</style>
      
      {/* Premium AI Estimation Modal */}
      {showAIModal && aiResult && (
        <div className="ai-modal-backdrop" onClick={() => setShowAIModal(false)}>
          <div className="ai-modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="p-4 border-bottom bg-gradient" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center text-white">
                  <div className="me-3" style={{fontSize: '2.5rem'}}>🤖</div>
                  <div>
                    <h4 className="mb-1">Estimatix AI Assistant</h4>
                    <small className="opacity-75">Intelligent Estimation Engine v1.4</small>
                  </div>
                </div>
                <button 
                  className="btn btn-sm btn-light" 
                  onClick={() => setShowAIModal(false)}
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Confidence Score */}
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="fw-bold">🔮 AI Confidence Score</span>
                  <span className="badge bg-success">{aiResult.confidence}%</span>
                </div>
                <div className="confidence-bar">
                  <div 
                    className="confidence-fill" 
                    style={{width: `${aiResult.confidence}%`}}
                  ></div>
                </div>
                <small className="text-muted">Based on training data and similar project patterns</small>
              </div>

              {/* Recommended Setup */}
              <div className="mb-4">
                <h5 className="mb-3">✨ Recommended Setup</h5>
                <div className="bg-light p-3 rounded">
                  <div className="mb-3">
                    <span className="ai-tag size">
                      📏 {aiResult.preset.size.toUpperCase()} ({aiResult.preset.width}m × {aiResult.preset.height}m)
                    </span>
                    <span className="ai-tag mode">
                      🎯 {aiResult.mode.charAt(0).toUpperCase() + aiResult.mode.slice(1)} Mode
                    </span>
                  </div>
                  
                  <div className="mb-2">
                    <span className="ai-tag glass">
                      <i className="bi bi-square me-1"></i>{aiResult.preset.glassType}
                    </span>
                  </div>
                  
                  <div className="mb-2">
                    <span className="ai-tag frame">
                      <i className="bi bi-grid-3x3 me-1"></i>{aiResult.preset.frameType}
                    </span>
                  </div>
                  
                  <div>
                    <strong className="d-block mb-2">Accessories:</strong>
                    {aiResult.preset.accessories.map((acc, idx) => (
                      <span key={idx} className="badge bg-secondary me-1 mb-1">{acc}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Cost Preview */}
              <div className="mb-4">
                <h5 className="mb-3">💰 Cost Preview (Estimated)</h5>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Material Cost:</span>
                      <strong>₹ {aiResult.estimatedCost.material.toLocaleString('en-IN', {minimumFractionDigits: 2})}</strong>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Labor Estimate:</span>
                      <strong>₹ {aiResult.estimatedCost.labor.toLocaleString('en-IN', {minimumFractionDigits: 2})}</strong>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>GST ({pricingSettings.gstPercent}%):</span>
                      <strong>₹ {aiResult.estimatedCost.gst.toLocaleString('en-IN', {minimumFractionDigits: 2})}</strong>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <strong>Total Estimate:</strong>
                      <strong className="text-success fs-5">₹ {aiResult.estimatedCost.total.toLocaleString('en-IN', {minimumFractionDigits: 2})}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Insights */}
              <div className="mb-4">
                <h5 className="mb-3">💡 AI Insights</h5>
                <div className="alert alert-info mb-0">
                  <ul className="mb-0 ps-3">
                    {aiResult.insights.map((insight, idx) => (
                      <li key={idx} className="mb-2">{insight}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Use Case */}
              <div className="mb-4">
                <div className="alert alert-success">
                  <strong>🎯 Perfect For:</strong> {aiResult.preset.useCase}
                </div>
              </div>

              {/* Actions */}
              <div className="d-flex gap-2">
                <button 
                  className="btn btn-primary flex-grow-1"
                  onClick={applyAIEstimation}
                >
                  <i className="bi bi-check-circle me-2"></i>
                  Apply AI Estimation
                </button>
                <button 
                  className="btn btn-outline-secondary"
                  onClick={() => setShowAIModal(false)}
                >
                  <i className="bi bi-x-circle me-2"></i>
                  Cancel
                </button>
              </div>

              {/* Feedback */}
              <div className="text-center mt-3">
                <small className="text-muted">Was this estimation helpful?</small>
                <div className="mt-2">
                  <button className="btn btn-sm btn-outline-success me-2">
                    <i className="bi bi-hand-thumbs-up"></i> Accurate
                  </button>
                  <button className="btn btn-sm btn-outline-warning">
                    <i className="bi bi-hand-thumbs-down"></i> Needs Improvement
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="container-fluid py-4">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="h3 text-primary mb-1">
                <i className="bi bi-calculator me-2"></i>
                Multi-Item Quotation
                {autoSaving && <span className="badge bg-info ms-2 small">Auto-saving...</span>}
              </h1>
              <p className="text-muted mb-0">
                Quotation ID: <strong className="text-primary">{quotation.quotationId}</strong> | 
                Status: <span className={`badge bg-${quotation.status === 'draft' ? 'secondary' : quotation.status === 'finalized' ? 'success' : 'info'}`}>
                  {quotation.status?.toUpperCase()}
                </span>
              </p>
              <p className="text-muted small mb-0">
                Created: {new Date(quotation.createdAt).toLocaleDateString()} | 
                Valid Until: <span className={new Date(quotation.validUntil || '') < new Date() ? 'text-danger fw-bold' : 'text-success'}>
                  {quotation.validUntil ? new Date(quotation.validUntil).toLocaleDateString() : 'N/A'}
                  {new Date(quotation.validUntil || '') < new Date() && ' ⚠️ EXPIRED'}
                </span>
              </p>
            </div>
            <div className="d-flex gap-2 flex-wrap">
              <button className="btn btn-outline-primary" onClick={addNewItem}>
                <i className="bi bi-plus-circle me-1"></i>
                Add Item
              </button>
              <div className="btn-group">
                <button 
                  className="btn btn-warning" 
                  onClick={() => {
                    const lastItem = quotation.items[quotation.items.length - 1]
                    if (lastItem) {
                      estimateAutomatically(lastItem.id, lastItem.type)
                    } else {
                      alert('Please add an item first!')
                    }
                  }}
                  disabled={quotation.items.length === 0}
                  title="AI-Assisted Estimation for last item"
                >
                  <i className="bi bi-lightbulb-fill me-1"></i>
                  💡 AI Estimate
                </button>
                <button 
                  className="btn btn-warning dropdown-toggle dropdown-toggle-split" 
                  data-bs-toggle="dropdown"
                  title="Change AI Mode"
                ></button>
                <ul className="dropdown-menu">
                  <li><h6 className="dropdown-header">🤖 AI Optimization Mode</h6></li>
                  <li>
                    <button 
                      className={`dropdown-item ${aiMode === 'residential' ? 'active' : ''}`}
                      onClick={() => setAiMode('residential')}
                    >
                      🏠 Residential<br/>
                      <small className="text-muted">Cost-efficient materials</small>
                    </button>
                  </li>
                  <li>
                    <button 
                      className={`dropdown-item ${aiMode === 'commercial' ? 'active' : ''}`}
                      onClick={() => setAiMode('commercial')}
                    >
                      🏢 Commercial<br/>
                      <small className="text-muted">Maximum durability</small>
                    </button>
                  </li>
                  <li>
                    <button 
                      className={`dropdown-item ${aiMode === 'thermal' ? 'active' : ''}`}
                      onClick={() => setAiMode('thermal')}
                    >
                      🌡️ Thermal Efficiency<br/>
                      <small className="text-muted">Insulation optimized</small>
                    </button>
                  </li>
                  <li>
                    <button 
                      className={`dropdown-item ${aiMode === 'premium' ? 'active' : ''}`}
                      onClick={() => setAiMode('premium')}
                    >
                      💎 Premium Aesthetic<br/>
                      <small className="text-muted">Superior quality</small>
                    </button>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button 
                      className="dropdown-item text-primary"
                      onClick={() => setShowAIHistory(!showAIHistory)}
                    >
                      <i className="bi bi-clock-history me-2"></i>
                      View AI History ({aiHistory.length})
                    </button>
                  </li>
                </ul>
              </div>
              <button 
                className="btn btn-outline-secondary" 
                onClick={() => setShowTemplateModal(!showTemplateModal)}
              >
                <i className="bi bi-bookmark-star me-1"></i>
                Templates ({savedTemplates.length})
              </button>
              <button 
                className="btn btn-success" 
                onClick={saveQuotation}
                disabled={savingQuotation || quotation.items.length === 0}
              >
                {savingQuotation ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    Saving...
                  </>
                ) : (
                  <>
                    <i className="bi bi-cloud-check me-1"></i>
                    Save to Firebase
                  </>
                )}
              </button>
              <button 
                className="btn btn-danger" 
                onClick={generatePDF}
                disabled={generatingPDF || quotation.items.length === 0}
              >
                {generatingPDF ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    Generating PDF...
                  </>
                ) : (
                  <>
                    <i className="bi bi-file-earmark-pdf me-1"></i>
                    Generate PDF
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Template Modal */}
      {showTemplateModal && savedTemplates.length > 0 && (
        <div className="row mb-4">
          <div className="col-12">
            <div className="card border-primary">
              <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                <h5 className="mb-0"><i className="bi bi-bookmark-star me-2"></i>Item Templates</h5>
                <button className="btn btn-sm btn-light" onClick={() => setShowTemplateModal(false)}>
                  <i className="bi bi-x"></i>
                </button>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  {savedTemplates.map(template => (
                    <div key={template.id} className="col-md-4">
                      <div className="card h-100">
                        <div className="card-body">
                          <h6 className="card-title">{template.name}</h6>
                          <p className="card-text small text-muted mb-2">
                            {template.width}m × {template.height}m | {template.glassType}
                          </p>
                          <button 
                            className="btn btn-sm btn-primary w-100"
                            onClick={() => addItemFromTemplate(template)}
                          >
                            <i className="bi bi-plus-circle me-1"></i>
                            Add to Quotation
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AI History Panel */}
      {showAIHistory && aiHistory.length > 0 && (
        <div className="row mb-4">
          <div className="col-12">
            <div className="card border-warning">
              <div className="card-header bg-warning text-dark d-flex justify-content-between align-items-center">
                <h5 className="mb-0">
                  <i className="bi bi-clock-history me-2"></i>
                  🤖 AI Estimation History
                </h5>
                <button className="btn btn-sm btn-dark" onClick={() => setShowAIHistory(false)}>
                  <i className="bi bi-x"></i>
                </button>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  {aiHistory.map(entry => (
                    <div key={entry.id} className="col-md-6">
                      <div className="card h-100 border-start border-warning border-4">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <h6 className="card-title mb-0">
                              {entry.type === 'window' ? '🪟' : '🚪'} {entry.itemName}
                            </h6>
                            <span className="badge bg-secondary">{entry.mode}</span>
                          </div>
                          <p className="card-text small mb-2">
                            <strong>Dimensions:</strong> {entry.dimensions}<br/>
                            <strong>Applied:</strong> {new Date(entry.appliedAt).toLocaleString()}<br/>
                            <strong>Confidence:</strong> {entry.result.confidence}%
                          </p>
                          <div className="d-flex gap-2">
                            <button 
                              className="btn btn-sm btn-outline-primary flex-grow-1"
                              onClick={() => {
                                setAiResult(entry.result)
                                setShowAIModal(true)
                              }}
                            >
                              <i className="bi bi-eye me-1"></i>
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Customer Information */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-info text-white">
              <h5 className="card-title mb-0">
                <i className="bi bi-person-fill me-2"></i>
                Customer Information
              </h5>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label">Customer Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={quotation.customerName}
                    onChange={(e) => setQuotation(prev => ({ ...prev, customerName: e.target.value }))}
                    placeholder="Enter customer name"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    value={quotation.customerPhone}
                    onChange={(e) => setQuotation(prev => ({ ...prev, customerPhone: e.target.value }))}
                    placeholder="Enter phone number"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    value={quotation.customerEmail}
                    onChange={(e) => setQuotation(prev => ({ ...prev, customerEmail: e.target.value }))}
                    placeholder="Enter email address"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Items List */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">
                <i className="bi bi-list-ul me-2"></i>
                Quotation Items ({quotation.items.length})
              </h5>
              {quotation.items.length === 0 && (
                <button className="btn btn-light btn-sm" onClick={addNewItem}>
                  <i className="bi bi-plus me-1"></i>
                  Add First Item
                </button>
              )}
            </div>
            <div className="card-body">
              {quotation.items.length === 0 ? (
                <div className="text-center py-5 text-muted">
                  <i className="bi bi-inbox display-4 d-block mb-3"></i>
                  <h5>No items added yet</h5>
                  <p>Add your first window or door to start building the quotation</p>
                </div>
              ) : (
                <div className="row g-4">
                  {quotation.items.map((item, index) => {
                    const recommendations = getSmartRecommendations(item)
                    return (
                    <div 
                      key={item.id} 
                      className="col-12"
                      draggable
                      onDragStart={() => handleDragStart(item.id)}
                      onDragOver={handleDragOver}
                      onDrop={() => handleDrop(item.id)}
                      style={{ cursor: 'move' }}
                    >
                      <div className="card border-secondary shadow-sm">
                        <div className="card-header bg-light d-flex justify-content-between align-items-center">
                          <h6 className="mb-0">
                            <i className="bi bi-grip-vertical me-2 text-muted" title="Drag to reorder"></i>
                            <span className="badge bg-secondary me-2">{index + 1}</span>
                            {item.name}
                            {item.glassArea && item.glassArea > 0 && (
                              <small className="text-muted ms-2">
                                ({item.glassArea.toFixed(2)} m² | {item.frameWeight?.toFixed(2)} kg)
                              </small>
                            )}
                          </h6>
                          <div className="btn-group btn-group-sm">
                            <button 
                              className="btn btn-warning"
                              onClick={() => estimateAutomatically(item.id, item.type)}
                              title="AI-Assisted Estimation - Auto-fill with smart defaults"
                            >
                              <i className="bi bi-lightbulb-fill me-1"></i>
                              Estimate
                            </button>
                            <button 
                              className="btn btn-outline-primary"
                              onClick={() => toggleItemBreakdown(item.id)}
                              title="View Cost Breakdown"
                            >
                              <i className="bi bi-receipt"></i>
                            </button>
                            <button 
                              className="btn btn-outline-info"
                              onClick={() => duplicateItem(item.id)}
                              title="Duplicate Item"
                            >
                              <i className="bi bi-files"></i>
                            </button>
                            <button 
                              className="btn btn-outline-success"
                              onClick={() => saveAsTemplate(item)}
                              title="Save as Template"
                            >
                              <i className="bi bi-bookmark"></i>
                            </button>
                            <button 
                              className="btn btn-outline-danger"
                              onClick={() => removeItem(item.id)}
                              title="Delete Item"
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row g-3">
                            <div className="col-md-3">
                              <label className="form-label">Item Name</label>
                              <input
                                type="text"
                                className="form-control"
                                value={item.name}
                                onChange={(e) => updateItem(item.id, 'name', e.target.value)}
                              />
                            </div>
                            <div className="col-md-2">
                              <label className="form-label">Type</label>
                              <select
                                className="form-select"
                                value={item.type}
                                onChange={(e) => updateItem(item.id, 'type', e.target.value)}
                              >
                                <option value="window">Window</option>
                                <option value="door">Door</option>
                              </select>
                            </div>
                            <div className="col-md-2">
                              <label className="form-label">Width (m)</label>
                              <input
                                type="number"
                                className="form-control"
                                value={item.width}
                                onChange={(e) => updateItem(item.id, 'width', parseFloat(e.target.value) || 0)}
                                step="0.01"
                                min="0"
                              />
                            </div>
                            <div className="col-md-2">
                              <label className="form-label">Height (m)</label>
                              <input
                                type="number"
                                className="form-control"
                                value={item.height}
                                onChange={(e) => updateItem(item.id, 'height', parseFloat(e.target.value) || 0)}
                                step="0.01"
                                min="0"
                              />
                            </div>
                            <div className="col-md-1">
                              <label className="form-label">Qty</label>
                              <input
                                type="number"
                                className="form-control"
                                value={item.quantity}
                                onChange={(e) => updateItem(item.id, 'quantity', parseInt(e.target.value) || 1)}
                                min="1"
                              />
                            </div>
                            <div className="col-md-2">
                              <label className="form-label">
                                <i className="bi bi-calculator-fill text-primary me-1"></i>
                                Area (Auto)
                              </label>
                              <input
                                type="text"
                                className="form-control auto-calc-field"
                                value={`${(item.width * item.height * item.quantity).toFixed(2)} m²`}
                                readOnly
                                title="Auto-calculated: Width × Height × Quantity"
                              />
                            </div>
                            
                            <div className="col-md-4">
                              <label className="form-label">Glass Type</label>
                              <select
                                className="form-select"
                                value={item.glassType}
                                onChange={(e) => updateItem(item.id, 'glassType', e.target.value)}
                              >
                                {glassTypes.map(type => (
                                  <option key={type} value={type}>{type}</option>
                                ))}
                              </select>
                            </div>
                            
                            <div className="col-md-4">
                              <label className="form-label">Frame Type</label>
                              <select
                                className="form-select"
                                value={item.frameType}
                                onChange={(e) => updateItem(item.id, 'frameType', e.target.value)}
                              >
                                {frameTypes.map(type => (
                                  <option key={type} value={type}>{type}</option>
                                ))}
                              </select>
                            </div>
                            
                            <div className="col-md-4">
                              <label className="form-label">Accessories</label>
                              <div className="border rounded p-2" style={{maxHeight: '100px', overflowY: 'auto'}}>
                                {accessoryOptions.map(accessory => (
                                  <div key={accessory} className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      checked={item.accessories.includes(accessory)}
                                      onChange={() => toggleAccessory(item.id, accessory)}
                                    />
                                    <label className="form-check-label small">
                                      {accessory}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="col-12">
                              <label className="form-label">Notes</label>
                              <textarea
                                className="form-control"
                                rows={2}
                                value={item.notes}
                                onChange={(e) => updateItem(item.id, 'notes', e.target.value)}
                                placeholder="Add any special notes or requirements..."
                              />
                            </div>

                            {/* Smart Recommendations */}
                            {recommendations.length > 0 && (
                              <div className="col-12">
                                <div className="alert alert-info py-2 mb-0">
                                  <strong><i className="bi bi-lightbulb me-2"></i>Smart Suggestions:</strong>
                                  <ul className="mb-0 mt-1 small">
                                    {recommendations.map((rec, idx) => (
                                      <li key={idx}>{rec}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            )}

                            {/* Cost Breakdown Section */}
                            {item.showBreakdown && item.itemTotal && (
                              <div className="col-12">
                                <div className="card bg-light">
                                  <div className="card-body">
                                    <h6 className="card-title mb-3">
                                      <i className="bi bi-calculator me-2"></i>Cost Breakdown
                                    </h6>
                                    <div className="row g-2">
                                      <div className="col-md-6">
                                        <div className="d-flex justify-content-between">
                                          <span>Glass Cost:</span>
                                          <strong>₹{item.glassCost?.toFixed(2)}</strong>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="d-flex justify-content-between">
                                          <span>Frame Cost:</span>
                                          <strong>₹{item.frameCost?.toFixed(2)}</strong>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="d-flex justify-content-between">
                                          <span>Accessories:</span>
                                          <strong>₹{item.accessoryCost?.toFixed(2)}</strong>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="d-flex justify-content-between">
                                          <span>Labor:</span>
                                          <strong>₹{item.laborCost?.toFixed(2)}</strong>
                                        </div>
                                      </div>
                                      <div className="col-12">
                                        <hr className="my-2" />
                                        <div className="d-flex justify-content-between">
                                          <strong>Item Total:</strong>
                                          <strong className="text-success">₹{item.itemTotal?.toFixed(2)}</strong>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )})}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      {quotation.items.length > 0 && (
        <div className="row mb-5">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-header bg-success text-white">
                <h5 className="card-title mb-0">
                  <i className="bi bi-bar-chart me-2"></i>
                  Quotation Summary
                </h5>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-3">
                    <div className="text-center p-3 bg-light rounded">
                      <div className="h4 text-primary">{quotation.items.length}</div>
                      <small className="text-muted">Total Items</small>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center p-3 bg-light rounded">
                      <div className="h4 text-info">{quotation.totalGlassArea.toFixed(2)}</div>
                      <small className="text-muted">Glass Area (m²)</small>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center p-3 bg-light rounded">
                      <div className="h4 text-warning">{quotation.totalFrameWeight.toFixed(2)}</div>
                      <small className="text-muted">Frame Weight (kg)</small>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center p-3 bg-light rounded">
                      <div className="h4 text-success">₹{quotation.grandTotal.toFixed(2)}</div>
                      <small className="text-muted">Grand Total</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header bg-warning text-dark">
                <h5 className="card-title mb-0">
                  <i className="bi bi-receipt me-2"></i>
                  Cost Breakdown
                </h5>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-2">
                  <span>Material Cost:</span>
                  <strong>₹{quotation.subtotal.toFixed(2)}</strong>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Labor & Markup:</span>
                  <strong>₹{quotation.laborCharges.toFixed(2)}</strong>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>GST ({pricingSettings.gstPercent}%):</span>
                  <strong>₹{quotation.gst.toFixed(2)}</strong>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <strong>Grand Total:</strong>
                  <strong className="text-success">₹{quotation.grandTotal.toFixed(2)}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Footer Summary - Always visible when items exist */}
      {quotation.items.length > 0 && (
        <div 
          className="position-fixed bottom-0 start-0 end-0 bg-dark text-white shadow-lg p-3" 
          style={{ 
            zIndex: 1040,
            animation: 'pulse 2s infinite',
            boxShadow: '0 -5px 20px rgba(0,123,255,0.3)'
          }}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-2 text-center">
                <div className="fw-bold fs-5">{quotation.items.length}</div>
                <small>Items</small>
              </div>
              <div className="col-md-2 text-center">
                <div className="fw-bold fs-5">{quotation.totalGlassArea.toFixed(2)} m²</div>
                <small>Total Area</small>
              </div>
              <div className="col-md-2 text-center">
                <div className="fw-bold fs-5">{quotation.totalFrameWeight.toFixed(2)} kg</div>
                <small>Frame Weight</small>
              </div>
              <div className="col-md-3 text-center">
                <div className="fw-bold fs-4 text-warning">₹ {quotation.grandTotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</div>
                <small>Estimated Cost</small>
              </div>
              <div className="col-md-3 text-end">
                <div className="btn-group">
                  <button 
                    className="btn btn-success btn-sm"
                    onClick={() => {
                      const message = `Hi! Here's quotation ${quotation.quotationId} for ${quotation.customerName}:\n\nTotal Items: ${quotation.items.length}\nTotal Amount: ₹${quotation.grandTotal.toFixed(2)}\n\nPlease review and let us know if you have any questions.`
                      const whatsappUrl = `https://wa.me/${quotation.customerPhone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
                      window.open(whatsappUrl, '_blank')
                    }}
                    disabled={!quotation.customerPhone}
                  >
                    <i className="bi bi-whatsapp me-1"></i>
                    WhatsApp
                  </button>
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => {
                      const subject = `Quotation ${quotation.quotationId} - ${quotation.customerName}`
                      const body = `Dear ${quotation.customerName},\n\nPlease find attached the quotation details:\n\nQuotation ID: ${quotation.quotationId}\nTotal Items: ${quotation.items.length}\nTotal Amount: ₹${quotation.grandTotal.toFixed(2)}\n\nThank you for your interest.\n\nBest Regards,\nVenkatesh Aluminium & Glass`
                      const mailtoUrl = `mailto:${quotation.customerEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                      window.location.href = mailtoUrl
                    }}
                    disabled={!quotation.customerEmail}
                  >
                    <i className="bi bi-envelope me-1"></i>
                    Email
                  </button>
                  <button 
                    className="btn btn-danger btn-sm"
                    onClick={generatePDF}
                  >
                    <i className="bi bi-file-pdf me-1"></i>
                    PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Saved Quotations Section */}
      {/* Add padding to prevent content from being hidden behind sticky footer */}
      {quotation.items.length > 0 && <div style={{ height: '120px' }}></div>}

      {savedQuotations.length > 0 && (
        <div className="row mt-5">
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">
                  <i className="bi bi-folder-open me-2"></i>
                  Your Saved Quotations ({savedQuotations.length})
                </h5>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Quotation ID</th>
                        <th>Customer</th>
                        <th>Phone</th>
                        <th>Items</th>
                        <th>Total Amount</th>
                        <th>Status</th>
                        <th>Created</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {savedQuotations.map((savedQuot) => {
                        const createdDate = savedQuot.createdAt instanceof Object && 'toDate' in savedQuot.createdAt
                          ? savedQuot.createdAt.toDate()
                          : new Date(savedQuot.createdAt)

                        const statusColors: Record<string, string> = {
                          draft: 'secondary',
                          sent: 'info',
                          approved: 'success',
                          rejected: 'danger',
                          completed: 'primary'
                        }

                        return (
                          <tr key={savedQuot.id}>
                            <td>
                              <strong className="text-primary">{savedQuot.quotationId}</strong>
                            </td>
                            <td>{savedQuot.customerName}</td>
                            <td>
                              <i className="bi bi-telephone me-1"></i>
                              {savedQuot.customerPhone}
                            </td>
                            <td>
                              <span className="badge bg-secondary">{savedQuot.items.length} items</span>
                            </td>
                            <td>
                              <strong className="text-success">₹{savedQuot.grandTotal.toLocaleString()}</strong>
                            </td>
                            <td>
                              <span className={`badge bg-${statusColors[savedQuot.status]}`}>
                                {savedQuot.status.toUpperCase()}
                              </span>
                            </td>
                            <td>
                              <small>{createdDate.toLocaleDateString()}</small>
                            </td>
                            <td>
                              <div className="btn-group btn-group-sm" role="group">
                                <button 
                                  className="btn btn-outline-primary"
                                  title="View"
                                  onClick={() => {
                                    alert(`Viewing quotation ${savedQuot.quotationId}\nFeature coming soon!`)
                                  }}
                                >
                                  <i className="bi bi-eye"></i>
                                </button>
                                <button 
                                  className="btn btn-outline-danger"
                                  title="Delete"
                                  onClick={async () => {
                                    if (window.confirm(`Delete quotation ${savedQuot.quotationId}?`)) {
                                      try {
                                        if (savedQuot.id) {
                                          await quotationsService.deleteQuotation(savedQuot.id)
                                          alert('✅ Quotation deleted successfully!')
                                          loadSavedQuotations()
                                        }
                                      } catch (error) {
                                        alert('❌ Failed to delete quotation')
                                      }
                                    }
                                  }}
                                >
                                  <i className="bi bi-trash"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer text-muted">
                <small>
                  <i className="bi bi-info-circle me-1"></i>
                  All quotations are automatically synced with Firebase Firestore
                </small>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  )
}