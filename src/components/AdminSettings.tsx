// Admin Settings component for managing unit pricing and system settings
import React, { useState, useEffect } from 'react'
import { useAuth } from '../lib/auth'

interface PricingSettings {
  glassRatePerM2: number
  aluminiumRatePerKg: number
  accessoryRatePerItem: number
  laborChargePercent: number
  gstPercent: number
  companyMarkupPercent: number
}

interface InvoiceSettings {
  currentYear: number
  currentSequence: number
  prefix: string
}

export default function AdminSettings() {
  const { user } = useAuth()
  const [pricingSettings, setPricingSettings] = useState<PricingSettings>({
    glassRatePerM2: 350,
    aluminiumRatePerKg: 280,
    accessoryRatePerItem: 150,
    laborChargePercent: 15,
    gstPercent: 18,
    companyMarkupPercent: 20
  })

  const [invoiceSettings, setInvoiceSettings] = useState<InvoiceSettings>({
    currentYear: new Date().getFullYear(),
    currentSequence: 1,
    prefix: 'VEN'
  })

  const [savedMessage, setSavedMessage] = useState('')

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedPricing = localStorage.getItem('admin_pricing_settings')
    const savedInvoice = localStorage.getItem('admin_invoice_settings')
    
    if (savedPricing) {
      setPricingSettings(JSON.parse(savedPricing))
    }
    
    if (savedInvoice) {
      setInvoiceSettings(JSON.parse(savedInvoice))
    }
  }, [])

  const handleSaveSettings = () => {
    localStorage.setItem('admin_pricing_settings', JSON.stringify(pricingSettings))
    localStorage.setItem('admin_invoice_settings', JSON.stringify(invoiceSettings))
    setSavedMessage('Settings saved successfully!')
    
    // Clear message after 3 seconds
    setTimeout(() => setSavedMessage(''), 3000)
  }

  const resetToDefaults = () => {
    const defaultPricing = {
      glassRatePerM2: 350,
      aluminiumRatePerKg: 280,
      accessoryRatePerItem: 150,
      laborChargePercent: 15,
      gstPercent: 18,
      companyMarkupPercent: 20
    }
    
    setPricingSettings(defaultPricing)
    setSavedMessage('Settings reset to defaults!')
    setTimeout(() => setSavedMessage(''), 3000)
  }

  // Generate next invoice number preview
  const generateInvoicePreview = () => {
    const sequence = invoiceSettings.currentSequence.toString().padStart(3, '0')
    return `${invoiceSettings.prefix}${invoiceSettings.currentYear}-${sequence}`
  }

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="h3 text-primary">
              <i className="bi bi-gear-fill me-2"></i>
              Admin Settings
            </h1>
            <div className="d-flex gap-2">
              <button 
                className="btn btn-outline-secondary" 
                onClick={resetToDefaults}
              >
                <i className="bi bi-arrow-clockwise me-1"></i>
                Reset to Defaults
              </button>
              <button 
                className="btn btn-primary" 
                onClick={handleSaveSettings}
              >
                <i className="bi bi-check-circle me-1"></i>
                Save Settings
              </button>
            </div>
          </div>

          {savedMessage && (
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <i className="bi bi-check-circle-fill me-2"></i>
              {savedMessage}
            </div>
          )}

          {/* User Access Control */}
          <div className="alert alert-info mb-4">
            <h6 className="alert-heading">
              <i className="bi bi-info-circle me-2"></i>
              Admin Access
            </h6>
            <p className="mb-0">
              Logged in as: <strong>{user?.email}</strong> | 
              These settings will apply to all quotations system-wide.
            </p>
          </div>

          <div className="row">
            {/* Pricing Settings */}
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-header bg-primary text-white">
                  <h5 className="card-title mb-0">
                    <i className="bi bi-currency-rupee me-2"></i>
                    Unit Pricing Configuration
                  </h5>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Glass Rate (₹ per m²)</label>
                      <div className="input-group">
                        <span className="input-group-text">₹</span>
                        <input
                          type="number"
                          className="form-control"
                          value={pricingSettings.glassRatePerM2}
                          onChange={(e) => setPricingSettings({
                            ...pricingSettings,
                            glassRatePerM2: parseFloat(e.target.value) || 0
                          })}
                          min="0"
                          step="0.01"
                        />
                        <span className="input-group-text">per m²</span>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Aluminium Rate (₹ per kg)</label>
                      <div className="input-group">
                        <span className="input-group-text">₹</span>
                        <input
                          type="number"
                          className="form-control"
                          value={pricingSettings.aluminiumRatePerKg}
                          onChange={(e) => setPricingSettings({
                            ...pricingSettings,
                            aluminiumRatePerKg: parseFloat(e.target.value) || 0
                          })}
                          min="0"
                          step="0.01"
                        />
                        <span className="input-group-text">per kg</span>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Accessory Rate (₹ per item)</label>
                      <div className="input-group">
                        <span className="input-group-text">₹</span>
                        <input
                          type="number"
                          className="form-control"
                          value={pricingSettings.accessoryRatePerItem}
                          onChange={(e) => setPricingSettings({
                            ...pricingSettings,
                            accessoryRatePerItem: parseFloat(e.target.value) || 0
                          })}
                          min="0"
                          step="0.01"
                        />
                        <span className="input-group-text">per item</span>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Labor Charge (%)</label>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          value={pricingSettings.laborChargePercent}
                          onChange={(e) => setPricingSettings({
                            ...pricingSettings,
                            laborChargePercent: parseFloat(e.target.value) || 0
                          })}
                          min="0"
                          max="100"
                          step="0.1"
                        />
                        <span className="input-group-text">%</span>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">GST Rate (%)</label>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          value={pricingSettings.gstPercent}
                          onChange={(e) => setPricingSettings({
                            ...pricingSettings,
                            gstPercent: parseFloat(e.target.value) || 0
                          })}
                          min="0"
                          max="100"
                          step="0.1"
                        />
                        <span className="input-group-text">%</span>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Company Markup (%)</label>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          value={pricingSettings.companyMarkupPercent}
                          onChange={(e) => setPricingSettings({
                            ...pricingSettings,
                            companyMarkupPercent: parseFloat(e.target.value) || 0
                          })}
                          min="0"
                          max="100"
                          step="0.1"
                        />
                        <span className="input-group-text">%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Invoice Settings */}
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-header bg-success text-white">
                  <h5 className="card-title mb-0">
                    <i className="bi bi-receipt me-2"></i>
                    Invoice Settings
                  </h5>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <label className="form-label">Invoice Prefix</label>
                    <input
                      type="text"
                      className="form-control"
                      value={invoiceSettings.prefix}
                      onChange={(e) => setInvoiceSettings({
                        ...invoiceSettings,
                        prefix: e.target.value.toUpperCase()
                      })}
                      maxLength={5}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Current Year</label>
                    <input
                      type="number"
                      className="form-control"
                      value={invoiceSettings.currentYear}
                      onChange={(e) => setInvoiceSettings({
                        ...invoiceSettings,
                        currentYear: parseInt(e.target.value) || new Date().getFullYear()
                      })}
                      min="2020"
                      max="2030"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Next Sequence Number</label>
                    <input
                      type="number"
                      className="form-control"
                      value={invoiceSettings.currentSequence}
                      onChange={(e) => setInvoiceSettings({
                        ...invoiceSettings,
                        currentSequence: parseInt(e.target.value) || 1
                      })}
                      min="1"
                    />
                  </div>

                  <div className="alert alert-info">
                    <strong>Next Invoice Number:</strong><br />
                    <code className="fs-6">{generateInvoicePreview()}</code>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="card">
                <div className="card-header bg-info text-white">
                  <h6 className="card-title mb-0">
                    <i className="bi bi-bar-chart me-2"></i>
                    Quick Stats
                  </h6>
                </div>
                <div className="card-body">
                  <div className="small">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Material Cost (Glass + Al):</span>
                      <strong>₹{(pricingSettings.glassRatePerM2 + pricingSettings.aluminiumRatePerKg).toFixed(0)}</strong>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Total Overhead:</span>
                      <strong>{(pricingSettings.laborChargePercent + pricingSettings.gstPercent + pricingSettings.companyMarkupPercent).toFixed(1)}%</strong>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Settings Last Updated:</span>
                      <strong>{new Date().toLocaleDateString()}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}