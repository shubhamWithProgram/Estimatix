// Professional Dashboard Component with Enhanced Features
import { useState, useEffect } from 'react'
import { useAuth } from '../lib/auth'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { quotationsService, type QuotationStats, type SavedQuotation } from '../lib/quotationsService'
import { Timestamp } from 'firebase/firestore'

// Animated Counter Component
function AnimatedCounter({ value, duration = 2000, prefix = '', suffix = '' }: { 
  value: number, 
  duration?: number, 
  prefix?: string, 
  suffix?: string 
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * value))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [value, duration])

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>
}

export default function Dashboard() {
  const { user, userProfile } = useAuth()
  // const [searchQuery, setSearchQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [stats, setStats] = useState<QuotationStats>({
    totalQuotations: 0,
    totalValue: 0,
    pendingQuotations: 0,
    approvedQuotations: 0,
    thisMonthQuotations: 0,
    thisMonthValue: 0
  })
  const [recentQuotations, setRecentQuotations] = useState<SavedQuotation[]>([])

  // Time-based greeting
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 17) return 'Good afternoon'
    return 'Good evening'
  }

  // Load real data from Firebase
  useEffect(() => {
    const loadDashboardData = async () => {
      if (!user?.uid) return

      try {
        // Load quotation statistics
        const quotationStats = await quotationsService.getQuotationStats(user.uid)
        setStats(quotationStats)

        // Load recent quotations for activity feed
        const recentQuots = await quotationsService.getRecentQuotations(user.uid, 4)
        setRecentQuotations(recentQuots)

      } catch (error) {
        console.error('Error loading dashboard data:', error)
      }
    }

    loadDashboardData()
  }, [user?.uid])

  // Format time ago
  const getTimeAgo = (date: Date | Timestamp): string => {
    const now = new Date()
    const createdAt = date instanceof Timestamp ? date.toDate() : new Date(date)
    const diffInMs = now.getTime() - createdAt.getTime()
    const diffInMins = Math.floor(diffInMs / 60000)
    const diffInHours = Math.floor(diffInMs / 3600000)
    const diffInDays = Math.floor(diffInMs / 86400000)

    if (diffInMins < 1) return 'Just now'
    if (diffInMins < 60) return `${diffInMins} minute${diffInMins > 1 ? 's' : ''} ago`
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`
    if (diffInDays < 30) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`
    return createdAt.toLocaleDateString()
  }

  // Convert real quotations to activities
  const recentActivities = recentQuotations.map((quot) => {
    const statusColors: Record<string, string> = {
      draft: 'secondary',
      sent: 'info',
      approved: 'success',
      rejected: 'danger',
      completed: 'primary'
    }

    const statusIcons: Record<string, string> = {
      draft: 'bi-file-earmark',
      sent: 'bi-send',
      approved: 'bi-check-circle',
      rejected: 'bi-x-circle',
      completed: 'bi-check-all'
    }

    return {
      icon: statusIcons[quot.status] || 'bi-file-earmark-text',
      text: `${quot.status === 'draft' ? 'Created' : quot.status.charAt(0).toUpperCase() + quot.status.slice(1)} quotation ${quot.quotationId} for ${quot.customerName}`,
      time: getTimeAgo(quot.createdAt),
      color: statusColors[quot.status] || 'info',
      quotationId: quot.quotationId,
      id: quot.id
    }
  })

  // If no quotations, show placeholder
  if (recentActivities.length === 0) {
    recentActivities.push({
      icon: 'bi-info-circle',
      text: 'No recent activity. Create your first quotation!',
      time: 'Start now',
      color: 'muted',
      quotationId: '',
      id: ''
    })
  }

  return (
    <>
      {/* Fixed Premium Mobile Header */}
      <motion.header 
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className="fixed-top"
        style={{
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(124, 58, 237, 0.2)',
          zIndex: 1050,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
        }}
      >
        <div className="container-fluid px-3 py-2" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="d-flex justify-content-between align-items-center">
            {/* Logo and Brand */}
            <div className="d-flex align-items-center gap-3">
              <div 
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3)'
                }}
              >
                <i className="bi bi-calculator text-white" style={{ fontSize: '20px' }}></i>
              </div>
              <span 
                className="d-none d-sm-block fw-bold" 
                style={{ 
                  color: 'white', 
                  fontSize: '1.1rem',
                  background: 'linear-gradient(90deg, #a855f7, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Estimatix
              </span>
            </div>

            {/* Header Actions */}
            <div className="d-flex align-items-center gap-2">
              {/* Theme Toggle */}
              <button
                className="btn rounded-circle d-flex align-items-center justify-content-center"
                style={{ 
                  width: '36px', 
                  height: '36px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: 'white'
                }}
              >
                <i className="bi bi-moon-stars" style={{ fontSize: '14px' }}></i>
              </button>

              {/* Search Toggle */}
              <button
                className="btn rounded-circle d-flex align-items-center justify-content-center"
                onClick={() => setShowSearch(!showSearch)}
                style={{ 
                  width: '36px', 
                  height: '36px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: 'white'
                }}
              >
                <i className="bi bi-search" style={{ fontSize: '14px' }}></i>
              </button>

              {/* Profile Avatar */}
              <button
                className="btn rounded-circle d-flex align-items-center justify-content-center"
                style={{ 
                  width: '36px', 
                  height: '36px',
                  background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                  border: 'none',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600'
                }}
              >
                {(userProfile?.displayName || user?.email || 'U')[0].toUpperCase()}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Slide-down Search Panel */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed-top"
            style={{
              top: '72px',
              zIndex: 1040,
              background: 'rgba(15, 23, 42, 0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(124, 58, 237, 0.3)'
            }}
          >
            <div className="container-fluid px-3 py-3" style={{ maxWidth: '1400px', margin: '0 auto' }}>
              <div className="d-flex align-items-center gap-3">
                <div className="flex-grow-1">
                  <div className="position-relative">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search quotations, customers, or projects..."
                      autoFocus
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(124, 58, 237, 0.3)',
                        borderRadius: '12px',
                        color: 'white',
                        padding: '0.75rem 3rem 0.75rem 1rem',
                        fontSize: '1rem'
                      }}
                    />
                    <i 
                      className="bi bi-search position-absolute text-white"
                      style={{
                        right: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        opacity: 0.7
                      }}
                    ></i>
                  </div>
                </div>
                <button
                  className="btn text-white d-flex align-items-center justify-content-center"
                  onClick={() => setShowSearch(false)}
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '10px'
                  }}
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div 
        className="min-h-screen" 
        style={{ 
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #1a1a2e 100%)',
          paddingTop: showSearch ? '144px' : '72px', // Account for fixed header and search panel
          transition: 'padding-top 0.3s ease'
        }}
      >
        <div className="container-fluid px-3 py-4" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Premium Greeting Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <div className="text-center text-md-start mb-4">
              {/* Enhanced Greeting */}
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <h1 
                  className="text-white mb-2" 
                  style={{ 
                    fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', 
                    fontWeight: '700', 
                    letterSpacing: '-0.02em',
                    lineHeight: '1.2'
                  }}
                >
                  {getGreeting()}, {(userProfile?.displayName || user?.email?.split('@')[0] || 'User')}! 
                  <span className="ms-2">👋</span>
                </h1>
                {/* Animated Gradient Underline */}
                <div 
                  style={{
                    height: '4px',
                    width: '100%',
                    background: 'linear-gradient(90deg, #7c3aed, #a855f7, #ec4899)',
                    borderRadius: '2px',
                    marginTop: '8px',
                    animation: 'gradientShift 3s ease-in-out infinite'
                  }} 
                />
              </div>
              <p 
                className="mb-0 mt-3" 
                style={{ 
                  color: '#94A3B8', 
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  fontWeight: '500'
                }}
              >
                Welcome back to your dashboard. Here's what's happening today.
              </p>
            </div>
          </motion.div>

          <style jsx>{`
            @keyframes gradientShift {
              0% { background: linear-gradient(90deg, #7c3aed, #a855f7, #ec4899); }
              50% { background: linear-gradient(90deg, #ec4899, #7c3aed, #a855f7); }
              100% { background: linear-gradient(90deg, #7c3aed, #a855f7, #ec4899); }
            }

            .premium-stats-card {
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              transform-origin: center;
            }

            .premium-stats-card:hover {
              transform: translateY(-8px) scale(1.02);
            }

            .premium-action-card {
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              transform-origin: center;
            }

            .premium-action-card:hover {
              transform: translateY(-8px) scale(1.02);
            }

            .premium-activity-card {
              transition: all 0.3s ease;
            }

            /* Mobile-specific optimizations */
            @media (max-width: 576px) {
              .premium-stats-card {
                border-radius: 1rem !important;
              }
              
              .premium-action-card {
                border-radius: 1rem !important;
              }
              
              .premium-activity-card {
                border-radius: 1rem !important;
              }
            }

            /* Reduce motion for accessibility */
            @media (prefers-reduced-motion: reduce) {
              .premium-stats-card,
              .premium-action-card,
              .premium-activity-card {
                transition: none;
              }
              
              .premium-stats-card:hover,
              .premium-action-card:hover {
                transform: none;
              }
            }
          `}</style>

          {/* Premium Glassmorphic Stats Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="row g-3 mb-4"
          >
            {/* Total Quotations Card */}
            <div className="col-6 col-lg-3">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.03, y: -6 }}
                className="premium-stats-card"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  boxShadow: '0 12px 40px rgba(99, 102, 241, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative'
                }}
              >
                {/* Gradient Glow Border */}
                <div style={{
                  height: '3px',
                  background: 'linear-gradient(90deg, #6366F1 0%, #06B6D4 50%, #8B5CF6 100%)',
                  borderRadius: '1.25rem 1.25rem 0 0'
                }} />
                
                <div className="p-3">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div className="flex-grow-1">
                      <p className="mb-1" style={{ fontSize: '12px', color: '#94A3B8', fontWeight: '600' }}>
                        Total Quotations
                      </p>
                      <h3 
                        className="mb-0 text-white" 
                        style={{ 
                          fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
                          fontWeight: '700',
                          lineHeight: '1.1'
                        }}
                      >
                        <AnimatedCounter value={stats.totalQuotations} />
                      </h3>
                    </div>
                    <div 
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                        borderRadius: '10px',
                        boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
                      }}
                    >
                      <i className="bi bi-file-earmark-text text-white" style={{ fontSize: '16px' }}></i>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-2" style={{ fontSize: '11px', color: '#10B981' }}>
                    <i className="bi bi-arrow-up me-1"></i>
                    <span>+12% this month</span>
                  </div>
                </div>
                
                {/* Subtle glow effect */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05))',
                  pointerEvents: 'none'
                }} />
              </motion.div>
            </div>

            {/* Total Value Card */}
            <div className="col-6 col-lg-3">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.03, y: -6 }}
                className="premium-stats-card"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  boxShadow: '0 12px 40px rgba(236, 72, 153, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(236, 72, 153, 0.2)',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative'
                }}
              >
                {/* Gradient Glow Border */}
                <div style={{
                  height: '3px',
                  background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 50%, #F472B6 100%)',
                  borderRadius: '1.25rem 1.25rem 0 0'
                }} />
                
                <div className="p-3">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div className="flex-grow-1">
                      <p className="mb-1" style={{ fontSize: '12px', color: '#94A3B8', fontWeight: '600' }}>
                        Total Value
                      </p>
                      <h3 
                        className="mb-0 text-white" 
                        style={{ 
                          fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)', 
                          fontWeight: '700',
                          lineHeight: '1.1'
                        }}
                      >
                        <AnimatedCounter value={stats.totalValue} prefix="₹" />
                      </h3>
                    </div>
                    <div 
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                        borderRadius: '10px',
                        boxShadow: '0 4px 12px rgba(236, 72, 153, 0.3)'
                      }}
                    >
                      <i className="bi bi-currency-rupee text-white" style={{ fontSize: '16px' }}></i>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-2" style={{ fontSize: '11px', color: '#10B981' }}>
                    <i className="bi bi-arrow-up me-1"></i>
                    <span>+8% this month</span>
                  </div>
                </div>
                
                {/* Subtle glow effect */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05))',
                  pointerEvents: 'none'
                }} />
              </motion.div>
            </div>

            {/* Pending Quotations Card */}
            <div className="col-6 col-lg-3">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.03, y: -6 }}
                className="premium-stats-card"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  boxShadow: '0 12px 40px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative'
                }}
              >
                {/* Gradient Glow Border */}
                <div style={{
                  height: '3px',
                  background: 'linear-gradient(90deg, #3B82F6 0%, #06B6D4 50%, #0EA5E9 100%)',
                  borderRadius: '1.25rem 1.25rem 0 0'
                }} />
                
                <div className="p-3">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div className="flex-grow-1">
                      <p className="mb-1" style={{ fontSize: '12px', color: '#94A3B8', fontWeight: '600' }}>
                        Pending
                      </p>
                      <h3 
                        className="mb-0 text-white" 
                        style={{ 
                          fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
                          fontWeight: '700',
                          lineHeight: '1.1'
                        }}
                      >
                        <AnimatedCounter value={stats.pendingQuotations} />
                      </h3>
                    </div>
                    <div 
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                        borderRadius: '10px',
                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                      }}
                    >
                      <i className="bi bi-hourglass-split text-white" style={{ fontSize: '16px' }}></i>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-2" style={{ fontSize: '11px', color: '#F59E0B' }}>
                    <i className="bi bi-clock me-1"></i>
                    <span>Needs attention</span>
                  </div>
                </div>
                
                {/* Subtle glow effect */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.05))',
                  pointerEvents: 'none'
                }} />
              </motion.div>
            </div>

            {/* Approved This Month Card */}
            <div className="col-6 col-lg-3">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.03, y: -6 }}
                className="premium-stats-card"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  boxShadow: '0 12px 40px rgba(16, 185, 129, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative'
                }}
              >
                {/* Gradient Glow Border */}
                <div style={{
                  height: '3px',
                  background: 'linear-gradient(90deg, #10B981 0%, #14B8A6 50%, #06B6D4 100%)',
                  borderRadius: '1.25rem 1.25rem 0 0'
                }} />
                
                <div className="p-3">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div className="flex-grow-1">
                      <p className="mb-1" style={{ fontSize: '12px', color: '#94A3B8', fontWeight: '600' }}>
                        This Month
                      </p>
                      <h3 
                        className="mb-0 text-white" 
                        style={{ 
                          fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
                          fontWeight: '700',
                          lineHeight: '1.1'
                        }}
                      >
                        <AnimatedCounter value={stats.thisMonthQuotations} />
                      </h3>
                    </div>
                    <div 
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, #10B981, #14B8A6)',
                        borderRadius: '10px',
                        boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
                      }}
                    >
                      <i className="bi bi-check-circle text-white" style={{ fontSize: '16px' }}></i>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-2" style={{ fontSize: '11px', color: '#10B981' }}>
                    <i className="bi bi-trophy me-1"></i>
                    <span>₹{stats.thisMonthValue.toLocaleString()}</span>
                  </div>
                </div>
                
                {/* Subtle glow effect */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(20, 184, 166, 0.05))',
                  pointerEvents: 'none'
                }} />
              </motion.div>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="row g-3">
            {/* Premium Quick Actions Section */}
            <div className="col-lg-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                {/* Section Title with Gradient */}
                <h5 className="mb-3 d-flex align-items-center" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.25rem)' }}>
                  <span style={{ marginRight: '8px', fontSize: '1.25rem' }}>⚡</span>
                  <span style={{
                    background: 'linear-gradient(90deg, #6366F1, #8B5CF6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: '700'
                  }}>
                    Quick Actions
                  </span>
                </h5>

                <div className="row g-3">
                  {/* Multi-Item Calculator - Purple Gradient */}
                  <div className="col-sm-6">
                    <Link to="/multi-calculator" className="text-decoration-none">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                        whileHover={{ y: -6, scale: 1.02 }}
                        className="premium-action-card"
                        style={{ 
                          background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                          borderRadius: '1.25rem',
                          overflow: 'hidden',
                          boxShadow: '0 12px 32px rgba(99, 102, 241, 0.25)',
                          position: 'relative'
                        }}
                      >
                        <div className="p-4" style={{ color: 'white', position: 'relative', zIndex: 2 }}>
                          <div 
                            className="d-flex align-items-center justify-content-center mb-3"
                            style={{
                              width: 'clamp(48px, 12vw, 56px)',
                              height: 'clamp(48px, 12vw, 56px)',
                              background: 'rgba(255, 255, 255, 0.2)',
                              borderRadius: '14px',
                              backdropFilter: 'blur(10px)'
                            }}
                          >
                            <motion.i 
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              className="bi bi-calculator" 
                              style={{ fontSize: 'clamp(20px, 5vw, 28px)' }}
                            ></motion.i>
                          </div>
                          <h5 
                            className="fw-bold mb-2" 
                            style={{ 
                              fontSize: 'clamp(0.95rem, 3vw, 1.1rem)',
                              lineHeight: '1.3'
                            }}
                          >
                            Multi-Item Calculator
                          </h5>
                          <p 
                            className="mb-3" 
                            style={{ 
                              fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)', 
                              opacity: 0.9,
                              lineHeight: '1.4'
                            }}
                          >
                            Create detailed quotations with multiple items
                          </p>
                          <div 
                            className="d-flex align-items-center" 
                            style={{ 
                              fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)', 
                              fontWeight: '600' 
                            }}
                          >
                            <span>Start Project</span>
                            <motion.i 
                              whileHover={{ x: 4 }}
                              className="bi bi-arrow-right ms-2"
                            ></motion.i>
                          </div>
                        </div>
                        
                        {/* Subtle animated glow */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.1), transparent 70%)',
                          pointerEvents: 'none'
                        }} />
                      </motion.div>
                    </Link>
                  </div>

                  {/* Simple Calculator - Blue/Cyan Gradient */}
                  <div className="col-sm-6">
                    <Link to="/calculator" className="text-decoration-none">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
                        whileHover={{ y: -6, scale: 1.02 }}
                        className="premium-action-card"
                        style={{ 
                          background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                          borderRadius: '1.25rem',
                          overflow: 'hidden',
                          boxShadow: '0 12px 32px rgba(59, 130, 246, 0.25)',
                          position: 'relative'
                        }}
                      >
                        <div className="p-4" style={{ color: 'white', position: 'relative', zIndex: 2 }}>
                          <div 
                            className="d-flex align-items-center justify-content-center mb-3"
                            style={{
                              width: 'clamp(48px, 12vw, 56px)',
                              height: 'clamp(48px, 12vw, 56px)',
                              background: 'rgba(255, 255, 255, 0.2)',
                              borderRadius: '14px',
                              backdropFilter: 'blur(10px)'
                            }}
                          >
                            <motion.i 
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              className="bi bi-grid-3x2-gap" 
                              style={{ fontSize: 'clamp(20px, 5vw, 28px)' }}
                            ></motion.i>
                          </div>
                          <h5 
                            className="fw-bold mb-2" 
                            style={{ 
                              fontSize: 'clamp(0.95rem, 3vw, 1.1rem)',
                              lineHeight: '1.3'
                            }}
                          >
                            Simple Calculator
                          </h5>
                          <p 
                            className="mb-3" 
                            style={{ 
                              fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)', 
                              opacity: 0.9,
                              lineHeight: '1.4'
                            }}
                          >
                            Quick calculations for single items
                          </p>
                          <div 
                            className="d-flex align-items-center" 
                            style={{ 
                              fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)', 
                              fontWeight: '600' 
                            }}
                          >
                            <span>Quick Calculate</span>
                            <motion.i 
                              whileHover={{ x: 4 }}
                              className="bi bi-arrow-right ms-2"
                            ></motion.i>
                          </div>
                        </div>
                        
                        {/* Subtle animated glow */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.1), transparent 70%)',
                          pointerEvents: 'none'
                        }} />
                      </motion.div>
                    </Link>
                  </div>

                  {/* Admin Settings - Pink Gradient */}
                  <div className="col-sm-6">
                    <Link to="/admin" className="text-decoration-none">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.0, type: 'spring', stiffness: 200 }}
                        whileHover={{ y: -6, scale: 1.02 }}
                        className="premium-action-card"
                        style={{ 
                          background: 'linear-gradient(135deg, #EC4899, #F472B6)',
                          borderRadius: '1.25rem',
                          overflow: 'hidden',
                          boxShadow: '0 12px 32px rgba(236, 72, 153, 0.25)',
                          position: 'relative'
                        }}
                      >
                        <div className="p-4" style={{ color: 'white', position: 'relative', zIndex: 2 }}>
                          <div 
                            className="d-flex align-items-center justify-content-center mb-3"
                            style={{
                              width: 'clamp(48px, 12vw, 56px)',
                              height: 'clamp(48px, 12vw, 56px)',
                              background: 'rgba(255, 255, 255, 0.2)',
                              borderRadius: '14px',
                              backdropFilter: 'blur(10px)'
                            }}
                          >
                            <motion.i 
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              className="bi bi-gear" 
                              style={{ fontSize: 'clamp(20px, 5vw, 28px)' }}
                            ></motion.i>
                          </div>
                          <h5 
                            className="fw-bold mb-2" 
                            style={{ 
                              fontSize: 'clamp(0.95rem, 3vw, 1.1rem)',
                              lineHeight: '1.3'
                            }}
                          >
                            Admin Settings
                          </h5>
                          <p 
                            className="mb-3" 
                            style={{ 
                              fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)', 
                              opacity: 0.9,
                              lineHeight: '1.4'
                            }}
                          >
                            Configure pricing and preferences
                          </p>
                          <div 
                            className="d-flex align-items-center" 
                            style={{ 
                              fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)', 
                              fontWeight: '600' 
                            }}
                          >
                            <span>Manage Settings</span>
                            <motion.i 
                              whileHover={{ x: 4 }}
                              className="bi bi-arrow-right ms-2"
                            ></motion.i>
                          </div>
                        </div>
                        
                        {/* Subtle animated glow */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.1), transparent 70%)',
                          pointerEvents: 'none'
                        }} />
                      </motion.div>
                    </Link>
                  </div>

                  {/* Billing - Green/Teal Gradient */}
                  <div className="col-sm-6">
                    <Link to="/billing" className="text-decoration-none">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.1, type: 'spring', stiffness: 200 }}
                        whileHover={{ y: -6, scale: 1.02 }}
                        className="premium-action-card"
                        style={{ 
                          background: 'linear-gradient(135deg, #10B981, #14B8A6)',
                          borderRadius: '1.25rem',
                          overflow: 'hidden',
                          boxShadow: '0 12px 32px rgba(16, 185, 129, 0.25)',
                          position: 'relative'
                        }}
                      >
                        <div className="p-4" style={{ color: 'white', position: 'relative', zIndex: 2 }}>
                          <div 
                            className="d-flex align-items-center justify-content-center mb-3"
                            style={{
                              width: 'clamp(48px, 12vw, 56px)',
                              height: 'clamp(48px, 12vw, 56px)',
                              background: 'rgba(255, 255, 255, 0.2)',
                              borderRadius: '14px',
                              backdropFilter: 'blur(10px)'
                            }}
                          >
                            <motion.i 
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              className="bi bi-credit-card" 
                              style={{ fontSize: 'clamp(20px, 5vw, 28px)' }}
                            ></motion.i>
                          </div>
                          <h5 
                            className="fw-bold mb-2" 
                            style={{ 
                              fontSize: 'clamp(0.95rem, 3vw, 1.1rem)',
                              lineHeight: '1.3'
                            }}
                          >
                            Billing & Subscription
                          </h5>
                          <p 
                            className="mb-3" 
                            style={{ 
                              fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)', 
                              opacity: 0.9,
                              lineHeight: '1.4'
                            }}
                          >
                            Manage subscription and payments
                          </p>
                          <div 
                            className="d-flex align-items-center" 
                            style={{ 
                              fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)', 
                              fontWeight: '600' 
                            }}
                          >
                            <span>View Billing</span>
                            <motion.i 
                              whileHover={{ x: 4 }}
                              className="bi bi-arrow-right ms-2"
                            ></motion.i>
                          </div>
                        </div>
                        
                        {/* Subtle animated glow */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.1), transparent 70%)',
                          pointerEvents: 'none'
                        }} />
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Premium Recent Activity Panel */}
            <div className="col-lg-4">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
              >
                {/* Section Title */}
                <h5 className="mb-3" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.25rem)', color: 'white', fontWeight: '700' }}>
                  <i className="bi bi-clock-history me-2" style={{ color: '#06B6D4' }}></i>
                  Recent Activity
                </h5>

                {/* Glass Activity Card */}
                <div 
                  className="premium-activity-card"
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow: '0 12px 40px rgba(59, 130, 246, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    borderRadius: '1.25rem',
                    overflow: 'hidden'
                  }}
                >
                  {/* Multi-colored Glow Top Border */}
                  <div style={{
                    height: '3px',
                    background: 'linear-gradient(90deg, #3B82F6 0%, #06B6D4 50%, #8B5CF6 100%)',
                    borderRadius: '1.25rem 1.25rem 0 0'
                  }} />

              <div className="card-body p-0">
                <div className="list-group list-group-flush">
                  <AnimatePresence>
                    {recentActivities.length > 0 ? (
                      recentActivities.map((activity, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="list-group-item border-0 py-3 px-4"
                          style={{ 
                            background: 'transparent',
                            borderBottom: index < recentActivities.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
                          }}
                        >
                          <div className="d-flex align-items-start">
                            <div 
                              className="d-flex align-items-center justify-content-center me-3"
                              style={{ 
                                minWidth: '40px', 
                                height: '40px',
                                background: activity.color === 'success' ? 'rgba(16, 185, 129, 0.2)' : 
                                           activity.color === 'info' ? 'rgba(59, 130, 246, 0.2)' : 
                                           activity.color === 'danger' ? 'rgba(239, 68, 68, 0.2)' : 
                                           'rgba(139, 92, 246, 0.2)',
                                borderRadius: '10px',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                              }}
                            >
                              <i 
                                className={`bi ${activity.icon}`} 
                                style={{ 
                                  fontSize: '18px',
                                  color: activity.color === 'success' ? '#10B981' : 
                                         activity.color === 'info' ? '#3B82F6' : 
                                         activity.color === 'danger' ? '#EF4444' : 
                                         '#8B5CF6'
                                }}
                              ></i>
                            </div>
                            <div className="flex-grow-1">
                              <p className="mb-1" style={{ fontSize: '14px', color: 'white', fontWeight: '500' }}>
                                {activity.text}
                              </p>
                              <small style={{ color: '#94A3B8', fontSize: '12px' }}>
                                <i className="bi bi-clock me-1"></i>
                                {activity.time}
                              </small>
                            </div>
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <div className="text-center py-5 px-4">
                        <div 
                          className="d-flex align-items-center justify-content-center mx-auto mb-3"
                          style={{
                            width: '80px',
                            height: '80px',
                            background: 'rgba(99, 102, 241, 0.1)',
                            borderRadius: '50%'
                          }}
                        >
                          <i className="bi bi-inbox" style={{ fontSize: '36px', color: '#6366F1' }}></i>
                        </div>
                        <p style={{ color: '#94A3B8', fontSize: '14px', marginBottom: '16px' }}>
                          No recent activity yet
                        </p>
                        <Link 
                          to="/multi-calculator"
                          className="btn btn-sm"
                          style={{
                            background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '10px',
                            padding: '8px 16px',
                            fontSize: '13px',
                            fontWeight: '600'
                          }}
                        >
                          Create First Quotation
                        </Link>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
                
                {recentActivities.length > 0 && (
                  <div className="p-3 text-center" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <button 
                      className="btn btn-link text-decoration-none"
                      style={{ color: '#6366F1', fontSize: '14px', fontWeight: '600' }}
                    >
                      View All Activity <i className="bi bi-arrow-right ms-1"></i>
                    </button>
                  </div>
                )}
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