/**
 * Estimatix Onboarding Tour
 * Professional guided tour using Shepherd.js
 * Helps first-time users understand the application flow
 */

import Shepherd from 'shepherd.js'
import 'shepherd.js/dist/css/shepherd.css'

// Tour configuration
const TOUR_COMPLETED_KEY = 'estimatix_tour_completed'

/**
 * Custom Shepherd theme with Tailwind-inspired styling
 */
const shepherdTheme = {
  defaultStepOptions: {
    classes: 'shepherd-theme-custom',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: {
      enabled: true
    },
    modalOverlayOpeningPadding: 8,
    modalOverlayOpeningRadius: 8
  }
}

/**
 * Create and configure the onboarding tour
 */
export function createOnboardingTour() {
  const tour = new Shepherd.Tour({
    ...shepherdTheme,
    useModalOverlay: true,
    exitOnEsc: true,
    keyboardNavigation: true
  })

  // Step 1: Welcome
  tour.addStep({
    id: 'welcome',
    title: '👋 Welcome to Estimatix!',
    text: `
      <div class="shepherd-text-content">
        <p>Let's take a quick tour to help you create professional quotations with confidence.</p>
        <p class="text-sm text-slate-600 mt-2">This will only take 60 seconds.</p>
      </div>
    `,
    buttons: [
      {
        text: 'Skip Tour',
        classes: 'shepherd-button-secondary',
        action: tour.complete
      },
      {
        text: 'Start Tour',
        classes: 'shepherd-button-primary',
        action: tour.next
      }
    ]
  })

  // Step 2: Company Information
  tour.addStep({
    id: 'company-info',
    title: '🏢 Company Information',
    text: `
      <div class="shepherd-text-content">
        <p>Start by filling in your company name, phone, and email.</p>
        <p class="text-sm text-slate-600 mt-2">These details will appear on all your quotations and make them look professional.</p>
      </div>
    `,
    attachTo: {
      element: '#company-section',
      on: 'bottom'
    },
    buttons: [
      {
        text: 'Back',
        classes: 'shepherd-button-secondary',
        action: tour.back
      },
      {
        text: 'Next',
        classes: 'shepherd-button-primary',
        action: tour.next
      }
    ]
  })

  // Step 3: Customer Information
  tour.addStep({
    id: 'customer-info',
    title: '👤 Customer Details',
    text: `
      <div class="shepherd-text-content">
        <p>Enter your customer's details here.</p>
        <p class="text-sm text-slate-600 mt-2">They'll be used for your quotation header and when sharing via email or WhatsApp.</p>
      </div>
    `,
    attachTo: {
      element: '#customer-section',
      on: 'bottom'
    },
    buttons: [
      {
        text: 'Back',
        classes: 'shepherd-button-secondary',
        action: tour.back
      },
      {
        text: 'Next',
        classes: 'shepherd-button-primary',
        action: tour.next
      }
    ]
  })

  // Step 4: Default Settings & Rates
  tour.addStep({
    id: 'settings',
    title: '⚙️ Default Settings & Rates',
    text: `
      <div class="shepherd-text-content">
        <p>Adjust default settings like glass type, profile type, and rate per kg.</p>
        <p class="text-sm text-slate-600 mt-2">These will be applied to all new items automatically, saving you time.</p>
      </div>
    `,
    attachTo: {
      element: '#settings-section',
      on: 'bottom'
    },
    buttons: [
      {
        text: 'Back',
        classes: 'shepherd-button-secondary',
        action: tour.back
      },
      {
        text: 'Next',
        classes: 'shepherd-button-primary',
        action: tour.next
      }
    ]
  })

  // Step 5: Items & Calculations
  tour.addStep({
    id: 'items',
    title: '📋 Items & Calculations',
    text: `
      <div class="shepherd-text-content">
        <p>Add your quotation items here with dimensions and quantities.</p>
        <p class="text-sm text-slate-600 mt-2">Each item's material weight is calculated automatically based on dimensions and selected materials.</p>
      </div>
    `,
    attachTo: {
      element: '#items-section',
      on: 'bottom'
    },
    buttons: [
      {
        text: 'Back',
        classes: 'shepherd-button-secondary',
        action: tour.back
      },
      {
        text: 'Next',
        classes: 'shepherd-button-primary',
        action: tour.next
      }
    ]
  })

  // Step 6: Project Summary & Analysis
  tour.addStep({
    id: 'summary',
    title: '📊 Project Summary & Analysis',
    text: `
      <div class="shepherd-text-content">
        <p>Here's your real-time summary dashboard.</p>
        <p class="text-sm text-slate-600 mt-2">View total glass area, frame weight, profile length, and grand total — all updated automatically as you work.</p>
      </div>
    `,
    attachTo: {
      element: '#summary-section',
      on: 'top'
    },
    buttons: [
      {
        text: 'Back',
        classes: 'shepherd-button-secondary',
        action: tour.back
      },
      {
        text: 'Next',
        classes: 'shepherd-button-primary',
        action: tour.next
      }
    ]
  })

  // Step 7: Generate PDF & Actions
  tour.addStep({
    id: 'actions',
    title: '🎯 Export & Share',
    text: `
      <div class="shepherd-text-content">
        <p>Finally, export your quotation as a branded PDF or share it with your client instantly.</p>
        <p class="text-sm text-slate-600 mt-2">Choose from PDF download, Excel export, email, or WhatsApp sharing options.</p>
      </div>
    `,
    attachTo: {
      element: '#actions-section',
      on: 'top'
    },
    buttons: [
      {
        text: 'Back',
        classes: 'shepherd-button-secondary',
        action: tour.back
      },
      {
        text: 'Finish Tour',
        classes: 'shepherd-button-primary',
        action: tour.next
      }
    ]
  })

  // Step 8: Completion
  tour.addStep({
    id: 'complete',
    title: '🎉 You\'re All Set!',
    text: `
      <div class="shepherd-text-content">
        <p>That's it! You're ready to start using Estimatix confidently.</p>
        <p class="text-sm text-slate-600 mt-2">You can restart this tour anytime by clicking the <strong>🧭 Tour</strong> button at the bottom-right corner.</p>
        <div class="mt-4 p-3 bg-violet-50 rounded-lg border border-violet-200">
          <p class="text-sm text-violet-800 font-medium">💡 Pro Tip:</p>
          <p class="text-xs text-violet-700 mt-1">Use AI suggestions for pricing recommendations and save your quotations to the cloud!</p>
        </div>
      </div>
    `,
    buttons: [
      {
        text: 'Start Using Estimatix',
        classes: 'shepherd-button-primary',
        action: tour.complete
      }
    ]
  })

  // Mark tour as completed when finished
  tour.on('complete', () => {
    localStorage.setItem(TOUR_COMPLETED_KEY, 'true')
    console.log('✅ Onboarding tour completed')
  })

  // Also mark as completed if cancelled
  tour.on('cancel', () => {
    localStorage.setItem(TOUR_COMPLETED_KEY, 'true')
    console.log('⏭️ Onboarding tour skipped')
  })

  return tour
}

