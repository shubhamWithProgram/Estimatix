// Main App component with routing
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import { AuthProvider, useAuth } from './lib/auth'
import  ProtectedRoute  from './components/ProtectedRoute'
import Billing from './components/Billing'
import BillingBadge from './components/BillingBadge'
import { Login, Signup } from './components/Auth'
import Calculator from './App' // Assuming Calculator is defined in a separate file

// Header component with auth integration
function Header() {
  const { user, userProfile, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  return (
    <header className="sticky-top bg-body border-bottom" style={{zIndex: 1030}}>
      <div className="container py-3 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <Link to="/" className="text-decoration-none">
            <h1 className="h5 mb-0 text-body">Venkatesh Aluminium and Glass</h1>
            <small className="text-body-secondary">Windows & Doors • Weight & Cost Estimator</small>
          </Link>
        </div>
        
        <div className="d-flex align-items-center gap-2">
          {user ? (
            <>
              <BillingBadge className="me-2" />
              <Link to="/billing" className="btn btn-outline-secondary btn-sm">
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
    </header>
  )
}

// Main app wrapper
function AppWrapper() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-vh-100 bg-body">
          <Header />
          <Routes>
            <Route path="/" element={<Calculator />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route 
              path="/billing" 
              element={
                <ProtectedRoute>
                  <Billing />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default AppWrapper



