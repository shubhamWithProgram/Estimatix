import { HashRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './lib/auth'
import { Login, Signup } from './components/Auth'
import Dashboard from './components/Dashboard'
import Billing from './components/Billing'
import Calculator from './components/Calculator'
import AdminSettings from './components/AdminSettings'
import MultiItemCalculator from './components/MultiItemCalculator'
import ThemeToggle from './components/ThemeToggle'

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

function Header() {
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <header className="bg-primary text-white py-3 shadow">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <Link to="/" className="text-white text-decoration-none">
            <h1 className="h5 mb-0">
              <i className="bi bi-building me-2"></i>
              Venkatesh Aluminium & Glass
            </h1>
            <small className="opacity-75">Professional SAAS Calculator Platform</small>
          </Link>
        </div>
        
        <nav className="d-flex gap-2 align-items-center">
          {user ? (
            <>
              {/* Authenticated Navigation */}
              <div className="d-flex gap-1 me-3">
                <Link to="/dashboard" className="btn btn-light btn-sm">
                  <i className="bi bi-speedometer2 me-1"></i>
                  <span className="d-none d-md-inline">Dashboard</span>
                </Link>
                <Link to="/multi-calculator" className="btn btn-light btn-sm">
                  <i className="bi bi-calculator me-1"></i>
                  <span className="d-none d-md-inline">Multi-Item</span>
                </Link>
                <Link to="/calculator" className="btn btn-light btn-sm">
                  <i className="bi bi-gear me-1"></i>
                  <span className="d-none d-md-inline">Simple Calc</span>
                </Link>
                <Link to="/billing" className="btn btn-light btn-sm">
                  <i className="bi bi-credit-card me-1"></i>
                  <span className="d-none d-md-inline">Billing</span>
                </Link>
                <Link to="/admin" className="btn btn-warning btn-sm">
                  <i className="bi bi-shield-check me-1"></i>
                  <span className="d-none d-md-inline">Admin</span>
                </Link>
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* User Menu */}
              <div className="dropdown">
                <button
                  className="btn btn-outline-light btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-circle me-1"></i>
                  <span className="d-none d-md-inline">{user.email}</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <h6 className="dropdown-header">
                      <i className="bi bi-person me-2"></i>
                      Account
                    </h6>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/dashboard">
                      <i className="bi bi-speedometer2 me-2"></i>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/billing">
                      <i className="bi bi-credit-card me-2"></i>
                      Billing & Subscription
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/admin">
                      <i className="bi bi-gear me-2"></i>
                      Admin Settings
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button className="dropdown-item text-danger" onClick={handleLogout}>
                      <i className="bi bi-box-arrow-right me-2"></i>
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              {/* Guest Navigation */}
              <ThemeToggle />
              <div className="d-flex gap-1">
                <Link to="/login" className="btn btn-outline-light btn-sm">
                  <i className="bi bi-box-arrow-in-right me-1"></i>
                  Login
                </Link>
                <Link to="/signup" className="btn btn-light btn-sm">
                  <i className="bi bi-person-plus me-1"></i>
                  Sign Up
                </Link>
              </div>
            </>
          )}
        </nav>
      </div>
              <span className="d-none d-md-inline">Admin</span>
            </Link>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* User Authentication */}
          {user ? (
            <div className="dropdown">
              <button
                className="btn btn-outline-light btn-sm dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person-circle me-1"></i>
                <span className="d-none d-md-inline">{user.email}</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <h6 className="dropdown-header">
                    <i className="bi bi-person me-2"></i>
                    Account
                  </h6>
                </li>
                <li>
                  <Link className="dropdown-item" to="/billing">
                    <i className="bi bi-credit-card me-2"></i>
                    Billing & Subscription
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/admin">
                    <i className="bi bi-gear me-2"></i>
                    Admin Settings
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <button className="dropdown-item text-danger" onClick={handleLogout}>
                    <i className="bi bi-box-arrow-right me-2"></i>
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="d-flex gap-1">
              <Link to="/login" className="btn btn-outline-light btn-sm">
                <i className="bi bi-box-arrow-in-right me-1"></i>
                Login
              </Link>
              <Link to="/signup" className="btn btn-light btn-sm">
                <i className="bi bi-person-plus me-1"></i>
                Sign Up
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-vh-100 d-flex flex-column">
          <Header />
          
          {/* Status Bar */}
          <div className="bg-success text-white py-2">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-3">
                  <span className="badge bg-light text-success">
                    <i className="bi bi-check-circle me-1"></i>
                    SAAS Platform Active
                  </span>
                  <small>
                    <i className="bi bi-clock me-1"></i>
                    Auto-save enabled | Multi-item quotations | Invoice auto-increment
                  </small>
                </div>
                <small>
                  <i className="bi bi-shield-check me-1"></i>
                  Secure & Cloud-synced
                </small>
              </div>
            </div>
          </div>

          <main className="flex-grow-1">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
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

          {/* Footer */}
          <footer className="bg-dark text-white py-3 mt-auto">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <p className="mb-0">
                    <strong>Venkatesh Aluminium & Glass</strong> - Professional Calculator Platform
                  </p>
                  <small className="text-muted">
                    Powered by Advanced SAAS Technology | Version 2.0
                  </small>
                </div>
                <div className="col-md-6 text-md-end">
                  <div className="d-flex justify-content-md-end gap-3">
                    <small>
                      <i className="bi bi-calculator me-1"></i>
                      Multi-Item Quotations
                    </small>
                    <small>
                      <i className="bi bi-receipt me-1"></i>
                      Auto-Invoice Generation
                    </small>
                    <small>
                      <i className="bi bi-palette me-1"></i>
                      Dark/Light Theme
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App