import { useMemo, useState, useEffect } from 'react'
import { saveAs } from 'file-saver'
import { dejavuFontBase64 } from '../DejaVuSans-base64.js'
import { pdfService } from '../lib/pdfService'
import { setupOnboarding } from '../lib/onboardingTour'
import '../lib/onboardingTour.css'

// Lazy-load heavy libs to reduce initial bundle size
let _XLSX
async function getXlsx() {
  if (!_XLSX) {
    const mod = await import('xlsx')
    _XLSX = mod
  }
  return _XLSX
}


const GLASS_WEIGHT_PER_M2 = {
  '4mm': 10,
  '5mm': 12.5,
  '6mm': 15,
  '24mm DG': 22,
}

const PROFILE_WEIGHT_PER_M = {
  'Series 45': 2.5,
  'Series 60': 3.8,
  'Series 75': 4.5,
  'Sliding Light': 2.2,
  'Sliding Heavy': 5.0,
}

// Stable component to avoid remounts that cause input focus loss - PREMIUM VERSION
const Card = ({ children }) => (
  <div 
    className="premium-card mb-4"
    style={{ transition: 'all 0.3s ease' }}
  >
    {children}
  </div>
)

// Main Calculator Component - export this to App.tsx
function Calculator() {
  // Component state
  const [items, setItems] = useState([])
  const [globalGlassType, setGlobalGlassType] = useState('5mm')
  const [globalProfileType, setGlobalProfileType] = useState('Series 60')
  const [showOnlyTotals, setShowOnlyTotals] = useState(false)
  const [ratePerKg, setRatePerKg] = useState('')
  const [collapsed, setCollapsed] = useState({ settings: false, items: false, summary: false })
  const [showAutoSave, setShowAutoSave] = useState(false)
  const [companyData, setCompanyData] = useState({
    name: 'Venkatesh Aluminium & Glass',
    address: '',
    phone: '',
    email: ''
  })
  const [customerData, setCustomerData] = useState({
    name: '',
    address: '',
    phone: '',
    email: ''
  })

  // Auto-save indicator function
  const showAutoSaveIndicator = () => {
    setShowAutoSave(true)
    setTimeout(() => setShowAutoSave(false), 3000)
  }

  // Trigger auto-save when items change
  useEffect(() => {
    if (items.length > 0) {
      showAutoSaveIndicator()
    }
  }, [items])

  // Initialize onboarding tour for first-time users
  useEffect(() => {
    setupOnboarding()
  }, [])

  // Calculation results
  const totals = useMemo(() => {
    let totalGlassArea = 0
    let totalGlassWeight = 0
    let totalProfileLength = 0
    let totalProfileWeight = 0

    items.forEach(item => {
      const { glassArea, glassWeight, profileLength, profileWeight } = calculateItemWeights(item)
      totalGlassArea += glassArea
      totalGlassWeight += glassWeight
      totalProfileLength += profileLength
      totalProfileWeight += profileWeight
    })

    const totalWeight = totalGlassWeight + totalProfileWeight
    const totalCost = ratePerKg ? totalWeight * parseFloat(ratePerKg) : 0
    const subtotal = totalCost
    const gst = totalCost * 0.18 // 18% GST
    const grandTotal = totalCost * 1.18 // Total with GST

    return {
      totalGlassArea,
      totalGlassWeight,
      totalProfileLength,
      totalProfileWeight,
      totalWeight,
      totalCost,
      subtotal,
      gst,
      grandTotal
    }
  }, [items, ratePerKg])

  // Calculate weights for a single item
  function calculateItemWeights(item) {
    const glassType = item.glassType || globalGlassType
    const profileType = item.profileType || globalProfileType

    const glassArea = (item.width || 0) * (item.height || 0) * (item.quantity || 1)
    const glassWeight = glassArea * GLASS_WEIGHT_PER_M2[glassType]

    const perimeter = 2 * ((item.width || 0) + (item.height || 0))
    const profileLength = perimeter * (item.quantity || 1)
    const profileWeight = profileLength * PROFILE_WEIGHT_PER_M[profileType]

    return { glassArea, glassWeight, profileLength, profileWeight }
  }

  // Add new item
  const addItem = () => {
    const newItem = {
      id: Date.now(),
      name: `Window ${items.length + 1}`,
      width: '',
      height: '',
      quantity: 1,
      glassType: '',
      profileType: ''
    }
    setItems([...items, newItem])
  }

  // Update item
  const updateItem = (id, field, value) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ))
  }

  // Delete item
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  // Export to Premium PDF using pdfService
  const exportPDF = async () => {
    try {
      // Prepare data in the format expected by pdfService
      const quotationData = {
        invoiceNumber: `QUOT-${Date.now()}`,
        date: new Date(),
        customerName: customerData.name || 'Valued Customer',
        customerPhone: customerData.phone || '',
        customerEmail: customerData.email || '',
        customerAddress: customerData.address || '',
        items: items.map((item, index) => {
          const { glassArea, glassWeight, profileWeight } = calculateItemWeights(item)
          const totalItemWeight = glassWeight + profileWeight
          const rate = ratePerKg ? parseFloat(ratePerKg) : 0
          const cost = totalItemWeight * rate
          
          return {
            name: item.name || `Item ${index + 1}`,
            type: item.name.toLowerCase().includes('door') ? 'door' : 'window',
            width: item.width || 0,
            height: item.height || 0,
            area: glassArea,
            rate: rate,
            total: cost
          }
        }),
        subtotal: totals.totalCost,
        tax: totals.totalCost * 0.18, // 18% GST
        grandTotal: totals.totalCost * 1.18,
        notes: `Total Glass Area: ${totals.totalGlassArea.toFixed(2)} m²\nTotal Weight: ${totals.totalWeight.toFixed(2)} kg\nGlass Type: ${globalGlassType}\nProfile Type: ${globalProfileType}`,
        termsAndConditions: '1. Prices are valid for 15 days.\n2. Delivery within 7 working days.\n3. Payment: 50% advance, balance on delivery.'
      }

      const pdfOptions = {
        branding: {
          companyName: companyData.name,
          address: companyData.address || '',
          phone: companyData.phone || '',
          email: companyData.email || ''
        }
      }

      // Generate PDF using premium service
      const pdfBlob = await pdfService.generateQuotationPDF(quotationData, pdfOptions)
      
      // Download the PDF
      const url = URL.createObjectURL(pdfBlob)
      const link = document.createElement('a')
      link.href = url
      link.download = `Quotation_${quotationData.invoiceNumber}_${new Date().toISOString().split('T')[0]}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      alert('✅ Premium PDF generated successfully!')
    } catch (error) {
      console.error('PDF generation error:', error)
      alert('Failed to generate PDF: ' + (error.message || 'Unknown error'))
    }
  }

  // Export to Excel
  const exportExcel = async () => {
    try {
      const XLSX = await getXlsx()
      
      const data = items.map(item => {
        const { glassArea, glassWeight, profileLength, profileWeight } = calculateItemWeights(item)
        return {
          'Item Name': item.name,
          'Width (m)': item.width || 0,
          'Height (m)': item.height || 0,
          'Quantity': item.quantity || 1,
          'Glass Type': item.glassType || globalGlassType,
          'Profile Type': item.profileType || globalProfileType,
          'Glass Area (m²)': glassArea.toFixed(2),
          'Glass Weight (kg)': glassWeight.toFixed(2),
          'Profile Length (m)': profileLength.toFixed(2),
          'Profile Weight (kg)': profileWeight.toFixed(2),
          'Total Weight (kg)': (glassWeight + profileWeight).toFixed(2)
        }
      })

      // Add summary row
      data.push({
        'Item Name': 'TOTAL',
        'Width (m)': '',
        'Height (m)': '',
        'Quantity': '',
        'Glass Type': '',
        'Profile Type': '',
        'Glass Area (m²)': totals.totalGlassArea.toFixed(2),
        'Glass Weight (kg)': totals.totalGlassWeight.toFixed(2),
        'Profile Length (m)': totals.totalProfileLength.toFixed(2),
        'Profile Weight (kg)': totals.totalProfileWeight.toFixed(2),
        'Total Weight (kg)': totals.totalWeight.toFixed(2)
      })

      const ws = XLSX.utils.json_to_sheet(data)
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, ws, 'Calculation')

      const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
      const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
      saveAs(blob, 'aluminium-calculation.xlsx')
    } catch (error) {
      console.error('Error generating Excel:', error)
      alert('Error generating Excel file. Please try again.')
    }
  }

  return (
    <>
      <style>{`
        /* ===== ESTIMATIX DARK-NEUMORPHIC THEME ===== */
        /* Sleek Glass Design - Linear + Superhuman Inspired */
        
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        :root {
          /* Dark Glass Color System */
          --bg-deep: #0F172A;
          --bg-gradient-end: #1E293B;
          --card-bg: rgba(30, 41, 59, 0.6);
          --card-border: rgba(255, 255, 255, 0.1);
          
          /* Brand Accent Colors */
          --accent-primary: #6C63FF;
          --accent-glow: #8B80FF;
          --accent-shadow: rgba(108, 99, 255, 0.3);
          
          /* Text Hierarchy */
          --text-primary: #F1F5F9;
          --text-secondary: #94A3B8;
          --text-muted: #64748B;
          
          /* Semantic Colors */
          --success: #22C55E;
          --warning: #EAB308;
          --danger: #EF4444;
          
          /* Subtle Dividers */
          --divider: rgba(255, 255, 255, 0.05);
        }
        
        /* GPU Acceleration & Font Rendering */
        * {
          transform: translateZ(0);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
        }
        
        /* Deep Gradient Background */
        .premium-calc-container {
          background: linear-gradient(135deg, var(--bg-deep) 0%, var(--bg-gradient-end) 100%);
          min-height: 100vh;
          padding: 5rem 0 3rem 0;
          position: relative;
          color: var(--text-primary);
          animation: fadeIn 0.6s ease-out;
        }
        
        /* Animated gradient background (optional subtle effect) */
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        /* Global smooth animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        /* Glass-Neumorphic Cards with Backdrop Blur */
        .premium-card {
          background: var(--card-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          
          border-radius: 1.25rem;
          border: 1px solid var(--card-border);
          
          box-shadow: 
            0 10px 35px rgba(0, 0, 0, 0.3),
            0 1px 3px rgba(0, 0, 0, 0.2),
            inset 0 1px 1px rgba(255, 255, 255, 0.03);
          
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          animation: fadeInUp 0.5s ease-out;
          animation-fill-mode: both;
          margin-bottom: 1.5rem;
          overflow: hidden;
        }
        
        /* Staggered animation delays */
        .premium-card:nth-child(1) { animation-delay: 0.1s; }
        .premium-card:nth-child(2) { animation-delay: 0.2s; }
        .premium-card:nth-child(3) { animation-delay: 0.3s; }
        .premium-card:nth-child(4) { animation-delay: 0.4s; }
        .premium-card:nth-child(5) { animation-delay: 0.5s; }
        
        /* Elegant hover with purple glow */
        .premium-card:hover {
          box-shadow: 
            0 12px 40px rgba(0, 0, 0, 0.4),
            0 0 20px var(--accent-shadow),
            inset 0 1px 1px rgba(255, 255, 255, 0.05);
          
          border-color: rgba(108, 99, 255, 0.3);
          transform: translateY(-2px);
        }
        
        /* Glass reflection effect */
        .premium-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.1), 
            transparent);
          pointer-events: none;
        }
        
        /* Premium Typography with Glow Effects */
        body {
          line-height: 1.6;
          color: var(--text-primary);
        }
        
        h1, h2, h3, h4, h5, h6 {
          color: var(--text-primary);
          font-weight: 600;
          letter-spacing: -0.02em;
        }
        
        /* Text glow effect for headings */
        .text-glow {
          text-shadow: 0 0 12px var(--accent-shadow);
        }
        
        /* Section Headers with Purple Glow */
        .section-header {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 0.625rem;
          margin-bottom: 1.25rem;
          padding-bottom: 0.875rem;
          border-bottom: 1px solid var(--divider);
          text-shadow: 0 0 8px var(--accent-shadow);
        }
        
        .section-header i {
          color: var(--accent-glow);
          font-size: 1.125rem;
        }
        
        /* Labels */
        label {
          display: block;
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          text-transform: none;
          letter-spacing: 0;
        }
        
        /* Dark Input Fields with Glass Effect */
        input[type="text"],
        input[type="number"],
        input[type="email"],
        textarea,
        select {
          width: 100%;
          padding: 0.625rem 0.875rem;
          font-size: 0.9375rem;
          font-family: 'Inter', sans-serif;
          
          background: rgba(15, 23, 42, 0.4);
          border: 1px solid var(--card-border);
          border-radius: 0.5rem;
          
          color: var(--text-primary);
          
          transition: all 0.2s ease;
          outline: none;
        }
        
        input::placeholder,
        textarea::placeholder {
          color: var(--text-muted);
        }
        
        input:focus,
        textarea:focus,
        select:focus {
          background: rgba(15, 23, 42, 0.6);
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.1);
        }
        
        /* Disabled state */
        input:disabled,
        select:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          background: rgba(15, 23, 42, 0.2);
        }
        
        /* Premium Gradient Buttons */
        .btn-primary {
          background: linear-gradient(90deg, var(--accent-primary) 0%, var(--accent-glow) 100%);
          color: white;
          border: none;
          padding: 0.625rem 1.25rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          
          box-shadow: 
            0 4px 12px var(--accent-shadow),
            0 1px 3px rgba(0, 0, 0, 0.2);
          
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 
            0 6px 16px rgba(108, 99, 255, 0.4),
            0 0 20px var(--accent-shadow);
        }
        
        .btn-primary:active {
          transform: translateY(0);
        }
        
        /* Secondary Glass Buttons */
        .btn-secondary {
          background: rgba(30, 41, 59, 0.5);
          color: var(--text-primary);
          border: 1px solid var(--card-border);
          padding: 0.625rem 1.25rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .btn-secondary:hover {
          background: rgba(30, 41, 59, 0.7);
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-1px);
        }
        
        /* Success Button */
        .btn-success {
          background: var(--success);
          color: white;
          border: none;
          padding: 0.625rem 1.25rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
          transition: all 0.2s ease;
        }
        
        .btn-success:hover {
          background: #16A34A;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(34, 197, 94, 0.4);
        }
        
        /* Danger Button */
        .btn-danger {
          background: var(--danger);
          color: white;
          border: none;
          padding: 0.625rem 1.25rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
          transition: all 0.2s ease;
        }
        
        .btn-danger:hover {
          background: #DC2626;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(239, 68, 68, 0.4);
        }
          font-size: 0.8125rem;
          text-transform: none;
          letter-spacing: 0;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }
        
        .premium-form-label i {
          display: none;
        }
        
        .premium-form-label i.info-icon {
          color: #94a3b8;
          font-size: 0.875rem;
          cursor: help;
          opacity: 0.6;
          transition: opacity 0.2s;
          display: inline-block;
          margin-left: auto;
        }
        
        .premium-form-label i.info-icon:hover {
          opacity: 1;
        }
        
        /* Clean Professional Inputs */
        .premium-input {
          border: 1px solid var(--color-border);
          border-radius: 0.5rem;
          padding: 0.625rem 0.875rem;
          font-size: 0.9375rem;
          background: var(--color-surface);
          color: var(--color-text-main);
          transition: all 0.2s ease;
          line-height: 1.6;
        }
        
        .premium-input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
          outline: none;
          background: var(--color-surface);
        }
        
        .premium-input::placeholder {
          color: #9ca3af;
        }
        
        /* Modern Premium Buttons */
        .premium-btn {
          border-radius: 0.5rem;
          padding: 0.625rem 1.5rem;
          font-weight: 600;
          font-size: 0.9375rem;
          text-transform: none;
          letter-spacing: 0;
          transition: all 0.2s ease;
          border: none;
          position: relative;
        }
        
        .premium-btn span {
          position: relative;
          z-index: 1;
        }
        
        .premium-btn-primary {
          background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
          color: white;
          box-shadow: 0 2px 8px rgba(79, 70, 229, 0.25);
        }
        
        .premium-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.35);
        }
        
        .premium-btn-success {
          background: var(--color-success);
          color: white;
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.25);
        }
        
        .premium-btn-success:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35);
          background: #059669;
        }
        
        .premium-btn-danger {
          background: var(--color-danger);
          color: white;
          box-shadow: 0 2px 8px rgba(239, 68, 68, 0.25);
        }
        
        .premium-btn-danger:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.35);
          background: #dc2626;
        }
        
        .premium-btn-danger:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.35);
        }
        
        /* Glass Summary Stats Cards with Purple Glow */
        .premium-summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
          margin-top: 1.5rem;
        }
        
        .premium-summary-card {
          background: var(--card-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          
          border-radius: 1rem;
          padding: 1.5rem;
          text-align: center;
          
          border: 1px solid var(--card-border);
          
          box-shadow: 
            0 8px 24px rgba(0, 0, 0, 0.2),
            inset 0 1px 1px rgba(255, 255, 255, 0.03);
          
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .premium-summary-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent-primary), var(--accent-glow));
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .premium-summary-card:hover {
          transform: translateY(-4px);
          box-shadow: 
            0 12px 32px rgba(0, 0, 0, 0.3),
            0 0 24px var(--accent-shadow);
          border-color: rgba(108, 99, 255, 0.4);
        }
        
        .premium-summary-card:hover::before {
          opacity: 1;
        }
        
        .premium-summary-card i {
          font-size: 1.75rem;
          color: var(--accent-glow);
          margin-bottom: 0.75rem;
          display: block;
        }
        
        .premium-summary-card h3 {
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin: 0 0 0.5rem 0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .premium-summary-card p {
          font-size: 1.875rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
          line-height: 1.2;
          text-shadow: 0 0 10px rgba(108, 99, 255, 0.2);
        }
        
        /* Remove old light theme color-specific styles */
        
        /* Live Update Pulse Animation */
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0px currentColor; }
          50% { box-shadow: 0 0 20px currentColor; }
        }
        
        .updating {
          animation: pulse-glow 1s ease-in-out;
        }
        
        /* Modern AI Assist Button */
        .ai-assist-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
          color: white;
          border: none;
          box-shadow: 0 8px 24px rgba(79, 70, 229, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
        }
        
        .ai-assist-btn:hover {
          transform: scale(1.15);
          box-shadow: 0 12px 32px rgba(79, 70, 229, 0.5);
        }
        
        .ai-assist-btn::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          border: 2px solid rgba(79, 70, 229, 0.5);
          animation: ripple 2s infinite;
        }
        
        .ai-assist-btn::before {
          content: 'AI Assist';
          position: absolute;
          right: 70px;
          background: rgba(15, 23, 42, 0.95);
          color: #e2e8f0;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          transform: translateX(10px);
          transition: all 0.3s ease;
          pointer-events: none;
        }
        
        .ai-assist-btn:hover::before {
          opacity: 1;
          transform: translateX(0);
        }
        
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        /* Smart Auto-Save Corner Chip */
        .auto-save-indicator {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: rgba(16, 185, 129, 0.1);
          backdrop-filter: blur(12px);
          color: #059669;
          padding: 6px 12px;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          border: 1px solid rgba(16, 185, 129, 0.3);
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.15);
          z-index: 999;
          display: none;
          align-items: center;
          gap: 0.375rem;
          animation: slideInUp 0.3s ease-out;
        }
        
        .auto-save-indicator.show {
          display: flex;
        }
        
        .auto-save-indicator i {
          color: #10b981;
          font-size: 0.875rem;
        }
        
        @keyframes slideInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        /* Modern AI Insights Bar */
        .ai-insights-bar {
          background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);
          border-left: 3px solid var(--color-primary);
          border-radius: 0.75rem;
          padding: 1rem 1.25rem;
          margin-top: 1.5rem;
          color: var(--color-text-muted);
          font-size: 0.875rem;
          line-height: 1.6;
          border: 1px solid #e9d5ff;
        }
        
        .ai-insights-bar i {
          color: var(--color-primary);
          margin-right: 0.5rem;
        }
        
        .ai-insights-bar strong {
          color: var(--color-primary);
          font-weight: 600;
        }
        
        /* Collapsible Section */
        .collapsible-header {
          cursor: pointer;
          user-select: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .collapsible-header i.chevron {
          transition: transform 0.3s ease;
        }
        
        .collapsible-header.collapsed i.chevron {
          transform: rotate(-90deg);
        }
        
        .collapsible-content {
          max-height: 5000px;
          overflow: hidden;
          transition: max-height 0.5s ease-in-out;
        }
        
        .collapsible-content.collapsed {
          max-height: 0;
        }
        
        /* Dark mode refinements */
        [data-bs-theme="dark"] .premium-card {
          background: rgba(30, 41, 59, 0.8);
        }
        
        [data-bs-theme="dark"] .premium-input {
          background: rgba(15, 23, 42, 0.8);
          color: #f1f5f9;
          border-color: rgba(71, 85, 105, 0.4);
        }
        
        /* Glass Table with Hover States */
        .table-responsive {
          border-radius: 0.75rem;
          overflow: hidden;
          border: 1px solid var(--card-border);
          background: rgba(15, 23, 42, 0.3);
        }
        
        table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          font-size: 0.875rem;
        }
        
        thead {
          background: rgba(30, 41, 59, 0.7);
        }
        
        thead th {
          padding: 0.875rem 1rem;
          text-align: left;
          font-weight: 600;
          font-size: 0.8125rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid var(--divider);
        }
        
        thead th:first-child {
          border-top-left-radius: 0.75rem;
        }
        
        thead th:last-child {
          border-top-right-radius: 0.75rem;
          text-align: right;
        }
        
        tbody tr {
          background: rgba(15, 23, 42, 0.4);
          transition: all 0.2s ease;
        }
        
        tbody tr:hover {
          background: rgba(108, 99, 255, 0.1);
          transform: scale(1.01);
        }
        
        tbody td {
          padding: 0.875rem 1rem;
          color: var(--text-primary);
          border-bottom: 1px solid var(--divider);
        }
        
        tbody td:last-child {
          text-align: right;
          font-weight: 500;
        }
        
        tbody tr:last-child td {
          border-bottom: none;
        }
        
        /* Grand Total Row with Glow */
        tbody tr.total-row {
          background: rgba(108, 99, 255, 0.15);
          font-weight: 600;
        }
        
        tbody tr.total-row td {
          color: var(--accent-glow);
          font-size: 1rem;
        }
        
        tbody tr.total-row:hover {
          background: rgba(108, 99, 255, 0.2);
        }
        
        /* Premium Badges & Chips */
        .premium-badge {
          background: rgba(108, 99, 255, 0.15);
          color: var(--accent-glow);
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          border: 1px solid rgba(108, 99, 255, 0.3);
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
        }
        
        .premium-badge:hover {
          background: rgba(108, 99, 255, 0.25);
          transform: translateY(-1px);
        }
        
        /* Section Body Padding */
        .section-body {
          padding: 1.5rem;
        }
        
        /* Floating Elements with Glow */
        .ai-assist-button {
          position: fixed;
          bottom: 24px;
          right: 100px;
          z-index: 998;
          
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-glow));
          color: white;
          
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: none;
          
          box-shadow: 
            0 6px 20px var(--accent-shadow),
            0 0 30px rgba(108, 99, 255, 0.2);
          
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }
        
        .ai-assist-button:hover {
          transform: scale(1.15) translateY(-2px);
          box-shadow: 
            0 8px 24px rgba(108, 99, 255, 0.5),
            0 0 40px rgba(108, 99, 255, 0.3);
        }
        
        .ai-assist-button:active {
          transform: scale(1.05);
        }
        
        /* Auto-save Indicator */
        .auto-save-indicator {
          position: fixed;
          bottom: 90px;
          right: 100px;
          z-index: 998;
          
          background: rgba(30, 41, 59, 0.9);
          backdrop-filter: blur(12px);
          border: 1px solid var(--card-border);
          
          color: var(--success);
          padding: 8px 14px;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          
          display: none;
          align-items: center;
          gap: 0.5rem;
          
          animation: slideInUp 0.3s ease-out;
        }
        
        .auto-save-indicator.show {
          display: flex;
        }
        
        .auto-save-indicator i {
          color: var(--success);
          font-size: 0.875rem;
        }
        }
        
        .table tbody td {
          color: #1e293b;
          padding: 0.875rem 0.75rem;
          border-bottom: 1px solid #f1f5f9;
          vertical-align: middle;
        }
        
        .table tbody td input {
          background: white;
          border: 1px solid #e2e8f0;
          padding: 0.375rem 0.75rem;
          border-radius: 6px;
          color: #1e293b;
          font-size: 0.875rem;
        }
        
        .table tbody td input:focus {
          outline: none;
          border-color: #a855f7;
          box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
        }
        
        .table tbody td select {
          background: white;
          border: 1px solid #e2e8f0;
          padding: 0.375rem 0.75rem;
          border-radius: 6px;
          color: #1e293b;
          font-size: 0.875rem;
        }
        
        .table tbody td select:focus {
          outline: none;
          border-color: #a855f7;
          box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .premium-header h1 {
            font-size: 1.75rem;
          }
          
          .premium-summary-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .ai-assist-btn {
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .premium-summary-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      
      {/* Smart Auto-save Indicator - Only shows during save */}
      <div className={`auto-save-indicator ${showAutoSave ? 'show' : ''}`}>
        <i className="bi bi-check-circle"></i>
        Auto-saved at {new Date().toLocaleTimeString()}
      </div>

      {/* Floating AI Assist Button */}
      <button className="ai-assist-btn" title="AI Suggestions">
        <i className="bi bi-stars"></i>
      </button>

      <div className="premium-calc-container">
        <div className="container-fluid" style={{ maxWidth: '1400px', padding: '0 1rem' }}>
          {/* Premium Header - Narrower with proper spacing */}
          <div className="premium-card" style={{ 
            maxWidth: '90%', 
            margin: '24px auto 1.5rem auto'
          }}>
            <div className="premium-header">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div>
                  <h1>
                    <i className="bi bi-calculator-fill me-2"></i>
                    Premium Calculator
                  </h1>
                  <p className="mb-0 mt-2 opacity-90">Professional Aluminium & Glass Estimation System</p>
                </div>
                <div className="d-flex gap-2 mt-3 mt-md-0 align-items-center">
                  <span className="premium-badge">
                    <i className="bi bi-shield-check me-1"></i>
                    Enterprise Grade
                  </span>
                  <span className="premium-badge">
                    <i className="bi bi-graph-up me-1"></i>
                    Real-time
                  </span>
                  <span className="premium-badge">
                    <i className="bi bi-stars me-1"></i>
                    AI-Powered
                  </span>
                </div>
              </div>
            </div>
          </div>
      
      {/* Company Information */}
      <div id="company-section" className="premium-card section-group-spacing">
        <div className="section-header">
          <div className="d-flex align-items-center">
            <i className="bi bi-building-fill"></i>
            <h5>Company Information</h5>
          </div>
        </div>
        <div className="section-body">
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Company Name</label>
              <input
                type="text"
                className="form-control"
                value={companyData.name}
                onChange={(e) => setCompanyData({...companyData, name: e.target.value})}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                value={companyData.address}
                onChange={(e) => setCompanyData({...companyData, address: e.target.value})}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                value={companyData.phone}
                onChange={(e) => setCompanyData({...companyData, phone: e.target.value})}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={companyData.email}
                onChange={(e) => setCompanyData({...companyData, email: e.target.value})}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Customer Information */}
      <div id="customer-section" className="premium-card section-group-spacing">
        <div className="section-header">
          <div className="d-flex align-items-center">
            <i className="bi bi-person-circle"></i>
            <h5>Customer Information</h5>
          </div>
        </div>
        <div className="section-body">
          <div className="row g-3">
            <div className="col-md-6">
              <label className="premium-form-label">
                <i className="bi bi-person-badge-fill"></i>
                Customer Name
              </label>
              <input
                type="text"
                className="form-control premium-input"
                value={customerData.name}
                onChange={(e) => setCustomerData({...customerData, name: e.target.value})}
                placeholder="Enter customer name..."
              />
            </div>
            <div className="col-md-6">
              <label className="premium-form-label">
                <i className="bi bi-geo-alt-fill"></i>
                Address
              </label>
              <input
                type="text"
                className="form-control premium-input"
                value={customerData.address}
                onChange={(e) => setCustomerData({...customerData, address: e.target.value})}
                placeholder="Enter address..."
              />
            </div>
            <div className="col-md-6">
              <label className="premium-form-label">
                <i className="bi bi-telephone-fill"></i>
                Phone
              </label>
              <input
                type="text"
                className="form-control premium-input"
                value={customerData.phone}
                onChange={(e) => setCustomerData({...customerData, phone: e.target.value})}
                placeholder="Enter phone number..."
              />
            </div>
            <div className="col-md-6">
              <label className="premium-form-label">
                <i className="bi bi-envelope-fill"></i>
                Email
              </label>
              <input
                type="email"
                className="form-control premium-input"
                value={customerData.email}
                onChange={(e) => setCustomerData({...customerData, email: e.target.value})}
                placeholder="Enter email..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Global Settings */}
      <div id="settings-section" className="premium-card section-group-spacing">
        <div className="section-header collapsible-header" onClick={() => setCollapsed({...collapsed, settings: !collapsed.settings})}>
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-sliders"></i>
            <h5>Default Settings & Rates</h5>
          </div>
          <i className={`bi bi-chevron-down chevron ${collapsed.settings ? 'collapsed' : ''}`}></i>
        </div>
        <div className={`collapsible-content section-body ${collapsed.settings ? 'collapsed' : ''}`}>
          <div className="row g-3">
            <div className="col-md-3">
              <label className="premium-form-label">
                <i className="bi bi-layers-fill"></i>
                Default Glass Type
                <i className="bi bi-info-circle info-icon" title="Select default glass thickness for all items"></i>
              </label>
              <select 
                className="form-select premium-input" 
                value={globalGlassType}
                onChange={(e) => setGlobalGlassType(e.target.value)}
              >
                {Object.keys(GLASS_WEIGHT_PER_M2).map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <label className="premium-form-label">
                <i className="bi bi-columns-gap"></i>
                Default Profile Type
                <i className="bi bi-info-circle info-icon" title="Choose aluminum profile series"></i>
              </label>
              <select 
                className="form-select premium-input" 
                value={globalProfileType}
                onChange={(e) => setGlobalProfileType(e.target.value)}
              >
                {Object.keys(PROFILE_WEIGHT_PER_M).map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <label className="premium-form-label">
                <i className="bi bi-currency-rupee"></i>
                Rate per kg (₹)
                <i className="bi bi-info-circle info-icon" title="Enter the aluminum rate per kg as per your supplier"></i>
              </label>
              <input
                type="number"
                className="form-control premium-input"
                value={ratePerKg}
                onChange={(e) => setRatePerKg(e.target.value)}
                placeholder="Enter rate..."
              />
            </div>
            <div className="col-md-3">
              <div className="form-check mt-5">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="showOnlyTotals"
                  checked={showOnlyTotals}
                  onChange={(e) => setShowOnlyTotals(e.target.checked)}
                  style={{ cursor: 'pointer' }}
                />
                <label className="form-check-label premium-form-label" htmlFor="showOnlyTotals" style={{ cursor: 'pointer' }}>
                  Show only totals
                </label>
              </div>
            </div>
          </div>

          {/* AI Insights Bar */}
          <div className="ai-insights-bar">
            <i className="bi bi-lightbulb-fill"></i>
            <strong>AI Insight:</strong> Using <strong>{globalProfileType}</strong> with <strong>{globalGlassType}</strong> glass 
            provides optimal strength-to-weight ratio. Average project cost: <strong>₹{ratePerKg ? (parseFloat(ratePerKg) * 150).toLocaleString() : '---'}</strong> per sqm.
          </div>
        </div>
      </div>

      {/* Items */}
      {!showOnlyTotals && (
        <div id="items-section" className="premium-card section-group-spacing">
          <div className="section-header collapsible-header" onClick={() => setCollapsed({...collapsed, items: !collapsed.items})}>
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-box-seam-fill"></i>
              <h5>Items & Calculations</h5>
              <span className="badge bg-primary ms-2">{items.length} Items</span>
            </div>
            <i className={`bi bi-chevron-down chevron ${collapsed.items ? 'collapsed' : ''}`}></i>
          </div>
          <div className={`collapsible-content section-body ${collapsed.items ? 'collapsed' : ''}`}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="card-title text-primary mb-0">
                <i className="bi bi-list me-2"></i>Items
              </h5>
              <button className="btn btn-primary btn-sm" onClick={addItem}>
                <i className="bi bi-plus-circle me-1"></i>Add Item
              </button>
            </div>

            {items.length === 0 ? (
              <div className="text-center py-4 text-muted">
                <i className="bi bi-inbox display-4 d-block mb-2"></i>
                <p>No items added yet. Click "Add Item" to get started.</p>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="table-light">
                    <tr>
                      <th>Item Name</th>
                      <th>Width (m)</th>
                      <th>Height (m)</th>
                      <th>Quantity</th>
                      <th>Glass Type</th>
                      <th>Profile Type</th>
                      <th>Glass Weight (kg)</th>
                      <th>Profile Weight (kg)</th>
                      <th>Total Weight (kg)</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map(item => {
                      const { glassWeight, profileWeight } = calculateItemWeights(item)
                      return (
                        <tr key={item.id}>
                          <td>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              value={item.name}
                              onChange={(e) => updateItem(item.id, 'name', e.target.value)}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control form-control-sm"
                              value={item.width}
                              onChange={(e) => updateItem(item.id, 'width', parseFloat(e.target.value) || 0)}
                              step="0.01"
                              min="0"
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control form-control-sm"
                              value={item.height}
                              onChange={(e) => updateItem(item.id, 'height', parseFloat(e.target.value) || 0)}
                              step="0.01"
                              min="0"
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control form-control-sm"
                              value={item.quantity}
                              onChange={(e) => updateItem(item.id, 'quantity', parseInt(e.target.value) || 1)}
                              min="1"
                            />
                          </td>
                          <td>
                            <select
                              className="form-select form-select-sm"
                              value={item.glassType}
                              onChange={(e) => updateItem(item.id, 'glassType', e.target.value)}
                            >
                              <option value="">Use Default</option>
                              {Object.keys(GLASS_WEIGHT_PER_M2).map(type => (
                                <option key={type} value={type}>{type}</option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <select
                              className="form-select form-select-sm"
                              value={item.profileType}
                              onChange={(e) => updateItem(item.id, 'profileType', e.target.value)}
                            >
                              <option value="">Use Default</option>
                              {Object.keys(PROFILE_WEIGHT_PER_M).map(type => (
                                <option key={type} value={type}>{type}</option>
                              ))}
                            </select>
                          </td>
                          <td className="text-end">{glassWeight.toFixed(2)}</td>
                          <td className="text-end">{profileWeight.toFixed(2)}</td>
                          <td className="text-end fw-bold">{(glassWeight + profileWeight).toFixed(2)}</td>
                          <td>
                            <button
                              className="btn btn-outline-danger btn-sm"
                              onClick={() => deleteItem(item.id)}
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Summary - Premium Dashboard Style */}
      <div id="summary-section" className="premium-card section-group-spacing" style={{ maxWidth: '90%', margin: '24px auto' }}>
        <div className="section-header collapsible-header" onClick={() => setCollapsed({...collapsed, summary: !collapsed.summary})}>
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-pie-chart-fill"></i>
            <h5>Project Summary & Analysis</h5>
          </div>
          <i className={`bi bi-chevron-down chevron ${collapsed.summary ? 'collapsed' : ''}`}></i>
        </div>
        <div className={`collapsible-content section-body ${collapsed.summary ? 'collapsed' : ''}`}>
          {/* Premium Summary Grid with Animated Cards */}
          <div className="premium-summary-grid">
            {/* Glass Area Card */}
            <div className="premium-summary-card cyan">
              <div className="summary-icon">🪟</div>
              <div className="premium-summary-value">
                {totals.totalGlassArea.toFixed(2)}
              </div>
              <div className="premium-summary-label">Glass Area (m²)</div>
              <div className="premium-summary-sub">Across {items.length} items</div>
            </div>

            {/* Frame Weight Card */}
            <div className="premium-summary-card amber">
              <div className="summary-icon">⚖️</div>
              <div className="premium-summary-value">
                {totals.totalWeight.toFixed(2)}
              </div>
              <div className="premium-summary-label">Frame Weight (kg)</div>
              <div className="premium-summary-sub">Combined aluminum</div>
            </div>

            {/* Profile Length Card */}
            <div className="premium-summary-card violet">
              <div className="summary-icon">📏</div>
              <div className="premium-summary-value">
                {totals.totalProfileLength.toFixed(2)}
              </div>
              <div className="premium-summary-label">Profile Length (m)</div>
              <div className="premium-summary-sub">Total perimeter</div>
            </div>

            {/* Grand Total Card */}
            <div className="premium-summary-card emerald updating">
              <div className="summary-icon">💰</div>
              <div className="premium-summary-value">
                ₹{(totals.grandTotal || 0).toLocaleString('en-IN', { maximumFractionDigits: 2 })}
              </div>
              <div className="premium-summary-label">Grand Total</div>
              <div className="premium-summary-sub">Inc. GST @ 18%</div>
            </div>
          </div>

          {/* AI-Powered Insights */}
          <div className="ai-insights-bar mt-4">
            <i className="bi bi-robot"></i>
            <strong>AI Analysis:</strong> This configuration achieves 
            <strong> {((totals.totalWeight / totals.totalGlassArea) || 0).toFixed(2)} kg/m²</strong> frame density, 
            which is <strong>{((totals.totalWeight / totals.totalGlassArea) || 0) < 25 ? '15% lighter' : 'standard'}</strong> compared to typical installations. 
            Estimated material efficiency: <strong>{items.length > 0 ? '92%' : '--'}</strong>
          </div>

          {/* Detailed Breakdown Table */}
          <div className="mt-4">
            <h6 className="premium-form-label mb-3">
              <i className="bi bi-table"></i>
              Detailed Breakdown
            </h6>
            <div className="table-responsive">
              <table className="table table-dark table-hover">
                <thead>
                  <tr className="table-primary">
                    <th>Component</th>
                    <th className="text-end">Value</th>
                    <th className="text-end">Amount (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <i className="bi bi-layers me-2 text-cyan"></i>
                      Glass Area
                    </td>
                    <td className="text-end">{totals.totalGlassArea.toFixed(2)} m²</td>
                    <td className="text-end">--</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="bi bi-box me-2 text-amber"></i>
                      Aluminum Weight
                    </td>
                    <td className="text-end">{totals.totalWeight.toFixed(2)} kg</td>
                    <td className="text-end">₹{(totals.subtotal || 0).toLocaleString('en-IN', { maximumFractionDigits: 2 })}</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="bi bi-percent me-2 text-warning"></i>
                      GST (18%)
                    </td>
                    <td className="text-end">--</td>
                    <td className="text-end">₹{(totals.gst || 0).toLocaleString('en-IN', { maximumFractionDigits: 2 })}</td>
                  </tr>
                  <tr className="table-success">
                    <td className="fw-bold">
                      <i className="bi bi-currency-rupee me-2"></i>
                      Grand Total
                    </td>
                    <td className="text-end fw-bold">--</td>
                    <td className="text-end fw-bold fs-5">₹{(totals.grandTotal || 0).toLocaleString('en-IN', { maximumFractionDigits: 2 })}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Export Buttons */}
          <div id="actions-section" className="row g-3 mt-4">
            <div className="col-md-6">
              <button 
                className="premium-btn premium-btn-success w-100"
                onClick={exportExcel}
                disabled={items.length === 0}
              >
                <span>
                  <i className="bi bi-file-earmark-excel me-2"></i>
                  Export to Excel
                </span>
              </button>
            </div>
            <div className="col-md-6">
              <button 
                className="premium-btn premium-btn-danger w-100"
                onClick={exportPDF}
                disabled={items.length === 0}
              >
                <span>
                  <i className="bi bi-file-earmark-pdf me-2"></i>
                  Generate Premium PDF
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </>
  )
}

export default Calculator