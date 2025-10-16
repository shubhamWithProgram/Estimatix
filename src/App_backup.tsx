// Main App component with routing
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import { AuthProvider, useAuth } from './lib/auth'
import  ProtectedRoute  from './components/ProtectedRoute'
import Billing from './components/Billing'
import BillingBadge from './components/BillingBadge'
import { Login, Signup } from './components/Auth'
import Calculator from './components/Calculator'

// Header component with auth integration
function Header() {
  const { user, userProfile, logout, loading } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/venkatesh_aluminium/')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <header className="sticky-top bg-body border-bottom" style={{zIndex: 1030}}>
      <div className="container py-3 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <Link to="/calculator" className="text-decoration-none">
            <h1 className="h5 mb-0 text-body">Venkatesh Aluminium and Glass</h1>
            <small className="text-body-secondary">Windows & Doors • Weight & Cost Estimator</small>
          </Link>
        </div>
        
        <div className="d-flex align-items-center gap-2">
          {/* DEBUG: Always show navigation buttons */}
          <div className="d-flex gap-2 me-3">
            <Link 
              to="/login" 
              className="btn btn-sm btn-outline-primary"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="btn btn-sm btn-outline-secondary"
            >
              Signup
            </Link>
            <Link 
              to="/calculator" 
              className="btn btn-sm btn-outline-info"
            >
              Calculator
            </Link>
            <Link 
              to="/billing" 
              className="btn btn-sm btn-outline-success"
            >
              Billing
            </Link>
            <span className="badge bg-info">Current: {location.pathname}</span>
          </div>
          
          {/* Auth-based navigation (hidden for now) */}
          <div style={{display: 'none'}}>
          {loading ? (
            <div className="d-flex gap-2">
              <div className="spinner-border spinner-border-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              {/* Show buttons anyway while loading */}
              <Link 
                to="/login" 
                className={`btn btn-sm ${location.pathname === '/login' ? 'btn-primary' : 'btn-outline-primary'}`}
              >
                Sign In
              </Link>
              <Link 
                to="/signup" 
                className={`btn btn-sm ${location.pathname === '/signup' ? 'btn-primary' : 'btn-outline-secondary'}`}
              >
                Sign Up
              </Link>
            </div>
          ) : user ? (
            <>
              <BillingBadge className="me-2" />
              <Link to="/venkatesh_aluminium/billing" className="btn btn-outline-secondary btn-sm">
                Billing
              </Link>
              <div className="dropdown">
                <button 
                  className="btn btn-outline-secondary btn-sm dropdown-toggle" 
                  type="button" 
                  data-bs-toggle="dropdown"
                >
                  {userProfile?.displayName || user.email}
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="/billing">Billing</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item" onClick={handleLogout}>Sign Out</button></li>
                </ul>
              </div>
            </>
          ) : (
            <div className="d-flex gap-2">
              <Link 
                to="/login" 
                className={`btn btn-sm ${location.pathname === '/login' ? 'btn-primary' : 'btn-outline-primary'}`}
              >
                Sign In
              </Link>
              <Link 
                to="/signup" 
                className={`btn btn-sm ${location.pathname === '/signup' ? 'btn-primary' : 'btn-outline-secondary'}`}
              >
                Sign Up
              </Link>
            </div>
          )}
          </div>
        </div>
      </div>
    </header>
  )
}

// Main app wrapper
function AppWrapper() {
  console.log('🚀 AppWrapper rendering...')
  
  return (
    <AuthProvider>
      <Router>
        <div className="min-vh-100 bg-body">
          <div className="alert alert-warning text-center m-2" role="alert">
            <strong>🔧 DEBUG MODE:</strong> AppWrapper is loaded and rendering
          </div>
          <Header />
          <Routes>
            {/* Primary routes - SIMPLE TEST PAGES */}
            <Route path="/" element={
              <div className="container py-5">
                <div className="alert alert-success text-center">
                  <h1>🔓 THIS IS THE LOGIN PAGE</h1>
                  <p>If you see this, routing is working!</p>
                  <p>Current URL: {window.location.pathname}</p>
                </div>
              </div>
            } />
            <Route path="/login" element={
              <div className="container py-5">
                <div className="alert alert-primary text-center">
                  <h1>🔓 LOGIN PAGE</h1>
                  <p>This should be different from other pages!</p>
                  <p>Current URL: {window.location.pathname}</p>
                </div>
              </div>
            } />
            <Route path="/signup" element={
              <div className="container py-5">
                <div className="alert alert-warning text-center">
                  <h1>📝 SIGNUP PAGE</h1>
                  <p>This is the signup page!</p>
                  <p>Current URL: {window.location.pathname}</p>
                </div>
              </div>
            } />
            <Route path="/billing" element={
              <div className="container py-5">
                <div className="alert alert-success text-center">
                  <h1>💰 BILLING PAGE</h1>
                  <p>This is the billing page!</p>
                  <p>Current URL: {window.location.pathname}</p>
                </div>
              </div>
            } />
            <Route path="/calculator" element={
              <div className="container py-5">
                <div className="alert alert-info text-center">
                  <h1>🧮 CALCULATOR PAGE</h1>
                  <p>This is the calculator page!</p>
                  <p>Current URL: {window.location.pathname}</p>
                </div>
                <Calculator />
              </div>
            } />
            
            {/* Catch-all route */}
            <Route path="*" element={
              <div className="container py-5">
                <div className="alert alert-danger text-center">
                  <h1>❌ UNKNOWN PAGE</h1>
                  <p>Path: {window.location.pathname}</p>
                  <p>This is the fallback page!</p>
                </div>
              </div>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default AppWrapper




