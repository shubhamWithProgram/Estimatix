// Professional Mobile Responsive Header Component
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../lib/auth'
import ThemeToggle from './ThemeToggle'

export default function MobileHeader() {
  const { user, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogout = async () => {
    try {
      await logout()
      setIsMenuOpen(false)
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      {/* Dark Glass Header with Purple Glow */}
      <header 
        className="sticky-top" 
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          background: 'rgba(17, 24, 39, 0.85)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          zIndex: 1000,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4), 0 0 30px rgba(108, 99, 255, 0.1)'
        }}
      >
        <div className="container-fluid" style={{ maxWidth: '1400px', padding: '0 1.5rem' }}>
          <div 
            className="d-flex justify-content-between align-items-center" 
            style={{ 
              minHeight: '68px',
              padding: '0.875rem 0'
            }}
          >
            {/* Premium Brand Logo with Glow */}
            <Link to="/" className="text-decoration-none" onClick={closeMenu}>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-calculator-fill" style={{ 
                  fontSize: '1.5rem',
                  color: '#8B80FF',
                  filter: 'drop-shadow(0 0 8px rgba(139, 128, 255, 0.5))'
                }}></i>
                <div>
                  <span className="fw-semibold" style={{ 
                    fontSize: '1.125rem',
                    letterSpacing: '-0.01em',
                    color: '#F1F5F9',
                    textShadow: '0 0 10px rgba(139, 128, 255, 0.3)'
                  }}>
                    Estimatix
                  </span>
                  <span className="ms-2 d-none d-lg-inline" style={{ 
                    fontSize: '0.875rem',
                    color: '#94A3B8'
                  }}>
                    Professional Estimation Platform
                  </span>
                </div>
              </div>
            </Link>

            {/* Professional Controls */}
            <div className="d-flex align-items-center gap-3">
              <ThemeToggle />
              
              {user ? (
                <>
                  {/* Glass User Avatar */}
                  <div className="d-flex align-items-center d-sm-none">
                    <div className="rounded-circle d-flex align-items-center justify-content-center" 
                         style={{ 
                           width: '40px', 
                           height: '40px',
                           background: 'rgba(108, 99, 255, 0.2)',
                           backdropFilter: 'blur(10px)',
                           border: '1px solid rgba(139, 128, 255, 0.3)',
                           color: '#8B80FF'
                         }}>
                      <i className="bi bi-person-fill"></i>
                    </div>
                  </div>

                  {/* Glass Hamburger Button */}
                  <button
                    className="btn"
                    style={{ 
                      width: '44px', 
                      height: '44px',
                      background: 'rgba(30, 41, 59, 0.6)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '0.75rem',
                      color: '#F1F5F9',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(108, 99, 255, 0.3)'
                      e.currentTarget.style.transform = 'scale(1.05)'
                      e.currentTarget.style.borderColor = 'rgba(139, 128, 255, 0.4)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(30, 41, 59, 0.6)'
                      e.currentTarget.style.transform = 'scale(1)'
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                    }}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                  >
                    <i className={`bi ${isMenuOpen ? 'bi-x-lg' : 'bi-list'} fs-5`}></i>
                  </button>
                </>
              ) : (
                <>
                  {/* Gradient Login & Signup Buttons */}
                  <Link 
                    to="/login" 
                    className="btn text-decoration-none"
                    style={{
                      background: 'rgba(30, 41, 59, 0.6)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '0.625rem',
                      color: '#F1F5F9',
                      fontWeight: '500',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(30, 41, 59, 0.8)'
                      e.currentTarget.style.transform = 'translateY(-1px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(30, 41, 59, 0.6)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                    onClick={closeMenu}
                  >
                    <i className="bi bi-box-arrow-in-right me-2"></i>
                    <span className="d-none d-sm-inline">Login</span>
                  </Link>
                  <Link 
                    to="/signup" 
                    className="btn text-decoration-none"
                    style={{
                      background: 'linear-gradient(90deg, #6C63FF 0%, #8B80FF 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '0.625rem',
                      fontWeight: '600',
                      boxShadow: '0 4px 12px rgba(108, 99, 255, 0.4)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(108, 99, 255, 0.5)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(108, 99, 255, 0.4)'
                    }}
                    onClick={closeMenu}
                  >
                    <i className="bi bi-person-plus me-2"></i>
                    <span className="d-none d-sm-inline">Sign Up</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Dark Glass Mobile Menu Dropdown */}
        {isMenuOpen && user && (
          <div className="shadow-lg" style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div className="container-fluid px-4 py-4">
              {/* Glass User Info Card */}
              <div className="d-flex align-items-center mb-4 pb-4" style={{
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div className="rounded-circle d-flex align-items-center justify-content-center me-3" 
                     style={{ 
                       width: '50px', 
                       height: '50px',
                       background: 'linear-gradient(135deg, #6C63FF 0%, #8B80FF 100%)',
                       boxShadow: '0 6px 20px rgba(108, 99, 255, 0.4)',
                       color: 'white'
                     }}>
                  <i className="bi bi-person-fill fs-5"></i>
                </div>
                <div>
                  <div className="fw-bold" style={{ 
                    fontSize: '1.1rem',
                    fontFamily: "'Inter', system-ui, sans-serif",
                    color: '#F1F5F9'
                  }}>
                    {user?.email?.split('@')[0]}
                  </div>
                  <small style={{ 
                    color: '#94A3B8',
                    fontWeight: '500'
                  }}>
                    {user?.email}
                  </small>
                </div>
              </div>

              {/* Dark Glass Navigation Buttons */}
              <div className="row g-3">
                <div className="col-6">
                  <Link 
                    to="/dashboard" 
                    className="btn w-100 text-start text-decoration-none"
                    style={{
                      background: 'linear-gradient(135deg, #6C63FF 0%, #8B80FF 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '0.75rem',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 12px rgba(108, 99, 255, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(108, 99, 255, 0.4)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(108, 99, 255, 0.3)'
                    }}
                    onClick={closeMenu}
                  >
                    <i className="bi bi-speedometer2 me-2"></i>
                    Dashboard
                  </Link>
                </div>
                <div className="col-6">
                  <Link 
                    to="/multi-calculator" 
                    className="btn w-100 text-start text-decoration-none"
                    style={{
                      background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(17, 153, 142, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(17, 153, 142, 0.3)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(17, 153, 142, 0.2)'
                    }}
                    onClick={closeMenu}
                  >
                    <i className="bi bi-calculator me-2"></i>
                    Multi-Item
                  </Link>
                </div>
                <div className="col-6">
                  <Link 
                    to="/calculator" 
                    className="btn w-100 text-start text-decoration-none"
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.3)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.2)'
                    }}
                    onClick={closeMenu}
                  >
                    <i className="bi bi-gear me-2"></i>
                    Simple Calc
                  </Link>
                </div>
                <div className="col-6">
                  <Link 
                    to="/billing" 
                    className="btn w-100 text-start text-decoration-none"
                    style={{
                      background: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
                      color: '#4a5568',
                      border: 'none',
                      borderRadius: '12px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(251, 194, 235, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(251, 194, 235, 0.3)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(251, 194, 235, 0.2)'
                    }}
                    onClick={closeMenu}
                  >
                    <i className="bi bi-credit-card me-2"></i>
                    Billing
                  </Link>
                </div>
                <div className="col-12">
                  <Link 
                    to="/admin" 
                    className="btn w-100 text-start text-decoration-none"
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.3)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.2)'
                    }}
                    onClick={closeMenu}
                  >
                    <i className="bi bi-shield-check me-2"></i>
                    Admin Settings
                  </Link>
                </div>
              </div>

              {/* Premium Quick Actions */}
              <div className="mt-4 pt-4" style={{
                borderTop: '2px solid rgba(102, 126, 234, 0.1)'
              }}>
                <div className="row g-3">
                  <div className="col-6">
                    <button 
                      className="btn w-100 text-start"
                      style={{
                        background: 'rgba(102, 126, 234, 0.1)',
                        color: '#667eea',
                        border: '1px solid rgba(102, 126, 234, 0.2)',
                        borderRadius: '10px',
                        fontWeight: '500',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(102, 126, 234, 0.15)'
                        e.currentTarget.style.transform = 'translateY(-1px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(102, 126, 234, 0.1)'
                        e.currentTarget.style.transform = 'translateY(0)'
                      }}
                    >
                      <i className="bi bi-file-earmark-pdf me-2"></i>
                      Export PDF
                    </button>
                  </div>
                  <div className="col-6">
                    <button 
                      className="btn w-100 text-start"
                      style={{
                        background: 'rgba(17, 153, 142, 0.1)',
                        color: '#11998e',
                        border: '1px solid rgba(17, 153, 142, 0.2)',
                        borderRadius: '10px',
                        fontWeight: '500',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(17, 153, 142, 0.15)'
                        e.currentTarget.style.transform = 'translateY(-1px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(17, 153, 142, 0.1)'
                        e.currentTarget.style.transform = 'translateY(0)'
                      }}
                    >
                      <i className="bi bi-share me-2"></i>
                      Share Quote
                    </button>
                  </div>
                </div>
              </div>

              {/* Elegant Logout */}
              <div className="mt-4 pt-4" style={{
                borderTop: '2px solid rgba(102, 126, 234, 0.1)'
              }}>
                <button 
                  className="btn w-100 text-center"
                  style={{
                    background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(255, 107, 107, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 107, 107, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.2)'
                  }}
                  onClick={handleLogout}
                >
                  <i className="bi bi-box-arrow-right me-2"></i>
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Overlay for menu */}
      {isMenuOpen && (
        <div 
          className="position-fixed w-100 h-100 bg-black bg-opacity-25"
          style={{ top: 0, left: 0, zIndex: 1040 }}
          onClick={closeMenu}
        />
      )}

      {/* Custom CSS for mobile optimizations */}
      <style>{`
        .tiny-text {
          font-size: 0.7rem;
          line-height: 1;
        }
        
        @media (max-width: 576px) {
          .container-fluid {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
        }
        
        /* Ensure mobile menu appears above other content */
        .sticky-top {
          z-index: 1050;
        }
        
        /* Mobile-friendly button sizes */
        @media (max-width: 768px) {
          .btn-sm {
            padding: 0.25rem 0.5rem;
            font-size: 0.875rem;
          }
        }
        
        /* Improved touch targets for mobile */
        .btn {
          min-height: 38px;
        }
        
        /* Better spacing on mobile */
        @media (max-width: 576px) {
          .gap-2 {
            gap: 0.25rem !important;
          }
        }
      `}</style>
    </>
  )
}

