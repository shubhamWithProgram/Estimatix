// Premium SAAS-Style Authentication Components with Enhanced Micro-Animations & Features
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast'
import { useAuth } from '../lib/auth'

// Estimatix Logo Component with Brand Colors
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

// Google SVG Logo Component
const GoogleIcon = () => (
  <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    <path fill="none" d="M0 0h48v48H0z"/>
  </svg>
)

// Floating Label Input Component
interface FloatingInputProps {
  id: string;
  type: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: string;
  required?: boolean;
  placeholder?: string;
  showPasswordToggle?: boolean;
  showPassword?: boolean;
  onTogglePassword?: () => void;
}

const FloatingInput = ({ 
  id, type, label, value, onChange, icon, required = false, 
  placeholder = '', showPasswordToggle = false, showPassword = false, onTogglePassword 
}: FloatingInputProps) => {
  const [isFocused, setIsFocused] = useState(false)
  
  return (
    <motion.div 
      className="mb-3"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <label htmlFor={id} style={{
        fontSize: '14px',
        fontWeight: '600',
        color: '#495057',
        marginBottom: '8px',
        display: 'block'
      }}>
        <motion.i 
          className={`bi ${icon} me-2`}
          animate={{ 
            color: isFocused ? '#667eea' : '#6c757d',
            scale: isFocused ? 1.2 : 1 
          }}
          transition={{ duration: 0.2 }}
        ></motion.i>
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <motion.input
          type={showPasswordToggle ? (showPassword ? 'text' : 'password') : type}
          className="form-control"
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            height: '48px',
            borderRadius: '12px',
            border: '2px solid #e9ecef',
            fontSize: '15px',
            paddingRight: showPasswordToggle ? '45px' : '16px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          whileFocus={{
            borderColor: '#667eea',
            boxShadow: '0 0 0 4px rgba(102, 126, 234, 0.15)'
          }}
        />
        {showPasswordToggle && (
          <motion.button
            type="button"
            onClick={onTogglePassword}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              border: 'none',
              background: 'none',
              color: '#6c757d',
              cursor: 'pointer',
              padding: '4px 8px'
            }}
          >
            <i className={`bi ${showPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`}></i>
          </motion.button>
        )}
        {isFocused && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              height: '2px',
              background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '2px'
            }}
          />
        )}
      </div>
    </motion.div>
  )
}

