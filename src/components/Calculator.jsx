import { useMemo, useState, useEffect } from 'react'
import { saveAs } from 'file-saver'
import { dejavuFontBase64 } from '../DejaVuSans-base64.js'
import { pdfService } from '../lib/pdfService'

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
        /* ===== ENTERPRISE-GRADE PREMIUM STYLING ===== */
        
        /* Enhanced Gradient Background with Depth */
        .premium-calc-container {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #1e293b 100%);
          min-height: 100vh;
          padding: 2rem 0;
          position: relative;
          overflow: hidden;
        }
        
        /* Animated gradient texture overlay */
        .premium-calc-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%);
          pointer-events: none;
          animation: breathe 8s ease-in-out infinite;
        }
        
        @keyframes breathe {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        
        /* Glassmorphic Premium Cards */
        .premium-card {
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .premium-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s;
        }
        
        .premium-card:hover {
          transform: translateY(-5px);
          box-shadow: 
            0 12px 40px rgba(0, 0, 0, 0.3),
            0 0 20px rgba(139, 92, 246, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          border-color: rgba(139, 92, 246, 0.4);
        }
        
        .premium-card:hover::before {
          left: 100%;
        }
        
        /* Premium Header with Glow */
        .premium-header {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          padding: 2.5rem 2rem;
          border-radius: 20px 20px 0 0;
          margin: -1px -1px 0 -1px;
          position: relative;
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.4);
        }
        
        .premium-header::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 10%;
          right: 10%;
          height: 3px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
          border-radius: 2px;
        }
        
        .premium-header h1 {
          font-weight: 800;
          font-size: 2.5rem;
          margin: 0;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
          background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .premium-badge {
          background: rgba(255, 255, 255, 0.15);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        
        .premium-badge:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        
        /* Section Headers with Icons */
        .section-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.5rem 2rem;
          background: rgba(99, 102, 241, 0.1);
          border-bottom: 2px solid rgba(139, 92, 246, 0.2);
          margin: -1px -1px 0 -1px;
          border-radius: 20px 20px 0 0;
        }
        
        .section-header h5 {
          margin: 0;
          font-weight: 700;
          font-size: 1.25rem;
          color: #e0e7ff;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .section-header i {
          font-size: 1.5rem;
          color: #a78bfa;
        }
        
        .section-body {
          padding: 2rem;
        }
        
        /* Premium Form Labels */
        .premium-form-label {
          font-weight: 600;
          color: #cbd5e1;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .premium-form-label i.info-icon {
          color: #60a5fa;
          font-size: 1rem;
          cursor: help;
          opacity: 0.7;
          transition: opacity 0.2s;
        }
        
        .premium-form-label i.info-icon:hover {
          opacity: 1;
        }
        
        /* Premium Inputs with Glow Focus */
        .premium-input {
          border: 2px solid rgba(148, 163, 184, 0.3);
          border-radius: 12px;
          padding: 0.875rem 1rem;
          font-size: 1rem;
          background: rgba(15, 23, 42, 0.6);
          color: #f1f5f9;
          transition: all 0.3s ease;
        }
        
        .premium-input:focus {
          border-color: #6366f1;
          box-shadow: 
            0 0 0 3px rgba(99, 102, 241, 0.15),
            0 0 15px rgba(99, 102, 241, 0.4);
          outline: none;
          background: rgba(15, 23, 42, 0.8);
          transform: translateY(-1px);
        }
        
        .premium-input::placeholder {
          color: #64748b;
        }
        
        /* Premium Buttons with Gradient & Glow */
        .premium-btn {
          border-radius: 12px;
          padding: 0.875rem 2rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          border: none;
          position: relative;
          overflow: hidden;
        }
        
        .premium-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .premium-btn:hover::before {
          width: 300px;
          height: 300px;
        }
        
        .premium-btn span {
          position: relative;
          z-index: 1;
        }
        
        .premium-btn-primary {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
        }
        
        .premium-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.6);
        }
        
        .premium-btn-success {
          background: linear-gradient(135deg, #16a34a 0%, #22c55e 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(34, 197, 94, 0.4);
        }
        
        .premium-btn-success:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(34, 197, 94, 0.6);
        }
        
        .premium-btn-danger {
          background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
        }
        
        .premium-btn-danger:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(239, 68, 68, 0.6);
        }
        
        /* Animated Summary Cards */
        .premium-summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }
        
        .premium-summary-card {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          border: 2px solid transparent;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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
          background: currentColor;
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .premium-summary-card:hover {
          transform: translateY(-8px) scale(1.03);
          border-color: currentColor;
        }
        
        .premium-summary-card:hover::before {
          opacity: 1;
          animation: shimmer 1.5s infinite;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .premium-summary-card.cyan {
          color: #06b6d4;
          border-color: rgba(6, 182, 212, 0.2);
        }
        
        .premium-summary-card.amber {
          color: #f59e0b;
          border-color: rgba(245, 158, 11, 0.2);
        }
        
        .premium-summary-card.violet {
          color: #8b5cf6;
          border-color: rgba(139, 92, 246, 0.2);
        }
        
        .premium-summary-card.emerald {
          color: #10b981;
          border-color: rgba(16, 185, 129, 0.2);
        }
        
        .summary-icon {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
          opacity: 0.9;
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .premium-summary-value {
          font-size: 2.25rem;
          font-weight: 800;
          color: currentColor;
          margin: 0.5rem 0;
          font-family: 'Inter', system-ui, sans-serif;
          animation: countUp 0.8s ease-out;
        }
        
        @keyframes countUp {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .premium-summary-label {
          font-size: 0.875rem;
          color: #94a3b8;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .premium-summary-sub {
          font-size: 0.75rem;
          color: #64748b;
          margin-top: 0.5rem;
          font-style: italic;
        }
        
        /* Live Update Pulse Animation */
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0px currentColor; }
          50% { box-shadow: 0 0 20px currentColor; }
        }
        
        .updating {
          animation: pulse-glow 1s ease-in-out;
        }
        
        /* Floating AI Assist Button */
        .ai-assist-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          border: none;
          box-shadow: 0 8px 30px rgba(99, 102, 241, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
        }
        
        .ai-assist-btn:hover {
          transform: scale(1.1) rotate(10deg);
          box-shadow: 0 12px 40px rgba(99, 102, 241, 0.7);
        }
        
        .ai-assist-btn::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          border: 2px solid rgba(99, 102, 241, 0.5);
          animation: ripple 2s infinite;
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
        
        /* Auto-save Indicator */
        .auto-save-indicator {
          position: fixed;
          top: 2rem;
          right: 2rem;
          background: rgba(16, 185, 129, 0.9);
          backdrop-filter: blur(10px);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
          z-index: 999;
          animation: slideInRight 0.5s ease-out;
        }
        
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        /* AI Insights Bar */
        .ai-insights-bar {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%);
          border-left: 4px solid #8b5cf6;
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
          margin-top: 1.5rem;
          color: #cbd5e1;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        
        .ai-insights-bar i {
          color: #a78bfa;
          margin-right: 0.5rem;
        }
        
        .ai-insights-bar strong {
          color: #e0e7ff;
          font-weight: 700;
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
      
      {/* Auto-save Indicator */}
      <div className="auto-save-indicator">
        <i className="bi bi-cloud-check-fill me-2"></i>
        Auto-saved at {new Date().toLocaleTimeString()}
      </div>

      {/* Floating AI Assist Button */}
      <button className="ai-assist-btn" title="AI Suggestions">
        <i className="bi bi-stars"></i>
      </button>

      <div className="premium-calc-container">
        <div className="container-fluid" style={{ maxWidth: '1400px' }}>
          {/* Premium Header */}
          <div className="premium-card mb-4">
            <div className="premium-header">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div>
                  <h1>
                    <i className="bi bi-calculator-fill me-3"></i>
                    Premium Calculator
                  </h1>
                  <p className="mb-0 mt-2 opacity-90">Professional Aluminium & Glass Estimation System</p>
                </div>
                <div className="d-flex gap-2 mt-3 mt-md-0">
                  <span className="premium-badge">
                    <i className="bi bi-shield-check me-1"></i>
                    Enterprise Grade
                  </span>
                  <span className="premium-badge">
                    <i className="bi bi-graph-up me-1"></i>
                    Real-time Calculation
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
      <div className="premium-card mb-4">
        <div className="section-header">
          <i className="bi bi-building-fill"></i>
          <h5>Company Information</h5>
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
      <div className="premium-card mb-4">
        <div className="section-header">
          <i className="bi bi-person-circle"></i>
          <h5>Customer Information</h5>
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
      <div className="premium-card mb-4">
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
        <div className="premium-card mb-4">
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
      <div className="premium-card mb-4">
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
          <div className="row g-3 mt-4">
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