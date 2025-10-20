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
      {/* Professional SaaS Header - Brand Purple Theme */}
      <header 
        className="sticky-top" 
        style={{
          background: 'linear-gradient(135deg, #563d7c, #3b2a59)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          zIndex: 1000
        }}
      >
        <div className="container-fluid" style={{ maxWidth: '1400px', padding: '0 1.5rem' }}>
          <div 
            className="d-flex justify-content-between align-items-center" 
            style={{ 
              minHeight: '64px',
              padding: '0.75rem 0'
            }}
          >
            {/* Clean Brand Logo */}
            <Link to="/" className="text-decoration-none" onClick={closeMenu}>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-calculator-fill text-violet" style={{ 
                  fontSize: '1.25rem',
                  color: '#a855f7'
                }}></i>
                <div>
                  <span className="text-white fw-semibold" style={{ 
                    fontSize: '1.1rem',
                    letterSpacing: '0.3px'
                  }}>
                    Estimatix
                  </span>
                  <span className="text-muted ms-2 d-none d-lg-inline" style={{ 
                    fontSize: '0.85rem',
                    color: '#94a3b8'
                  }}>
                    Professional Estimation Suite
                  </span>
                </div>
              </div>
            </Link>

            {/* Professional Controls */}
            <div className="d-flex align-items-center gap-2">
              {/* Theme Toggle - Always visible */}
              <div>
                <ThemeToggle />
              </div>
              
              {user ? (
                <>
                  {/* Professional User Avatar - Mobile */}
                  <div className="d-flex align-items-center d-md-none">
                    <div className="bg-white bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center text-white" 
                         style={{ 
                           width: '40px', 
                           height: '40px',
                           backdropFilter: 'blur(10px)',
                           border: '2px solid rgba(255,255,255,0.3)',
                           fontSize: '1rem'
                         }}>
                      <i className="bi bi-person-fill"></i>
                    </div>
                  </div>

                  {/* Elegant Hamburger Menu */}
                  <button
                    className="btn text-white p-0"
                    style={{ 
                      width: '44px', 
                      height: '44px',
                      background: 'rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(10px)',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      WebkitTapHighlightColor: 'transparent'
                    }}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                  >
                    <i className={`bi ${isMenuOpen ? 'bi-x-lg' : 'bi-list'} fs-4`}></i>
                  </button>
                </>
              ) : (
                <>
                  {/* Elegant Guest Actions */}
                  <Link 
                    to="/login" 
                    className="btn text-white text-decoration-none"
                    style={{
                      background: 'rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      borderRadius: '10px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.25)'
                      e.currentTarget.style.transform = 'translateY(-1px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
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
                      background: 'linear-gradient(45deg, #ffffff 0%, #f8f9fa 100%)',
                      color: '#667eea',
                      border: 'none',
                      borderRadius: '10px',
                      fontWeight: '600',
                      boxShadow: '0 4px 15px rgba(255,255,255,0.2)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,255,255,0.3)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(255,255,255,0.2)'
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

        {/* Professional Mobile Menu Dropdown */}
        {isMenuOpen && user && (
          <div 
            className="position-relative"
            style={{
              background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
              borderTop: '1px solid rgba(102, 126, 234, 0.1)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
              zIndex: 1060
            }}
          >
            <div className="container-fluid px-3 px-md-4 py-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
              {/* Elegant User Info */}
              <div className="d-flex align-items-center mb-4 pb-3" style={{
                borderBottom: '2px solid rgba(102, 126, 234, 0.1)'
              }}>
                <div className="rounded-circle d-flex align-items-center justify-content-center text-white me-3" 
                     style={{ 
                       width: '56px', 
                       height: '56px',
                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                       boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                       flexShrink: 0
                     }}>
                  <i className="bi bi-person-fill fs-4"></i>
                </div>
                <div className="flex-grow-1" style={{ minWidth: 0 }}>
                  <div className="fw-bold text-dark text-truncate" style={{ 
                    fontSize: '1.15rem',
                    fontFamily: "'Segoe UI', system-ui, sans-serif"
                  }}>
                    {user?.email?.split('@')[0]}
                  </div>
                  <small className="text-truncate d-block" style={{ 
                    color: '#667eea',
                    fontWeight: '500'
                  }}>
                    {user?.email}
                  </small>
                </div>
              </div>

              {/* Premium Navigation Items - Mobile Optimized */}
              <div className="row g-3">
                <div className="col-6">
                  <Link 
                    to="/dashboard" 
                    className="btn w-100 text-center text-decoration-none d-flex flex-column align-items-center justify-content-center"
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '16px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 20px rgba(102, 126, 234, 0.25)',
                      padding: '1rem 0.5rem',
                      minHeight: '85px',
                      fontSize: '0.9rem',
                      WebkitTapHighlightColor: 'transparent',
                      touchAction: 'manipulation'
                    }}
                    onClick={closeMenu}
                  >
                    <i className="bi bi-speedometer2 fs-3 mb-2"></i>
                    <span>Dashboard</span>
                  </Link>
                </div>
                <div className="col-6">
                  <Link 
                    to="/multi-calculator" 
                    className="btn w-100 text-center text-decoration-none d-flex flex-column align-items-center justify-content-center"
                    style={{
                      background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '16px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 20px rgba(17, 153, 142, 0.25)',
                      padding: '1rem 0.5rem',
                      minHeight: '85px',
                      fontSize: '0.9rem',
                      WebkitTapHighlightColor: 'transparent',
                      touchAction: 'manipulation'
                    }}
                    onClick={closeMenu}
                  >
                    <i className="bi bi-calculator fs-3 mb-2"></i>
                    <span>Multi-Item</span>
                  </Link>
                </div>
                <div className="col-6">
                  <Link 
                    to="/calculator" 
                    className="btn w-100 text-center text-decoration-none d-flex flex-column align-items-center justify-content-center"
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '16px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 20px rgba(102, 126, 234, 0.25)',
                      padding: '1rem 0.5rem',
                      minHeight: '85px',
                      fontSize: '0.9rem',
                      WebkitTapHighlightColor: 'transparent',
                      touchAction: 'manipulation'
                    }}
                    onClick={closeMenu}
                  >
                    <i className="bi bi-gear fs-3 mb-2"></i>
                    <span>Simple Calc</span>
                  </Link>
                </div>
                <div className="col-6">
                  <Link 
                    to="/billing" 
                    className="btn w-100 text-center text-decoration-none d-flex flex-column align-items-center justify-content-center"
                    style={{
                      background: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
                      color: '#4a5568',
                      border: 'none',
                      borderRadius: '16px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 20px rgba(251, 194, 235, 0.25)',
                      padding: '1rem 0.5rem',
                      minHeight: '85px',
                      fontSize: '0.9rem',
                      WebkitTapHighlightColor: 'transparent',
                      touchAction: 'manipulation'
                    }}
                    onClick={closeMenu}
                  >
                    <i className="bi bi-credit-card fs-3 mb-2"></i>
                    <span>Billing</span>
                  </Link>
                </div>
                <div className="col-12">
                  <Link 
                    to="/admin" 
                    className="btn w-100 text-center text-decoration-none d-flex align-items-center justify-content-center"
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '16px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 20px rgba(102, 126, 234, 0.25)',
                      padding: '1rem',
                      fontSize: '1rem',
                      WebkitTapHighlightColor: 'transparent',
                      touchAction: 'manipulation'
                    }}
                    onClick={closeMenu}
                  >
                    <i className="bi bi-shield-check fs-4 me-2"></i>
                    <span>Admin Settings</span>
                  </Link>
                </div>
              </div>

              {/* Premium Quick Actions */}
              <div className="mt-4 pt-3" style={{
                borderTop: '2px solid rgba(102, 126, 234, 0.1)'
              }}>
                <div className="row g-3">
                  <div className="col-6">
                    <button 
                      className="btn w-100 text-center d-flex flex-column align-items-center justify-content-center"
                      style={{
                        background: 'rgba(102, 126, 234, 0.08)',
                        color: '#667eea',
                        border: '2px solid rgba(102, 126, 234, 0.2)',
                        borderRadius: '12px',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        padding: '0.75rem',
                        fontSize: '0.85rem',
                        WebkitTapHighlightColor: 'transparent',
                        touchAction: 'manipulation'
                      }}
                      onClick={closeMenu}
                    >
                      <i className="bi bi-file-earmark-pdf fs-4 mb-1"></i>
                      <span>Export PDF</span>
                    </button>
                  </div>
                  <div className="col-6">
                    <button 
                      className="btn w-100 text-center d-flex flex-column align-items-center justify-content-center"
                      style={{
                        background: 'rgba(17, 153, 142, 0.08)',
                        color: '#11998e',
                        border: '2px solid rgba(17, 153, 142, 0.2)',
                        borderRadius: '12px',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        padding: '0.75rem',
                        fontSize: '0.85rem',
                        WebkitTapHighlightColor: 'transparent',
                        touchAction: 'manipulation'
                      }}
                      onClick={closeMenu}
                    >
                      <i className="bi bi-share fs-4 mb-1"></i>
                      <span>Share Quote</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Elegant Logout */}
              <div className="mt-4 pt-3" style={{
                borderTop: '2px solid rgba(102, 126, 234, 0.1)'
              }}>
                <button 
                  className="btn w-100 text-center d-flex align-items-center justify-content-center"
                  style={{
                    background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '14px',
                    fontWeight: '700',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 20px rgba(255, 107, 107, 0.3)',
                    padding: '1rem',
                    fontSize: '1rem',
                    WebkitTapHighlightColor: 'transparent',
                    touchAction: 'manipulation'
                  }}
                  onClick={handleLogout}
                >
                  <i className="bi bi-box-arrow-right fs-5 me-2"></i>
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Overlay for menu - PWA friendly */}
      {isMenuOpen && (
        <div 
          className="position-fixed w-100 h-100"
          style={{ 
            top: 0, 
            left: 0, 
            zIndex: 1050,
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)'
          }}
          onClick={closeMenu}
        />
      )}

      {/* Custom CSS for mobile optimizations + PWA support */}
      <style>{`
        /* PWA Touch Optimizations */
        * {
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
        }
        
        /* Smooth scrolling for mobile */
        html {
          -webkit-overflow-scrolling: touch;
        }
        
        /* Better touch targets for PWA */
        .btn, button, a {
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
          cursor: pointer;
        }
        
        /* Mobile menu animations */
        .position-relative > div {
          animation: slideDown 0.3s ease-out;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Ensure mobile menu appears above other content */
        .sticky-top {
          z-index: 1060 !important;
        }
        
        /* Mobile-friendly spacing */
        @media (max-width: 576px) {
          .container-fluid {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
        }
        
        /* Better mobile button sizes - PWA compliant (min 44x44px) */
        @media (max-width: 768px) {
          .btn {
            min-height: 44px !important;
            min-width: 44px !important;
          }
        }
        
        /* Prevent text selection on buttons (mobile UX) */
        .btn, button {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        
        /* Safe area padding for notched devices (iOS) */
        @supports (padding: env(safe-area-inset-top)) {
          .sticky-top {
            padding-top: env(safe-area-inset-top);
          }
        }
        
        /* Prevent pull-to-refresh on mobile */
        body {
          overscroll-behavior-y: contain;
        }
        
        /* Better mobile viewport handling */
        @viewport {
          width: device-width;
          initial-scale: 1;
          maximum-scale: 5;
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