/**
 * Check if user has completed the tour
 */
export function hasCompletedTour() {
  return localStorage.getItem(TOUR_COMPLETED_KEY) === 'true'
}

/**
 * Reset tour completion status (for testing or user request)
 */
export function resetTour() {
  localStorage.removeItem(TOUR_COMPLETED_KEY)
  console.log('🔄 Tour reset - will show on next page load')
}

/**
 * Initialize tour for first-time users
 */
export function initializeOnboarding() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      startTourIfNeeded()
    })
  } else {
    // DOM already loaded
    startTourIfNeeded()
  }
}

/**
 * Start tour if user hasn't completed it
 */
function startTourIfNeeded() {
  // Wait a bit for the page to fully render
  setTimeout(() => {
    if (!hasCompletedTour()) {
      const tour = createOnboardingTour()
      tour.start()
    }
  }, 1000) // 1 second delay for smooth UX
}

/**
 * Create and inject the floating tour button
 */
export function createTourButton() {
  // Check if button already exists
  if (document.getElementById('tour-button')) {
    return
  }

  const button = document.createElement('button')
  button.id = 'tour-button'
  button.className = 'tour-floating-button'
  button.innerHTML = `
    <i class="bi bi-compass"></i>
    <span class="tour-button-text">Tour</span>
  `
  button.title = 'Start Guided Tour'
  
  button.addEventListener('click', () => {
    const tour = createOnboardingTour()
    tour.start()
  })

  document.body.appendChild(button)
}

/**
 * Main initialization function
 * Call this from your app entry point
 */
export function setupOnboarding() {
  initializeOnboarding()
  createTourButton()
}

// Default export
export default {
  createOnboardingTour,
  hasCompletedTour,
  resetTour,
  initializeOnboarding,
  createTourButton,
  setupOnboarding
}
