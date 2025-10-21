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
  
  // Draft management states
  const [showRestorePrompt, setShowRestorePrompt] = useState(false)
  const [draftTimestamp, setDraftTimestamp] = useState<number | null>(null)
  
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

  const deleteTemplate = (templateId: string) => {
    const template = savedTemplates.find(t => t.id === templateId)
    if (!template) return
    
    const confirmed = confirm(`Are you sure you want to delete template "${template.name}"?`)
    if (!confirmed) return

    const updatedTemplates = savedTemplates.filter(t => t.id !== templateId)
    setSavedTemplates(updatedTemplates)
    localStorage.setItem('item_templates', JSON.stringify(updatedTemplates))
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

  // Draft Management Functions
  const saveDraft = () => {
    const draftData = {
      ...quotation,
      savedAt: Date.now()
    }
    localStorage.setItem('estimatix_multi_calculator_draft', JSON.stringify(draftData))
    setDraftTimestamp(Date.now())
  }

  const restoreDraft = () => {
    const saved = localStorage.getItem('estimatix_multi_calculator_draft')
    if (saved) {
      const draftData = JSON.parse(saved)
      setQuotation(draftData)
      setShowRestorePrompt(false)
    }
  }

  const clearDraft = () => {
    localStorage.removeItem('estimatix_multi_calculator_draft')
    setDraftTimestamp(null)
    setShowRestorePrompt(false)
  }

  // Check for draft on mount
  useEffect(() => {
    const saved = localStorage.getItem('estimatix_multi_calculator_draft')
    if (saved) {
      try {
        const draftData = JSON.parse(saved)
        if (draftData.items && draftData.items.length > 0) {
          setDraftTimestamp(draftData.savedAt)
          setShowRestorePrompt(true)
        }
      } catch (e) {
        console.error('Failed to load draft:', e)
      }
    }
  }, [])

  // Auto-save draft when quotation changes
  useEffect(() => {
    if (quotation.items.length > 0 || quotation.customerName || quotation.customerPhone) {
      const debounce = setTimeout(() => {
        saveDraft()
      }, 2000)
      return () => clearTimeout(debounce)
    }
  }, [quotation])

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
      {/* Draft Restore Modal */}
      {showRestorePrompt && (
        <div className="draft-modal-overlay" onClick={clearDraft}>
          <div className="draft-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="draft-modal-title">
              🕐 Restore Saved Draft?
            </div>
            <p>
              We found a previously saved multi-item quotation draft. Would you like to continue where you left off?
            </p>
            {draftTimestamp && (
              <small>
                Saved: {new Date(draftTimestamp).toLocaleString('en-IN', {
                  dateStyle: 'medium',
                  timeStyle: 'short'
                })}
              </small>
            )}
            <div className="d-flex">
              <button className="draft-btn-discard" onClick={clearDraft}>
                Discard
              </button>
              <button className="draft-btn-restore" onClick={restoreDraft}>
                Restore Draft
              </button>
            </div>
          </div>
        </div>
      )}

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
        
        /* ===== SAAS-GRADE HEADER & ACTIONS STYLES ===== */
        .saas-header-container {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.08) 0%, rgba(147, 51, 234, 0.05) 100%);
          border: 1px solid rgba(124, 58, 237, 0.12);
          border-radius: 24px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          box-shadow: 
            0 8px 32px rgba(124, 58, 237, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          animation: fadeInScale 0.8s ease-out;
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .saas-header-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 30%, rgba(124, 58, 237, 0.02) 50%, transparent 70%);
          pointer-events: none;
        }

        [data-bs-theme="dark"] .saas-header-container {
          background: linear-gradient(135deg, rgba(31, 41, 55, 0.9) 0%, rgba(17, 24, 39, 0.95) 100%);
          border-color: rgba(124, 58, 237, 0.2);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        /* Title Section */
        .saas-title-wrapper {
          margin-bottom: 2rem;
        }

        .saas-title-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .saas-main-title {
          font-size: 2.5rem;
          font-weight: 650;
          line-height: 1.15;
          letter-spacing: -0.025em;
          background: linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f472b6 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
          position: relative;
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          cursor: default;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          animation: gradientFlow 8s ease-in-out infinite;
          filter: drop-shadow(0 8px 32px rgba(168, 85, 247, 0.2));
        }

        .saas-main-title::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #a855f7, #ec4899, #f472b6, #ec4899, #a855f7);
          background-size: 300% 100%;
          border-radius: 1.5px;
          opacity: 0.8;
          animation: neonUnderline 4s ease-in-out infinite;
          box-shadow: 
            0 0 10px rgba(168, 85, 247, 0.5),
            0 0 20px rgba(236, 72, 153, 0.3),
            0 0 30px rgba(244, 114, 182, 0.2);
        }

        .saas-main-title::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1));
          border-radius: 16px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.4s ease;
          blur: 20px;
        }

        .saas-main-title:hover {
          font-weight: 700;
          letter-spacing: -0.015em;
          animation-duration: 3s;
          filter: drop-shadow(0 12px 48px rgba(168, 85, 247, 0.3)) 
                  drop-shadow(0 0 32px rgba(236, 72, 153, 0.2));
          transform: translateY(-2px);
        }

        .saas-main-title:hover::before {
          opacity: 1;
        }

        .saas-main-title:hover::after {
          height: 4px;
          animation-duration: 1.5s;
          box-shadow: 
            0 0 15px rgba(168, 85, 247, 0.8),
            0 0 30px rgba(236, 72, 153, 0.5),
            0 0 45px rgba(244, 114, 182, 0.3);
        }

        @keyframes gradientFlow {
          0%, 100% { 
            background-position: 0% 50%; 
            filter: drop-shadow(0 8px 32px rgba(168, 85, 247, 0.2));
          }
          25% { 
            background-position: 100% 50%; 
            filter: drop-shadow(0 8px 32px rgba(236, 72, 153, 0.25));
          }
          50% { 
            background-position: 100% 100%; 
            filter: drop-shadow(0 8px 32px rgba(244, 114, 182, 0.2));
          }
          75% { 
            background-position: 0% 100%; 
            filter: drop-shadow(0 8px 32px rgba(168, 85, 247, 0.2));
          }
        }

        @keyframes neonUnderline {
          0%, 100% { 
            background-position: 0% 50%;
            opacity: 0.8;
          }
          25% { 
            background-position: 50% 50%;
            opacity: 0.9;
          }
          50% { 
            background-position: 100% 50%;
            opacity: 1;
          }
          75% { 
            background-position: 150% 50%;
            opacity: 0.9;
          }
        }

        .saas-auto-save-indicator {
          display: inline-flex;
          align-items: center;
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 0.5rem 0.875rem;
          border-radius: 12px;
          border: 1px solid rgba(16, 185, 129, 0.2);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        /* Meta Information Row */
        .saas-meta-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(124, 58, 237, 0.1);
          border-radius: 16px;
          backdrop-filter: blur(5px);
        }

        [data-bs-theme="dark"] .saas-meta-row {
          background: rgba(0, 0, 0, 0.2);
          border-color: rgba(124, 58, 237, 0.15);
        }

        .saas-meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
        }

        .saas-meta-icon {
          color: #7c3aed;
          font-size: 0.875rem;
        }

        .saas-status-dot {
          font-size: 0.5rem;
          color: #7c3aed;
        }

        .saas-meta-label {
          color: #64748b;
          font-weight: 500;
        }

        [data-bs-theme="dark"] .saas-meta-label {
          color: #94a3b8;
        }

        .saas-meta-value {
          color: #1e293b;
          font-weight: 600;
        }

        [data-bs-theme="dark"] .saas-meta-value {
          color: #f1f5f9;
        }

        .saas-meta-divider {
          width: 4px;
          height: 4px;
          background: #d1d5db;
          border-radius: 50%;
          flex-shrink: 0;
        }

        [data-bs-theme="dark"] .saas-meta-divider {
          background: #6b7280;
        }

        .saas-status-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.375rem 0.75rem;
          border-radius: 8px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .saas-status-draft {
          background: rgba(107, 114, 128, 0.15);
          color: #4b5563;
          border: 1px solid rgba(107, 114, 128, 0.3);
        }

        .saas-status-finalized {
          background: rgba(16, 185, 129, 0.15);
          color: #047857;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .saas-status-info {
          background: rgba(59, 130, 246, 0.15);
          color: #1d4ed8;
          border: 1px solid rgba(59, 130, 246, 0.3);
        }

        .saas-meta-expired {
          color: #dc2626 !important;
          font-weight: 700;
        }

        .saas-meta-valid {
          color: #059669 !important;
          font-weight: 600;
        }

        /* Action Card */
        .saas-action-wrapper {
          display: flex;
          justify-content: center;
        }

        .saas-action-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 
            0 12px 40px rgba(124, 58, 237, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          width: 100%;
          max-width: 800px;
        }

        .saas-action-card:hover {
          box-shadow: 
            0 16px 50px rgba(124, 58, 237, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        [data-bs-theme="dark"] .saas-action-card {
          background: rgba(31, 41, 55, 0.8);
          border-color: rgba(124, 58, 237, 0.2);
          box-shadow: 
            0 12px 40px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        /* Action Rows */
        .saas-action-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .saas-secondary-row {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(124, 58, 237, 0.1);
          justify-content: center;
          gap: 0.75rem;
          align-items: stretch;
        }

        .saas-secondary-row .saas-action-btn {
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        [data-bs-theme="dark"] .saas-secondary-row {
          border-top-color: rgba(124, 58, 237, 0.2);
        }

        /* Action Buttons */
        .saas-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          font-size: 0.875rem;
          font-weight: 600;
          border: none;
          border-radius: 14px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          white-space: nowrap;
          min-height: 48px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .saas-action-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none !important;
        }

        .saas-action-btn:not(:disabled):hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        .saas-action-btn:not(:disabled):active {
          transform: translateY(-1px) scale(0.98);
        }

        /* Button Variants */
        .saas-btn-primary {
          background: linear-gradient(135deg, #7c3aed 0%, #9333ea 100%);
          color: white;
          box-shadow: 0 6px 20px rgba(124, 58, 237, 0.3);
        }

        .saas-btn-primary:hover:not(:disabled) {
          background: linear-gradient(135deg, #6d28d9 0%, #7c3aed 100%);
          box-shadow: 0 12px 35px rgba(124, 58, 237, 0.4);
          color: white;
        }

        .saas-btn-ai {
          background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
          color: #92400e;
          box-shadow: 0 6px 20px rgba(245, 158, 11, 0.3);
        }

        .saas-btn-ai:hover:not(:disabled) {
          background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%);
          box-shadow: 0 12px 35px rgba(245, 158, 11, 0.4);
          color: #92400e;
        }

        .saas-btn-danger {
          background: linear-gradient(135deg, #ef4444 0%, #f87171 100%);
          color: white;
          box-shadow: 0 6px 20px rgba(239, 68, 68, 0.3);
        }

        .saas-btn-danger:hover:not(:disabled) {
          background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
          box-shadow: 0 12px 35px rgba(239, 68, 68, 0.4);
          color: white;
        }

        .saas-btn-success {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.3);
        }

        .saas-btn-success:hover:not(:disabled) {
          background: linear-gradient(135deg, #047857 0%, #10b981 100%);
          box-shadow: 0 12px 35px rgba(16, 185, 129, 0.4);
          color: white;
        }

        .saas-btn-secondary {
          background: linear-gradient(135deg, #6b7280 0%, #9ca3af 100%);
          color: white;
          box-shadow: 0 6px 20px rgba(107, 114, 128, 0.25);
        }

        .saas-btn-secondary:hover:not(:disabled) {
          background: linear-gradient(135deg, #4b5563 0%, #6b7280 100%);
          box-shadow: 0 12px 35px rgba(107, 114, 128, 0.35);
          color: white;
        }

        .saas-btn-outline {
          background: rgba(124, 58, 237, 0.08);
          color: #7c3aed;
          border: 1px solid rgba(124, 58, 237, 0.2);
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.1);
        }

        .saas-btn-outline:hover:not(:disabled) {
          background: rgba(124, 58, 237, 0.15);
          border-color: rgba(124, 58, 237, 0.3);
          color: #6d28d9;
        }

        [data-bs-theme="dark"] .saas-btn-outline {
          background: rgba(168, 85, 247, 0.1);
          color: #a855f7;
          border-color: rgba(168, 85, 247, 0.25);
        }

        [data-bs-theme="dark"] .saas-btn-outline:hover:not(:disabled) {
          background: rgba(168, 85, 247, 0.2);
          color: #c084fc;
        }

        /* Button Groups and Dropdown */
        .saas-btn-group {
          display: inline-flex;
        }

        .saas-dropdown-toggle {
          padding-left: 0.75rem;
          padding-right: 0.75rem;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-left: 1px solid rgba(255, 255, 255, 0.2);
          min-width: auto;
        }

        .saas-dropdown-menu {
          background: linear-gradient(145deg, 
            rgba(255, 255, 255, 0.9) 0%,
            rgba(248, 250, 252, 0.95) 50%,
            rgba(241, 245, 249, 0.9) 100%);
          backdrop-filter: blur(32px) saturate(1.8);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 24px;
          box-shadow: 
            0 32px 80px rgba(124, 58, 237, 0.15),
            0 16px 40px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.3),
            inset 0 -1px 0 rgba(124, 58, 237, 0.1);
          padding: 1.25rem;
          margin-top: 0.75rem;
          min-width: 360px;
          max-width: 420px;
          position: relative;
          overflow: hidden;
          animation: premiumDropdownSlide 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .saas-dropdown-menu::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(145deg, 
            rgba(124, 58, 237, 0.03) 0%,
            rgba(168, 85, 247, 0.02) 50%,
            rgba(139, 92, 246, 0.03) 100%);
          pointer-events: none;
          z-index: -1;
        }

        [data-bs-theme="dark"] .saas-dropdown-menu {
          background: linear-gradient(145deg,
            rgba(17, 24, 39, 0.95) 0%,
            rgba(31, 41, 55, 0.98) 50%,
            rgba(55, 65, 81, 0.95) 100%);
          border-color: rgba(168, 85, 247, 0.3);
          box-shadow: 
            0 32px 80px rgba(0, 0, 0, 0.4),
            0 16px 40px rgba(124, 58, 237, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 0 rgba(168, 85, 247, 0.2);
        }

        [data-bs-theme="dark"] .saas-dropdown-menu::before {
          background: linear-gradient(145deg,
            rgba(124, 58, 237, 0.08) 0%,
            rgba(168, 85, 247, 0.05) 50%,
            rgba(139, 92, 246, 0.08) 100%);
        }

        @keyframes premiumDropdownSlide {
          0% {
            opacity: 0;
            transform: translateY(-20px) scale(0.92) rotateX(-10deg);
            filter: blur(4px);
          }
          60% {
            opacity: 0.8;
            transform: translateY(-5px) scale(0.98) rotateX(-2deg);
            filter: blur(1px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0deg);
            filter: blur(0);
          }
        }

        .saas-dropdown-header {
          padding: 1rem 1.25rem 1.25rem 1.25rem;
          font-size: 0.9rem;
          font-weight: 700;
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          position: relative;
        }

        .saas-dropdown-header::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 1.25rem;
          right: 1.25rem;
          height: 3px;
          background: linear-gradient(90deg, #8b5cf6, #a855f7, #c084fc);
          border-radius: 1.5px;
          box-shadow: 0 2px 8px rgba(139, 92, 246, 0.4);
        }

        [data-bs-theme="dark"] .saas-dropdown-header {
          background: linear-gradient(135deg, #a78bfa, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        [data-bs-theme="dark"] .saas-dropdown-header::after {
          background: linear-gradient(90deg, #a78bfa, #c084fc, #e879f9);
          box-shadow: 0 2px 8px rgba(167, 139, 250, 0.5);
        }

        .saas-dropdown-item {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 1.125rem 1.25rem;
          border: 1px solid transparent;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(8px);
          border-radius: 16px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: left;
          gap: 1rem;
          margin: 0.375rem 0;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .saas-dropdown-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .saas-dropdown-item:hover {
          background: rgba(139, 92, 246, 0.1);
          border-color: rgba(139, 92, 246, 0.2);
          transform: translateX(6px) scale(1.02);
          box-shadow: 0 8px 24px rgba(139, 92, 246, 0.15);
        }

        .saas-dropdown-item:hover::before {
          left: 100%;
        }

        .saas-dropdown-item.active {
          background: linear-gradient(135deg, 
            rgba(139, 92, 246, 0.15) 0%, 
            rgba(168, 85, 247, 0.12) 100%);
          border-color: rgba(139, 92, 246, 0.3);
          color: #7c3aed;
          box-shadow: 
            0 8px 32px rgba(139, 92, 246, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .saas-dropdown-item.active::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, #8b5cf6, #a855f7);
          border-radius: 0 2px 2px 0;
          box-shadow: 0 0 12px rgba(139, 92, 246, 0.6);
        }

        [data-bs-theme="dark"] .saas-dropdown-item {
          background: rgba(31, 41, 55, 0.6);
        }

        [data-bs-theme="dark"] .saas-dropdown-item:hover {
          background: rgba(168, 85, 247, 0.15);
          border-color: rgba(168, 85, 247, 0.3);
          box-shadow: 0 8px 24px rgba(168, 85, 247, 0.2);
        }

        [data-bs-theme="dark"] .saas-dropdown-item.active {
          background: linear-gradient(135deg,
            rgba(168, 85, 247, 0.2) 0%,
            rgba(192, 132, 252, 0.15) 100%);
          border-color: rgba(168, 85, 247, 0.4);
          color: #a855f7;
          box-shadow: 
            0 8px 32px rgba(168, 85, 247, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        [data-bs-theme="dark"] .saas-dropdown-item.active::after {
          background: linear-gradient(180deg, #a78bfa, #c084fc);
          box-shadow: 0 0 12px rgba(167, 139, 250, 0.8);
        }

        .saas-dropdown-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #c084fc 100%);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
          flex-shrink: 0;
          position: relative;
          box-shadow: 
            0 6px 20px rgba(139, 92, 246, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .saas-dropdown-icon::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(135deg, #8b5cf6, #a855f7, #c084fc);
          border-radius: inherit;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .saas-dropdown-item:hover .saas-dropdown-icon {
          transform: scale(1.1) rotate(2deg);
          box-shadow: 
            0 8px 28px rgba(139, 92, 246, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .saas-dropdown-item:hover .saas-dropdown-icon::before {
          opacity: 1;
        }

        .saas-dropdown-item.active .saas-dropdown-icon {
          box-shadow: 
            0 8px 32px rgba(139, 92, 246, 0.5),
            inset 0 2px 4px rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        .saas-icon-special {
          background: linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%);
          box-shadow: 
            0 6px 20px rgba(16, 185, 129, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .saas-icon-special::before {
          background: linear-gradient(135deg, #059669, #10b981, #34d399);
        }

        .saas-dropdown-item:hover .saas-icon-special {
          box-shadow: 
            0 8px 28px rgba(16, 185, 129, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        [data-bs-theme="dark"] .saas-dropdown-icon {
          background: linear-gradient(135deg, #a78bfa 0%, #c084fc 50%, #e879f9 100%);
          box-shadow: 
            0 6px 20px rgba(167, 139, 250, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        [data-bs-theme="dark"] .saas-dropdown-item:hover .saas-dropdown-icon {
          box-shadow: 
            0 8px 28px rgba(167, 139, 250, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .saas-dropdown-content {
          flex: 1;
          min-width: 0;
          padding-left: 0.5rem;
        }

        .saas-dropdown-title {
          display: block;
          font-weight: 650;
          font-size: 1rem;
          color: #1e293b;
          margin-bottom: 0.375rem;
          line-height: 1.25;
          transition: all 0.3s ease;
        }

        .saas-dropdown-item:hover .saas-dropdown-title {
          color: #7c3aed;
          transform: translateX(2px);
        }

        .saas-dropdown-item.active .saas-dropdown-title {
          color: #7c3aed;
          font-weight: 700;
        }

        [data-bs-theme="dark"] .saas-dropdown-title {
          color: #f1f5f9;
        }

        [data-bs-theme="dark"] .saas-dropdown-item:hover .saas-dropdown-title {
          color: #a855f7;
        }

        [data-bs-theme="dark"] .saas-dropdown-item.active .saas-dropdown-title {
          color: #a855f7;
        }

        .saas-dropdown-desc {
          display: block;
          font-size: 0.8125rem;
          color: #64748b;
          line-height: 1.4;
          font-weight: 500;
          transition: all 0.3s ease;
          opacity: 0.85;
        }

        .saas-dropdown-item:hover .saas-dropdown-desc {
          color: #475569;
          opacity: 1;
          transform: translateX(2px);
        }

        .saas-dropdown-item.active .saas-dropdown-desc {
          color: #7c3aed;
          opacity: 0.9;
        }

        [data-bs-theme="dark"] .saas-dropdown-desc {
          color: #94a3b8;
        }

        [data-bs-theme="dark"] .saas-dropdown-item:hover .saas-dropdown-desc {
          color: #cbd5e1;
        }

        [data-bs-theme="dark"] .saas-dropdown-item.active .saas-dropdown-desc {
          color: #a855f7;
        }

        .saas-dropdown-check {
          color: #10b981;
          font-size: 1.25rem;
          margin-left: auto;
          padding-left: 0.75rem;
          opacity: 0;
          animation: checkmarkAppear 0.4s ease forwards;
        }

        @keyframes checkmarkAppear {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-90deg);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.2) rotate(0deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        .saas-dropdown-divider {
          height: 1px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(139, 92, 246, 0.2) 20%, 
            rgba(168, 85, 247, 0.3) 50%, 
            rgba(139, 92, 246, 0.2) 80%, 
            transparent 100%);
          margin: 1rem 1.25rem;
          position: relative;
        }

        .saas-dropdown-divider::after {
          content: '';
          position: absolute;
          top: -1px;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.4) 50%, 
            transparent 100%);
        }

        [data-bs-theme="dark"] .saas-dropdown-divider {
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(167, 139, 250, 0.3) 20%, 
            rgba(192, 132, 252, 0.4) 50%, 
            rgba(167, 139, 250, 0.3) 80%, 
            transparent 100%);
        }

        .saas-dropdown-special {
          position: relative;
          margin-top: 1rem;
          padding-top: 1.25rem;
        }

        .saas-dropdown-special::before {
          content: '';
          position: absolute;
          top: 0;
          left: 1.25rem;
          right: 1.25rem;
          height: 2px;
          background: linear-gradient(90deg, #10b981, #34d399);
          border-radius: 1px;
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
        }

        /* Utilities */
        .saas-count-badge {
          background: rgba(255, 255, 255, 0.25);
          color: currentColor;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: 8px;
          margin-left: 0.5rem;
        }

        .saas-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: saasSpinnerRotate 1s linear infinite;
        }

        @keyframes saasSpinnerRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Dark Theme Enhancements */
        [data-bs-theme="dark"] .saas-main-title {
          background: linear-gradient(135deg, #a78bfa 0%, #c084fc 35%, #e879f9 70%, #f472b6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 8px 32px rgba(167, 139, 250, 0.2));
        }

        [data-bs-theme="dark"] .saas-main-title:hover {
          filter: drop-shadow(0 12px 48px rgba(167, 139, 250, 0.35)) 
                  drop-shadow(0 0 32px rgba(244, 114, 182, 0.2));
        }

        [data-bs-theme="dark"] .saas-main-title::before {
          background: linear-gradient(135deg, rgba(167, 139, 250, 0.15), rgba(244, 114, 182, 0.1));
        }

        /* Premium Accent Line */
        .saas-title-accent {
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, #8b5cf6, #a855f7, #c084fc, #ec4899);
          background-size: 200% 100%;
          border-radius: 2px;
          margin: 0.75rem 0 1.5rem 0;
          position: relative;
          animation: accentFlow 6s ease-in-out infinite;
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
          transition: all 0.4s ease;
        }

        .saas-title-accent::after {
          content: '';
          position: absolute;
          inset: -2px;
          background: inherit;
          border-radius: inherit;
          opacity: 0.4;
          filter: blur(8px);
          z-index: -1;
        }

        [data-bs-theme="dark"] .saas-title-accent {
          background: linear-gradient(90deg, #a78bfa, #c084fc, #e879f9, #f472b6);
          box-shadow: 0 4px 12px rgba(167, 139, 250, 0.4);
        }

        .saas-main-title:hover + .saas-title-accent {
          width: 180px;
          animation-duration: 2s;
          box-shadow: 0 6px 20px rgba(139, 92, 246, 0.5);
        }

        [data-bs-theme="dark"] .saas-main-title:hover + .saas-title-accent {
          box-shadow: 0 6px 20px rgba(167, 139, 250, 0.6);
        }

        @keyframes accentFlow {
          0%, 100% { 
            background-position: 0% 50%;
            transform: scaleX(1);
          }
          25% { 
            background-position: 100% 50%;
            transform: scaleX(1.05);
          }
          50% { 
            background-position: 200% 50%;
            transform: scaleX(1);
          }
          75% { 
            background-position: 100% 50%;
            transform: scaleX(1.05);
          }
        }

        /* Premium Container Enhancement */
        .saas-title-wrapper {
          margin-bottom: 2rem;
          position: relative;
        }

        .saas-title-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: left;
        }

        /* UI Improvements & Fixes */
        .saas-btn-group {
          position: relative;
          z-index: 1050;
        }

        .saas-dropdown-menu {
          z-index: 1060 !important;
          position: absolute !important;
          transform: translateZ(0);
          will-change: transform;
        }

        .saas-more-actions {
          position: relative;
          z-index: 1050;
        }

        /* Fix dropdown positioning */
        .saas-header-container {
          position: relative;
          z-index: 10;
          overflow: visible;
        }

        .saas-action-card {
          overflow: visible;
          position: relative;
          z-index: 20;
        }

        .saas-action-wrapper {
          overflow: visible;
        }

        /* Button Alignment Improvements */
        .saas-action-row {
          align-items: stretch;
        }

        .saas-action-btn {
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .saas-action-btn:focus {
          outline: 2px solid rgba(139, 92, 246, 0.5);
          outline-offset: 2px;
        }

        .saas-dropdown-toggle {
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Smooth Button Group Integration */
        .saas-btn-group .saas-action-btn:first-child {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }

        .saas-btn-group .saas-dropdown-toggle {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-left: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Hover State Consistency */
        .saas-action-btn:hover:not(:disabled) {
          z-index: 2;
        }

        /* Loading State Improvements */
        .saas-spinner {
          display: inline-block;
        }

        /* Enhanced Responsive Design */
        @media (max-width: 991.98px) {
          .saas-dropdown-menu {
            min-width: 340px;
            max-width: 380px;
          }
        }

        @media (max-width: 768px) {
          .saas-header-container {
            padding: 1.5rem 1.25rem;
            margin-bottom: 2rem;
            border-radius: 20px;
            box-shadow: 
              0 12px 40px rgba(124, 58, 237, 0.12),
              inset 0 1px 0 rgba(255, 255, 255, 0.15);
          }
          
          .saas-title-wrapper {
            margin-bottom: 1.75rem;
          }
          
          .saas-title-content {
            text-align: center;
            align-items: center;
            gap: 1.25rem;
          }
          
          .saas-main-title {
            font-size: 1.875rem;
            font-weight: 650;
            letter-spacing: -0.02em;
            justify-content: center;
            text-align: center;
            margin-bottom: 0.5rem;
          }

          .saas-main-title::after {
            bottom: -8px;
            height: 2.5px;
            left: 10%;
            right: 10%;
          }

          .saas-title-accent {
            display: none;
          }
          
          .saas-meta-row {
            padding: 1rem 1.25rem;
            margin-bottom: 1.5rem;
            border-radius: 16px;
            flex-wrap: wrap;
            gap: 0.75rem;
            justify-content: center;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(124, 58, 237, 0.15);
          }
          
          .saas-meta-item {
            font-size: 0.8125rem;
            gap: 0.375rem;
          }
          
          .saas-action-card {
            padding: 1.25rem;
            border-radius: 18px;
            box-shadow: 
              0 8px 32px rgba(124, 58, 237, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.12);
          }
          
          .saas-action-row {
            justify-content: center;
            gap: 0.625rem;
          }
          
          .saas-action-btn {
            flex: 1;
            max-width: 100px;
            justify-content: center;
            min-width: auto;
            padding: 0.75rem 0.5rem;
            border-radius: 12px;
            height: 44px;
            font-size: 0.875rem;
          }
          
          .saas-btn-group .saas-action-btn {
            max-width: none;
            flex: 1;
          }
          
          .saas-dropdown-toggle {
            padding: 0.75rem 0.5rem;
            min-width: 40px;
            border-radius: 0 12px 12px 0;
          }
          
          .saas-btn-text {
            display: none;
          }
        }

        @media (max-width: 576px) {
          .saas-header-container {
            padding: 1rem;
          }
          
          .saas-main-title {
            font-size: 1.625rem;
            font-weight: 600;
            letter-spacing: -0.015em;
          }
          
          .saas-title-accent {
            width: 60px;
          }
          
          .saas-meta-row {
            padding: 0.625rem;
          }
          
          .saas-action-card {
            padding: 0.875rem;
          }
          
          .saas-action-btn {
            padding: 0.625rem 0.375rem;
            font-size: 0.8rem;
            height: 44px;
          }
          
          .saas-dropdown-menu {
            min-width: 260px;
            padding: 1rem;
          }
          
          .saas-dropdown-item {
            padding: 0.875rem 1rem;
            gap: 0.75rem;
          }
          
          .saas-dropdown-icon {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }
        }

        @media (min-width: 576px) {
          .saas-btn-text {
            display: inline;
          }
        }
        /* ===== END SAAS-GRADE HEADER & ACTIONS STYLES ===== */
        
        /* ===== PREMIUM HEADER & ACTIONS STYLES ===== */
        .premium-header-wrapper {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 991.98px) {
          .premium-header-wrapper {
            flex-direction: column;
            align-items: stretch;
            gap: 1.5rem;
          }
        }

        /* Title Section */
        .premium-title-section {
          flex: 1;
          min-width: 0;
        }

        .premium-title-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #7c3aed, #9333ea);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          box-shadow: 0 8px 32px rgba(124, 58, 237, 0.25);
          transition: all 0.3s ease;
        }

        .premium-title-icon:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(124, 58, 237, 0.35);
        }

        .premium-main-title {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.2;
          background: linear-gradient(135deg, #7c3aed 0%, #9333ea 50%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
          text-shadow: 0 4px 16px rgba(124, 58, 237, 0.2);
        }

        .premium-subtitle {
          color: #64748b;
          font-size: 1rem;
          font-weight: 500;
          margin: 0.25rem 0 0 0;
          opacity: 0.8;
        }

        [data-bs-theme="dark"] .premium-subtitle {
          color: #94a3b8;
        }

        .premium-auto-save-badge {
          display: inline-block;
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.375rem 0.75rem;
          border-radius: 8px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .premium-meta-info {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(124, 58, 237, 0.1);
        }

        [data-bs-theme="dark"] .premium-meta-info {
          border-top-color: rgba(168, 85, 247, 0.2);
        }

        .premium-meta-item {
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }

        .premium-meta-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #6b7280;
        }

        [data-bs-theme="dark"] .premium-meta-label {
          color: #9ca3af;
        }

        .premium-meta-value {
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
        }

        [data-bs-theme="dark"] .premium-meta-value {
          color: #f3f4f6;
        }

        .premium-meta-separator {
          color: #d1d5db;
          font-weight: bold;
        }

        [data-bs-theme="dark"] .premium-meta-separator {
          color: #6b7280;
        }

        .premium-status-badge {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
          letter-spacing: 0.025em;
        }

        /* Actions Section */
        .premium-actions-section {
          display: flex;
          align-items: flex-start;
        }

        .premium-actions-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(124, 58, 237, 0.15);
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 
            0 8px 32px rgba(124, 58, 237, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        [data-bs-theme="dark"] .premium-actions-card {
          background: linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(17, 24, 39, 0.9) 100%);
          border-color: rgba(168, 85, 247, 0.2);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .premium-actions-card:hover {
          box-shadow: 
            0 12px 40px rgba(124, 58, 237, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .premium-actions-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .premium-secondary-actions {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(124, 58, 237, 0.1);
        }

        [data-bs-theme="dark"] .premium-secondary-actions {
          border-top-color: rgba(168, 85, 247, 0.2);
        }

        .premium-mobile-actions {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(124, 58, 237, 0.1);
        }

        [data-bs-theme="dark"] .premium-mobile-actions {
          border-top-color: rgba(168, 85, 247, 0.2);
        }

        /* Action Buttons */
        .premium-action-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.25rem;
          font-weight: 600;
          font-size: 0.875rem;
          border: none;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          white-space: nowrap;
          height: 48px;
          cursor: pointer;
          text-decoration: none;
        }

        .premium-action-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none !important;
        }

        .premium-action-btn:not(:disabled):hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .premium-action-btn:not(:disabled):active {
          transform: translateY(0);
        }

        /* Button Variants */
        .premium-btn-primary {
          background: linear-gradient(135deg, #7c3aed, #9333ea);
          color: white;
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
        }

        .premium-btn-primary:hover:not(:disabled) {
          background: linear-gradient(135deg, #6d28d9, #7c3aed);
          box-shadow: 0 8px 25px rgba(124, 58, 237, 0.4);
          color: white;
        }

        .premium-btn-warning {
          background: linear-gradient(135deg, #f59e0b, #fbbf24);
          color: #92400e;
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
        }

        .premium-btn-warning:hover:not(:disabled) {
          background: linear-gradient(135deg, #d97706, #f59e0b);
          box-shadow: 0 8px 25px rgba(245, 158, 11, 0.4);
          color: #92400e;
        }

        .premium-btn-danger {
          background: linear-gradient(135deg, #ef4444, #f87171);
          color: white;
          box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
        }

        .premium-btn-danger:hover:not(:disabled) {
          background: linear-gradient(135deg, #dc2626, #ef4444);
          box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4);
          color: white;
        }

        .premium-btn-success {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }

        .premium-btn-success:hover:not(:disabled) {
          background: linear-gradient(135deg, #059669, #047857);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
          color: white;
        }

        .premium-btn-secondary {
          background: linear-gradient(135deg, #6b7280, #9ca3af);
          color: white;
          box-shadow: 0 4px 15px rgba(107, 114, 128, 0.3);
        }

        .premium-btn-secondary:hover:not(:disabled) {
          background: linear-gradient(135deg, #4b5563, #6b7280);
          box-shadow: 0 8px 25px rgba(107, 114, 128, 0.4);
          color: white;
        }

        .premium-btn-outline {
          background: rgba(255, 255, 255, 0.1);
          color: #374151;
          border: 1px solid rgba(124, 58, 237, 0.3);
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.1);
        }

        [data-bs-theme="dark"] .premium-btn-outline {
          color: #f3f4f6;
          border-color: rgba(168, 85, 247, 0.4);
        }

        .premium-btn-outline:hover:not(:disabled) {
          background: rgba(124, 58, 237, 0.1);
          border-color: rgba(124, 58, 237, 0.5);
          color: #7c3aed;
        }

        [data-bs-theme="dark"] .premium-btn-outline:hover:not(:disabled) {
          background: rgba(168, 85, 247, 0.2);
          color: #a855f7;
        }

        /* Button Group & Dropdown */
        .premium-btn-group {
          display: flex;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
        }

        .premium-dropdown-toggle {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-left: 1px solid rgba(146, 64, 14, 0.2);
          padding: 0.75rem 0.875rem;
          min-width: auto;
        }

        .premium-dropdown-menu {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          padding: 0.75rem;
          margin-top: 0.5rem;
          min-width: 280px;
          animation: dropdownFade 0.3s ease;
        }

        [data-bs-theme="dark"] .premium-dropdown-menu {
          background: rgba(31, 41, 55, 0.95);
          border-color: rgba(168, 85, 247, 0.3);
        }

        @keyframes dropdownFade {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .premium-dropdown-header {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: #7c3aed;
          border-bottom: 1px solid rgba(124, 58, 237, 0.1);
          margin: 0 0 0.5rem 0;
        }

        [data-bs-theme="dark"] .premium-dropdown-header {
          color: #a855f7;
          border-bottom-color: rgba(168, 85, 247, 0.2);
        }

        .premium-dropdown-item {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 0.75rem 1rem;
          border: none;
          background: transparent;
          border-radius: 10px;
          transition: all 0.2s ease;
          text-align: left;
          margin: 0.125rem 0;
          color: #374151;
        }

        [data-bs-theme="dark"] .premium-dropdown-item {
          color: #f3f4f6;
        }

        .premium-dropdown-item:hover {
          background: rgba(124, 58, 237, 0.08);
          transform: translateX(3px);
          color: #7c3aed;
        }

        [data-bs-theme="dark"] .premium-dropdown-item:hover {
          background: rgba(168, 85, 247, 0.15);
          color: #a855f7;
        }

        .premium-dropdown-item.active {
          background: rgba(124, 58, 237, 0.15);
          color: #7c3aed;
          font-weight: 600;
        }

        [data-bs-theme="dark"] .premium-dropdown-item.active {
          background: rgba(168, 85, 247, 0.2);
          color: #a855f7;
        }

        .premium-dropdown-special {
          border-top: 1px solid rgba(124, 58, 237, 0.1);
          margin-top: 0.5rem;
          padding-top: 1rem;
        }

        .premium-dropdown-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.2), transparent);
          margin: 0.75rem 0;
          border: none;
        }

        /* Utility Classes */
        .premium-count-badge {
          background: rgba(255, 255, 255, 0.25);
          color: currentColor;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.125rem 0.375rem;
          border-radius: 6px;
        }

        .premium-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .premium-main-title {
            font-size: 2rem;
          }
          
          .premium-title-icon {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }
          
          .premium-actions-card {
            padding: 1rem;
          }
          
          .premium-actions-row {
            gap: 0.5rem;
          }
          
          .premium-action-btn {
            height: 44px;
            padding: 0.625rem 1rem;
            font-size: 0.8125rem;
          }
        }

        @media (max-width: 576px) {
          .premium-main-title {
            font-size: 1.75rem;
          }
          
          .premium-subtitle {
            font-size: 0.875rem;
          }
          
          .premium-meta-info {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          
          .premium-action-btn {
            padding: 0.75rem;
            min-width: 48px;
          }
        }
        /* ===== END PREMIUM HEADER & ACTIONS STYLES ===== */
        
        /* ===== RESPONSIVE ACTION TOOLBAR STYLES ===== */
        .card-toolbar {
          background: linear-gradient(135deg, rgba(86, 61, 124, 0.08) 0%, rgba(59, 42, 89, 0.12) 100%);
          backdrop-filter: blur(10px);
          padding: 0.875rem 1.25rem;
          border-radius: 14px;
          border: 1px solid rgba(86, 61, 124, 0.15);
          box-shadow: 
            0 4px 12px rgba(86, 61, 124, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          margin-bottom: 1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        [data-bs-theme="dark"] .card-toolbar {
          background: linear-gradient(135deg, rgba(86, 61, 124, 0.15) 0%, rgba(59, 42, 89, 0.25) 100%);
          border-color: rgba(139, 92, 246, 0.2);
          box-shadow: 
            0 4px 16px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .card-toolbar:hover {
          box-shadow: 
            0 6px 18px rgba(86, 61, 124, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        [data-bs-theme="dark"] .card-toolbar:hover {
          box-shadow: 
            0 6px 20px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        /* Action Button Base Styles */
        .action-btn {
          padding: 0.5rem 1rem !important;
          font-weight: 500 !important;
          font-size: 0.875rem !important;
          border-radius: 10px !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08) !important;
          border-width: 1.5px !important;
          min-height: 44px; /* Touch-friendly */
          white-space: nowrap;
        }

        .action-btn:hover:not(:disabled) {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15) !important;
        }

        .action-btn:active:not(:disabled) {
          transform: translateY(0) scale(0.98);
        }

        /* Primary button with gradient */
        .btn-primary.action-btn {
          background: linear-gradient(135deg, #563d7c 0%, #3b2a59 100%) !important;
          border-color: #563d7c !important;
        }

        .btn-primary.action-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #6a4a96 0%, #4a366e 100%) !important;
          box-shadow: 0 6px 20px rgba(86, 61, 124, 0.35) !important;
        }

        /* Success button */
        .btn-success.action-btn {
          background: linear-gradient(135deg, #28a745 0%, #218838 100%) !important;
          border-color: #28a745 !important;
        }

        .btn-success.action-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #34ce57 0%, #28a745 100%) !important;
          box-shadow: 0 6px 20px rgba(40, 167, 69, 0.35) !important;
        }

        /* Danger button */
        .btn-danger.action-btn {
          background: linear-gradient(135deg, #dc3545 0%, #c82333 100%) !important;
          border-color: #dc3545 !important;
        }

        .btn-danger.action-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #e4606d 0%, #dc3545 100%) !important;
          box-shadow: 0 6px 20px rgba(220, 53, 69, 0.35) !important;
        }

        /* Warning subtle button */
        .btn-warning-subtle.action-btn {
          background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%) !important;
          color: #856404 !important;
          border-color: #ffc107 !important;
          font-weight: 600 !important;
        }

        [data-bs-theme="dark"] .btn-warning-subtle.action-btn {
          background: linear-gradient(135deg, #b8860b 0%, #daa520 100%) !important;
          color: #fff8dc !important;
          border-color: #ffc107 !important;
        }

        .btn-warning-subtle.action-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #ffe082 0%, #ffd54f 100%) !important;
          box-shadow: 0 6px 20px rgba(255, 193, 7, 0.35) !important;
          transform: translateY(-2px) scale(1.03);
        }

        /* Outline secondary button */
        .btn-outline-secondary.action-btn {
          background: rgba(255, 255, 255, 0.5) !important;
          backdrop-filter: blur(8px);
          border-color: rgba(108, 117, 125, 0.5) !important;
          color: #495057 !important;
        }

        [data-bs-theme="dark"] .btn-outline-secondary.action-btn {
          background: rgba(52, 58, 64, 0.5) !important;
          border-color: rgba(173, 181, 189, 0.3) !important;
          color: #adb5bd !important;
        }

        .btn-outline-secondary.action-btn:hover:not(:disabled) {
          background: rgba(108, 117, 125, 0.15) !important;
          border-color: rgba(108, 117, 125, 0.7) !important;
          color: #495057 !important;
        }

        /* Outline primary button (More Actions) */
        .btn-outline-primary.action-btn {
          background: rgba(255, 255, 255, 0.5) !important;
          backdrop-filter: blur(8px);
          border-color: rgba(86, 61, 124, 0.5) !important;
          color: #563d7c !important;
        }

        [data-bs-theme="dark"] .btn-outline-primary.action-btn {
          background: rgba(86, 61, 124, 0.2) !important;
          border-color: rgba(139, 92, 246, 0.4) !important;
          color: #a78bfa !important;
        }

        .btn-outline-primary.action-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #563d7c 0%, #3b2a59 100%) !important;
          border-color: #563d7c !important;
          color: white !important;
        }

        /* Disabled state */
        .action-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none !important;
        }

        /* Icon spacing */
        .action-btn i {
          font-size: 1rem;
          vertical-align: middle;
        }

        /* Dropdown menu styling */
        .card-toolbar .dropdown-menu {
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          padding: 0.5rem;
          min-width: 240px;
        }

        [data-bs-theme="dark"] .card-toolbar .dropdown-menu {
          background: #2d3748;
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .card-toolbar .dropdown-item {
          border-radius: 8px;
          padding: 0.625rem 1rem;
          transition: all 0.2s;
          font-size: 0.875rem;
        }

        .card-toolbar .dropdown-item:hover {
          background: rgba(86, 61, 124, 0.1);
          transform: translateX(4px);
        }

        [data-bs-theme="dark"] .card-toolbar .dropdown-item:hover {
          background: rgba(139, 92, 246, 0.2);
        }

        .card-toolbar .dropdown-item i {
          font-size: 1rem;
          width: 20px;
          text-align: center;
        }

        .card-toolbar .dropdown-header {
          font-weight: 700;
          color: #563d7c;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 0.5rem 1rem;
        }

        [data-bs-theme="dark"] .card-toolbar .dropdown-header {
          color: #a78bfa;
        }

        .card-toolbar .dropdown-divider {
          margin: 0.5rem 0;
          opacity: 0.2;
        }

        /* Responsive adjustments */
        @media (max-width: 991.98px) {
          .card-toolbar {
            padding: 0.75rem 1rem;
          }

          .action-btn {
            font-size: 0.8125rem !important;
            padding: 0.5rem 0.875rem !important;
          }
        }

        @media (max-width: 575.98px) {
          .card-toolbar {
            padding: 0.625rem 0.875rem;
            gap: 0.5rem !important;
          }

          .action-btn {
            font-size: 0.75rem !important;
            padding: 0.5rem 0.75rem !important;
          }

          .action-btn i {
            font-size: 0.875rem;
          }
        }

        /* Animation for toolbar appearance */
        @keyframes toolbarSlideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .card-toolbar {
          animation: toolbarSlideIn 0.4s ease-out;
        }
        /* ===== END TOOLBAR STYLES ===== */
        
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
        
        /* ===== PREMIUM GLASSMORPHIC SUMMARY STYLES ===== */
        .premium-summary-container {
          background: linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95));
          backdrop-filter: blur(16px);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 
                      0 0 0 1px rgba(255, 255, 255, 0.1);
          animation: slideInUp 0.6s ease-out;
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .premium-summary-header {
          background: linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6);
          padding: 1.5rem 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .premium-summary-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin: 0;
          display: flex;
          align-items: center;
        }
        
        .premium-timestamp {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.8);
          font-style: italic;
        }
        
        .premium-summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          padding: 2rem;
        }
        
        .premium-summary-card {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.75rem;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          cursor: pointer;
        }
        
        .premium-summary-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
        }
        
        .premium-summary-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s;
        }
        
        .premium-summary-card:hover::before {
          opacity: 1;
        }
        
        .premium-card-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          opacity: 0.9;
        }
        
        .premium-card-value {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          font-family: 'Inter', system-ui, sans-serif;
          background: linear-gradient(135deg, currentColor, currentColor);
          -webkit-background-clip: text;
          background-clip: text;
          animation: countUp 1s ease-out;
        }
        
        @keyframes countUp {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .premium-card-label {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }
        
        .premium-card-sub {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 0.5rem;
          font-style: italic;
        }
        
        .premium-card-glow {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .premium-summary-card:hover .premium-card-glow {
          opacity: 1;
          animation: glow 1.5s infinite;
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px currentColor; }
          50% { box-shadow: 0 0 40px currentColor; }
        }
        
        /* Card Color Variants */
        .premium-card-blue {
          border-color: rgba(59, 130, 246, 0.3);
        }
        .premium-card-blue .premium-card-icon,
        .premium-card-blue .premium-card-value {
          color: #3b82f6;
        }
        .premium-card-blue .premium-card-glow {
          background: linear-gradient(90deg, #3b82f6, #2563eb);
        }
        
        .premium-card-cyan {
          border-color: rgba(6, 182, 212, 0.3);
        }
        .premium-card-cyan .premium-card-icon,
        .premium-card-cyan .premium-card-value {
          color: #06b6d4;
        }
        .premium-card-cyan .premium-card-glow {
          background: linear-gradient(90deg, #06b6d4, #0891b2);
        }
        
        .premium-card-amber {
          border-color: rgba(245, 158, 11, 0.3);
        }
        .premium-card-amber .premium-card-icon,
        .premium-card-amber .premium-card-value {
          color: #f59e0b;
        }
        .premium-card-amber .premium-card-glow {
          background: linear-gradient(90deg, #f59e0b, #d97706);
        }
        
        .premium-card-emerald {
          border-color: rgba(16, 185, 129, 0.3);
        }
        .premium-card-emerald .premium-card-icon,
        .premium-card-emerald .premium-card-value {
          color: #10b981;
        }
        .premium-card-emerald .premium-card-glow {
          background: linear-gradient(90deg, #10b981, #059669);
        }
        
        /* Insights Row */
        .premium-insights-row {
          padding: 1.5rem 2rem;
          background: rgba(255, 255, 255, 0.03);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }
        
        .premium-insight {
          display: flex;
          align-items: center;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
        }
        
        .premium-insight strong {
          color: white;
          font-weight: 700;
        }
        
        /* Breakdown Section */
        .premium-breakdown-section {
          padding: 2rem;
        }
        
        .premium-breakdown-title {
          color: white;
          font-weight: 700;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        
        .premium-breakdown-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .premium-breakdown-item {
          position: relative;
        }
        
        .premium-breakdown-bar {
          height: 8px;
          border-radius: 8px;
          transition: width 1s ease-out;
          margin-bottom: 0.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
        
        .premium-breakdown-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
        }
        
        .premium-breakdown-label {
          font-weight: 600;
        }
        
        .premium-breakdown-value {
          font-weight: 700;
          color: white;
        }
        
        .premium-breakdown-percent {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.85rem;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .premium-summary-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            padding: 1rem;
          }
          
          .premium-summary-header {
            padding: 1rem;
          }
          
          .premium-summary-title {
            font-size: 1.25rem;
          }
          
          .premium-insights-row {
            flex-direction: column;
            gap: 1rem;
          }

          /* Draft Controls Mobile Styling */
          .saas-draft-controls-container {
            margin: 1.5rem 1rem;
            padding: 1.25rem;
            border-radius: 18px;
          }

          .saas-draft-controls-container .d-flex {
            gap: 0.75rem;
            flex-direction: column;
            align-items: center;
          }

          .draft-control-btn {
            padding: 0.75rem 2rem;
            font-size: 0.9rem;
            border-radius: 14px;
            min-width: 160px;
            box-shadow: 
              0 6px 20px rgba(124, 58, 237, 0.3),
              0 0 15px rgba(168, 85, 247, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }

          .draft-control-btn:hover {
            box-shadow: 
              0 10px 30px rgba(124, 58, 237, 0.45),
              0 0 25px rgba(168, 85, 247, 0.35),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }

          .draft-indicator {
            font-size: 0.8rem;
            padding: 0.5rem 1rem;
            border-radius: 12px;
            background: rgba(76, 175, 80, 0.2);
            border: 1px solid rgba(76, 175, 80, 0.4);
            color: rgba(76, 220, 80, 1);
            text-align: center;
          }
        }
        
        @media (max-width: 480px) {
          .premium-summary-grid {
            grid-template-columns: 1fr;
          }
        }
        
        /* ===== END PREMIUM STYLES ===== */
        
        /* ===== DRAFT MANAGEMENT STYLES ===== */
        .draft-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.2s ease-out;
        }

        .draft-modal-card {
          background: linear-gradient(135deg, rgba(30, 30, 40, 0.95) 0%, rgba(20, 20, 30, 0.98) 100%);
          border: 1px solid rgba(100, 100, 255, 0.3);
          border-radius: 16px;
          padding: 32px;
          max-width: 480px;
          width: 90%;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(100, 100, 255, 0.2);
          animation: slideUp 0.3s ease-out;
        }

        .draft-modal-title {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .draft-modal-card p {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .draft-modal-card small {
          display: block;
          color: rgba(100, 200, 255, 0.9);
          font-size: 13px;
          margin-bottom: 24px;
          padding: 8px 12px;
          background: rgba(100, 150, 255, 0.1);
          border-radius: 6px;
          border-left: 3px solid rgba(100, 150, 255, 0.6);
        }

        .draft-modal-card .d-flex {
          gap: 12px;
        }

        .draft-btn-discard {
          flex: 1;
          padding: 12px 24px;
          background: rgba(255, 100, 100, 0.15);
          border: 1px solid rgba(255, 100, 100, 0.4);
          color: #ff6666;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s;
        }

        .draft-btn-discard:hover {
          background: rgba(255, 100, 100, 0.25);
          border-color: rgba(255, 100, 100, 0.6);
          transform: translateY(-1px);
        }

        .draft-btn-restore {
          flex: 1;
          padding: 12px 24px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          color: white;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        .draft-btn-restore:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
        }

        .draft-control-btn {
          padding: 0.625rem 1.5rem;
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%);
          border: none;
          color: white;
          border-radius: 12px;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          backdrop-filter: blur(20px);
          box-shadow: 
            0 4px 16px rgba(124, 58, 237, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .draft-control-btn:hover {
          background: linear-gradient(135deg, #6d28d9 0%, #9333ea 50%, #a855f7 100%);
          transform: translateY(-2px);
          box-shadow: 
            0 8px 24px rgba(124, 58, 237, 0.4),
            0 0 20px rgba(168, 85, 247, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .draft-control-btn::before {
          content: '';
          position: absolute;
          top: -1px;
          left: -1px;
          right: -1px;
          bottom: -1px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.2) 100%);
          border-radius: 13px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .draft-control-btn:hover::before {
          opacity: 1;
        }

        /* Floating Draft Controls Container */
        .saas-draft-controls-container {
          margin: 2rem auto;
          padding: 1.5rem;
          max-width: 600px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 20px;
          box-shadow: 
            0 12px 40px rgba(124, 58, 237, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          animation: fadeInUp 0.6s ease-out 1s both;
          text-align: center;
        }

        .saas-draft-controls-container .d-flex {
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }

        .draft-indicator {
          padding: 6px 12px;
          background: rgba(76, 175, 80, 0.15);
          border: 1px solid rgba(76, 175, 80, 0.3);
          color: rgba(76, 200, 80, 0.95);
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          animation: pulse 2s infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        /* ===== END DRAFT MANAGEMENT STYLES ===== */
        
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
        {/* SaaS-Grade Header Section */}
        <div className="saas-header-container mb-4">
          {/* Title Section */}
          <div className="saas-title-wrapper">
            <div className="saas-title-content">
              <h1 className="saas-main-title">
                Multi-Item Quotation
                {autoSaving && (
                  <span className="saas-auto-save-indicator">
                    <i className="bi bi-cloud-arrow-up-fill me-1"></i>
                    Auto-saving...
                  </span>
                )}
              </h1>
              
              {/* Premium Accent Line */}
              <div className="saas-title-accent"></div>
              
              {/* ID and Status Row */}
              <div className="saas-meta-row">
                <div className="saas-meta-item">
                  <i className="bi bi-hash saas-meta-icon"></i>
                  <span className="saas-meta-label">ID:</span>
                  <span className="saas-meta-value">{quotation.quotationId}</span>
                </div>
                
                <div className="saas-meta-divider"></div>
                
                <div className="saas-meta-item">
                  <i className="bi bi-circle-fill saas-status-dot"></i>
                  <span className="saas-meta-label">Status:</span>
                  <span className={`saas-status-badge saas-status-${quotation.status}`}>
                    {quotation.status?.toUpperCase()}
                  </span>
                </div>
                
                {/* Additional meta for larger screens */}
                <div className="saas-meta-divider d-none d-md-block"></div>
                <div className="saas-meta-item d-none d-md-flex">
                  <i className="bi bi-calendar3 saas-meta-icon"></i>
                  <span className="saas-meta-label">Created:</span>
                  <span className="saas-meta-value">{new Date(quotation.createdAt).toLocaleDateString()}</span>
                </div>
                
                <div className="saas-meta-divider d-none d-lg-block"></div>
                <div className="saas-meta-item d-none d-lg-flex">
                  <i className="bi bi-clock saas-meta-icon"></i>
                  <span className="saas-meta-label">Valid Until:</span>
                  <span className={`saas-meta-value ${new Date(quotation.validUntil || '') < new Date() ? 'saas-meta-expired' : 'saas-meta-valid'}`}>
                    {quotation.validUntil ? new Date(quotation.validUntil).toLocaleDateString() : 'N/A'}
                    {new Date(quotation.validUntil || '') < new Date() && (
                      <i className="bi bi-exclamation-triangle-fill ms-1 text-warning"></i>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Card */}
          <div className="saas-action-wrapper">
            <div className="saas-action-card">
              {/* Primary Action Row */}
              <div className="saas-action-row">
                <button 
                  className="saas-action-btn saas-btn-primary"
                  onClick={addNewItem}
                  title="Add New Item"
                >
                  <i className="bi bi-plus-circle"></i>
                  <span className="saas-btn-text">Add Item</span>
                </button>

                {/* AI Estimate Group */}
                <div className="saas-btn-group">
                  <button 
                    className="saas-action-btn saas-btn-ai" 
                    onClick={() => {
                      const lastItem = quotation.items[quotation.items.length - 1]
                      if (lastItem) {
                        estimateAutomatically(lastItem.id, lastItem.type)
                      } else {
                        alert('Please add an item first!')
                      }
                    }}
                    disabled={quotation.items.length === 0}
                    title="AI-Assisted Estimation"
                  >
                    <i className="bi bi-lightbulb-fill"></i>
                    <span className="saas-btn-text">AI Estimate</span>
                  </button>
                  <button 
                    className="saas-action-btn saas-btn-ai saas-dropdown-toggle" 
                    data-bs-toggle="dropdown"
                    title="AI Mode Settings"
                  >
                    <i className="bi bi-chevron-down"></i>
                  </button>
                  <ul className="dropdown-menu saas-dropdown-menu">
                    <li className="saas-dropdown-header">
                      <i className="bi bi-robot me-2"></i>
                      AI Optimization Mode
                    </li>
                    <li>
                      <button 
                        className={`saas-dropdown-item ${aiMode === 'residential' ? 'active' : ''}`}
                        onClick={() => setAiMode('residential')}
                      >
                        <div className="saas-dropdown-icon">
                          <i className="bi bi-house-door"></i>
                        </div>
                        <div className="saas-dropdown-content">
                          <span className="saas-dropdown-title">Residential</span>
                          <small className="saas-dropdown-desc">Cost-efficient materials</small>
                        </div>
                        {aiMode === 'residential' && <i className="bi bi-check-circle-fill saas-dropdown-check"></i>}
                      </button>
                    </li>
                    <li>
                      <button 
                        className={`saas-dropdown-item ${aiMode === 'commercial' ? 'active' : ''}`}
                        onClick={() => setAiMode('commercial')}
                      >
                        <div className="saas-dropdown-icon">
                          <i className="bi bi-building"></i>
                        </div>
                        <div className="saas-dropdown-content">
                          <span className="saas-dropdown-title">Commercial</span>
                          <small className="saas-dropdown-desc">Maximum durability</small>
                        </div>
                        {aiMode === 'commercial' && <i className="bi bi-check-circle-fill saas-dropdown-check"></i>}
                      </button>
                    </li>
                    <li>
                      <button 
                        className={`saas-dropdown-item ${aiMode === 'thermal' ? 'active' : ''}`}
                        onClick={() => setAiMode('thermal')}
                      >
                        <div className="saas-dropdown-icon">
                          <i className="bi bi-thermometer-half"></i>
                        </div>
                        <div className="saas-dropdown-content">
                          <span className="saas-dropdown-title">Thermal Efficiency</span>
                          <small className="saas-dropdown-desc">Insulation optimized</small>
                        </div>
                        {aiMode === 'thermal' && <i className="bi bi-check-circle-fill saas-dropdown-check"></i>}
                      </button>
                    </li>
                    <li>
                      <button 
                        className={`saas-dropdown-item ${aiMode === 'premium' ? 'active' : ''}`}
                        onClick={() => setAiMode('premium')}
                      >
                        <div className="saas-dropdown-icon">
                          <i className="bi bi-gem"></i>
                        </div>
                        <div className="saas-dropdown-content">
                          <span className="saas-dropdown-title">Premium Aesthetic</span>
                          <small className="saas-dropdown-desc">Superior quality</small>
                        </div>
                        {aiMode === 'premium' && <i className="bi bi-check-circle-fill saas-dropdown-check"></i>}
                      </button>
                    </li>
                    <li><hr className="saas-dropdown-divider" /></li>
                    <li>
                      <button 
                        className="saas-dropdown-item saas-dropdown-special"
                        onClick={() => setShowAIHistory(!showAIHistory)}
                      >
                        <div className="saas-dropdown-icon saas-icon-special">
                          <i className="bi bi-clock-history"></i>
                        </div>
                        <div className="saas-dropdown-content">
                          <span className="saas-dropdown-title">View AI History</span>
                          <small className="saas-dropdown-desc">{aiHistory.length} estimations</small>
                        </div>
                      </button>
                    </li>
                  </ul>
                </div>

                <button 
                  className="saas-action-btn saas-btn-danger" 
                  onClick={generatePDF}
                  disabled={generatingPDF || quotation.items.length === 0}
                  title="Generate PDF Report"
                >
                  {generatingPDF ? (
                    <>
                      <div className="saas-spinner"></div>
                      <span className="saas-btn-text">Generating...</span>
                    </>
                  ) : (
                    <>
                      <i className="bi bi-file-earmark-pdf"></i>
                      <span className="saas-btn-text">Generate PDF</span>
                    </>
                  )}
                </button>

                {/* More Actions - Mobile/Tablet */}
                <div className="saas-more-actions d-lg-none">
                  <button 
                    className="saas-action-btn saas-btn-outline"
                    data-bs-toggle="dropdown"
                    title="More Actions"
                  >
                    <i className="bi bi-three-dots"></i>
                    <span className="saas-btn-text d-none d-md-inline">More</span>
                  </button>
                  <ul className="dropdown-menu saas-dropdown-menu dropdown-menu-end">
                    <li>
                      <button 
                        className="saas-dropdown-item"
                        onClick={() => setShowTemplateModal(!showTemplateModal)}
                      >
                        <div className="saas-dropdown-icon">
                          <i className="bi bi-bookmark-star"></i>
                        </div>
                        <div className="saas-dropdown-content">
                          <span className="saas-dropdown-title">Templates</span>
                          <small className="saas-dropdown-desc">{savedTemplates.length} saved</small>
                        </div>
                      </button>
                    </li>
                    <li>
                      <button 
                        className="saas-dropdown-item"
                        onClick={saveDraft}
                      >
                        <div className="saas-dropdown-icon">
                          <i className="bi bi-bookmark-plus"></i>
                        </div>
                        <div className="saas-dropdown-content">
                          <span className="saas-dropdown-title">Save Template</span>
                          <small className="saas-dropdown-desc">Create new template</small>
                        </div>
                      </button>
                    </li>
                    <li>
                      <button 
                        className="saas-dropdown-item"
                        onClick={saveQuotation}
                        disabled={savingQuotation || quotation.items.length === 0}
                      >
                        <div className="saas-dropdown-icon">
                          <i className="bi bi-cloud-check"></i>
                        </div>
                        <div className="saas-dropdown-content">
                          <span className="saas-dropdown-title">Save to Firebase</span>
                          <small className="saas-dropdown-desc">Backup to cloud</small>
                        </div>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Secondary Action Row - Desktop Only */}
              <div className="saas-secondary-row d-none d-lg-flex">
                <button 
                  className="saas-action-btn saas-btn-secondary"
                  onClick={() => setShowTemplateModal(!showTemplateModal)}
                  title="Manage Templates"
                >
                  <i className="bi bi-bookmark-star"></i>
                  <span className="saas-btn-text">Templates</span>
                  <span className="saas-count-badge">{savedTemplates.length}</span>
                </button>

                <button 
                  className="saas-action-btn saas-btn-outline"
                  onClick={saveDraft}
                  title="Save as Template"
                >
                  <i className="bi bi-bookmark-plus"></i>
                  <span className="saas-btn-text">Save Template</span>
                </button>

                <button 
                  className="saas-action-btn saas-btn-success"
                  onClick={saveQuotation}
                  disabled={savingQuotation || quotation.items.length === 0}
                  title="Save to Firebase"
                >
                  {savingQuotation ? (
                    <>
                      <div className="saas-spinner"></div>
                      <span className="saas-btn-text">Saving...</span>
                    </>
                  ) : (
                    <>
                      <i className="bi bi-cloud-check"></i>
                      <span className="saas-btn-text">Save to Firebase</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Template Modal */}
      {showTemplateModal && savedTemplates.length > 0 && (
        <div className="row mb-3">
          <div className="col-12">
            <div className="card border-primary shadow-sm rounded-3">
              <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                <h5 className="mb-0 fw-semibold">
                  <i className="bi bi-bookmark-star me-2 fs-6"></i>Item Templates
                </h5>
                <button className="btn btn-sm btn-light" onClick={() => setShowTemplateModal(false)}>
                  <i className="bi bi-x fs-6"></i>
                </button>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  {savedTemplates.map(template => (
                    <div key={template.id} className="col-md-4">
                      <div className="card h-100 shadow-sm rounded-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <h6 className="card-title mb-0 fw-semibold">{template.name}</h6>
                            <button 
                              className="btn btn-sm btn-outline-danger"
                              onClick={(e) => {
                                e.stopPropagation()
                                deleteTemplate(template.id)
                              }}
                              title="Delete template"
                            >
                              <i className="bi bi-trash fs-6"></i>
                            </button>
                          </div>
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
        <div className="row mb-3">
          <div className="col-12">
            <div className="card border-warning shadow-sm rounded-3">
              <div className="card-header bg-warning text-dark d-flex justify-content-between align-items-center">
                <h5 className="mb-0 fw-semibold">
                  <i className="bi bi-clock-history me-2 fs-6"></i>
                  🤖 AI Estimation History
                </h5>
                <button className="btn btn-sm btn-dark" onClick={() => setShowAIHistory(false)}>
                  <i className="bi bi-x fs-6"></i>
                </button>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  {aiHistory.map(entry => (
                    <div key={entry.id} className="col-md-6">
                      <div className="card h-100 border-start border-warning border-4 shadow-sm rounded-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <h6 className="card-title mb-0 fw-semibold">
                              {entry.type === 'window' ? '🪟' : '🚪'} {entry.itemName}
                            </h6>
                            <span className="badge bg-secondary">{entry.mode}</span>
                          </div>
                          <p className="card-text small text-muted mb-2">
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
                              <i className="bi bi-eye me-1 fs-6"></i>
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

      {/* Draft Management Controls */}
      <div className="saas-draft-controls-container">
        <div className="d-flex justify-content-center align-items-center gap-3">
          {draftTimestamp && (
            <span className="draft-indicator">
              💾 Draft saved {new Date(draftTimestamp).toLocaleTimeString('en-IN', {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </span>
          )}
          <button className="draft-control-btn" onClick={saveDraft}>
            💾 Save Template
          </button>
          {draftTimestamp && (
            <button className="draft-control-btn" onClick={clearDraft}>
              🗑️ Clear Template
            </button>
          )}
        </div>
      </div>

      {/* Customer Information */}
      <div className="row mb-3">
        <div className="col-12">
          <div className="card shadow-sm rounded-3">
            <div className="card-header bg-info text-white">
              <h5 className="card-title mb-0 fw-semibold">
                <i className="bi bi-person-fill me-2 fs-6"></i>
                Customer Information
              </h5>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label small text-muted">Customer Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={quotation.customerName}
                    onChange={(e) => setQuotation(prev => ({ ...prev, customerName: e.target.value }))}
                    placeholder="Enter customer name"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label small text-muted">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    value={quotation.customerPhone}
                    onChange={(e) => setQuotation(prev => ({ ...prev, customerPhone: e.target.value }))}
                    placeholder="Enter phone number"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label small text-muted">Email Address</label>
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
      <div className="row mb-3">
        <div className="col-12">
          <div className="card shadow-sm rounded-3">
            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0 fw-semibold">
                <i className="bi bi-list-ul me-2 fs-6"></i>
                Quotation Items ({quotation.items.length})
              </h5>
              {quotation.items.length === 0 && (
                <button className="btn btn-sm btn-light" onClick={addNewItem}>
                  <i className="bi bi-plus me-1 fs-6"></i>
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
                      <div className="card border-secondary shadow-sm rounded-3">
                        <div className="card-header bg-body-tertiary d-flex justify-content-between align-items-center">
                          <h6 className="mb-0 fw-semibold">
                            <i className="bi bi-grip-vertical me-2 text-muted fs-6" title="Drag to reorder"></i>
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
                              className="btn btn-sm"
                              style={{
                                backgroundColor: '#fef3c7',
                                color: '#92400e',
                                borderColor: '#fde68a'
                              }}
                              onClick={() => estimateAutomatically(item.id, item.type)}
                              title="AI-Assisted Estimation - Auto-fill with smart defaults"
                            >
                              <i className="bi bi-lightbulb-fill me-1 fs-6"></i>
                              Estimate
                            </button>
                            <button 
                              className="btn btn-sm btn-outline-primary"
                              onClick={() => toggleItemBreakdown(item.id)}
                              title="View Cost Breakdown"
                            >
                              <i className="bi bi-receipt fs-6"></i>
                            </button>
                            <button 
                              className="btn btn-sm btn-outline-info"
                              onClick={() => duplicateItem(item.id)}
                              title="Duplicate Item"
                            >
                              <i className="bi bi-files fs-6"></i>
                            </button>
                            <button 
                              className="btn btn-sm btn-outline-success"
                              onClick={() => saveAsTemplate(item)}
                              title="Save as Template"
                            >
                              <i className="bi bi-bookmark fs-6"></i>
                            </button>
                            <button 
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => removeItem(item.id)}
                              title="Delete Item"
                            >
                              <i className="bi bi-trash fs-6"></i>
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

      {/* Premium Glassmorphic Summary */}
      {quotation.items.length > 0 && (
        <div className="row mb-5">
          <div className="col-12">
            <div className="premium-summary-container">
              {/* Gradient Header Bar */}
              <div className="premium-summary-header">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="premium-summary-title">
                    <i className="bi bi-bar-chart-line-fill me-2"></i>
                    Quotation Summary
                    <span className="badge bg-light text-dark ms-2 animate-pulse" style={{fontSize: '0.7rem'}}>
                      Live
                    </span>
                  </h2>
                  <div className="d-flex align-items-center gap-3">
                    <span className="premium-timestamp">
                      <i className="bi bi-clock me-1"></i>
                      Last updated: {new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    <button 
                      className="btn btn-sm btn-light"
                      onClick={generatePDF}
                      title="Export Summary as PDF"
                    >
                      <i className="bi bi-download"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Glass Morphic Cards Grid */}
              <div className="premium-summary-grid">
                {/* Total Items Card */}
                <div className="premium-summary-card premium-card-blue" data-metric="items">
                  <div className="premium-card-icon">
                    <i className="bi bi-receipt-cutoff"></i>
                  </div>
                  <div className="premium-card-value">{quotation.items.length}</div>
                  <div className="premium-card-label">Total Items</div>
                  <div className="premium-card-glow"></div>
                </div>

                {/* Glass Area Card */}
                <div className="premium-summary-card premium-card-cyan" data-metric="area">
                  <div className="premium-card-icon">
                    <i className="bi bi-grid-3x3-gap"></i>
                  </div>
                  <div className="premium-card-value">{quotation.totalGlassArea.toFixed(2)}</div>
                  <div className="premium-card-label">Glass Area (m²)</div>
                  <div className="premium-card-sub">
                    Avg: {(quotation.totalGlassArea / quotation.items.length).toFixed(2)} m² per item
                  </div>
                  <div className="premium-card-glow"></div>
                </div>

                {/* Frame Weight Card */}
                <div className="premium-summary-card premium-card-amber" data-metric="weight">
                  <div className="premium-card-icon">
                    <i className="bi bi-speedometer2"></i>
                  </div>
                  <div className="premium-card-value">{quotation.totalFrameWeight.toFixed(2)}</div>
                  <div className="premium-card-label">Frame Weight (kg)</div>
                  <div className="premium-card-sub">
                    {(quotation.totalFrameWeight / quotation.totalGlassArea).toFixed(2)} kg/m²
                  </div>
                  <div className="premium-card-glow"></div>
                </div>

                {/* Grand Total Card */}
                <div className="premium-summary-card premium-card-emerald" data-metric="total">
                  <div className="premium-card-icon">
                    <i className="bi bi-currency-rupee"></i>
                  </div>
                  <div className="premium-card-value">
                    ₹{quotation.grandTotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </div>
                  <div className="premium-card-label">Grand Total</div>
                  <div className="premium-card-sub">
                    ₹{(quotation.grandTotal / quotation.totalGlassArea).toFixed(0)}/m²
                  </div>
                  <div className="premium-card-glow"></div>
                </div>
              </div>

              {/* AI Insights Row */}
              <div className="premium-insights-row">
                <div className="premium-insight">
                  <i className="bi bi-lightbulb-fill text-warning me-2"></i>
                  <span>
                    Based on <strong>{quotation.items.length} items</strong>, 
                    average cost per sq.ft is <strong>₹{((quotation.grandTotal / quotation.totalGlassArea) * 0.0929).toFixed(2)}</strong>
                  </span>
                </div>
                <div className="premium-insight">
                  <i className="bi bi-graph-up text-success me-2"></i>
                  <span>
                    Material efficiency: <strong>{((quotation.totalGlassArea / (quotation.totalGlassArea + 5)) * 100).toFixed(1)}%</strong>
                  </span>
                </div>
              </div>

              {/* Cost Breakdown Section */}
              <div className="premium-breakdown-section">
                <h6 className="premium-breakdown-title">
                  <i className="bi bi-pie-chart-fill me-2"></i>
                  Detailed Cost Breakdown
                </h6>
                <div className="premium-breakdown-grid">
                  <div className="premium-breakdown-item">
                    <div className="premium-breakdown-bar" style={{width: `${(quotation.subtotal / quotation.grandTotal) * 100}%`, background: 'linear-gradient(90deg, #3b82f6, #2563eb)'}}></div>
                    <div className="premium-breakdown-details">
                      <span className="premium-breakdown-label">Material Cost</span>
                      <span className="premium-breakdown-value">₹{quotation.subtotal.toFixed(2)}</span>
                      <span className="premium-breakdown-percent">{((quotation.subtotal / quotation.grandTotal) * 100).toFixed(1)}%</span>
                    </div>
                  </div>
                  <div className="premium-breakdown-item">
                    <div className="premium-breakdown-bar" style={{width: `${(quotation.laborCharges / quotation.grandTotal) * 100}%`, background: 'linear-gradient(90deg, #f59e0b, #d97706)'}}></div>
                    <div className="premium-breakdown-details">
                      <span className="premium-breakdown-label">Labor & Markup</span>
                      <span className="premium-breakdown-value">₹{quotation.laborCharges.toFixed(2)}</span>
                      <span className="premium-breakdown-percent">{((quotation.laborCharges / quotation.grandTotal) * 100).toFixed(1)}%</span>
                    </div>
                  </div>
                  <div className="premium-breakdown-item">
                    <div className="premium-breakdown-bar" style={{width: `${(quotation.gst / quotation.grandTotal) * 100}%`, background: 'linear-gradient(90deg, #10b981, #059669)'}}></div>
                    <div className="premium-breakdown-details">
                      <span className="premium-breakdown-label">GST ({pricingSettings.gstPercent}%)</span>
                      <span className="premium-breakdown-value">₹{quotation.gst.toFixed(2)}</span>
                      <span className="premium-breakdown-percent">{((quotation.gst / quotation.grandTotal) * 100).toFixed(1)}%</span>
                    </div>
                  </div>
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
    </>
  )
}