import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AuthProvider, useAuth } from './lib/auth'
import { ThemeProvider } from './contexts/ThemeContext'
import { Login, Signup, ForgotPassword } from './components/Auth_bootstrap'
import Dashboard from './components/Dashboard'
import Billing from './components/Billing'
import Calculator from './components/Calculator'
import AdminSettings from './components/AdminSettings'
import MultiItemCalculator from './components/MultiItemCalculator'
import SharedQuoteViewer from './components/SharedQuoteViewer'
import OnboardingWizard from './components/OnboardingWizard'
import { ResponsiveHeader } from './components/ResponsiveHeader.tsx'
import { useState, useEffect } from 'react'

// Protected Route Component
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
  
  return user ? <>{children}</> : <Navigate to="/login" />
}

// Layout wrapper component to conditionally show header/footer
function AppLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  const location = useLocation()
  const isAuthPage = location.pathname.includes('/login') || 
                     location.pathname.includes('/signup') || 
                     location.pathname.includes('/forgot-password')
  
  // Show auth pages without header/footer
  if (isAuthPage || !user) {
    return <>{children}</>
  }

  // Show full layout for authenticated pages
  return (
    <>
      <ResponsiveHeader />
      
      {/* Removed status bar for cleaner design - features are self-evident */}

      {children}

      {/* Footer */}
      <footer className="bg-dark text-white py-3 mt-auto">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0">
                <strong>Estimatix</strong> - Professional Estimation & Quotation Platform
              </p>
              <small className="text-muted">
                Powered by Firebase & Advanced SaaS Technology | Version 1.0
              </small>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="d-flex justify-content-md-end gap-3">
                <small>
                  <i className="bi bi-calculator me-1"></i>
                  Smart Estimations
                </small>
                <small>
                  <i className="bi bi-file-earmark-pdf me-1"></i>
                  PDF Export
                </small>
                <small>
                  <i className="bi bi-palette me-1"></i>
                  Theme Toggle
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

// Onboarding Check Component
function OnboardingCheck({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  const [showOnboarding, setShowOnboarding] = useState(false)

  useEffect(() => {
    if (user) {
      const hasOnboarded = localStorage.getItem('estimatix-onboarded')
      setShowOnboarding(!hasOnboarded)
    }
  }, [user])

  const handleOnboardingComplete = () => {
    setShowOnboarding(false)
  }

  if (user && showOnboarding) {
    return <OnboardingWizard onComplete={handleOnboardingComplete} />
  }

  return <>{children}</>
}

// Wrapper to ensure AppLayout re-renders on auth changes
function AppLayoutWrapper() {
  const { user } = useAuth()
  
  return (
    <AppLayout key={user?.uid || 'logged-out'}>
      <main className="flex-grow-1">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/shared/:shareToken" element={<SharedQuoteViewer />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/billing" element={
            <ProtectedRoute>
              <Billing />
            </ProtectedRoute>
          } />
          <Route path="/calculator" element={
            <ProtectedRoute>
              <Calculator />
            </ProtectedRoute>
          } />
          <Route path="/multi-calculator" element={
            <ProtectedRoute>
              <MultiItemCalculator />
            </ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminSettings />
            </ProtectedRoute>
          } />
          <Route path="/" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </AppLayout>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-vh-100 d-flex flex-column">
            <OnboardingCheck>
              <AppLayoutWrapper />
            </OnboardingCheck>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App