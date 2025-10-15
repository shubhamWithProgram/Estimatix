# SAAS Setup Guide for Venkatesh Aluminium Calculator

## Overview
This application is now a complete SAAS solution with Firebase authentication, Stripe payments, and subscription management.

## Features Implemented
✅ Firebase Authentication (Email/Password + Google OAuth)
✅ Stripe Payment Processing 
✅ Subscription Management
✅ User Dashboard with Billing
✅ Protected Routes
✅ SAAS pricing tiers (Free, Pro, Enterprise)
✅ Customer Portal for subscription management

## Quick Start

### 1. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing one
3. Enable the following services:
   - **Authentication**: Go to Authentication > Sign-in method
     - Enable Email/Password
     - Enable Google (optional)
   - **Firestore Database**: Create in production mode
   - **Functions**: Enable for Stripe integration

4. Get your Firebase configuration:
   - Go to Project Settings > General > Your apps
   - Click "Add app" and select Web
   - Copy the configuration values
   - Update `.env` file with your values

### 2. Stripe Setup

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Get your publishable key from Developers > API keys
3. Create products and pricing:
   - Go to Products > Create product
   - Create "Pro Plan" with monthly pricing (₹999)
   - Create "Enterprise Plan" with monthly pricing (₹2999)
   - Copy the Price IDs and update `src/lib/stripe.ts`

4. Set up webhooks:
   - Go to Developers > Webhooks
   - Add endpoint: `https://your-project.cloudfunctions.net/handleSuccessfulPayment`
   - Select events: `checkout.session.completed`

### 3. Environment Configuration

Update your `.env` file:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_actual_api_key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Stripe Configuration
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_your_actual_publishable_key

# Development
VITE_DEV=false
```

### 4. Firebase Functions Setup

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase in your project:
   ```bash
   firebase init
   ```

4. Deploy Functions:
   ```bash
   cd functions
   npm install
   npm run build
   firebase deploy --only functions
   ```

5. Set Stripe Secret Key:
   ```bash
   firebase functions:secrets:set STRIPE_SECRET_KEY
   # Enter your Stripe secret key when prompted
   ```

### 5. Update Stripe Price IDs

Update `src/lib/stripe.ts` with your actual Stripe Price IDs:

```typescript
export const PRICE_IDS: Record<PlanId, string | null> = {
  free: null,
  pro: 'price_your_actual_pro_price_id',
  enterprise: 'price_your_actual_enterprise_price_id',
}
```

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. For testing with Firebase Emulators:
   ```bash
   firebase emulators:start
   ```

## Application Structure

### Routes
- `/` - Main calculator (protected for paid users)
- `/login` - Sign in page
- `/signup` - Sign up page  
- `/billing` - Subscription management (protected)

### Features by Plan

**Free Plan:**
- Limited access to calculator
- Basic features

**Pro Plan (₹999/month):**
- Unlimited calculations
- Advanced exports
- Priority support
- Custom branding

**Enterprise Plan (₹2999/month):**
- Everything in Pro
- Team collaboration
- API access
- Custom integrations

## User Flow

1. **New User**: Visits site → Signs up → Gets free access → Can upgrade
2. **Authentication**: Login/Signup with email or Google
3. **Subscription**: Choose plan → Stripe Checkout → Subscription activated
4. **Management**: Access billing page → Manage subscription via Stripe Customer Portal

## Production Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to your hosting provider (Firebase Hosting, Vercel, etc.)

3. Update Stripe webhook URL to production URL

4. Test the complete flow:
   - User registration
   - Payment processing
   - Subscription activation
   - Access control

## Security Features

✅ Protected routes with authentication
✅ Server-side subscription verification
✅ Secure Stripe integration with webhooks
✅ Firebase security rules
✅ Environment variable protection

## Support

The application now includes:
- User authentication system
- Subscription management
- Payment processing
- Protected content
- Customer support portal

Your Venkatesh Aluminium Calculator is now a complete SAAS application!