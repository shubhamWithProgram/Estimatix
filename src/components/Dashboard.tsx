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
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #0F172A, #1E293B)' }}>
      <div className="container-fluid py-6 px-4 md:px-6" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Premium Header with Greeting */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-4">
            {/* Personalized Greeting with Accent */}
            <div>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <h2 className="text-white mb-2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '600', letterSpacing: '-0.5px' }}>
                  {getGreeting()}, {userProfile?.displayName || user?.email?.split('@')[0]}! 👋
                </h2>
                {/* Gradient Underline */}
                <div style={{
                  height: '3px',
                  width: '60%',
                  background: 'linear-gradient(90deg, #6366F1, #8B5CF6)',
                  borderRadius: '2px',
                  marginTop: '4px'
                }} />
              </div>
              <p className="text-sm mb-0" style={{ color: '#94A3B8', marginTop: '8px' }}>
                Here's your activity summary today.
              </p>
            </div>

            {/* Search and Profile Section */}
            <div className="d-flex align-items-center gap-3">
              {/* Compact Search Button */}
              <button
                className="btn rounded-circle d-flex align-items-center justify-content-center"
                onClick={() => setShowSearch(!showSearch)}
                style={{ 
                  width: '44px', 
                  height: '44px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'white'
                }}
              >
                <i className="bi bi-search"></i>
              </button>

              {/* Profile Button */}
              <button
                className="btn rounded-circle d-flex align-items-center justify-content-center"
                style={{ 
                  width: '44px', 
                  height: '44px',
                  background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                  border: 'none',
                  color: 'white'
                }}
              >
                <i className="bi bi-person-circle fs-5"></i>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Premium Glassmorphic Stats Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="row g-4 mb-5"
        >
          {/* Total Quotations Card */}
          <div className="col-md-6 col-lg-3">
            <motion.div 
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="card border-0 h-100"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '1.5rem',
                overflow: 'hidden'
              }}
            >
              {/* Gradient Accent Bar */}
              <div style={{
                height: '4px',
                background: 'linear-gradient(90deg, #6366F1, #06B6D4)',
                borderRadius: '1.5rem 1.5rem 0 0'
              }} />
              
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <p className="mb-1" style={{ fontSize: '13px', color: '#94A3B8', fontWeight: '500' }}>
                      Total Quotations
                    </p>
                    <h3 className="mb-0 text-white" style={{ fontSize: '2rem', fontWeight: '700' }}>
                      <AnimatedCounter value={stats.totalQuotations} />
                    </h3>
                  </div>
                  <div 
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                      borderRadius: '12px',
                      boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)'
                    }}
                  >
                    <i className="bi bi-file-earmark-text text-white" style={{ fontSize: '20px' }}></i>
                  </div>
                </div>
                <div className="d-flex align-items-center" style={{ fontSize: '13px', color: '#10B981' }}>
                  <i className="bi bi-arrow-up me-1"></i>
                  <span>+12% from last month</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Total Value Card */}
          <div className="col-md-6 col-lg-3">
            <motion.div 
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="card border-0 h-100"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '1.5rem',
                overflow: 'hidden'
              }}
            >
              {/* Gradient Accent Bar */}
              <div style={{
                height: '4px',
                background: 'linear-gradient(90deg, #8B5CF6, #EC4899)',
                borderRadius: '1.5rem 1.5rem 0 0'
              }} />
              
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <p className="mb-1" style={{ fontSize: '13px', color: '#94A3B8', fontWeight: '500' }}>
                      Total Value
                    </p>
                    <h3 className="mb-0 text-white" style={{ fontSize: '2rem', fontWeight: '700' }}>
                      <AnimatedCounter value={stats.totalValue} prefix="₹" />
                    </h3>
                  </div>
                  <div 
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                      borderRadius: '12px',
                      boxShadow: '0 4px 12px rgba(236, 72, 153, 0.4)'
                    }}
                  >
                    <i className="bi bi-currency-rupee text-white" style={{ fontSize: '20px' }}></i>
                  </div>
                </div>
                <div className="d-flex align-items-center" style={{ fontSize: '13px', color: '#10B981' }}>
                  <i className="bi bi-arrow-up me-1"></i>
                  <span>+8% from last month</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Pending Quotations Card */}
          <div className="col-md-6 col-lg-3">
            <motion.div 
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="card border-0 h-100"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '1.5rem',
                overflow: 'hidden'
              }}
            >
              {/* Gradient Accent Bar */}
              <div style={{
                height: '4px',
                background: 'linear-gradient(90deg, #3B82F6, #06B6D4)',
                borderRadius: '1.5rem 1.5rem 0 0'
              }} />
              
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <p className="mb-1" style={{ fontSize: '13px', color: '#94A3B8', fontWeight: '500' }}>
                      Pending
                    </p>
                    <h3 className="mb-0 text-white" style={{ fontSize: '2rem', fontWeight: '700' }}>
                      <AnimatedCounter value={stats.pendingQuotations} />
                    </h3>
                  </div>
                  <div 
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                      borderRadius: '12px',
                      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)'
                    }}
                  >
                    <i className="bi bi-hourglass-split text-white" style={{ fontSize: '20px' }}></i>
                  </div>
                </div>
                <div className="d-flex align-items-center" style={{ fontSize: '13px', color: '#F59E0B' }}>
                  <i className="bi bi-exclamation-circle me-1"></i>
                  <span>Awaiting response</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Approved This Month Card */}
          <div className="col-md-6 col-lg-3">
            <motion.div 
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="card border-0 h-100"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '1.5rem',
                overflow: 'hidden'
              }}
            >
              {/* Gradient Accent Bar */}
              <div style={{
                height: '4px',
                background: 'linear-gradient(90deg, #10B981, #14B8A6)',
                borderRadius: '1.5rem 1.5rem 0 0'
              }} />
              
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <p className="mb-1" style={{ fontSize: '13px', color: '#94A3B8', fontWeight: '500' }}>
                      Approved This Month
                    </p>
                    <h3 className="mb-0 text-white" style={{ fontSize: '2rem', fontWeight: '700' }}>
                      <AnimatedCounter value={stats.thisMonthQuotations} />
                    </h3>
                  </div>
                  <div 
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #10B981, #14B8A6)',
                      borderRadius: '12px',
                      boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)'
                    }}
                  >
                    <i className="bi bi-check-circle text-white" style={{ fontSize: '20px' }}></i>
                  </div>
                </div>
                <div className="d-flex align-items-center" style={{ fontSize: '13px', color: '#10B981' }}>
                  <i className="bi bi-trophy me-1"></i>
                  <span>₹{stats.thisMonthValue.toLocaleString()} revenue</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      {/* Main Content Grid */}
      <div className="row g-4">
        {/* Premium Quick Actions Section */}
        <div className="col-lg-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Section Title with Gradient */}
            <h5 className="mb-4 d-flex align-items-center" style={{ fontSize: '1.25rem' }}>
              <span style={{ marginRight: '8px', fontSize: '1.5rem' }}>⚡</span>
              <span style={{
                background: 'linear-gradient(90deg, #6366F1, #8B5CF6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '600'
              }}>
                Quick Actions
              </span>
            </h5>

            <div className="row g-4">
              {/* Multi-Item Calculator - Purple Gradient */}
              <div className="col-md-6">
                <Link to="/multi-calculator" className="text-decoration-none">
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="card h-100 border-0"
                    style={{ 
                      background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                      borderRadius: '1.5rem',
                      overflow: 'hidden',
                      boxShadow: '0 8px 24px rgba(99, 102, 241, 0.3)'
                    }}
                  >
                    <div className="card-body p-4" style={{ color: 'white' }}>
                      <div 
                        className="d-flex align-items-center justify-content-center mb-3"
                        style={{
                          width: '64px',
                          height: '64px',
                          background: 'rgba(255, 255, 255, 0.2)',
                          borderRadius: '16px',
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        <motion.i 
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="bi bi-calculator" 
                          style={{ fontSize: '32px' }}
                        ></motion.i>
                      </div>
                      <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>
                        Multi-Item Calculator
                      </h5>
                      <p className="mb-3" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                        Create detailed quotations with multiple items
                      </p>
                      <div className="d-flex align-items-center" style={{ fontSize: '0.9rem', fontWeight: '600' }}>
                        <span>Start Project</span>
                        <i className="bi bi-arrow-right ms-2"></i>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </div>

              {/* Simple Calculator - Blue/Cyan Gradient */}
              <div className="col-md-6">
                <Link to="/calculator" className="text-decoration-none">
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="card h-100 border-0"
                    style={{ 
                      background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                      borderRadius: '1.5rem',
                      overflow: 'hidden',
                      boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)'
                    }}
                  >
                    <div className="card-body p-4" style={{ color: 'white' }}>
                      <div 
                        className="d-flex align-items-center justify-content-center mb-3"
                        style={{
                          width: '64px',
                          height: '64px',
                          background: 'rgba(255, 255, 255, 0.2)',
                          borderRadius: '16px',
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        <motion.i 
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="bi bi-grid-3x2-gap" 
                          style={{ fontSize: '32px' }}
                        ></motion.i>
                      </div>
                      <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>
                        Simple Calculator
                      </h5>
                      <p className="mb-3" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                        Quick calculations for single items
                      </p>
                      <div className="d-flex align-items-center" style={{ fontSize: '0.9rem', fontWeight: '600' }}>
                        <span>Quick Calculate</span>
                        <i className="bi bi-arrow-right ms-2"></i>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </div>

              {/* Admin Settings - Pink Gradient */}
              <div className="col-md-6">
                <Link to="/admin" className="text-decoration-none">
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="card h-100 border-0"
                    style={{ 
                      background: 'linear-gradient(135deg, #EC4899, #F472B6)',
                      borderRadius: '1.5rem',
                      overflow: 'hidden',
                      boxShadow: '0 8px 24px rgba(236, 72, 153, 0.3)'
                    }}
                  >
                    <div className="card-body p-4" style={{ color: 'white' }}>
                      <div 
                        className="d-flex align-items-center justify-content-center mb-3"
                        style={{
                          width: '64px',
                          height: '64px',
                          background: 'rgba(255, 255, 255, 0.2)',
                          borderRadius: '16px',
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        <motion.i 
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="bi bi-gear" 
                          style={{ fontSize: '32px' }}
                        ></motion.i>
                      </div>
                      <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>
                        Admin Settings
                      </h5>
                      <p className="mb-3" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                        Configure pricing and preferences
                      </p>
                      <div className="d-flex align-items-center" style={{ fontSize: '0.9rem', fontWeight: '600' }}>
                        <span>Manage Settings</span>
                        <i className="bi bi-arrow-right ms-2"></i>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </div>

              {/* Billing - Green/Teal Gradient */}
              <div className="col-md-6">
                <Link to="/billing" className="text-decoration-none">
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="card h-100 border-0"
                    style={{ 
                      background: 'linear-gradient(135deg, #10B981, #14B8A6)',
                      borderRadius: '1.5rem',
                      overflow: 'hidden',
                      boxShadow: '0 8px 24px rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    <div className="card-body p-4" style={{ color: 'white' }}>
                      <div 
                        className="d-flex align-items-center justify-content-center mb-3"
                        style={{
                          width: '64px',
                          height: '64px',
                          background: 'rgba(255, 255, 255, 0.2)',
                          borderRadius: '16px',
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        <motion.i 
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="bi bi-credit-card" 
                          style={{ fontSize: '32px' }}
                        ></motion.i>
                      </div>
                      <h5 className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>
                        Billing & Subscription
                      </h5>
                      <p className="mb-3" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                        Manage subscription and payments
                      </p>
                      <div className="d-flex align-items-center" style={{ fontSize: '0.9rem', fontWeight: '600' }}>
                        <span>View Billing</span>
                        <i className="bi bi-arrow-right ms-2"></i>
                      </div>
                    </div>
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
            transition={{ delay: 0.3 }}
          >
            {/* Section Title */}
            <h5 className="mb-4" style={{ fontSize: '1.25rem', color: 'white', fontWeight: '600' }}>
              <i className="bi bi-clock-history me-2" style={{ color: '#06B6D4' }}></i>
              Recent Activity
            </h5>

            {/* Glass Activity Card */}
            <div 
              className="card border-0"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '1.5rem',
                overflow: 'hidden'
              }}
            >
              {/* Blue Glow Top Border */}
              <div style={{
                height: '3px',
                background: 'linear-gradient(90deg, #3B82F6, #06B6D4)',
                borderRadius: '1.5rem 1.5rem 0 0'
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
  )
}