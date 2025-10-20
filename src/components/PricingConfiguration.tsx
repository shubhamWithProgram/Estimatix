import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PricingConfiguration.css'

interface PricingConfig {
  laborCost: number
  profitMargin: number
  taxRate: number
  currency: string
}

const PricingConfiguration: React.FC = () => {
  const navigate = useNavigate()
  
  const [config, setConfig] = useState<PricingConfig>({
    laborCost: 50,
    profitMargin: 20,
    taxRate: 18,
    currency: 'INR'
  })

  const currencies = [
    { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham' }
  ]

  const handleSliderChange = (field: keyof PricingConfig, value: number) => {
    setConfig(prev => ({ ...prev, [field]: value }))
  }

  const handleCurrencyChange = (currencyCode: string) => {
    setConfig(prev => ({ ...prev, currency: currencyCode }))
  }

  const handleBack = () => {
    navigate(-1)
  }

  const handleContinue = () => {
    // Save config to localStorage or context
    localStorage.setItem('pricingConfig', JSON.stringify(config))
    console.log('✅ Pricing configuration saved:', config)
    navigate('/calculator')
  }

  return (
    <div className="pricing-configuration-wrapper">
      {/* Animated Background */}
      <div className="pricing-bg-gradient"></div>
      <div className="pricing-glow-orb pricing-glow-orb-1"></div>
      <div className="pricing-glow-orb pricing-glow-orb-2"></div>

      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100 py-5">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7">
            
            {/* Main Card */}
            <div className="pricing-card card border-0">
              
              {/* Header with Icon */}
              <div className="pricing-card-header text-center">
                <div className="pricing-icon-wrapper">
                  <div className="pricing-icon">
                    <span className="pricing-icon-symbol">💰</span>
                  </div>
                </div>
                <h2 className="pricing-title">Pricing Configuration</h2>
                <p className="pricing-subtitle">
                  Customize your pricing parameters for accurate quotations
                </p>
              </div>

              {/* Card Body */}
              <div className="pricing-card-body card-body px-4 px-md-5 py-4">
                
                {/* Labor Cost Slider */}
                <div className="pricing-field mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <label className="pricing-label">
                      <i className="bi bi-tools me-2"></i>
                      Labor Cost per Hour
                    </label>
                    <span className="badge pricing-value-badge">
                      {currencies.find(c => c.code === config.currency)?.symbol}
                      {config.laborCost}
                    </span>
                  </div>
                  <input
                    type="range"
                    className="form-range pricing-slider"
                    min="0"
                    max="200"
                    step="5"
                    value={config.laborCost}
                    onChange={(e) => handleSliderChange('laborCost', Number(e.target.value))}
                  />
                  <div className="d-flex justify-content-between pricing-slider-labels">
                    <small>0</small>
                    <small>100</small>
                    <small>200</small>
                  </div>
                </div>

                {/* Profit Margin Slider */}
                <div className="pricing-field mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <label className="pricing-label">
                      <i className="bi bi-graph-up-arrow me-2"></i>
                      Profit Margin
                    </label>
                    <span className="badge pricing-value-badge">
                      {config.profitMargin}%
                    </span>
                  </div>
                  <input
                    type="range"
                    className="form-range pricing-slider"
                    min="0"
                    max="100"
                    step="1"
                    value={config.profitMargin}
                    onChange={(e) => handleSliderChange('profitMargin', Number(e.target.value))}
                  />
                  <div className="d-flex justify-content-between pricing-slider-labels">
                    <small>0%</small>
                    <small>50%</small>
                    <small>100%</small>
                  </div>
                </div>

                {/* Tax Rate Slider */}
                <div className="pricing-field mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <label className="pricing-label">
                      <i className="bi bi-receipt me-2"></i>
                      Tax Rate (GST/VAT)
                    </label>
                    <span className="badge pricing-value-badge">
                      {config.taxRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    className="form-range pricing-slider"
                    min="0"
                    max="50"
                    step="0.5"
                    value={config.taxRate}
                    onChange={(e) => handleSliderChange('taxRate', Number(e.target.value))}
                  />
                  <div className="d-flex justify-content-between pricing-slider-labels">
                    <small>0%</small>
                    <small>25%</small>
                    <small>50%</small>
                  </div>
                </div>

                {/* Currency Dropdown */}
                <div className="pricing-field mb-4">
                  <label className="pricing-label mb-3">
                    <i className="bi bi-currency-exchange me-2"></i>
                    Currency
                  </label>
                  <div className="dropdown w-100">
                    <button
                      className="btn pricing-dropdown-btn w-100 d-flex justify-content-between align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span>
                        {currencies.find(c => c.code === config.currency)?.symbol} {' '}
                        {currencies.find(c => c.code === config.currency)?.name}
                      </span>
                      <i className="bi bi-chevron-down"></i>
                    </button>
                    <ul className="dropdown-menu pricing-dropdown-menu w-100">
                      {currencies.map(curr => (
                        <li key={curr.code}>
                          <button
                            className={`dropdown-item pricing-dropdown-item ${config.currency === curr.code ? 'active' : ''}`}
                            onClick={() => handleCurrencyChange(curr.code)}
                          >
                            <span className="me-2">{curr.symbol}</span>
                            {curr.name} ({curr.code})
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Summary Card */}
                <div className="pricing-summary mt-4 p-3">
                  <h6 className="pricing-summary-title mb-3">
                    <i className="bi bi-calculator me-2"></i>
                    Configuration Summary
                  </h6>
                  <div className="row g-3">
                    <div className="col-6">
                      <div className="pricing-summary-item">
                        <small className="text-muted">Labor Cost</small>
                        <div className="fw-semibold">
                          {currencies.find(c => c.code === config.currency)?.symbol}
                          {config.laborCost}/hr
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="pricing-summary-item">
                        <small className="text-muted">Profit Margin</small>
                        <div className="fw-semibold">{config.profitMargin}%</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="pricing-summary-item">
                        <small className="text-muted">Tax Rate</small>
                        <div className="fw-semibold">{config.taxRate}%</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="pricing-summary-item">
                        <small className="text-muted">Currency</small>
                        <div className="fw-semibold">{config.currency}</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pricing-card-footer card-footer border-0 px-4 px-md-5 py-4">
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <button
                      className="btn pricing-btn-back w-100"
                      onClick={handleBack}
                    >
                      <i className="bi bi-arrow-left me-2"></i>
                      Back
                    </button>
                  </div>
                  <div className="col-12 col-sm-6">
                    <button
                      className="btn pricing-btn-continue w-100"
                      onClick={handleContinue}
                    >
                      Continue
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>
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

export default PricingConfiguration
