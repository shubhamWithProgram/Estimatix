import React, { useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise, SUBSCRIPTION_PLANS, PLAN_IDS, PRICE_IDS } from '../lib/stripe'
import type { SubscriptionPlan, PlanId } from '../lib/stripe'

import { useAuth } from './Auth'
import { httpsCallable } from 'firebase/functions'
import { functions } from '../lib/firebase'

// ---------- Firebase callable types ----------
type PortalReq = { returnUrl: string }
type PortalRes = { url: string }

type CheckoutReq = {
  priceId: string
  successUrl: string
  cancelUrl: string
}
type CheckoutRes = { url: string }

const createPortalSession = httpsCallable<PortalReq, PortalRes>(
  functions,
  'createPortalSession'
)

const createCheckoutSession = httpsCallable<CheckoutReq, CheckoutRes>(
  functions,
  'createCheckoutSession'
)

// ---------- UI: Subscription plan card ----------
function PlanCard({
  plan,
  currentPlan,
  onSelect,
}: {
  plan: SubscriptionPlan
  currentPlan?: PlanId
  onSelect: (planId: PlanId) => void
}) {
  const isCurrent = currentPlan === plan.id
  const isPopular = plan.id === 'pro'

  return (
    <div className={`card h-100 ${isPopular ? 'border-primary' : ''}`}>
      {isPopular && (
        <div className="card-header bg-primary text-white text-center">
          <small className="fw-bold">MOST POPULAR</small>
        </div>
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{plan.name}</h5>
        <div className="mb-3">
          <span className="h2">₹{plan.price}</span>
          <span className="text-muted">/{plan.interval}</span>
        </div>
        <ul className="list-unstyled flex-grow-1">
          {plan.features.map((feature: string, index: number) => (
            <li key={index} className="mb-2">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              {feature}
            </li>
          ))}
        </ul>
        <button
          className={`btn ${
            isCurrent
              ? 'btn-outline-secondary'
              : isPopular
              ? 'btn-primary'
              : 'btn-outline-primary'
          } mt-auto`}
          onClick={() => onSelect(plan.id)}
          disabled={isCurrent}
        >
          {isCurrent ? 'Current Plan' : 'Select Plan'}
        </button>
      </div>
    </div>
  )
}

// ---------- UI: Customer portal ----------
function CustomerPortal() {
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()

  const handleManageSubscription = async () => {
    if (!user) return
    setLoading(true)
    try {
      const { data } = await createPortalSession({
        returnUrl: window.location.origin,
      })
      window.location.assign(data.url)
    } catch (error) {
      console.error('Error creating portal session:', error)
      alert('Failed to open billing portal. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card">
      <div className="card-body text-center">
        <h5 className="card-title">Manage Your Subscription</h5>
        <p className="card-text">
          Update your payment method, view invoices, and manage your subscription.
        </p>
        <button
          className="btn btn-outline-primary"
          onClick={handleManageSubscription}
          disabled={loading}
        >
          {loading ? 'Opening...' : 'Open Customer Portal'}
        </button>
      </div>
    </div>
  )
}

// ---------- Main ----------
export default function Billing() {
  const { userProfile } = useAuth()
  const [loading, setLoading] = useState(false)

  const currentPlan = (userProfile?.subscription?.plan ?? 'free') as PlanId

  const handlePlanSelect = async (planId: PlanId) => {
    if (!userProfile || planId === 'free') return

    setLoading(true)
    try {
      const priceId = PRICE_IDS[planId]
      if (!priceId) return

      const { data } = await createCheckoutSession({
        priceId,
        successUrl: `${window.location.origin}/billing?success=true`,
        cancelUrl: `${window.location.origin}/billing?canceled=true`,
      })

      window.location.assign(data.url)
    } catch (error) {
      console.error('Error creating checkout session:', error)
      alert('Failed to start checkout. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const plans = Object.values(SUBSCRIPTION_PLANS) as SubscriptionPlan[]

  return (
    <Elements stripe={stripePromise}>
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <h1 className="h2 mb-4">Billing & Subscription</h1>

            {/* Current plan status */}
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Current Plan</h5>
                <p className="card-text">
                  You're currently on the{' '}
                  <strong>
                    {SUBSCRIPTION_PLANS[currentPlan]?.name ?? 'Free'} plan
                  </strong>
                  {userProfile?.subscription?.currentPeriodEnd && (
                    <span className="text-muted ms-2">
                      (Renews on{' '}
                      {new Date(
                        userProfile.subscription.currentPeriodEnd
                      ).toLocaleDateString()}
                      )
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Subscription plans */}
            <div className="row g-4 mb-4">
              {plans.map((plan) => (
                <div key={plan.id} className="col-md-4">
                  <PlanCard
                    plan={plan}
                    currentPlan={currentPlan}
                    onSelect={handlePlanSelect}
                  />
                </div>
              ))}
            </div>

            {/* Customer portal */}
            {currentPlan !== 'free' && <CustomerPortal />}
          </div>
        </div>
      </div>
    </Elements>
  )
}




