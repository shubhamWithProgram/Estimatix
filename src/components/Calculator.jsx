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
import {dejavuFontBase64} from '../DejaVuSans-base64.js';


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

// Main Calculator Component - export this to App.tsx
function Calculator() {
  // Component state
  const [items, setItems] = useState([])
  const [globalGlassType, setGlobalGlassType] = useState('5mm')
  const [globalProfileType, setGlobalProfileType] = useState('Series 60')
  const [showOnlyTotals, setShowOnlyTotals] = useState(false)
  const [ratePerKg, setRatePerKg] = useState('')
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

    return {
      totalGlassArea,
      totalGlassWeight,
      totalProfileLength,
      totalProfileWeight,
      totalWeight,
      totalCost
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

  // Export to PDF
  const exportPDF = async () => {
    try {
      const jsPDF = await getJspdf()
      const pdf = new jsPDF()
      
      // Add font for better text rendering
      pdf.addFileToVFS('DejaVuSans.ttf', dejavuFontBase64)
      pdf.addFont('DejaVuSans.ttf', 'DejaVuSans', 'normal')
      pdf.setFont('DejaVuSans')

      // Header
      pdf.setFontSize(18)
      pdf.text(companyData.name, 20, 20)
      
      pdf.setFontSize(10)
      let yPos = 30
      if (companyData.address) {
        pdf.text(`Address: ${companyData.address}`, 20, yPos)
        yPos += 7
      }
      if (companyData.phone) {
        pdf.text(`Phone: ${companyData.phone}`, 20, yPos)
        yPos += 7
      }
      if (companyData.email) {
        pdf.text(`Email: ${companyData.email}`, 20, yPos)
        yPos += 7
      }

      yPos += 10

      // Customer info
      if (customerData.name || customerData.address || customerData.phone || customerData.email) {
        pdf.setFontSize(12)
        pdf.text('Customer Details:', 20, yPos)
        yPos += 7
        
        pdf.setFontSize(10)
        if (customerData.name) {
          pdf.text(`Name: ${customerData.name}`, 20, yPos)
          yPos += 7
        }
        if (customerData.address) {
          pdf.text(`Address: ${customerData.address}`, 20, yPos)
          yPos += 7
        }
        if (customerData.phone) {
          pdf.text(`Phone: ${customerData.phone}`, 20, yPos)
          yPos += 7
        }
        if (customerData.email) {
          pdf.text(`Email: ${customerData.email}`, 20, yPos)
          yPos += 7
        }
        yPos += 10
      }

      // Table header
      pdf.setFontSize(12)
      pdf.text('Item Details:', 20, yPos)
      yPos += 10

      // Items table
      pdf.setFontSize(9)
      const headers = ['Item', 'Width (m)', 'Height (m)', 'Qty', 'Glass Type', 'Profile Type', 'Weight (kg)']
      const startX = 20
      const colWidths = [30, 20, 20, 15, 25, 25, 25]
      let x = startX

      // Draw headers
      headers.forEach((header, i) => {
        pdf.text(header, x, yPos)
        x += colWidths[i]
      })
      yPos += 7

      // Draw items
      items.forEach(item => {
        const { glassWeight, profileWeight } = calculateItemWeights(item)
        const totalItemWeight = glassWeight + profileWeight
        
        x = startX
        const values = [
          item.name,
          (item.width || 0).toString(),
          (item.height || 0).toString(),
          (item.quantity || 1).toString(),
          item.glassType || globalGlassType,
          item.profileType || globalProfileType,
          totalItemWeight.toFixed(2)
        ]

        values.forEach((value, i) => {
          pdf.text(value, x, yPos)
          x += colWidths[i]
        })
        yPos += 7
      })

      // Totals
      yPos += 10
      pdf.setFontSize(12)
      pdf.text('Summary:', 20, yPos)
      yPos += 10

      pdf.setFontSize(10)
      pdf.text(`Total Glass Area: ${totals.totalGlassArea.toFixed(2)} m²`, 20, yPos)
      yPos += 7
      pdf.text(`Total Glass Weight: ${totals.totalGlassWeight.toFixed(2)} kg`, 20, yPos)
      yPos += 7
      pdf.text(`Total Profile Length: ${totals.totalProfileLength.toFixed(2)} m`, 20, yPos)
      yPos += 7
      pdf.text(`Total Profile Weight: ${totals.totalProfileWeight.toFixed(2)} kg`, 20, yPos)
      yPos += 7
      pdf.text(`Total Weight: ${totals.totalWeight.toFixed(2)} kg`, 20, yPos)
      yPos += 7

      if (ratePerKg) {
        pdf.text(`Rate per kg: ₹${ratePerKg}`, 20, yPos)
        yPos += 7
        pdf.text(`Total Cost: ₹${totals.totalCost.toFixed(2)}`, 20, yPos)
      }

      pdf.save('aluminium-calculation.pdf')
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Error generating PDF. Please try again.')
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
    <div className="container-fluid py-4" style={{ maxWidth: '1400px' }}>
      {/* DEBUG: Calculator Page Indicator */}
      <div className="alert alert-info text-center mb-4" role="alert">
        <h4 className="mb-0">📊 CALCULATOR PAGE - Main Application</h4>
      </div>
      
      {/* Company Information */}
      <Card>
        <div className="card-body">
          <h5 className="card-title text-primary mb-3">
            <i className="bi bi-building me-2"></i>Company Information
          </h5>
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
      </Card>

      {/* Customer Information */}
      <Card>
        <div className="card-body">
          <h5 className="card-title text-primary mb-3">
            <i className="bi bi-person me-2"></i>Customer Information
          </h5>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Customer Name</label>
              <input
                type="text"
                className="form-control"
                value={customerData.name}
                onChange={(e) => setCustomerData({...customerData, name: e.target.value})}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                value={customerData.address}
                onChange={(e) => setCustomerData({...customerData, address: e.target.value})}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                value={customerData.phone}
                onChange={(e) => setCustomerData({...customerData, phone: e.target.value})}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={customerData.email}
                onChange={(e) => setCustomerData({...customerData, email: e.target.value})}
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Global Settings */}
      <Card>
        <div className="card-body">
          <h5 className="card-title text-primary mb-3">
            <i className="bi bi-gear me-2"></i>Default Settings
          </h5>
          <div className="row g-3">
            <div className="col-md-3">
              <label className="form-label">Default Glass Type</label>
              <select 
                className="form-select" 
                value={globalGlassType}
                onChange={(e) => setGlobalGlassType(e.target.value)}
              >
                {Object.keys(GLASS_WEIGHT_PER_M2).map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label">Default Profile Type</label>
              <select 
                className="form-select" 
                value={globalProfileType}
                onChange={(e) => setGlobalProfileType(e.target.value)}
              >
                {Object.keys(PROFILE_WEIGHT_PER_M).map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label">Rate per kg (₹)</label>
              <input
                type="number"
                className="form-control"
                value={ratePerKg}
                onChange={(e) => setRatePerKg(e.target.value)}
                placeholder="Enter rate per kg"
              />
            </div>
            <div className="col-md-3">
              <div className="form-check mt-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="showOnlyTotals"
                  checked={showOnlyTotals}
                  onChange={(e) => setShowOnlyTotals(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="showOnlyTotals">
                  Show only totals
                </label>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Items */}
      {!showOnlyTotals && (
        <Card>
          <div className="card-body">
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
        </Card>
      )}

      {/* Summary */}
      <Card>
        <div className="card-body">
          <h5 className="card-title text-primary mb-3">
            <i className="bi bi-calculator me-2"></i>Summary
          </h5>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="row g-3">
                <div className="col-6">
                  <div className="text-center p-3 bg-light rounded">
                    <div className="h4 text-primary mb-1">{totals.totalGlassArea.toFixed(2)}</div>
                    <small className="text-muted">Glass Area (m²)</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-3 bg-light rounded">
                    <div className="h4 text-success mb-1">{totals.totalGlassWeight.toFixed(2)}</div>
                    <small className="text-muted">Glass Weight (kg)</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-3 bg-light rounded">
                    <div className="h4 text-info mb-1">{totals.totalProfileLength.toFixed(2)}</div>
                    <small className="text-muted">Profile Length (m)</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-3 bg-light rounded">
                    <div className="h4 text-warning mb-1">{totals.totalProfileWeight.toFixed(2)}</div>
                    <small className="text-muted">Profile Weight (kg)</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center">
                <div className="display-4 text-primary fw-bold mb-2">{totals.totalWeight.toFixed(2)}</div>
                <div className="h5 text-muted mb-3">Total Weight (kg)</div>
                
                {ratePerKg && (
                  <>
                    <div className="h4 text-success mb-3">₹{totals.totalCost.toFixed(2)}</div>
                    <small className="text-muted">Total Cost @ ₹{ratePerKg}/kg</small>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="row g-2 mt-4">
            <div className="col-md-6">
              <button className="btn btn-success w-100" onClick={exportExcel}>
                <i className="bi bi-file-earmark-excel me-2"></i>Export to Excel
              </button>
            </div>
            <div className="col-md-6">
              <button className="btn btn-danger w-100" onClick={exportPDF}>
                <i className="bi bi-file-earmark-pdf me-2"></i>Export to PDF
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Calculator