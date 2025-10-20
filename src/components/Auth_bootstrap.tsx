// Premium Bootstrap 5 Glassmorphism Authentication Components
// Matches login-premium.html design exactly
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast'
import { useAuth } from '../lib/auth'

// Google SVG Logo Component
const GoogleIcon = () => (
  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
)

// Premium Styles Component (exact match from login-premium.html)
const PremiumStyles = () => (
  <style>{`
    /* Animated Radial Gradient Background */
    .premium-page-background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 30% 20%, #7C3AED, #4C1D95 50%, #2D1B69);
      z-index: -3;
      animation: backgroundPulse 20s ease-in-out infinite;
    }

    @keyframes backgroundPulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.05); opacity: 0.95; }
    }

    /* Floating Gradient Blobs */
    .premium-gradient-blob {
      position: fixed;
      border-radius: 50%;
      filter: blur(60px);
      animation: blobFloat 15s ease-in-out infinite;
      z-index: -2;
    }

    .premium-gradient-blob-1 {
      width: 500px;
      height: 500px;
      top: -150px;
      left: -150px;
      background: radial-gradient(circle, rgba(167, 139, 250, 0.4), transparent 70%);
      animation-delay: 0s;
    }

    .premium-gradient-blob-2 {
      width: 500px;
      height: 500px;
      bottom: -200px;
      right: -200px;
      background: radial-gradient(circle, rgba(99, 102, 241, 0.3), transparent 70%);
      animation-delay: 7s;
    }

    @keyframes blobFloat {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -40px) scale(1.1); }
      66% { transform: translate(-30px, 30px) scale(0.9); }
    }

    /* Vignette Effect */
    .premium-vignette {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background: radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.5) 100%);
      z-index: -1;
    }

    /* Diagonal Watermark */
    .premium-watermark {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-30deg);
      font-size: 7rem;
      font-weight: 900;
      color: rgba(255, 255, 255, 0.03);
      letter-spacing: 1rem;
      pointer-events: none;
      user-select: none;
      z-index: 0;
      mix-blend-mode: soft-light;
    }

    /* Glassmorphic Card */
    .premium-glass-card {
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 1.25rem;
      box-shadow: 
        0 8px 40px rgba(0, 0, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
      padding: 2.5rem 2rem;
      width: 100%;
      max-width: 400px;
      position: relative;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      animation: cardFadeIn 0.8s ease-out, cardFloat 6s ease-in-out infinite;
      overflow: hidden;
    }

    /* Glass Reflection Effect */
    .premium-glass-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 50%;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), transparent);
      border-radius: 1.25rem 1.25rem 0 0;
      pointer-events: none;
    }

    .premium-glass-card:hover {
      transform: translateY(-6px);
      box-shadow: 
        0 12px 50px rgba(0, 0, 0, 0.5),
        0 0 40px rgba(167, 139, 250, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.15);
    }

    @keyframes cardFadeIn {
      from { 
        opacity: 0;
        transform: translateY(30px) scale(0.95);
      }
      to { 
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes cardFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }

    /* Logo with Pulsing Glow */
    .premium-logo-container {
      position: relative;
      display: inline-block;
    }

    .premium-logo-pulse {
      position: absolute;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, rgba(167, 139, 250, 0.6), transparent 70%);
      border-radius: 50%;
      animation: logoPulse 3s ease-in-out infinite;
      z-index: 0;
    }

    @keyframes logoPulse {
      0%, 100% { 
        transform: scale(1);
        opacity: 0.5;
      }
      50% { 
        transform: scale(1.4);
        opacity: 0.8;
      }
    }

    .premium-logo-icon {
      width: 70px;
      height: 70px;
      background: linear-gradient(135deg, #8B5CF6, #6366F1);
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.2rem;
      color: white;
      position: relative;
      z-index: 1;
      filter: drop-shadow(0 0 15px rgba(167, 139, 250, 0.7));
      animation: iconGlow 3s ease-in-out infinite;
    }

    @keyframes iconGlow {
      0%, 100% { filter: drop-shadow(0 0 15px rgba(167, 139, 250, 0.7)); }
      50% { filter: drop-shadow(0 0 25px rgba(167, 139, 250, 1)); }
    }

    /* Brand Name with Gradient */
    .premium-brand-name {
      font-size: 2rem;
      font-weight: 800;
      background: linear-gradient(90deg, #A78BFA, #7C3AED);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: -0.5px;
      margin: 0;
    }

    /* Edition Badge */
    .premium-edition-badge {
      display: inline-block;
      background: rgba(255, 255, 255, 0.15);
      color: rgba(255, 255, 255, 0.85);
      padding: 0.25rem 0.75rem;
      border-radius: 2rem;
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-top: 0.5rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    /* Form Controls */
    .premium-form-label {
      color: rgba(255, 255, 255, 0.85);
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 0.4rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    .premium-form-control {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.25);
      color: #FFF;
      border-radius: 0.75rem;
      padding: 0.875rem 1rem;
      font-size: 0.95rem;
      transition: all 0.3s ease;
      height: auto;
    }

    .premium-form-control::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }

    .premium-form-control:focus {
      background: rgba(255, 255, 255, 0.15);
      border-color: #A78BFA;
      box-shadow: 
        0 0 0 3px rgba(167, 139, 250, 0.2),
        0 4px 12px rgba(167, 139, 250, 0.15);
      color: #FFF;
      outline: none;
    }

    /* Password Toggle */
    .premium-password-toggle {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      color: rgba(255, 255, 255, 0.6);
      cursor: pointer;
      transition: color 0.2s;
      padding: 0;
      font-size: 1.1rem;
    }

    .premium-password-toggle:hover {
      color: rgba(255, 255, 255, 0.9);
    }

    /* Custom Premium Checkbox */
    .premium-form-check-input {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.4);
      width: 20px;
      height: 20px;
      border-radius: 4px;
      cursor: pointer;
      position: relative;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      flex-shrink: 0;
    }

    .premium-form-check-input:hover {
      border-color: #a78bfa;
      box-shadow: 0 0 4px rgba(167, 139, 250, 0.3);
    }

    .premium-form-check-input:checked {
      background: linear-gradient(90deg, #8b5cf6, #7c3aed);
      border-color: #8b5cf6;
      box-shadow: 0 0 8px rgba(167, 139, 250, 0.6);
      transform: scale(1.05);
    }

    .premium-form-check-input:checked::before {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 14px;
      font-weight: bold;
      animation: checkmarkPop 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    @keyframes checkmarkPop {
      0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
      }
      50% {
        transform: translate(-50%, -50%) scale(1.2);
      }
      100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }
    }

    .premium-form-check-input:focus {
      box-shadow: 0 0 0 3px rgba(167, 139, 250, 0.25);
      border-color: #A78BFA;
      outline: none;
    }

    .premium-form-check-input:active {
      transform: scale(0.95);
    }

    .premium-form-check-label {
      color: rgba(255, 255, 255, 0.85);
      cursor: pointer;
      user-select: none;
      font-size: 0.9rem;
      transition: color 0.2s ease;
      margin-left: 0.25rem;
    }

    .premium-form-check-label:hover {
      color: #d9d9ff;
    }

    /* Buttons */
    .premium-btn-primary {
      width: 100%;
      background: linear-gradient(90deg, #7C3AED, #6D28D9);
      border: none;
      color: white;
      font-weight: 600;
      font-size: 1rem;
      padding: 0.875rem;
      border-radius: 0.75rem;
      transition: all 0.3s ease;
      box-shadow: 0 4px 16px rgba(124, 58, 237, 0.4);
      position: relative;
      overflow: hidden;
      cursor: pointer;
    }

    .premium-btn-primary::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
      transition: left 0.6s ease;
    }

    .premium-btn-primary:hover::before {
      left: 100%;
    }

    .premium-btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 
        0 6px 24px rgba(124, 58, 237, 0.5),
        0 0 30px rgba(167, 139, 250, 0.6);
    }

    .premium-btn-primary:active {
      transform: scale(0.98);
      box-shadow: 0 2px 8px rgba(124, 58, 237, 0.4);
    }

    .premium-btn-primary:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }

    .premium-btn-secondary {
      width: 100%;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.25);
      color: white;
      font-weight: 500;
      padding: 0.75rem;
      border-radius: 0.75rem;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      cursor: pointer;
    }

    .premium-btn-secondary:hover {
      background: rgba(255, 255, 255, 0.18);
      border-color: rgba(255, 255, 255, 0.4);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .premium-btn-secondary:active {
      transform: scale(0.98);
    }

    /* Divider */
    .premium-divider {
      display: flex;
      align-items: center;
      margin: 1.5rem 0;
    }

    .premium-divider-line {
      flex: 1;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
    }

    .premium-divider-text {
      color: rgba(255, 255, 255, 0.5);
      font-size: 0.85rem;
      padding: 0 1rem;
    }

    /* Links */
    .premium-link {
      color: #A78BFA;
      text-decoration: none;
      transition: all 0.2s;
      font-weight: 500;
    }

    .premium-link:hover {
      color: #C4B5FD;
      text-decoration: underline;
    }

    /* Text Colors */
    .premium-text-primary {
      color: rgba(255, 255, 255, 0.95);
    }

    .premium-text-secondary {
      color: rgba(255, 255, 255, 0.7);
    }

    .premium-text-muted {
      color: rgba(255, 255, 255, 0.5);
    }

    /* Responsive */
    @media (max-width: 480px) {
      .premium-watermark {
        font-size: 4rem;
      }
      
      .premium-glass-card {
        padding: 2rem 1.5rem;
      }

      .premium-brand-name {
        font-size: 1.75rem;
      }

      .premium-logo-icon {
        width: 60px;
        height: 60px;
        font-size: 1.8rem;
      }
    }

    /* Page Load Animation */
    .premium-page-load {
      animation: pageLoad 0.8s ease-out;
    }

    @keyframes pageLoad {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `}</style>
)

