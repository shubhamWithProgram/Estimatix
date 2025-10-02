import { useMemo, useState, useEffect } from 'react'
// Lazy-load heavy libs to reduce initial bundle size
let _jsPDF
async function getJspdf() {
  if (!_jsPDF) {
    const mod = await import('jspdf')
    _jsPDF = mod.jsPDF
  }
  return _jsPDF
}

let _XLSX
async function getXlsx() {
  if (!_XLSX) {
    const mod = await import('xlsx')
    _XLSX = mod
  }
  return _XLSX
}
import { saveAs } from 'file-saver'

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

// Stable component to avoid remounts that cause input focus loss
const Card = ({ children }) => (
  <div 
    className="card border-0 shadow-sm rounded-4 mb-3"
    style={{ transition: 'all 0.3s ease' }}
    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'}
    onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'}
  >
    {children}
  </div>
)

export default function App() {
  // Keep inputs as strings; parse only in calculations to avoid remounts / focus loss.
  const [widthMm, setWidthMm] = useState('0')
  const [heightMm, setHeightMm] = useState('0')

  const [glassType, setGlassType] = useState('Clear') // Clear, Toughened, Reflective, Double Glazed
  const [thicknessMm, setThicknessMm] = useState(5)   // slider can stay numeric

  const [profile, setProfile] = useState('Series 60')
  const [finish, setFinish] = useState('Powder Coated') // Powder Coated, Anodized

  const [costPerKg, setCostPerKg] = useState('0')
  const [accessoriesKg, setAccessoriesKg] = useState('0')

  const [projectName, setProjectName] = useState('')
  const [shareUrl, setShareUrl] = useState('')
  const [profitMargin, setProfitMargin] = useState('10')
  const [discount, setDiscount] = useState('0')
  const [recommendation, setRecommendation] = useState('')

  const [customerName, setCustomerName] = useState('')
  const [customerAddress, setCustomerAddress] = useState('')
  const [gstPercent, setGstPercent] = useState('18')
  const [deliveryCharge, setDeliveryCharge] = useState('0')
  const [laborCharge, setLaborCharge] = useState('0')
  const [terms, setTerms] = useState("1. Prices are valid for 15 days.\n2. Delivery within 7 working days.\n3. Payment: 50% advance, balance on delivery.")

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ||
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  )

  // 🌙 Apply theme (doesn't affect inputs)
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  // 👉 Guidance text
  useEffect(() => {
    const w = Number(widthMm) / 1000 || 0
    const h = Number(heightMm) / 1000 || 0
    let rec = ''
    if (h > 2.1 || w > 1.5) rec = '⚠️ Consider Series 75 or Sliding Heavy for better strength.'
    else if (h > 1.8) rec = '👉 Series 60 is usually sufficient for medium frames.'
    else rec = '✅ Series 45 is fine for small windows.'
    if (thicknessMm < 5 && (w > 1.2 || h > 1.8)) rec += ' ⚠️ Glass may be too thin for this size.'
    setRecommendation(rec)
  }, [widthMm, heightMm, thicknessMm])

  const results = useMemo(() => {
    const widthM = (Number(widthMm) || 0) / 1000
    const heightM = (Number(heightMm) || 0) / 1000
    const areaM2 = widthM * heightM

    // choose density
    let baseDensity
    if (glassType === 'Double Glazed') {
      baseDensity = 22
    } else if (['4mm','5mm','6mm','24mm DG'].includes(String(thicknessMm)+'mm')) {
      baseDensity = GLASS_WEIGHT_PER_M2[String(thicknessMm)+'mm'] || thicknessMm * 2.5
    } else {
      baseDensity = thicknessMm * 2.5
    }
    const typeFactor = glassType === 'Toughened' ? 1.1 : glassType === 'Reflective' ? 1.05 : 1
    const glassWeight = areaM2 * baseDensity * typeFactor
    const perimeterM = 2 * (widthM + heightM)
    const aluminiumWeight = perimeterM * PROFILE_WEIGHT_PER_M[profile]
    const accessories = Number(accessoriesKg) || 0
    const totalWeight = glassWeight + aluminiumWeight + accessories
    const finishFactor = finish === 'Anodized' ? 1.08 : 1.05
    const estimatedCost = totalWeight * (Number(costPerKg) || 0) * finishFactor
    const finalCost = estimatedCost * (1 + (Number(profitMargin) || 0) / 100) * (1 - (Number(discount) || 0) / 100)

    return { areaM2, glassWeight, perimeterM, aluminiumWeight, accessories, totalWeight, estimatedCost, finalCost, baseDensity: baseDensity*typeFactor }
  }, [widthMm, heightMm, glassType, thicknessMm, profile, costPerKg, accessoriesKg, finish, profitMargin, discount])

  const quotation = useMemo(() => {
    const subtotal = results.finalCost + (Number(deliveryCharge) || 0) + (Number(laborCharge) || 0)
    const gstAmount = subtotal * ((Number(gstPercent) || 0) / 100)
    const grandTotal = subtotal + gstAmount
    return { subtotal, gstAmount, grandTotal }
  }, [results.finalCost, deliveryCharge, laborCharge, gstPercent])

  const rows = useMemo(() => [
    { label: 'Profile', value: `${profile} (${PROFILE_WEIGHT_PER_M[profile]} kg/m)` },
    { label: 'Glass Area', value: `${results.areaM2.toFixed(3)} m²` },
    { label: 'Glass Weight', value: `${results.glassWeight.toFixed(2)} kg` },
    { label: 'Aluminium Weight', value: `${results.aluminiumWeight.toFixed(2)} kg` },
    { label: 'Accessories', value: `${results.accessories.toFixed(2)} kg` },
    { label: 'Total Weight', value: `${results.totalWeight.toFixed(2)} kg` },
    { label: 'Estimated Cost', value: `₹ ${results.estimatedCost.toFixed(2)}` },
    { label: 'Final Quotation', value: `₹ ${results.finalCost.toFixed(2)}` },
  ], [results, profile])

  // Language support (English/Hindi)
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en')
  useEffect(() => { localStorage.setItem('lang', lang) }, [lang])
  const t = (en, hi) => lang === 'hi' ? hi : en

  function toggleTheme() {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  async function exportExcel() {
    const XLSX = await getXlsx()
    const data = [
      ['Field', 'Value'],
      ['Width (mm)', widthMm],
      ['Height (mm)', heightMm],
      ['Glass Type', glassType],
      ['Profile', profile],
      ['Cost per Kg (₹)', costPerKg],
      ...rows.map(r => [r.label, r.value]),
    ]
    const ws = XLSX.utils.aoa_to_sheet(data)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Calculation')
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
    saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'aluminium-calculation.xlsx')
  }

  function saveProject() {
    const item = {
      ts: Date.now(),
      name: projectName || `Estimate ${new Date().toLocaleString()}`,
      state: { widthMm, heightMm, glassType, thicknessMm, profile, finish, costPerKg, accessoriesKg }
    }
    const list = JSON.parse(localStorage.getItem('estimates') || '[]')
    list.unshift(item)
    localStorage.setItem('estimates', JSON.stringify(list.slice(0,20)))
    setRecentEstimates(list.slice(0,20))
    setProjectName('')
  }

  function loadProject(item) {
    setWidthMm(item.state.widthMm)
    setHeightMm(item.state.heightMm)
    setGlassType(item.state.glassType)
    setThicknessMm(item.state.thicknessMm)
    setProfile(item.state.profile)
    setFinish(item.state.finish)
    setCostPerKg(item.state.costPerKg)
    setAccessoriesKg(item.state.accessoriesKg)
  }

  function generateShare() {
    const params = new URLSearchParams({
      w: String(widthMm), h: String(heightMm), gt: glassType, t: String(thicknessMm), p: profile, f: finish, c: String(costPerKg), a: String(accessoriesKg)
    }).toString()
    const url = `${location.origin}${location.pathname}?${params}`
    navigator.clipboard?.writeText(url).catch(()=>{})
    setShareUrl(url)
    const modal = new window.bootstrap.Modal(document.getElementById('shareModal'))
    modal.show()
  }

  const exportPDF = async () => {
    const jsPDF = await getJspdf()
    const doc = new jsPDF()

    // Company Branding
    doc.setFontSize(16)
    doc.text("Venkatesh Aluminium", 14, 20)
    doc.setFontSize(10)
    doc.text("Ram Nagar, Dhule - 400001", 14, 28)
    doc.text("Phone: +91 9673705228 | Email: venkateshaluminum@gmail.com", 14, 34)
    doc.line(14, 38, 200, 38)

    // Customer
    doc.setFontSize(12)
    doc.text(`Quotation for: ${customerName}`, 14, 48)
    doc.text(`Address: ${customerAddress}`, 14, 55)
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 62)
    doc.line(14, 66, 200, 66)

    // Summary
    doc.setFontSize(12)
    let y = 76
    doc.text(`Profile: ${profile}`, 14, y); y+=8
    doc.text(`Glass Area: ${results.areaM2.toFixed(3)} m²`, 14, y); y+=8
    doc.text(`Glass Weight: ${results.glassWeight.toFixed(2)} kg`, 14, y); y+=8
    doc.text(`Aluminium Weight: ${results.aluminiumWeight.toFixed(2)} kg`, 14, y); y+=8
    doc.text(`Accessories: ${results.accessories.toFixed(2)} kg`, 14, y); y+=8
    doc.text(`Total Weight: ${results.totalWeight.toFixed(2)} kg`, 14, y); y+=8
    doc.text(`Final Quotation: ₹ ${results.finalCost.toFixed(2)}`, 14, y); y+=8
    doc.text(`Delivery: ₹ ${deliveryCharge}`, 14, y); y+=8
    doc.text(`Labor: ₹ ${laborCharge}`, 14, y); y+=8
    doc.text(`Subtotal: ₹ ${quotation.subtotal.toFixed(2)}`, 14, y); y+=8
    doc.text(`GST (${gstPercent}%): ₹ ${quotation.gstAmount.toFixed(2)}`, 14, y); y+=8

    doc.setFont(undefined, "bold")
    doc.text(`Grand Total: ₹ ${quotation.grandTotal.toFixed(2)}`, 14, y); y+=12
    doc.setFont(undefined, "normal")

    // Terms
    doc.setFontSize(10)
    doc.text("Terms & Conditions:", 14, y)
    doc.text(terms.split("\n"), 14, y + 6)

    doc.save(`${projectName || "Quotation"}.pdf`)
  }

  

  // Track recent estimates and keep in sync after save/load
  const [recentEstimates, setRecentEstimates] = useState(() => {
    try { return JSON.parse(localStorage.getItem('estimates') || '[]') } catch { return [] }
  })
  useEffect(() => {
    const handler = () => {
      try { setRecentEstimates(JSON.parse(localStorage.getItem('estimates') || '[]')) } catch { /* noop */ }
    }
    window.addEventListener('storage', handler)
    return () => window.removeEventListener('storage', handler)
  }, [])

  return (
    <div className="min-vh-100 bg-body">
      <header className="sticky-top bg-body border-bottom" style={{zIndex: 1030}}>
        <div className="container py-3 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <div>
              <h1 className="h5 mb-0">Venkatesh Aluminium and Glass</h1>
              <small className="text-body-secondary">{t('Windows & Doors • Weight & Cost Estimator', 'खिड़की व दरवाजे • वजन व लागत अनुमापक')}</small>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <select className="form-select form-select-sm w-auto" value={lang} onChange={e=>setLang(e.target.value)} aria-label="Language">
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
            </select>
            <button
              onClick={toggleTheme}
              className="btn btn-sm btn-outline-secondary d-inline-flex align-items-center gap-1"
              title="Toggle light/dark"
            >
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>
      </header>

      <main className="container py-4 py-md-5">
        <div className="row g-4 g-lg-5">
          <section className="col-lg-7 d-flex flex-column gap-4">
            <Card>
              <div 
                className="card-header fw-semibold text-white rounded-top-4" 
                style={{ background: 'linear-gradient(135deg, #0d6efd, #20c997)', fontSize: '0.95rem', letterSpacing: '0.5px' }}
              >
                {t('Project Setup','प्रोजेक्ट सेटअप')}
              </div>
              <div className="card-body">
                <div className="row g-2 g-sm-3">
                  {[{ w: 900, h: 1200, label: 'Std. Window' }, { w: 1200, h: 2100, label: 'Door Single' }, { w: 1800, h: 2100, label: 'Door Double' }].map(preset => (
                    <div className="col-6 col-sm-4" key={preset.label}>
                      <button
                        onClick={() => { setWidthMm(String(preset.w)); setHeightMm(String(preset.h)); }}
                        className="btn btn-outline-secondary w-100 text-start"
                      >
                        <div className="fw-semibold small">{preset.label}</div>
                        <div className="text-body-secondary small">{preset.w} × {preset.h} mm</div>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="row g-2 mt-3">
                  <div className="col-8 col-md-6">
                    <input className="form-control" placeholder={t('Project name','प्रोजेक्ट नाम')} value={projectName} onChange={e=>setProjectName(e.target.value)} />
                  </div>
                  <div className="col-4 col-md-6 d-flex gap-2">
                    {/* fixed invalid tag <buttonc> */}
                    <button className="btn btn-primary" onClick={saveProject}>{t('Save','सेव')}</button>
                    <button className="btn btn-outline-primary" onClick={generateShare}>{t('Share','शेयर')}</button>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="card-header bg-body-tertiary"><strong>📏 {t('Dimensions','माप')}</strong></div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">{t('Width','चौड़ाई')}</label>
                    <div className="input-group">
                      <input
                        type="number"
                        className="form-control"
                        value={widthMm}
                        onChange={e => setWidthMm(e.target.value)}
                        placeholder="0"
                        aria-label="Width in millimeters"
                        min={0}
                      />
                      <span className="input-group-text">mm</span>
                    </div>
                    <div className="form-text">{t('Measure visible frame width.','दिखने वाले फ्रेम की चौड़ाई नापें।')}</div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">{t('Height','ऊँचाई')}</label>
                    <div className="input-group">
                      <input
                        type="number"
                        className="form-control"
                        value={heightMm}
                        onChange={e => setHeightMm(e.target.value)}
                        placeholder="0"
                        aria-label="Height in millimeters"
                        min={0}
                      />
                      <span className="input-group-text">mm</span>
                    </div>
                    <div className="form-text">{t('Measure visible frame height.','दिखने वाले फ्रेम की ऊँचाई नापें।')}</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="card-header bg-body-tertiary"><strong>⚙️ {t('Configuration','कॉन्फ़िगरेशन')}</strong></div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">🪟 {t('Glass type','काँच प्रकार')}</label>
                    <select className="form-select" value={glassType} onChange={e => setGlassType(e.target.value)}>
                      {['Clear','Toughened','Reflective','Double Glazed'].map(opt => (<option key={opt} value={opt}>{opt}</option>))}
                    </select>
                    <div className="form-text">{t('Density auto:','घनत्व:')} {results.baseDensity.toFixed(2)} kg/m²</div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">{t('Glass thickness','काँच मोटाई')} ({glassType==='Double Glazed' ? 'fixed 24mm' : `${thicknessMm}mm`})</label>
                    {glassType==='Double Glazed' ? (
                      <input type="text" className="form-control" value="24" disabled />
                    ) : (
                      <input type="range" min={4} max={12} step={1} className="form-range" value={thicknessMm} onChange={e=>setThicknessMm(Number(e.target.value))} />
                    )}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">{t('Profile','प्रोफ़ाइल')}</label>
                    <select className="form-select" value={profile} onChange={e => setProfile(e.target.value)} aria-label="Aluminium profile">
                      {['Series 45','Series 60','Series 75','Sliding Light','Sliding Heavy'].map(opt => (
                        <option key={opt} value={opt}>{opt} = {PROFILE_WEIGHT_PER_M[opt]} kg/m</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">{t('Finish','फिनिश')}</label>
                    <select className="form-select" value={finish} onChange={e=>setFinish(e.target.value)}>
                      {['Powder Coated','Anodized'].map(opt => (<option key={opt} value={opt}>{opt}</option>))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">{t('Accessories (kg)','एक्सेसरीज़ (किग्रा)')}</label>
                    <div className="input-group">
                      <span className="input-group-text">kg</span>
                      <input
                        type="number"
                        className="form-control"
                        value={accessoriesKg}
                        onChange={e => setAccessoriesKg(e.target.value)}
                        placeholder="0"
                        aria-label="Accessories in kilograms"
                        min={0}
                      />
                    </div>
                    <div className="form-text">{t('Manual accessories weight.','एक्सेसरीज़ का मैनुअल वज़न।')}</div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <label className="form-label">{t('Cost per Kg','क़ीमत प्रति किग्रा')}</label>
                    <div className="input-group">
                      <span className="input-group-text">₹</span>
                      <input
                        type="number"
                        className="form-control"
                        value={costPerKg}
                        onChange={e => setCostPerKg(e.target.value)}
                        placeholder="0"
                        aria-label="Cost per kilogram in rupees"
                        min={0}
                      />
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={600}
                      step={10}
                      className="form-range mt-2"
                      value={costPerKg || '0'}
                      onChange={e=>setCostPerKg(e.target.value)}
                    />
                    <div className="form-text">{t('Market average ~ ₹250–₹350/kg. Adjust as needed.','मार्केट औसत ~ ₹250–₹350/किग्रा. आवश्यकतानुसार बदलें।')}</div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">{t('Profit Margin (%)','मुनाफ़ा मार्जिन (%)')}</label>
                    <input
                      type="number"
                      className="form-control"
                      value={profitMargin}
                      onChange={(e) => setProfitMargin(e.target.value)}
                      min={0}
                      max={100}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">{t('Discount (%)','छूट (%)')}</label>
                    <input
                      type="number"
                      className="form-control"
                      value={discount}
                      onChange={(e) => setDiscount(e.target.value)}
                      min={0}
                      max={100}
                    />
                  </div>
                </div>
              </div>
            </Card>

            <Card>
                <div className="card-header bg-body-tertiary">
                  <strong>📄 {t('Quotation Builder','कोटेशन बिल्डर')}</strong>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">{t('Customer Name','ग्राहक नाम')}</label>
                      <input type="text" className="form-control" value={customerName} onChange={e => setCustomerName(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">{t('Customer Address / Site','ग्राहक पता / साइट')}</label>
                      <input type="text" className="form-control" value={customerAddress} onChange={e => setCustomerAddress(e.target.value)} />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">GST (%)</label>
                      <input type="number" className="form-control" value={gstPercent} onChange={e => setGstPercent(e.target.value)} />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">{t('Delivery Charge (₹)','डिलीवरी शुल्क (₹)')}</label>
                      <input type="number" className="form-control" value={deliveryCharge} onChange={e => setDeliveryCharge(e.target.value)} />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">{t('Labor Charge (₹)','मजदूरी शुल्क (₹)')}</label>
                      <input type="number" className="form-control" value={laborCharge} onChange={e => setLaborCharge(e.target.value)} />
                    </div>

                    <div className="col-12">
                      <label className="form-label">{t('Terms & Conditions','नियम व शर्तें')}</label>
                      <textarea className="form-control" rows={4} value={terms} onChange={e => setTerms(e.target.value)} />
                    </div>
                  </div>
                </div>
              </Card>
          </section>

          <aside className="col-lg-5">
            <div className="card shadow mb-4">
              <div className="card-header bg-body-tertiary"><strong>Results</strong></div>
              <div className="card-body p-0">
                <ul className="list-group list-group-flush">
                  {rows.map(r => (
                    <li key={r.label} className="list-group-item d-flex justify-content-between align-items-center">
                      <span className="text-body-secondary">{r.label}</span>
                      <span className={`fw-semibold ${
                          r.label.includes('Cost') ? 'text-success' :
                          r.label.includes('Aluminium') ? 'text-secondary' : 'text-primary'
                        }`}>
                          {r.value}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="row g-3 p-3">
                  <div className="col-sm-6">
                   <div className="rounded-4 p-3 h-100 shadow-sm"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(192,192,192,0.25), rgba(192,192,192,0.05))', 
                      border: '1px solid rgba(192,192,192,.35)',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                    onMouseEnter={(e) => { 
                      e.currentTarget.style.transform = 'translateY(-4px)'; 
                      e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => { 
                      e.currentTarget.style.transform = 'translateY(0)'; 
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                    }}>
                    <div className="text-uppercase small fw-semibold text-secondary">Total Weight</div>
                    <div className="fs-4 fw-bold text-secondary">{results.totalWeight.toFixed(2)} kg</div>
                  </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="rounded p-3 h-100" 
                      style={{background:'linear-gradient(135deg, rgba(25,135,84,.15), rgba(25,135,84,.05))', border:'1px solid rgba(25,135,84,.25)'}}>
                    <div className="text-uppercase small fw-semibold text-success">Estimated Cost</div>
                    <div className="fs-4 fw-bold text-success">₹ {results.estimatedCost.toFixed(2)}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="card-footer d-grid d-sm-flex gap-2 justify-content-end">
                <div className="me-auto small text-body-secondary d-none d-sm-block">Accessories fixed at 2 kg. Perimeter = 2 × (W + H).</div>
                <button className="btn btn-danger btn-lg flex-fill flex-sm-grow-0" onClick={exportPDF} title="Export as PDF">📝 PDF</button>
                <button className="btn btn-success btn-lg flex-fill flex-sm-grow-0" onClick={exportExcel} title="Export as Excel">📊 Excel</button>
              </div>
            </div>

            <Card>
              <div className="card-header bg-body-tertiary"><strong>Recent Calculations</strong></div>
              <div className="card-body p-0">
                <ul className="list-group list-group-flush" id="recentList">
                  {recentEstimates.slice(0,6).map(it => (
                    <li key={it.ts} className="list-group-item d-flex justify-content-between align-items-center">
                      <button className="btn btn-link p-0" onClick={()=>loadProject(it)} title="Load project">{it.name}</button>
                      <span className="text-body-secondary small">{new Date(it.ts).toLocaleDateString()}</span>
                    </li>
                  ))}
                  {!recentEstimates.length && (
                    <li className="list-group-item text-body-secondary small">No saved estimates yet.</li>
                  )}
                </ul>
              </div>
            </Card>
          </aside>
        </div>
      </main>
        <footer className="py-4 text-center small text-body-secondary">© {new Date().getFullYear()} Venkatesh Aluminium and Glass • Designed by <span><b>Shubham Joshi</b></span></footer>

      {/* Sticky bottom summary bar */}
      <div className="position-fixed bottom-0 start-0 end-0 bg-body border-top shadow-sm" style={{zIndex:1050}}>
        <div className="container py-2 d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-2">
          <div className="flex-fill">
            <div className="small text-body-secondary">{t('Grand Total','कुल योग')}</div>
            <div className="fs-5 fw-bold">₹ {quotation.grandTotal.toFixed(2)}</div>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary" onClick={generateShare}>{t('Share','शेयर')}</button>
            <button className="btn btn-danger" onClick={exportPDF}>PDF</button>
            <button className="btn btn-success" onClick={exportExcel}>Excel</button>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      <div className="modal fade" id="shareModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Share Quote</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-grid gap-2">
              <input className="form-control" readOnly value={shareUrl} />
              {shareUrl && (
                <img className="mx-auto" alt="QR" width="160" height="160" src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(shareUrl)}`} />
              )}
              <div className="form-text">Link copied to clipboard. Scan QR to open on mobile.</div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}