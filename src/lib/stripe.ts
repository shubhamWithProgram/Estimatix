// src/lib/stripe.ts
import { loadStripe, type Stripe } from '@stripe/stripe-js'

export const stripePromise: Promise<Stripe | null> =
  loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

export const PLAN_IDS = ['free', 'pro', 'enterprise'] as const
export type PlanId = typeof PLAN_IDS[number]

export interface SubscriptionPlan {
  id: PlanId
  name: string
  price: number
  currency: 'inr'
  interval: 'month' | 'year'
  features: string[]
}

export const SUBSCRIPTION_PLANS = {
  free: {
    id: 'free',
    name: 'Free',
    price: 0,
    currency: 'inr',
    interval: 'month',
    features: ['Up to 10 calculations per month', 'Basic export features'],
  },
  pro: {
    id: 'pro',
    name: 'Pro',
    price: 999,
    currency: 'inr',
    interval: 'month',
    features: [
      'Unlimited calculations',
      'Advanced exports',
      'Priority support',
      'Custom branding',
    ],
  },
  enterprise: {
    id: 'enterprise',
    name: 'Enterprise',
    price: 2999,
    currency: 'inr',
    interval: 'month',
    features: [
      'Everything in Pro',
      'Team collaboration',
      'API access',
      'Custom integrations',
    ],
  },
} satisfies Record<PlanId, SubscriptionPlan>

// Stripe Price IDs (from your Stripe Dashboard)
export const PRICE_IDS: Record<PlanId, string | null> = {
  free: null,
  pro: 'price_PRO_MONTH_INR',
  enterprise: 'price_ENTERPRISE_MONTH_INR',
}