// Login Component
export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const { signIn, signInWithGoogle } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const toastId = toast.loading('Signing in...')

    try {
      await signIn(email, password)
      toast.success('Welcome back! 🎉', { id: toastId })
      navigate('/dashboard')
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to sign in'
      toast.error(errorMessage, { id: toastId })
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setLoading(true)
    const toastId = toast.loading('Signing in with Google...')

    try {
      await signInWithGoogle()
      toast.success('Welcome! 🎉', { id: toastId })
      navigate('/dashboard')
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to sign in with Google'
      toast.error(errorMessage, { id: toastId })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Toaster position="top-center" />
      <PremiumStyles />
      
      {/* Background Elements */}
      <div className="premium-page-background" />
      <div className="premium-gradient-blob premium-gradient-blob-1" />
      <div className="premium-gradient-blob premium-gradient-blob-2" />
      <div className="premium-vignette" />
      <div className="premium-watermark">ESTIMATIX</div>

      {/* Main Container */}
      <div className="min-vh-100 d-flex align-items-center justify-content-center p-3 premium-page-load" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="premium-glass-card"
        >
          {/* Logo Section */}
          <div className="text-center mb-4">
            <div className="premium-logo-container d-inline-block mb-3">
              <div className="premium-logo-pulse"></div>
              <div className="premium-logo-icon">
                <i className="bi bi-calculator"></i>
              </div>
            </div>
            <h1 className="premium-brand-name">Estimatix</h1>
            <span className="premium-edition-badge">Professional Edition</span>
          </div>

          {/* Welcome Text */}
          <div className="text-center mb-4">
            <h2 className="h4 premium-text-primary fw-semibold mb-2">Welcome Back 👋</h2>
            <p className="small premium-text-secondary">
              Sign in to access your professional workspace
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-3">
              <label htmlFor="email" className="premium-form-label">
                <i className="bi bi-envelope"></i>
                Email Address
              </label>
              <input
                type="email"
                className="form-control premium-form-control"
                id="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                autoFocus
              />
            </div>

            {/* Password Input */}
            <div className="mb-3">
              <label htmlFor="password" className="premium-form-label">
                <i className="bi bi-lock"></i>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control premium-form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  style={{ paddingRight: '3rem' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="premium-password-toggle"
                  aria-label="Toggle password visibility"
                >
                  <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="d-flex align-items-center gap-2">
                <input
                  type="checkbox"
                  className="premium-form-check-input"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label className="premium-form-check-label small" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="small premium-link">
                Forgot password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="btn premium-btn-primary"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Signing in...
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
          <div className="premium-divider">
            <div className="premium-divider-line"></div>
            <span className="premium-divider-text">or continue with</span>
            <div className="premium-divider-line"></div>
          </div>

          {/* Google Sign In */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn premium-btn-secondary"
            disabled={loading}
          >
            <GoogleIcon />
            <span>Sign in with Google</span>
          </button>

          {/* Footer Links */}
          <div className="text-center mt-4">
            <p className="small mb-0 premium-text-secondary">
              Don't have an account?{' '}
              <Link to="/signup" className="premium-link fw-semibold">
                Sign up
              </Link>
            </p>
          </div>

          <div className="text-center mt-3">
            <p className="small mb-0 premium-text-muted" style={{ fontSize: '0.75rem' }}>
              © 2025 Estimatix. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  )
}

// Signup Component
export function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const { signUp, signInWithGoogle } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
      return
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters')
      return
    }

    if (!agreeTerms) {
      toast.error('Please agree to the Terms and Conditions')
      return
    }

    setLoading(true)
    const toastId = toast.loading('Creating your account...')

    try {
      await signUp(email, password, name)
      toast.success('Account created successfully! 🎉', { id: toastId })
      navigate('/dashboard')
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to create account'
      toast.error(errorMessage, { id: toastId })
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    if (!agreeTerms) {
      toast.error('Please agree to the Terms and Conditions')
      return
    }

    setLoading(true)
    const toastId = toast.loading('Signing up with Google...')

    try {
      await signInWithGoogle()
      toast.success('Welcome to Estimatix! 🎉', { id: toastId })
      navigate('/dashboard')
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to sign up with Google'
      toast.error(errorMessage, { id: toastId })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Toaster position="top-center" />
      <PremiumStyles />
      
      {/* Background Elements */}
      <div className="premium-page-background" />
      <div className="premium-gradient-blob premium-gradient-blob-1" />
      <div className="premium-gradient-blob premium-gradient-blob-2" />
      <div className="premium-vignette" />
      <div className="premium-watermark">ESTIMATIX</div>

      {/* Main Container */}
      <div className="min-vh-100 d-flex align-items-center justify-content-center p-3 premium-page-load" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="premium-glass-card"
          style={{ maxWidth: '440px' }}
        >
          {/* Logo Section */}
          <div className="text-center mb-4">
            <div className="premium-logo-container d-inline-block mb-3">
              <div className="premium-logo-pulse"></div>
              <div className="premium-logo-icon">
                <i className="bi bi-calculator"></i>
              </div>
            </div>
            <h1 className="premium-brand-name">Estimatix</h1>
            <span className="premium-edition-badge">Professional Edition</span>
          </div>

          {/* Welcome Text */}
          <div className="text-center mb-4">
            <h2 className="h4 premium-text-primary fw-semibold mb-2">Create Account 🚀</h2>
            <p className="small premium-text-secondary">
              Join Estimatix and start calculating estimates like a pro
            </p>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-3">
              <label htmlFor="name" className="premium-form-label">
                <i className="bi bi-person"></i>
                Full Name
              </label>
              <input
                type="text"
                className="form-control premium-form-control"
                id="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
                autoFocus
              />
            </div>

            {/* Email Input */}
            <div className="mb-3">
              <label htmlFor="email" className="premium-form-label">
                <i className="bi bi-envelope"></i>
                Email Address
              </label>
              <input
                type="email"
                className="form-control premium-form-control"
                id="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            {/* Password Input */}
            <div className="mb-3">
              <label htmlFor="password" className="premium-form-label">
                <i className="bi bi-lock"></i>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control premium-form-control"
                  id="password"
                  placeholder="Minimum 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="new-password"
                  style={{ paddingRight: '3rem' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="premium-password-toggle"
                  aria-label="Toggle password visibility"
                >
                  <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                </button>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="premium-form-label">
                <i className="bi bi-lock-fill"></i>
                Confirm Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="form-control premium-form-control"
                  id="confirmPassword"
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  autoComplete="new-password"
                  style={{ paddingRight: '3rem' }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="premium-password-toggle"
                  aria-label="Toggle confirm password visibility"
                >
                  <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="mb-4">
              <div className="d-flex align-items-start gap-2">
                <input
                  type="checkbox"
                  className="premium-form-check-input mt-1"
                  id="agreeTerms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  required
                />
                <label className="premium-form-check-label small" htmlFor="agreeTerms">
                  I agree to the{' '}
                  <a href="#" className="premium-link">
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="btn premium-btn-primary"
              disabled={loading}
              style={{ background: 'linear-gradient(90deg, #10B981, #14B8A6)' }}
            >
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
            </button>
          </form>

          {/* Divider */}
          <div className="premium-divider">
            <div className="premium-divider-line"></div>
            <span className="premium-divider-text">or continue with</span>
            <div className="premium-divider-line"></div>
          </div>

          {/* Google Sign Up */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn premium-btn-secondary"
            disabled={loading}
          >
            <GoogleIcon />
            <span>Sign up with Google</span>
          </button>

          {/* Footer Links */}
          <div className="text-center mt-4">
            <p className="small mb-0 premium-text-secondary">
              Already have an account?{' '}
              <Link to="/login" className="premium-link fw-semibold">
                Sign in
              </Link>
            </p>
          </div>

          <div className="text-center mt-3">
            <p className="small mb-0 premium-text-muted" style={{ fontSize: '0.75rem' }}>
              © 2025 Estimatix. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  )
}

// Forgot Password Component
export function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const { resetPassword } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSuccess(false)
    setLoading(true)

    const toastId = toast.loading('Sending reset link...')

    try {
      await resetPassword(email)
      setSuccess(true)
      toast.success('Password reset link sent to your email! 📧', { id: toastId })
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to send reset link'
      toast.error(errorMessage, { id: toastId })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Toaster position="top-center" />
      <PremiumStyles />
      
      {/* Background Elements */}
      <div className="premium-page-background" />
      <div className="premium-gradient-blob premium-gradient-blob-1" />
      <div className="premium-gradient-blob premium-gradient-blob-2" />
      <div className="premium-vignette" />
      <div className="premium-watermark">ESTIMATIX</div>

      {/* Main Container */}
      <div className="min-vh-100 d-flex align-items-center justify-content-center p-3 premium-page-load" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="premium-glass-card"
        >
          {/* Logo Section */}
          <div className="text-center mb-4">
            <div className="premium-logo-container d-inline-block mb-3">
              <div className="premium-logo-pulse"></div>
              <div className="premium-logo-icon">
                <i className="bi bi-key"></i>
              </div>
            </div>
            <h1 className="premium-brand-name">Estimatix</h1>
            <span className="premium-edition-badge">Professional Edition</span>
          </div>

          {/* Welcome Text */}
          <div className="text-center mb-4">
            <h2 className="h4 premium-text-primary fw-semibold mb-2">Reset Password 🔑</h2>
            <p className="small premium-text-secondary">
              Enter your email address and we'll send you a link to reset your password
            </p>
          </div>

          {/* Success Message */}
          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="alert mb-4"
                style={{
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: '#6EE7B7',
                  borderRadius: '0.75rem'
                }}
              >
                <i className="bi bi-check-circle me-2"></i>
                Check your email for the password reset link!
              </motion.div>
            )}
          </AnimatePresence>

          {/* Reset Form */}
          {!success && (
            <form onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="mb-4">
                <label htmlFor="email" className="premium-form-label">
                  <i className="bi bi-envelope"></i>
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control premium-form-control"
                  id="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  autoFocus
                />
              </div>

              {/* Reset Button */}
              <button
                type="submit"
                className="btn premium-btn-primary"
                disabled={loading}
                style={{ background: 'linear-gradient(90deg, #3B82F6, #06B6D4)' }}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    Sending Link...
                  </>
                ) : (
                  <>
                    <i className="bi bi-send me-2"></i>
                    Send Reset Link
                  </>
                )}
              </button>
            </form>
          )}

          {/* Success Actions */}
          {success && (
            <div className="text-center">
              <Link
                to="/login"
                className="btn premium-btn-primary"
                style={{ background: 'linear-gradient(90deg, #3B82F6, #06B6D4)' }}
              >
                <i className="bi bi-arrow-left me-2"></i>
                Back to Sign In
              </Link>
            </div>
          )}

          {/* Footer Links */}
          <div className="text-center mt-4">
            <p className="small mb-0 premium-text-secondary">
              Remember your password?{' '}
              <Link to="/login" className="premium-link fw-semibold">
                Sign in
              </Link>
            </p>
          </div>

          <div className="text-center mt-3">
            <p className="small mb-0 premium-text-muted" style={{ fontSize: '0.75rem' }}>
              © 2025 Estimatix. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  )
}
