// Premium SAAS-Style Authentication Components with Enhanced Animations
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast'
import { useAuth } from '../lib/auth'

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

    try {
      await signIn(email, password)
      console.log('✅ Login successful, redirecting to dashboard...')
      navigate('/dashboard')
    } catch (err: any) {
      setError(err.message || 'Failed to sign in')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setLoading(true)
    setError('')

    try {
      await signInWithGoogle()
      console.log('✅ Google login successful, redirecting to dashboard...')
      navigate('/dashboard')
    } catch (err: any) {
      setError(err.message || 'Failed to sign in with Google')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-container" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative',
      padding: '20px'
    }}>
      {/* Animated Background Gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite',
        opacity: 0.8
      }}></div>

      {/* Floating Shapes */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '300px',
        height: '300px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'float 6s ease-in-out infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '250px',
        height: '250px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'float 8s ease-in-out infinite reverse'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">
            {/* Frosted Glass Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)',
              padding: '48px 40px',
              animation: 'fadeInUp 0.6s ease',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              {/* Logo Area */}
              <div className="text-center mb-4">
                <div style={{
                  width: '64px',
                  height: '64px',
                  margin: '0 auto 20px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 25px rgba(102, 126, 234, 0.4)',
                  animation: 'pulse 2s ease-in-out infinite'
                }}>
                  <i className="bi bi-calculator-fill" style={{ fontSize: '32px', color: 'white' }}></i>
                </div>
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '8px'
                }}>Welcome Back</h2>
                <p style={{ color: '#6c757d', fontSize: '14px', marginBottom: 0 }}>
                  Sign in to access your estimation platform
                </p>
              </div>

              {/* Error Alert */}
              {error && (
                <div className="alert alert-danger" role="alert" style={{
                  borderRadius: '12px',
                  fontSize: '14px',
                  marginBottom: '24px',
                  animation: 'shake 0.5s ease'
                }}>
                  <i className="bi bi-exclamation-circle me-2"></i>
                  {error}
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleSubmit}>
                {/* Email Input */}
                <div className="mb-3">
                  <label htmlFor="email" style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#495057',
                    marginBottom: '8px',
                    display: 'block'
                  }}>
                    <i className="bi bi-envelope me-2"></i>Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      height: '48px',
                      borderRadius: '12px',
                      border: '2px solid #e9ecef',
                      fontSize: '15px',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                    onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                  />
                </div>

                {/* Password Input */}
                <div className="mb-3">
                  <label htmlFor="password" style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#495057',
                    marginBottom: '8px',
                    display: 'block'
                  }}>
                    <i className="bi bi-lock me-2"></i>Password
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="form-control"
                      id="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      style={{
                        height: '48px',
                        borderRadius: '12px',
                        border: '2px solid #e9ecef',
                        fontSize: '15px',
                        paddingRight: '45px',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#667eea'}
                      onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
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
                      <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe" style={{ fontSize: '14px', color: '#6c757d' }}>
                      Remember me
                    </label>
                  </div>
                  <a href="#" style={{
                    fontSize: '14px',
                    color: '#667eea',
                    textDecoration: 'none',
                    fontWeight: '600'
                  }}>
                    Forgot password?
                  </a>
                </div>

                {/* Sign In Button */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%',
                    height: '52px',
                    borderRadius: '12px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                    marginBottom: '20px'
                  }}
                  onMouseOver={(e) => {
                    if (!loading) {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.5)'
                    }
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)'
                  }}
                >
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
                </button>
              </form>

              {/* Divider */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                margin: '24px 0',
                color: '#6c757d',
                fontSize: '14px'
              }}>
                <div style={{ flex: 1, height: '1px', background: '#dee2e6' }}></div>
                <span style={{ padding: '0 16px' }}>or continue with</span>
                <div style={{ flex: 1, height: '1px', background: '#dee2e6' }}></div>
              </div>

              {/* Google Sign In Button */}
              <button
                onClick={handleGoogleSignIn}
                disabled={loading}
                style={{
                  width: '100%',
                  height: '52px',
                  borderRadius: '12px',
                  border: '2px solid #e9ecef',
                  background: 'white',
                  color: '#495057',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px'
                }}
                onMouseOver={(e) => {
                  if (!loading) {
                    e.currentTarget.style.background = '#f8f9fa'
                    e.currentTarget.style.borderColor = '#667eea'
                  }
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'white'
                  e.currentTarget.style.borderColor = '#e9ecef'
                }}
              >
                <GoogleIcon />
                Sign in with Google
              </button>

              {/* Sign Up Link */}
              <div className="text-center mt-4">
                <p style={{ fontSize: '14px', color: '#6c757d', marginBottom: 0 }}>
                  Don't have an account?{' '}
                  <Link to="/signup" style={{
                    color: '#667eea',
                    fontWeight: '600',
                    textDecoration: 'none'
                  }}>
                    Create account
                  </Link>
                </p>
              </div>

              {/* Security Badge */}
              <div className="text-center mt-4 pt-3" style={{ borderTop: '1px solid #e9ecef' }}>
                <small style={{ color: '#9ca3af', fontSize: '12px' }}>
                  <i className="bi bi-shield-check me-1"></i>
                  Secured by Firebase Authentication
                </small>
              </div>
            </div>

            {/* Footer Links */}
            <div className="text-center mt-4">
              <small style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '13px' }}>
                <a href="#" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', marginRight: '16px' }}>Privacy Policy</a>
                <span style={{ opacity: 0.5 }}>•</span>
                <a href="#" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', margin: '0 16px' }}>Terms of Service</a>
                <span style={{ opacity: 0.5 }}>•</span>
                <a href="#" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', marginLeft: '16px' }}>Help</a>
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }

        .form-control:focus {
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
          border-color: #667eea !important;
        }

        .form-check-input:checked {
          background-color: #667eea;
          border-color: #667eea;
        }
      `}</style>
    </div>
  )
}

// Signup component
export function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { signUp, signInWithGoogle } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await signUp(email, password, displayName)
      console.log('✅ Signup successful, redirecting to dashboard...')
      navigate('/dashboard')
    } catch (err: any) {
      setError(err.message || 'Failed to create account')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setLoading(true)
    setError('')

    try {
      await signInWithGoogle()
      console.log('✅ Google signup successful, redirecting to dashboard...')
      navigate('/dashboard')
    } catch (err: any) {
      setError(err.message || 'Failed to sign up with Google')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-container" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative',
      padding: '20px'
    }}>
      {/* Animated Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite',
        opacity: 0.8
      }}></div>

      {/* Floating Shapes */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '300px',
        height: '300px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'float 6s ease-in-out infinite'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">
            {/* Frosted Glass Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              padding: '48px 40px',
              animation: 'fadeInUp 0.6s ease',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              {/* Logo Area */}
              <div className="text-center mb-4">
                <div style={{
                  width: '64px',
                  height: '64px',
                  margin: '0 auto 20px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 25px rgba(102, 126, 234, 0.4)',
                  animation: 'pulse 2s ease-in-out infinite'
                }}>
                  <i className="bi bi-person-plus-fill" style={{ fontSize: '32px', color: 'white' }}></i>
                </div>
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '8px'
                }}>Create Account</h2>
                <p style={{ color: '#6c757d', fontSize: '14px', marginBottom: 0 }}>
                  Start your estimation journey today
                </p>
              </div>

              {/* Error Alert */}
              {error && (
                <div className="alert alert-danger" role="alert" style={{
                  borderRadius: '12px',
                  fontSize: '14px',
                  marginBottom: '24px',
                  animation: 'shake 0.5s ease'
                }}>
                  <i className="bi bi-exclamation-circle me-2"></i>
                  {error}
                </div>
              )}

              {/* Signup Form */}
              <form onSubmit={handleSubmit}>
                {/* Full Name Input */}
                <div className="mb-3">
                  <label htmlFor="displayName" style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#495057',
                    marginBottom: '8px',
                    display: 'block'
                  }}>
                    <i className="bi bi-person me-2"></i>Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="displayName"
                    placeholder="John Doe"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    required
                    style={{
                      height: '48px',
                      borderRadius: '12px',
                      border: '2px solid #e9ecef',
                      fontSize: '15px',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                    onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                  />
                </div>

                {/* Email Input */}
                <div className="mb-3">
                  <label htmlFor="email" style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#495057',
                    marginBottom: '8px',
                    display: 'block'
                  }}>
                    <i className="bi bi-envelope me-2"></i>Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      height: '48px',
                      borderRadius: '12px',
                      border: '2px solid #e9ecef',
                      fontSize: '15px',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                    onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                  />
                </div>

                {/* Password Input */}
                <div className="mb-3">
                  <label htmlFor="password" style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#495057',
                    marginBottom: '8px',
                    display: 'block'
                  }}>
                    <i className="bi bi-lock me-2"></i>Password
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="form-control"
                      id="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={6}
                      style={{
                        height: '48px',
                        borderRadius: '12px',
                        border: '2px solid #e9ecef',
                        fontSize: '15px',
                        paddingRight: '45px',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#667eea'}
                      onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
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
                      <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                    </button>
                  </div>
                  <small style={{ color: '#6c757d', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                    Must be at least 6 characters long
                  </small>
                </div>

                {/* Terms Checkbox */}
                <div className="mb-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="terms" required />
                    <label className="form-check-label" htmlFor="terms" style={{ fontSize: '13px', color: '#6c757d' }}>
                      I agree to the{' '}
                      <a href="#" style={{ color: '#667eea', textDecoration: 'none' }}>Terms of Service</a>
                      {' '}and{' '}
                      <a href="#" style={{ color: '#667eea', textDecoration: 'none' }}>Privacy Policy</a>
                    </label>
                  </div>
                </div>

                {/* Create Account Button */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%',
                    height: '52px',
                    borderRadius: '12px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                    marginBottom: '20px'
                  }}
                  onMouseOver={(e) => {
                    if (!loading) {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.5)'
                    }
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)'
                  }}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Creating Account...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-check-circle me-2"></i>
                      Create Account
                    </>
                  )}
                </button>
              </form>

              {/* Divider */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                margin: '24px 0',
                color: '#6c757d',
                fontSize: '14px'
              }}>
                <div style={{ flex: 1, height: '1px', background: '#dee2e6' }}></div>
                <span style={{ padding: '0 16px' }}>or continue with</span>
                <div style={{ flex: 1, height: '1px', background: '#dee2e6' }}></div>
              </div>

              {/* Google Sign Up Button */}
              <button
                onClick={handleGoogleSignIn}
                disabled={loading}
                style={{
                  width: '100%',
                  height: '52px',
                  borderRadius: '12px',
                  border: '2px solid #e9ecef',
                  background: 'white',
                  color: '#495057',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px'
                }}
                onMouseOver={(e) => {
                  if (!loading) {
                    e.currentTarget.style.background = '#f8f9fa'
                    e.currentTarget.style.borderColor = '#667eea'
                  }
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'white'
                  e.currentTarget.style.borderColor = '#e9ecef'
                }}
              >
                <GoogleIcon />
                Sign up with Google
              </button>

              {/* Sign In Link */}
              <div className="text-center mt-4">
                <p style={{ fontSize: '14px', color: '#6c757d', marginBottom: 0 }}>
                  Already have an account?{' '}
                  <Link to="/login" style={{
                    color: '#667eea',
                    fontWeight: '600',
                    textDecoration: 'none'
                  }}>
                    Sign in
                  </Link>
                </p>
              </div>

              {/* Security Badge */}
              <div className="text-center mt-4 pt-3" style={{ borderTop: '1px solid #e9ecef' }}>
                <small style={{ color: '#9ca3af', fontSize: '12px' }}>
                  <i className="bi bi-shield-check me-1"></i>
                  Secured by Firebase Authentication
                </small>
              </div>
            </div>

            {/* Footer Links */}
            <div className="text-center mt-4">
              <small style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '13px' }}>
                <a href="#" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', marginRight: '16px' }}>Privacy Policy</a>
                <span style={{ opacity: 0.5 }}>•</span>
                <a href="#" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', margin: '0 16px' }}>Terms of Service</a>
                <span style={{ opacity: 0.5 }}>•</span>
                <a href="#" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', marginLeft: '16px' }}>Help</a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { useAuth }


