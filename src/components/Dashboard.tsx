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
  const [searchQuery, setSearchQuery] = useState('')
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
    <div className="container-fluid py-4" style={{ maxWidth: '1400px' }}>
      {/* Enhanced Header with Profile and Search */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="row mb-4"
      >
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            {/* Personalized Greeting */}
            <div>
              <h2 className="mb-1">
                {getGreeting()}, {userProfile?.displayName || user?.email?.split('@')[0]}! 👋
              </h2>
              <p className="text-muted mb-0">Here's your activity summary today.</p>
            </div>

            {/* Search Bar and Profile */}
            <div className="d-flex align-items-center gap-3">
              {/* Global Search */}
              <motion.div 
                initial={{ width: showSearch ? 300 : 40 }}
                animate={{ width: showSearch ? 300 : 40 }}
                className="position-relative"
              >
                {showSearch ? (
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search quotations, clients, invoices..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onBlur={() => !searchQuery && setShowSearch(false)}
                    autoFocus
                    style={{
                      borderRadius: '20px',
                      paddingLeft: '40px'
                    }}
                  />
                ) : (
                  <button
                    className="btn btn-light rounded-circle"
                    onClick={() => setShowSearch(true)}
                    style={{ width: '40px', height: '40px' }}
                  >
                    <i className="bi bi-search"></i>
                  </button>
                )}
                <i className="bi bi-search position-absolute" style={{ 
                  left: '12px', 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                  display: showSearch ? 'block' : 'none'
                }}></i>
              </motion.div>

              {/* Profile Dropdown */}
              <div className="dropdown">
                <button
                  className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
                  type="button"
                  data-bs-toggle="dropdown"
                  style={{ width: '40px', height: '40px' }}
                >
                  <i className="bi bi-person-circle fs-5"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end shadow">
                  <li>
                    <span className="dropdown-item-text">
                      <div className="fw-bold">{userProfile?.displayName || 'User'}</div>
                      <small className="text-muted">{user?.email}</small>
                    </span>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/profile"><i className="bi bi-person me-2"></i>Profile</Link></li>
                  <li><Link className="dropdown-item" to="/billing"><i className="bi bi-credit-card me-2"></i>Subscription</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item text-danger"><i className="bi bi-box-arrow-right me-2"></i>Logout</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* KPI Stats Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="row g-3 mb-4"
      >
        <div className="col-md-6 col-lg-3">
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="card border-0 shadow-sm h-100"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white'
            }}
          >
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <p className="mb-1 opacity-75" style={{ fontSize: '14px' }}>Total Quotations</p>
                  <h3 className="mb-0 fw-bold">
                    <AnimatedCounter value={stats.totalQuotations} />
                  </h3>
                </div>
                <div className="bg-white bg-opacity-25 rounded p-2">
                  <i className="bi bi-file-earmark-text fs-4"></i>
                </div>
              </div>
              <small className="opacity-75">
                <i className="bi bi-arrow-up me-1"></i>+12% from last month
              </small>
            </div>
          </motion.div>
        </div>

        <div className="col-md-6 col-lg-3">
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="card border-0 shadow-sm h-100"
            style={{
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              color: 'white'
            }}
          >
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <p className="mb-1 opacity-75" style={{ fontSize: '14px' }}>Total Value</p>
                  <h3 className="mb-0 fw-bold">
                    <AnimatedCounter value={stats.totalValue} prefix="₹" />
                  </h3>
                </div>
                <div className="bg-white bg-opacity-25 rounded p-2">
                  <i className="bi bi-currency-rupee fs-4"></i>
                </div>
              </div>
              <small className="opacity-75">
                <i className="bi bi-arrow-up me-1"></i>+8% from last month
              </small>
            </div>
          </motion.div>
        </div>

        <div className="col-md-6 col-lg-3">
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="card border-0 shadow-sm h-100"
            style={{
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              color: 'white'
            }}
          >
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <p className="mb-1 opacity-75" style={{ fontSize: '14px' }}>Pending Quotations</p>
                  <h3 className="mb-0 fw-bold">
                    <AnimatedCounter value={stats.pendingQuotations} />
                  </h3>
                </div>
                <div className="bg-white bg-opacity-25 rounded p-2">
                  <i className="bi bi-hourglass-split fs-4"></i>
                </div>
              </div>
              <small className="opacity-75">
                <i className="bi bi-exclamation-circle me-1"></i>Awaiting response
              </small>
            </div>
          </motion.div>
        </div>

        <div className="col-md-6 col-lg-3">
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="card border-0 shadow-sm h-100"
            style={{
              background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
              color: 'white'
            }}
          >
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <p className="mb-1 opacity-75" style={{ fontSize: '14px' }}>Approved This Month</p>
                  <h3 className="mb-0 fw-bold">
                    <AnimatedCounter value={stats.thisMonthQuotations} />
                  </h3>
                </div>
                <div className="bg-white bg-opacity-25 rounded p-2">
                  <i className="bi bi-check-circle fs-4"></i>
                </div>
              </div>
              <small className="opacity-75">
                <i className="bi bi-trophy me-1"></i>₹{stats.thisMonthValue.toLocaleString()} revenue
              </small>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="row g-4">
        {/* Left Column - Quick Actions */}
        <div className="col-lg-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h5 className="mb-3">
              <i className="bi bi-lightning-charge me-2 text-warning"></i>
              Quick Actions
            </h5>

            <div className="row g-3 mb-4">
              {/* Multi-Item Calculator */}
              <div className="col-md-6">
                <Link to="/multi-calculator" className="text-decoration-none">
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="card h-100 border-0 shadow-sm"
                    style={{ 
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className="card-body">
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className="mb-3"
                      >
                        <i className="bi bi-calculator display-4"></i>
                      </motion.div>
                      <h5 className="card-title fw-bold">Multi-Item Calculator</h5>
                      <p className="card-text opacity-75 mb-3">
                        Create detailed quotations with multiple windows and doors
                      </p>
                      <div className="d-flex align-items-center">
                        <span>Start New Project</span>
                        <i className="bi bi-arrow-right ms-2"></i>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </div>

              {/* Simple Calculator */}
              <div className="col-md-6">
                <Link to="/calculator" className="text-decoration-none">
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="card h-100 border-0 shadow-sm"
                    style={{ 
                      background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                      color: 'white',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className="card-body">
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className="mb-3"
                      >
                        <i className="bi bi-grid-3x2-gap display-4"></i>
                      </motion.div>
                      <h5 className="card-title fw-bold">Simple Calculator</h5>
                      <p className="card-text opacity-75 mb-3">
                        Quick calculations for single windows or doors
                      </p>
                      <div className="d-flex align-items-center">
                        <span>Quick Calculate</span>
                        <i className="bi bi-arrow-right ms-2"></i>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </div>

              {/* Admin Settings */}
              <div className="col-md-6">
                <Link to="/admin" className="text-decoration-none">
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="card h-100 border-0 shadow-sm"
                    style={{ 
                      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                      color: 'white',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className="card-body">
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className="mb-3"
                      >
                        <i className="bi bi-gear display-4"></i>
                      </motion.div>
                      <h5 className="card-title fw-bold">Admin Settings</h5>
                      <p className="card-text opacity-75 mb-3">
                        Configure pricing, invoice settings, and preferences
                      </p>
                      <div className="d-flex align-items-center">
                        <span>Manage Settings</span>
                        <i className="bi bi-arrow-right ms-2"></i>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </div>

              {/* Billing */}
              <div className="col-md-6">
                <Link to="/billing" className="text-decoration-none">
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="card h-100 border-0 shadow-sm"
                    style={{ 
                      background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                      color: 'white',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className="card-body">
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className="mb-3"
                      >
                        <i className="bi bi-credit-card display-4"></i>
                      </motion.div>
                      <h5 className="card-title fw-bold">Billing & Subscription</h5>
                      <p className="card-text opacity-75 mb-3">
                        Manage your subscription and payment methods
                      </p>
                      <div className="d-flex align-items-center">
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

        {/* Right Column - Recent Activity Feed */}
        <div className="col-lg-4">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h5 className="mb-3">
              <i className="bi bi-clock-history me-2 text-info"></i>
              Recent Activity
            </h5>

            <div className="card border-0 shadow-sm">
              <div className="card-body p-0">
                <div className="list-group list-group-flush">
                  <AnimatePresence>
                    {recentActivities.map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="list-group-item border-0 py-3"
                      >
                        <div className="d-flex align-items-start">
                          <div 
                            className={`bg-${activity.color} bg-opacity-10 rounded p-2 me-3`}
                            style={{ minWidth: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                          >
                            <i className={`bi ${activity.icon} text-${activity.color} fs-5`}></i>
                          </div>
                          <div className="flex-grow-1">
                            <p className="mb-1 fw-medium" style={{ fontSize: '14px' }}>
                              {activity.text}
                            </p>
                            <small className="text-muted">
                              <i className="bi bi-clock me-1"></i>
                              {activity.time}
                            </small>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
                <div className="p-3 text-center border-top">
                  <button className="btn btn-link text-decoration-none">
                    View All Activity <i className="bi bi-arrow-right ms-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  )
}