// Desktop Header Component (for larger screens)
export function DesktopHeader() {
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <header className="py-3 shadow d-none d-lg-block" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Link to="/" className="text-white text-decoration-none">
              <h1 className="h5 mb-0 text-white">
                <i className="bi bi-calculator-fill me-2"></i>
                Estimatix
              </h1>
              <small className="opacity-75 text-white">Professional Estimation Platform</small>
            </Link>
          </div>
          
          <nav className="d-flex gap-2 align-items-center">
            {user ? (
              <>
                <div className="d-flex gap-1 me-3">
                  <Link to="/dashboard" className="btn btn-light btn-sm">
                    <i className="bi bi-speedometer2 me-1"></i>
                    Dashboard
                  </Link>
                  <Link to="/multi-calculator" className="btn btn-light btn-sm">
                    <i className="bi bi-calculator me-1"></i>
                    Multi-Item
                  </Link>
                  <Link to="/calculator" className="btn btn-light btn-sm">
                    <i className="bi bi-gear me-1"></i>
                    Simple Calc
                  </Link>
                  <Link to="/billing" className="btn btn-light btn-sm">
                    <i className="bi bi-credit-card me-1"></i>
                    Billing
                  </Link>
                  <Link to="/admin" 
                    className="btn btn-sm" 
                    style={{
                      background: 'linear-gradient(90deg, #facc15, #eab308)',
                      color: '#1e1e1e',
                      fontWeight: '600',
                      border: 'none',
                      boxShadow: '0 0 8px rgba(250, 204, 21, 0.4)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 12px rgba(250, 204, 21, 0.6)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 8px rgba(250, 204, 21, 0.4)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    <i className="bi bi-shield-check me-1"></i>
                    Admin
                  </Link>
                </div>

                <ThemeToggle />

                <div className="dropdown">
                  <button
                    className="btn btn-outline-light btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-person-circle me-1"></i>
                    {user?.email}
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
      </div>
    </header>
  )
}

// Combined Responsive Header
export function ResponsiveHeader() {
  return (
    <>
      {/* Mobile Header - visible on small screens */}
      <div className="d-lg-none">
        <MobileHeader />
      </div>
      
      {/* Desktop Header - visible on large screens */}
      <div className="d-none d-lg-block">
        <DesktopHeader />
      </div>
    </>
  )
}