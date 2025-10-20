import { motion } from 'framer-motion'
import { LayoutGrid, Plus } from 'lucide-react'

interface DataGridHeaderProps {
  title?: string
  itemCount?: number
  onAdd?: () => void
  addButtonText?: string
}

export function DataGridHeader({ 
  title = "Premium DataGrid",
  itemCount = 0,
  onAdd,
  addButtonText = "Add New Item"
}: DataGridHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex items-center justify-between px-6 py-3 rounded-2xl shadow-inner shadow-indigo-900/30"
      style={{
        background: 'linear-gradient(135deg, #2E2A68 0%, #3B357A 100%)'
      }}
    >
      {/* Left: Title Section with Icon & Badge */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Grid Icon with Glow */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
          className="p-2 rounded-lg bg-gradient-to-br from-violet-500/20 to-indigo-600/20 backdrop-blur-sm"
        >
          <LayoutGrid className="w-5 h-5 text-violet-300" strokeWidth={2.5} />
        </motion.div>

        {/* Title with Gradient Text */}
        <motion.h2
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] bg-clip-text text-transparent"
          style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          {title}
        </motion.h2>

        {/* Count Badge with Glow */}
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 250 }}
          className="px-3 py-1 text-xs sm:text-sm font-semibold text-white bg-violet-500/80 backdrop-blur-md rounded-full shadow-md shadow-violet-500/50"
        >
          {itemCount}
        </motion.span>
      </div>

      {/* Right: Add New Item Button */}
      <motion.button
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
        onClick={onAdd}
        whileHover={{ 
          scale: 1.02,
          boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4)'
        }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]"
        style={{
          boxShadow: '0 0 10px rgba(16, 185, 129, 0.3)'
        }}
      >
        <Plus className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
        <span className="hidden sm:inline">{addButtonText}</span>
        <span className="sm:hidden">Add</span>
      </motion.button>
    </motion.div>
  )
}

// Alternative variant with more premium glass effect
export function DataGridHeaderPremium({ 
  title = "Premium DataGrid",
  itemCount = 0,
  onAdd,
  addButtonText = "Add New Item"
}: DataGridHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="relative flex items-center justify-between px-6 py-4 rounded-2xl overflow-hidden backdrop-blur-xl"
      style={{
        background: 'linear-gradient(135deg, rgba(46, 42, 104, 0.95) 0%, rgba(59, 53, 122, 0.95) 100%)',
        boxShadow: 'inset 0 2px 8px rgba(139, 92, 246, 0.15), 0 8px 32px rgba(0, 0, 0, 0.3)'
      }}
    >
      {/* Animated Glow Overlay */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-indigo-500/10 blur-xl"
        style={{ pointerEvents: 'none' }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between w-full">
        {/* Left: Title Section */}
        <div className="flex items-center gap-3">
          {/* Icon Container */}
          <motion.div
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="relative"
          >
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-500/30 to-indigo-600/30 backdrop-blur-sm border border-violet-400/20">
              <LayoutGrid className="w-5 h-5 text-violet-200" strokeWidth={2.5} />
            </div>
            {/* Pulsing Glow */}
            <motion.div
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute inset-0 bg-violet-500/30 rounded-xl blur-md"
              style={{ zIndex: -1 }}
            />
          </motion.div>

          {/* Title */}
          <div className="flex items-center gap-2.5">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl font-bold tracking-tight"
            >
              <span 
                className="bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#7C3AED] bg-clip-text text-transparent"
                style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 20px rgba(139, 92, 246, 0.3)'
                }}
              >
                {title}
              </span>
            </motion.h2>

            {/* Premium Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 250 }}
              className="relative"
            >
              <div className="px-3.5 py-1.5 text-sm font-bold text-white bg-gradient-to-r from-violet-500 to-purple-600 rounded-full shadow-lg backdrop-blur-md border border-violet-300/30">
                {itemCount}
              </div>
              {/* Badge Glow */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute inset-0 bg-violet-500/50 rounded-full blur-lg"
                style={{ zIndex: -1 }}
              />
            </motion.div>
          </div>
        </div>

        {/* Right: Action Button */}
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
          onClick={onAdd}
          whileHover={{ 
            scale: 1.03,
            boxShadow: '0 0 30px rgba(16, 185, 129, 0.6), 0 10px 30px rgba(16, 185, 129, 0.3)'
          }}
          whileTap={{ scale: 0.97 }}
          className="group relative flex items-center gap-2.5 px-5 py-2.5 font-semibold text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-xl shadow-lg transition-all duration-300 overflow-hidden"
          style={{
            boxShadow: '0 0 15px rgba(16, 185, 129, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3)'
          }}
        >
          {/* Button Shimmer Effect */}
          <motion.div
            animate={{
              x: ['-100%', '200%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{ pointerEvents: 'none' }}
          />

          {/* Icon */}
          <motion.div
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <Plus className="w-5 h-5" strokeWidth={2.5} />
          </motion.div>

          {/* Text */}
          <span className="relative z-10 hidden sm:inline text-sm font-bold tracking-wide">
            {addButtonText}
          </span>
          <span className="relative z-10 sm:hidden text-sm font-bold">
            Add
          </span>
        </motion.button>
      </div>
    </motion.div>
  )
}

export default DataGridHeader
