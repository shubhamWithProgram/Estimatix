// Theme Toggle Component with persistence
import { useState, useEffect } from 'react'

interface ThemeToggleProps {
  className?: string
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('auto')

  // Load theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('app_theme') as 'light' | 'dark' | 'auto' | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // Detect system preference
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  }, [])

  // Apply theme to document
  useEffect(() => {
    const applyTheme = (themeMode: 'light' | 'dark' | 'auto') => {
      let actualTheme: 'light' | 'dark'

      if (themeMode === 'auto') {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        actualTheme = prefersDark ? 'dark' : 'light'
      } else {
        actualTheme = themeMode
      }

      // Apply Bootstrap theme
      document.documentElement.setAttribute('data-bs-theme', actualTheme)
      
      // Apply custom CSS variables for additional theming
      if (actualTheme === 'dark') {
        document.body.style.backgroundColor = '#121212'
        document.body.style.color = '#ffffff'
      } else {
        document.body.style.backgroundColor = '#ffffff'
        document.body.style.color = '#000000'
      }

      // Save to localStorage
      localStorage.setItem('app_theme', themeMode)
    }

    applyTheme(theme)

    // Listen for system theme changes when in auto mode
    if (theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = () => applyTheme('auto')
      mediaQuery.addEventListener('change', handleChange)
      
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [theme])

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'auto') => {
    setTheme(newTheme)
  }

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return 'bi-sun-fill'
      case 'dark':
        return 'bi-moon-fill'
      case 'auto':
        return 'bi-circle-half'
      default:
        return 'bi-circle-half'
    }
  }

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light'
      case 'dark':
        return 'Dark'
      case 'auto':
        return 'Auto'
      default:
        return 'Auto'
    }
  }

  return (
    <div className={`dropdown ${className}`}>
      <button
        className="btn text-white position-relative"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        title={`Current theme: ${getThemeLabel()}`}
        style={{
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '12px',
          width: '44px',
          height: '44px',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(255,255,255,0.1)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.25)'
          e.currentTarget.style.transform = 'scale(1.05)'
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,255,255,0.2)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(255,255,255,0.1)'
        }}
      >
        <i className={`${getThemeIcon()} fs-5`}></i>
        {/* Elegant animated indicator dot */}
        <span 
          className="position-absolute top-0 start-100 translate-middle rounded-circle theme-indicator"
          style={{
            background: theme === 'light' ? 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)' : 
                       theme === 'dark' ? 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)' : 
                       'linear-gradient(135deg, #FF6B6B 0%, #EE5A24 100%)',
            width: '10px',
            height: '10px',
            border: '2px solid white',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3), 0 0 0 0 rgba(255, 255, 255, 0.7)',
            animation: 'theme-pulse 2s infinite'
          }}
        >
          <span className="visually-hidden">Theme indicator</span>
        </span>
      </button>
      <ul className="dropdown-menu dropdown-menu-end shadow-lg" style={{
        background: 'rgba(255,255,255,0.98)',
        backdropFilter: 'blur(15px)',
        border: '1px solid rgba(102, 126, 234, 0.2)',
        borderRadius: '16px',
        minWidth: '220px',
        padding: '8px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
        marginTop: '8px'
      }}>
        <li>
          <h6 className="dropdown-header fw-bold px-3 py-2" style={{ 
            color: '#667eea',
            fontSize: '0.9rem',
            marginBottom: '4px'
          }}>
            <i className="bi bi-palette me-2"></i>
            Choose Theme
          </h6>
        </li>
        <li>
          <button
            className={`dropdown-item d-flex align-items-center px-3 py-2 rounded-3 mx-1 mb-1 ${theme === 'light' ? 'active' : ''}`}
            onClick={() => handleThemeChange('light')}
            style={{
              transition: 'all 0.2s ease',
              background: theme === 'light' ? 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)' : 'rgba(0,0,0,0.02)',
              color: theme === 'light' ? 'white' : '#333',
              fontWeight: theme === 'light' ? '600' : '500',
              border: 'none',
              fontSize: '0.9rem'
            }}
            onMouseEnter={(e) => {
              if (theme !== 'light') {
                e.currentTarget.style.background = 'rgba(255, 215, 0, 0.15)'
                e.currentTarget.style.color = '#333'
              }
            }}
            onMouseLeave={(e) => {
              if (theme !== 'light') {
                e.currentTarget.style.background = 'rgba(0,0,0,0.02)'
                e.currentTarget.style.color = '#333'
              }
            }}
          >
            <i className="bi bi-sun-fill me-2" style={{ fontSize: '1rem' }}></i>
            <span className="flex-grow-1 text-start">Light Mode</span>
            {theme === 'light' && <i className="bi bi-check-lg ms-2"></i>}
          </button>
        </li>
        <li>
          <button
            className={`dropdown-item d-flex align-items-center px-3 py-2 rounded-3 mx-1 mb-1 ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => handleThemeChange('dark')}
            style={{
              transition: 'all 0.2s ease',
              background: theme === 'dark' ? 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)' : 'rgba(0,0,0,0.02)',
              color: theme === 'dark' ? 'white' : '#333',
              fontWeight: theme === 'dark' ? '600' : '500',
              border: 'none',
              fontSize: '0.9rem'
            }}
            onMouseEnter={(e) => {
              if (theme !== 'dark') {
                e.currentTarget.style.background = 'rgba(74, 144, 226, 0.15)'
                e.currentTarget.style.color = '#333'
              }
            }}
            onMouseLeave={(e) => {
              if (theme !== 'dark') {
                e.currentTarget.style.background = 'rgba(0,0,0,0.02)'
                e.currentTarget.style.color = '#333'
              }
            }}
          >
            <i className="bi bi-moon-fill me-2" style={{ fontSize: '1rem' }}></i>
            <span className="flex-grow-1 text-start">Dark Mode</span>
            {theme === 'dark' && <i className="bi bi-check-lg ms-2"></i>}
          </button>
        </li>
        <li>
          <button
            className={`dropdown-item d-flex align-items-center px-3 py-2 rounded-3 mx-1 mb-1 ${theme === 'auto' ? 'active' : ''}`}
            onClick={() => handleThemeChange('auto')}
            style={{
              transition: 'all 0.2s ease',
              background: theme === 'auto' ? 'linear-gradient(135deg, #FF6B6B 0%, #EE5A24 100%)' : 'rgba(0,0,0,0.02)',
              color: theme === 'auto' ? 'white' : '#333',
              fontWeight: theme === 'auto' ? '600' : '500',
              border: 'none',
              fontSize: '0.9rem'
            }}
            onMouseEnter={(e) => {
              if (theme !== 'auto') {
                e.currentTarget.style.background = 'rgba(255, 107, 107, 0.15)'
                e.currentTarget.style.color = '#333'
              }
            }}
            onMouseLeave={(e) => {
              if (theme !== 'auto') {
                e.currentTarget.style.background = 'rgba(0,0,0,0.02)'
                e.currentTarget.style.color = '#333'
              }
            }}
          >
            <i className="bi bi-circle-half me-2" style={{ fontSize: '1rem' }}></i>
            <span className="flex-grow-1 text-start">Auto (System)</span>
            {theme === 'auto' && <i className="bi bi-check-lg ms-2"></i>}
          </button>
        </li>
        <li><hr className="dropdown-divider mx-2 my-2" style={{ opacity: 0.2 }} /></li>
        <li>
          <div className="dropdown-item-text px-3 py-2">
            <small style={{ 
              color: '#667eea', 
              fontWeight: '500',
              fontSize: '0.8rem',
              lineHeight: '1.3'
            }}>
              <i className="bi bi-info-circle me-2"></i>
              Auto mode follows your system preference
            </small>
          </div>
        </li>
      </ul>
    </div>
  )
}

// Hook for using theme in other components
export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('auto')

  useEffect(() => {
    const savedTheme = localStorage.getItem('app_theme') as 'light' | 'dark' | 'auto' | null
    if (savedTheme) {
      setTheme(savedTheme)
    }

    // Listen for theme changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'app_theme' && e.newValue) {
        setTheme(e.newValue as 'light' | 'dark' | 'auto')
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const getCurrentTheme = (): 'light' | 'dark' => {
    if (theme === 'auto') {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return theme as 'light' | 'dark'
  }

  return {
    theme,
    currentTheme: getCurrentTheme(),
    isDark: getCurrentTheme() === 'dark',
    isLight: getCurrentTheme() === 'light'
  }
}