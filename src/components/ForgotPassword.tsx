// Forgot Password Component - Premium Design
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../lib/firebase'

// Estimatix Logo Component
const EstimatixLogo = ({ size = 48 }: { size?: number }) => (
  <motion.div
    initial={{ scale: 0, rotate: -180 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: `${size * 0.25}px`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 10px 30px rgba(102, 126, 234, 0.5)',
    }}
  >
    <i className="bi bi-calculator-fill" style={{ fontSize: `${size * 0.5}px`, color: 'white' }}></i>
  </motion.div>
)

export function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Validate email format
    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      setLoading(false)
      toast.error('Invalid email format')
      return
    }

    const toastId = toast.loading('Sending reset link...')

    try {
      await sendPasswordResetEmail(auth, email, {
        url: `${window.location.origin}/#/login`,
        handleCodeInApp: false
      })
      
      setEmailSent(true)
      toast.success('Password reset link sent! Check your email 📧', { id: toastId, duration: 5000 })
      console.log('✅ Password reset email sent to:', email)
      
      // Redirect to login after 5 seconds
      setTimeout(() => {
        navigate('/login')
      }, 5000)
    } catch (err: any) {
      console.error('❌ Password reset error:', err)
      let errorMessage = 'Failed to send reset email'
      
      if (err.code === 'auth/user-not-found') {
        errorMessage = 'No account found with this email address'
      } else if (err.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email address'
      } else if (err.code === 'auth/too-many-requests') {
        errorMessage = 'Too many requests. Please try again later'
      }
      
      setError(errorMessage)
      toast.error(errorMessage, { id: toastId })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
            borderRadius: '12px',
            padding: '16px',
            fontSize: '14px',
            fontWeight: 500
          },
          success: {
            iconTheme: {
              primary: '#667eea',
              secondary: '#fff'
            }
          },
          error: {
            iconTheme: {
              primary: '#dc3545',
              secondary: '#fff'
            }
          }
        }}
      />
      
      <div className="auth-container" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        padding: '20px',
        overflow: 'hidden'
      }}>
        {/* Animated Background Gradient */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 15,
            ease: 'linear',
            repeat: Infinity
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            backgroundSize: '400% 400%',
            opacity: 0.9
          }}
        />

        {/* Floating Shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            ease: 'easeInOut',
            repeat: Infinity
          }}
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '300px',
            height: '300px',
            background: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '50%',
            filter: 'blur(80px)'
          }}
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            ease: 'easeInOut',
            repeat: Infinity
          }}
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '10%',
            width: '250px',
            height: '250px',
            background: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '50%',
            filter: 'blur(80px)'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">
              {/* Frosted Glass Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{
                  background: 'rgba(255, 255, 255, 0.98)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '24px',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.3)',
                  padding: '48px 40px',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                {/* Logo Area */}
                <div className="text-center mb-4">
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <EstimatixLogo size={64} />
                  </div>

                  {!emailSent ? (
                    <>
                      <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{
                          fontSize: '28px',
                          fontWeight: '700',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          marginBottom: '8px'
                        }}
                      >
                        Forgot Password?
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        style={{ color: '#6c757d', fontSize: '14px', marginBottom: 0 }}
                      >
                        No worries! Enter your email and we'll send you a reset link
                      </motion.p>
                    </>
                  ) : (
                    <>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', delay: 0.2 }}
                        style={{
                          width: '80px',
                          height: '80px',
                          background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                          borderRadius: '50%',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '20px'
                        }}
                      >
                        <i className="bi bi-check-circle-fill" style={{ fontSize: '40px', color: 'white' }} />
                      </motion.div>
                      <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        style={{
                          fontSize: '28px',
                          fontWeight: '700',
                          color: '#28a745',
                          marginBottom: '8px'
                        }}
                      >
                        Check Your Email!
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{ color: '#6c757d', fontSize: '14px', marginBottom: 0 }}
                      >
                        We've sent a password reset link to
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        style={{ color: '#667eea', fontSize: '15px', fontWeight: 600, marginTop: '8px' }}
                      >
                        {email}
                      </motion.p>
                    </>
                  )}
                </div>

                {/* Error Alert */}
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                      className="alert alert-danger"
                      role="alert"
                      style={{
                        borderRadius: '12px',
                        fontSize: '14px',
                        marginBottom: '24px',
                        border: '2px solid rgba(220, 53, 69, 0.3)'
                      }}
                    >
                      <motion.i
                        animate={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                        className="bi bi-exclamation-circle me-2"
                      ></motion.i>
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>

                {!emailSent ? (
                  /* Reset Form */
                  <form onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <motion.div 
                      className="mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      <label htmlFor="email" style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#495057',
                        marginBottom: '8px',
                        display: 'block'
                      }}>
                        <i className="bi bi-envelope me-2"></i>
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoFocus
                        style={{
                          height: '48px',
                          borderRadius: '12px',
                          border: '2px solid #e9ecef',
                          fontSize: '15px',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#667eea'
                          e.target.style.boxShadow = '0 0 0 4px rgba(102, 126, 234, 0.15)'
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#e9ecef'
                          e.target.style.boxShadow = 'none'
                        }}
                      />
                      <small style={{ color: '#6c757d', fontSize: '12px', marginTop: '8px', display: 'block' }}>
                        Enter the email associated with your account
                      </small>
                    </motion.div>

                    {/* Send Reset Link Button */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={!loading ? { scale: 1.02, y: -2 } : {}}
                      whileTap={!loading ? { scale: 0.98 } : {}}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      style={{
                        width: '100%',
                        height: '52px',
                        borderRadius: '12px',
                        border: 'none',
                        background: loading ? '#ccc' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        boxShadow: loading ? 'none' : '0 8px 20px rgba(102, 126, 234, 0.4)',
                        marginBottom: '20px',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      {loading && (
                        <motion.div
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
                          }}
                        />
                      )}
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2"></span>
                          Sending Reset Link...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-envelope-paper me-2"></i>
                          Send Reset Link
                        </>
                      )}
                    </motion.button>

                    {/* Back to Login */}
                    <div className="text-center">
                      <Link 
                        to="/login" 
                        style={{
                          fontSize: '14px',
                          color: '#667eea',
                          textDecoration: 'none',
                          fontWeight: '600',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <i className="bi bi-arrow-left"></i>
                        Back to Login
                      </Link>
                    </div>
                  </form>
                ) : (
                  /* Success Message */
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div style={{
                      background: 'rgba(40, 167, 69, 0.1)',
                      border: '2px solid rgba(40, 167, 69, 0.3)',
                      borderRadius: '12px',
                      padding: '20px',
                      marginBottom: '24px'
                    }}>
                      <div style={{ fontSize: '14px', color: '#28a745', marginBottom: '12px' }}>
                        <i className="bi bi-info-circle me-2"></i>
                        <strong>What's next?</strong>
                      </div>
                      <ol style={{ paddingLeft: '20px', margin: 0, fontSize: '13px', color: '#6c757d' }}>
                        <li style={{ marginBottom: '8px' }}>Check your email inbox</li>
                        <li style={{ marginBottom: '8px' }}>Click the password reset link</li>
                        <li style={{ marginBottom: '8px' }}>Create a new password</li>
                        <li>Sign in with your new password</li>
                      </ol>
                    </div>

                    <div className="d-flex flex-column gap-2">
                      <motion.button
                        onClick={() => navigate('/login')}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          width: '100%',
                          height: '48px',
                          borderRadius: '12px',
                          border: 'none',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: 'white',
                          fontSize: '15px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                        }}
                      >
                        <i className="bi bi-box-arrow-in-right me-2"></i>
                        Go to Login
                      </motion.button>

                      <button
                        onClick={() => {
                          setEmailSent(false)
                          setEmail('')
                          setError('')
                        }}
                        style={{
                          width: '100%',
                          height: '44px',
                          borderRadius: '12px',
                          border: '2px solid #e9ecef',
                          background: 'white',
                          color: '#6c757d',
                          fontSize: '14px',
                          fontWeight: '600',
                          cursor: 'pointer'
                        }}
                      >
                        <i className="bi bi-arrow-clockwise me-2"></i>
                        Resend Link
                      </button>
                    </div>

                    <div style={{ 
                      textAlign: 'center', 
                      marginTop: '20px',
                      padding: '12px',
                      background: 'rgba(255, 193, 7, 0.1)',
                      borderRadius: '8px',
                      fontSize: '12px',
                      color: '#856404'
                    }}>
                      <i className="bi bi-clock me-1"></i>
                      Didn't receive the email? Check your spam folder or wait a few minutes
                    </div>
                  </motion.div>
                )}

                {/* Security Badge */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  style={{
                    textAlign: 'center',
                    padding: '16px',
                    background: 'rgba(102, 126, 234, 0.05)',
                    borderRadius: '12px',
                    marginTop: '24px'
                  }}
                >
                  <div style={{ fontSize: '12px', color: '#6c757d' }}>
                    <i className="bi bi-shield-fill-check me-2" style={{ color: '#667eea' }}></i>
                    <strong>Secured by Firebase Authentication</strong>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
