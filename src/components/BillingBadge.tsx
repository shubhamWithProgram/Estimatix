// Billing badge component for header
import React from 'react'
import { useAuth } from '../lib/auth'
import { SUBSCRIPTION_PLANS } from '../lib/stripe'

interface BillingBadgeProps {
  className?: string
}

export default function BillingBadge({ className = '' }: BillingBadgeProps) {
  const { userProfile } = useAuth()

  if (!userProfile?.subscription) {
    return null
  }

  const plan = SUBSCRIPTION_PLANS[userProfile.subscription.plan.toUpperCase() as keyof typeof SUBSCRIPTION_PLANS]
  const status = userProfile.subscription.status

  // Determine badge color based on plan and status
  const getBadgeColor = () => {
    if (status === 'past_due') return 'bg-danger'
    if (status === 'canceled') return 'bg-warning'
    if (plan?.id === 'enterprise') return 'bg-dark'
    if (plan?.id === 'pro') return 'bg-primary'
    return 'bg-secondary'
  }

  // Determine badge text
  const getBadgeText = () => {
    if (status === 'past_due') return 'Payment Due'
    if (status === 'canceled') return 'Canceled'
    return plan?.name || 'Free'
  }

  return (
    <span className={`badge ${getBadgeColor()} ${className}`}>
      {getBadgeText()}
    </span>
  )
}


