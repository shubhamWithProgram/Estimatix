import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

interface OnboardingWizardProps {
  onComplete: () => void;
}

interface CompanyData {
  companyName: string;
  companyAddress: string;
  companyPhone: string;
  companyEmail: string;
}

interface PricingDefaults {
  defaultMargin: number;
  taxRate: number;
  currency: string;
}

const OnboardingWizard = ({ onComplete }: OnboardingWizardProps) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  
  const [companyData, setCompanyData] = useState<CompanyData>({
    companyName: '',
    companyAddress: '',
    companyPhone: '',
    companyEmail: '',
  });

  const [pricingDefaults, setPricingDefaults] = useState<PricingDefaults>({
    defaultMargin: 30,
    taxRate: 18,
    currency: 'INR',
  });

  const totalSteps = 3;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCompanySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyData.companyName) {
      toast.error('Please enter your company name');
      return;
    }
    localStorage.setItem('estimatix-company', JSON.stringify(companyData));
    toast.success('Company details saved!');
    nextStep();
  };

  const handlePricingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('estimatix-pricing', JSON.stringify(pricingDefaults));
    toast.success('Pricing defaults configured!');
    nextStep();
  };

  const handleComplete = () => {
    localStorage.setItem('estimatix-onboarded', 'true');
    toast.success('🎉 Setup complete! Let\'s create your first quotation');
    onComplete();
    navigate('/calculator');
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Shapes */}
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.1)',
        filter: 'blur(80px)',
        top: '10%',
        left: '5%',
        animation: 'float 6s ease-in-out infinite'
      }} />
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4"
            >
              <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '16px',
                padding: '20px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(20px)'
              }}>
                <div className="d-flex justify-content-between mb-2">
                  <small style={{ fontWeight: 600, color: '#667eea' }}>
                    Step {currentStep} of {totalSteps}
                  </small>
                  <small style={{ color: '#6c757d' }}>
                    {Math.round((currentStep / totalSteps) * 100)}% Complete
                  </small>
                </div>
                <div style={{
                  height: '8px',
                  background: '#e9ecef',
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    style={{
                      height: '100%',
                      background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                      borderRadius: '8px'
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Step Content */}
            <AnimatePresence mode="wait" custom={1}>
              <motion.div
                key={currentStep}
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <div style={{
                  background: 'rgba(255, 255, 255, 0.98)',
                  borderRadius: '24px',
                  padding: '48px',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.8)'
                }}>
                  {/* Step 1: Company Setup */}
                  {currentStep === 1 && (
                    <form onSubmit={handleCompanySubmit}>
                      <div className="text-center mb-4">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', delay: 0.2 }}
                          style={{
                            width: '80px',
                            height: '80px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: '20px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '20px'
                          }}
                        >
                          <i className="bi bi-building" style={{ fontSize: '40px', color: 'white' }} />
                        </motion.div>
                        <h2 style={{
                          fontSize: '28px',
                          fontWeight: 'bold',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          marginBottom: '8px'
                        }}>
                          Company Information
                        </h2>
                        <p style={{ color: '#6c757d', fontSize: '15px' }}>
                          Let's set up your company profile
                        </p>
                      </div>

                      <div className="mb-3">
                        <label className="form-label" style={{ fontWeight: 600, fontSize: '14px' }}>
                          Company Name <span style={{ color: '#dc3545' }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={companyData.companyName}
                          onChange={(e) => setCompanyData({ ...companyData, companyName: e.target.value })}
                          placeholder="Estimatix Solutions"
                          required
                          style={{
                            height: '48px',
                            borderRadius: '12px',
                            border: '2px solid #e9ecef',
                            fontSize: '15px'
                          }}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label" style={{ fontWeight: 600, fontSize: '14px' }}>
                          Address
                        </label>
                        <textarea
                          className="form-control"
                          value={companyData.companyAddress}
                          onChange={(e) => setCompanyData({ ...companyData, companyAddress: e.target.value })}
                          placeholder="123 Business Street, City, State - 123456"
                          rows={3}
                          style={{
                            borderRadius: '12px',
                            border: '2px solid #e9ecef',
                            fontSize: '15px'
                          }}
                        />
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label" style={{ fontWeight: 600, fontSize: '14px' }}>
                            Phone
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            value={companyData.companyPhone}
                            onChange={(e) => setCompanyData({ ...companyData, companyPhone: e.target.value })}
                            placeholder="+91 98765 43210"
                            style={{
                              height: '48px',
                              borderRadius: '12px',
                              border: '2px solid #e9ecef',
                              fontSize: '15px'
                            }}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label" style={{ fontWeight: 600, fontSize: '14px' }}>
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            value={companyData.companyEmail}
                            onChange={(e) => setCompanyData({ ...companyData, companyEmail: e.target.value })}
                            placeholder="info@estimatix.com"
                            style={{
                              height: '48px',
                              borderRadius: '12px',
                              border: '2px solid #e9ecef',
                              fontSize: '15px'
                            }}
                          />
                        </div>
                      </div>

                      <div className="d-flex justify-content-between mt-4">
                        <button
                          type="button"
                          onClick={() => {
                            localStorage.setItem('estimatix-onboarded', 'true');
                            onComplete();
                          }}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#6c757d',
                            fontSize: '14px',
                            cursor: 'pointer'
                          }}
                        >
                          Skip Setup
                        </button>
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            border: 'none',
                            color: 'white',
                            padding: '12px 32px',
                            borderRadius: '12px',
                            fontSize: '16px',
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          Continue
                          <i className="bi bi-arrow-right ms-2" />
                        </motion.button>
                      </div>
                    </form>
                  )}

                  {/* Step 2: Pricing Defaults */}
                  {currentStep === 2 && (
                    <form onSubmit={handlePricingSubmit}>
                      <div className="text-center mb-4">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', delay: 0.2 }}
                          style={{
                            width: '80px',
                            height: '80px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: '20px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '20px'
                          }}
                        >
                          <i className="bi bi-currency-dollar" style={{ fontSize: '40px', color: 'white' }} />
                        </motion.div>
                        <h2 style={{
                          fontSize: '28px',
                          fontWeight: 'bold',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          marginBottom: '8px'
                        }}>
                          Pricing Configuration
                        </h2>
                        <p style={{ color: '#6c757d', fontSize: '15px' }}>
                          Set your default pricing parameters
                        </p>
                      </div>

                      <div className="mb-4">
                        <label className="form-label" style={{ fontWeight: 600, fontSize: '14px' }}>
                          Default Profit Margin (%)
                        </label>
                        <div className="d-flex align-items-center gap-3">
                          <input
                            type="range"
                            className="form-range"
                            min="0"
                            max="100"
                            value={pricingDefaults.defaultMargin}
                            onChange={(e) => setPricingDefaults({ ...pricingDefaults, defaultMargin: parseInt(e.target.value) })}
                            style={{ flex: 1 }}
                          />
                          <span style={{
                            background: '#667eea',
                            color: 'white',
                            padding: '8px 16px',
                            borderRadius: '8px',
                            fontWeight: 600,
                            minWidth: '60px',
                            textAlign: 'center'
                          }}>
                            {pricingDefaults.defaultMargin}%
                          </span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="form-label" style={{ fontWeight: 600, fontSize: '14px' }}>
                          Tax Rate (GST/VAT %)
                        </label>
                        <div className="d-flex align-items-center gap-3">
                          <input
                            type="range"
                            className="form-range"
                            min="0"
                            max="30"
                            value={pricingDefaults.taxRate}
                            onChange={(e) => setPricingDefaults({ ...pricingDefaults, taxRate: parseInt(e.target.value) })}
                            style={{ flex: 1 }}
                          />
                          <span style={{
                            background: '#667eea',
                            color: 'white',
                            padding: '8px 16px',
                            borderRadius: '8px',
                            fontWeight: 600,
                            minWidth: '60px',
                            textAlign: 'center'
                          }}>
                            {pricingDefaults.taxRate}%
                          </span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="form-label" style={{ fontWeight: 600, fontSize: '14px' }}>
                          Currency
                        </label>
                        <select
                          className="form-select"
                          value={pricingDefaults.currency}
                          onChange={(e) => setPricingDefaults({ ...pricingDefaults, currency: e.target.value })}
                          style={{
                            height: '48px',
                            borderRadius: '12px',
                            border: '2px solid #e9ecef',
                            fontSize: '15px'
                          }}
                        >
                          <option value="INR">₹ INR - Indian Rupee</option>
                          <option value="USD">$ USD - US Dollar</option>
                          <option value="EUR">€ EUR - Euro</option>
                          <option value="GBP">£ GBP - British Pound</option>
                          <option value="AED">د.إ AED - UAE Dirham</option>
                        </select>
                      </div>

                      <div className="d-flex justify-content-between mt-4">
                        <motion.button
                          type="button"
                          onClick={prevStep}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          style={{
                            background: '#e9ecef',
                            border: 'none',
                            color: '#495057',
                            padding: '12px 32px',
                            borderRadius: '12px',
                            fontSize: '16px',
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          <i className="bi bi-arrow-left me-2" />
                          Back
                        </motion.button>
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            border: 'none',
                            color: 'white',
                            padding: '12px 32px',
                            borderRadius: '12px',
                            fontSize: '16px',
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          Continue
                          <i className="bi bi-arrow-right ms-2" />
                        </motion.button>
                      </div>
                    </form>
                  )}

                  {/* Step 3: Ready to Start */}
                  {currentStep === 3 && (
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', delay: 0.2 }}
                        style={{
                          width: '100px',
                          height: '100px',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          borderRadius: '24px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '24px'
                        }}
                      >
                        <i className="bi bi-check-circle-fill" style={{ fontSize: '50px', color: 'white' }} />
                      </motion.div>
                      
                      <h2 style={{
                        fontSize: '32px',
                        fontWeight: 'bold',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '16px'
                      }}>
                        You're All Set! 🎉
                      </h2>
                      
                      <p style={{ color: '#6c757d', fontSize: '16px', marginBottom: '32px' }}>
                        Your account is configured and ready to go.<br />
                        Let's create your first professional quotation!
                      </p>

                      <div className="row g-3 mb-4">
                        <div className="col-md-4">
                          <div style={{
                            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                            padding: '20px',
                            borderRadius: '16px',
                            border: '2px solid rgba(102, 126, 234, 0.2)'
                          }}>
                            <i className="bi bi-calculator-fill" style={{ fontSize: '32px', color: '#667eea' }} />
                            <h5 style={{ fontSize: '14px', fontWeight: 600, marginTop: '12px', color: '#495057' }}>
                              Smart Calculator
                            </h5>
                            <p style={{ fontSize: '12px', color: '#6c757d', margin: 0 }}>
                              Fast & accurate estimates
                            </p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div style={{
                            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                            padding: '20px',
                            borderRadius: '16px',
                            border: '2px solid rgba(102, 126, 234, 0.2)'
                          }}>
                            <i className="bi bi-filetype-pdf" style={{ fontSize: '32px', color: '#667eea' }} />
                            <h5 style={{ fontSize: '14px', fontWeight: 600, marginTop: '12px', color: '#495057' }}>
                              PDF Generation
                            </h5>
                            <p style={{ fontSize: '12px', color: '#6c757d', margin: 0 }}>
                              Professional quotes with QR
                            </p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div style={{
                            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                            padding: '20px',
                            borderRadius: '16px',
                            border: '2px solid rgba(102, 126, 234, 0.2)'
                          }}>
                            <i className="bi bi-share-fill" style={{ fontSize: '32px', color: '#667eea' }} />
                            <h5 style={{ fontSize: '14px', fontWeight: 600, marginTop: '12px', color: '#495057' }}>
                              Easy Sharing
                            </h5>
                            <p style={{ fontSize: '12px', color: '#6c757d', margin: 0 }}>
                              WhatsApp, Email & QR codes
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between">
                        <motion.button
                          type="button"
                          onClick={prevStep}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          style={{
                            background: '#e9ecef',
                            border: 'none',
                            color: '#495057',
                            padding: '12px 32px',
                            borderRadius: '12px',
                            fontSize: '16px',
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          <i className="bi bi-arrow-left me-2" />
                          Back
                        </motion.button>
                        <motion.button
                          type="button"
                          onClick={handleComplete}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            border: 'none',
                            color: 'white',
                            padding: '14px 40px',
                            borderRadius: '12px',
                            fontSize: '18px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)'
                          }}
                        >
                          <i className="bi bi-rocket-takeoff-fill me-2" />
                          Start Creating Quotations
                        </motion.button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingWizard;