// Login component
export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { signIn, signInWithGoogle } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const toastId = toast.loading('Signing in...')

    try {
      await signIn(email, password)
      toast.success('Welcome back! 🎉', { id: toastId })
      console.log('✅ Login successful, redirecting to dashboard...')
      navigate('/dashboard')
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to sign in'
      setError(errorMessage)
      toast.error(errorMessage, { id: toastId })
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setLoading(true)
    setError('')
    
    const toastId = toast.loading('Signing in with Google...')

    try {
      await signInWithGoogle()
      toast.success('Welcome! 🎉', { id: toastId })
      console.log('✅ Google login successful, redirecting to dashboard...')
      navigate('/dashboard')
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to sign in with Google'
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
          duration: 3000,
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

        {/* Floating Shapes with Animation */}
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
                {/* Logo Area with Brand */}
                <div className="text-center mb-4">
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <EstimatixLogo size={64} />
                  </div>
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
                    Welcome Back
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{ color: '#6c757d', fontSize: '14px', marginBottom: '4px' }}
                  >
                    Sign in to access your estimation platform
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      marginBottom: 0
                    }}
                  >
                    Estimate smarter. Quote faster.
                  </motion.p>
                </div>

                {/* Error Alert with Shake Animation */}
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

                {/* Login Form */}
                <form onSubmit={handleSubmit}>
                  {/* Email Input with Floating Label */}
                  <FloatingInput
                    id="email"
                    type="email"
                    label="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    icon="bi-envelope"
                    placeholder="you@example.com"
                    required
                  />

                  {/* Password Input with Toggle */}
                  <FloatingInput
                    id="password"
                    type="password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    icon="bi-lock"
                    placeholder="••••••••"
                    required
                    showPasswordToggle
                    showPassword={showPassword}
                    onTogglePassword={() => setShowPassword(!showPassword)}
                  />

                  {/* Remember Me & Forgot Password */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="rememberMe" />
                      <label className="form-check-label" htmlFor="rememberMe" style={{ fontSize: '14px', color: '#6c757d' }}>
                        Remember me
                      </label>
                    </div>
                    <Link to="/forgot-password" style={{
                      fontSize: '14px',
                      color: '#667eea',
                      textDecoration: 'none',
                      fontWeight: '600'
                    }}>
                      Forgot password?
                    </Link>
                  </div>

                  {/* Sign In Button with Loading State */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={!loading ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!loading ? { scale: 0.98 } : {}}
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
                        Signing In...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-box-arrow-in-right me-2"></i>
                        Sign In
                      </>
                    )}
                  </motion.button>

                  {/* Divider */}
                  <div className="d-flex align-items-center my-4">
                    <div style={{ flex: 1, height: '1px', background: '#e9ecef' }}></div>
                    <span style={{ padding: '0 16px', fontSize: '13px', color: '#6c757d' }}>or continue with</span>
                    <div style={{ flex: 1, height: '1px', background: '#e9ecef' }}></div>
                  </div>

                  {/* Google Sign In Button with Elevation */}
                  <motion.button
                    type="button"
                    onClick={handleGoogleSignIn}
                    disabled={loading}
                    whileHover={!loading ? { scale: 1.02, boxShadow: '0 6px 20px rgba(0,0,0,0.15)' } : {}}
                    whileTap={!loading ? { scale: 0.98 } : {}}
                    style={{
                      width: '100%',
                      height: '48px',
                      borderRadius: '12px',
                      border: '2px solid #e9ecef',
                      background: 'white',
                      color: '#495057',
                      fontSize: '15px',
                      fontWeight: '600',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      transition: 'all 0.3s ease',
                      marginBottom: '24px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                    }}
                  >
                    <GoogleIcon />
                    Sign in with Google
                  </motion.button>
                </form>

                {/* Navigation Link */}
                <div className="text-center">
                  <p style={{ fontSize: '14px', color: '#6c757d', marginBottom: '16px' }}>
                    Don't have an account?{' '}
                    <Link to="/signup" style={{ color: '#667eea', fontWeight: '600', textDecoration: 'none' }}>
                      Sign up
                    </Link>
                  </p>
                </div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  style={{
                    textAlign: 'center',
                    padding: '16px',
                    background: 'rgba(102, 126, 234, 0.05)',
                    borderRadius: '12px',
                    marginBottom: '16px'
                  }}
                >
                  <div style={{ fontSize: '12px', color: '#6c757d', marginBottom: '8px' }}>
                    <i className="bi bi-shield-fill-check me-2" style={{ color: '#667eea' }}></i>
                    <strong>Secured by Firebase Authentication</strong>
                  </div>
                  <div style={{ fontSize: '11px', color: '#adb5bd' }}>
                    <i className="bi bi-lock-fill me-1"></i>
                    Your data is encrypted and secure
                  </div>
                </motion.div>

                {/* Footer Links */}
                <div style={{
                  textAlign: 'center',
                  fontSize: '12px',
                  color: '#adb5bd',
                  padding: '16px',
                  background: 'rgba(255, 255, 255, 0.5)',
                  borderRadius: '12px'
                }}>
                  <a href="#" style={{ color: '#6c757d', textDecoration: 'none', margin: '0 8px' }}>Privacy</a>
                  <span>•</span>
                  <a href="#" style={{ color: '#6c757d', textDecoration: 'none', margin: '0 8px' }}>Terms</a>
                  <span>•</span>
                  <a href="#" style={{ color: '#6c757d', textDecoration: 'none', margin: '0 8px' }}>Help</a>
                  <div style={{ marginTop: '8px', fontSize: '11px' }}>
                    <i className="bi bi-check-circle me-1" style={{ color: '#28a745' }}></i>
                    GDPR Compliant
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// Signup component with all enhancements
export function Signup() {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { signUp, signInWithGoogle } = useAuth()
  const navigate = useNavigate()

  const getPasswordStrength = (pwd: string) => {
    if (pwd.length < 6) return { strength: 'Weak', color: '#dc3545', width: '33%' }
    if (pwd.length < 10) return { strength: 'Medium', color: '#ffc107', width: '66%' }
    return { strength: 'Strong', color: '#28a745', width: '100%' }
  }

  const passwordStrength = getPasswordStrength(password)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!acceptTerms) {
      toast.error('Please accept the Terms of Service')
      return
    }

    setLoading(true)
    setError('')

    const toastId = toast.loading('Creating your account...')

    try {
      await signUp(email, password, displayName)
      toast.success('Account created! Welcome to Estimatix! 🎉', { id: toastId, duration: 4000 })
      console.log('✅ Signup successful, redirecting to dashboard...')
      navigate('/dashboard')
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to create account'
      setError(errorMessage)
      toast.error(errorMessage, { id: toastId })
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignUp = async () => {
    setLoading(true)
    setError('')

    const toastId = toast.loading('Signing up with Google...')

    try {
      await signInWithGoogle()
      toast.success('Welcome to Estimatix! 🎉', { id: toastId, duration: 4000 })
      console.log('✅ Google signup successful, redirecting to dashboard...')
      navigate('/dashboard')
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to sign up with Google'
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
          duration: 3000,
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
        {/* Animated Background */}
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
                    Create Account
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{ color: '#6c757d', fontSize: '14px', marginBottom: '4px' }}
                  >
                    Join Estimatix and start creating professional quotations
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      marginBottom: 0
                    }}
                  >
                    Estimate smarter. Quote faster.
                  </motion.p>
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

                {/* Signup Form */}
                <form onSubmit={handleSubmit}>
                  {/* Full Name */}
                  <FloatingInput
                    id="displayName"
                    type="text"
                    label="Full Name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    icon="bi-person"
                    placeholder="John Doe"
                    required
                  />

                  {/* Email */}
                  <FloatingInput
                    id="email"
                    type="email"
                    label="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    icon="bi-envelope"
                    placeholder="you@example.com"
                    required
                  />

                  {/* Password with Strength Indicator */}
                  <div className="mb-3">
                    <FloatingInput
                      id="password"
                      type="password"
                      label="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      icon="bi-lock"
                      placeholder="••••••••"
                      required
                      showPasswordToggle
                      showPassword={showPassword}
                      onTogglePassword={() => setShowPassword(!showPassword)}
                    />
                    {password && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        style={{ marginTop: '8px' }}
                      >
                        <div style={{ 
                          height: '4px', 
                          background: '#e9ecef', 
                          borderRadius: '4px',
                          overflow: 'hidden',
                          marginBottom: '4px'
                        }}>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: passwordStrength.width }}
                            style={{
                              height: '100%',
                              background: passwordStrength.color,
                              transition: 'all 0.3s ease'
                            }}
                          />
                        </div>
                        <p style={{ 
                          fontSize: '12px', 
                          color: passwordStrength.color, 
                          margin: 0,
                          fontWeight: 600
                        }}>
                          Password strength: {passwordStrength.strength}
                        </p>
                        <p style={{ fontSize: '11px', color: '#6c757d', margin: '4px 0 0 0' }}>
                          Use at least 10 characters for better security
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Terms & Conditions */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="acceptTerms"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      required
                    />
                    <label className="form-check-label" htmlFor="acceptTerms" style={{ fontSize: '13px', color: '#6c757d' }}>
                      I agree to the{' '}
                      <a href="#" style={{ color: '#667eea', textDecoration: 'none', fontWeight: 600 }}>
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#" style={{ color: '#667eea', textDecoration: 'none', fontWeight: 600 }}>
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  {/* Create Account Button */}
                  <motion.button
                    type="submit"
                    disabled={loading || !acceptTerms}
                    whileHover={!loading && acceptTerms ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!loading && acceptTerms ? { scale: 0.98 } : {}}
                    style={{
                      width: '100%',
                      height: '52px',
                      borderRadius: '12px',
                      border: 'none',
                      background: (loading || !acceptTerms) ? '#ccc' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: (loading || !acceptTerms) ? 'not-allowed' : 'pointer',
                      boxShadow: (loading || !acceptTerms) ? 'none' : '0 8px 20px rgba(102, 126, 234, 0.4)',
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
                        Creating Account...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-person-plus me-2"></i>
                        Create Account
                      </>
                    )}
                  </motion.button>

                  {/* Divider */}
                  <div className="d-flex align-items-center my-4">
                    <div style={{ flex: 1, height: '1px', background: '#e9ecef' }}></div>
                    <span style={{ padding: '0 16px', fontSize: '13px', color: '#6c757d' }}>or continue with</span>
                    <div style={{ flex: 1, height: '1px', background: '#e9ecef' }}></div>
                  </div>

                  {/* Google Sign Up */}
                  <motion.button
                    type="button"
                    onClick={handleGoogleSignUp}
                    disabled={loading}
                    whileHover={!loading ? { scale: 1.02, boxShadow: '0 6px 20px rgba(0,0,0,0.15)' } : {}}
                    whileTap={!loading ? { scale: 0.98 } : {}}
                    style={{
                      width: '100%',
                      height: '48px',
                      borderRadius: '12px',
                      border: '2px solid #e9ecef',
                      background: 'white',
                      color: '#495057',
                      fontSize: '15px',
                      fontWeight: '600',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      marginBottom: '24px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                    }}
                  >
                    <GoogleIcon />
                    Sign up with Google
                  </motion.button>
                </form>

                {/* Navigation Link */}
                <div className="text-center">
                  <p style={{ fontSize: '14px', color: '#6c757d', marginBottom: '16px' }}>
                    Already have an account?{' '}
                    <Link to="/login" style={{ color: '#667eea', fontWeight: '600', textDecoration: 'none' }}>
                      Sign in
                    </Link>
                  </p>
                </div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  style={{
                    textAlign: 'center',
                    padding: '16px',
                    background: 'rgba(102, 126, 234, 0.05)',
                    borderRadius: '12px',
                    marginBottom: '16px'
                  }}
                >
                  <div style={{ fontSize: '12px', color: '#6c757d', marginBottom: '8px' }}>
                    <i className="bi bi-shield-fill-check me-2" style={{ color: '#667eea' }}></i>
                    <strong>Secured by Firebase Authentication</strong>
                  </div>
                  <div style={{ fontSize: '11px', color: '#adb5bd' }}>
                    <i className="bi bi-lock-fill me-1"></i>
                    Your data is encrypted and secure
                  </div>
                </motion.div>

                {/* Footer Links */}
                <div style={{
                  textAlign: 'center',
                  fontSize: '12px',
                  color: '#adb5bd',
                  padding: '16px',
                  background: 'rgba(255, 255, 255, 0.5)',
                  borderRadius: '12px'
                }}>
                  <a href="#" style={{ color: '#6c757d', textDecoration: 'none', margin: '0 8px' }}>Privacy</a>
                  <span>•</span>
                  <a href="#" style={{ color: '#6c757d', textDecoration: 'none', margin: '0 8px' }}>Terms</a>
                  <span>•</span>
                  <a href="#" style={{ color: '#6c757d', textDecoration: 'none', margin: '0 8px' }}>Help</a>
                  <div style={{ marginTop: '8px', fontSize: '11px' }}>
                    <i className="bi bi-check-circle me-1" style={{ color: '#28a745' }}></i>
                    GDPR Compliant
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
