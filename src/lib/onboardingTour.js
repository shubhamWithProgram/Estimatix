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
 * Slack-style contextual bubble theme
 */
const shepherdTheme = {
  defaultStepOptions: {
    classes: 'shepherd-theme-bubble',
    scrollTo: false,
    cancelIcon: {
      enabled: true
    },
    arrow: true
  }
}

/**
 * Create and configure the onboarding tour
 */
export function createOnboardingTour() {
  const tour = new Shepherd.Tour({
    ...shepherdTheme,
    useModalOverlay: false,
    exitOnEsc: true,
    keyboardNavigation: true
  })

  // Step 1: Welcome
  tour.addStep({
    id: 'welcome',
    title: '👋 Welcome to Estimatix',
    text: `Let's take a quick guided tour to help you create professional quotations with confidence.`,
    attachTo: { element: '#company-section', on: 'bottom' },
    buttons: [
      {
        text: 'Skip',
        classes: 'shepherd-button-secondary',
        action: tour.complete
      },
      {
        text: 'Next',
        classes: 'shepherd-button-primary',
        action: tour.next
      }
    ]
  })

  // Step 2: Company Information
  tour.addStep({
    id: 'company-info',
    title: '🏢 Company Details',
    text: `Add your company information here — it appears automatically on quotations.`,
    attachTo: {
      element: '#company-section',
      on: 'right'
    },
    buttons: [
      {
        text: 'Back',
        classes: 'shepherd-button-secondary',
        action: tour.back
      },
      {
        text: 'Got it',
        classes: 'shepherd-button-primary',
        action: tour.next
      }
    ]
  })

  // Step 3: Customer Information
  tour.addStep({
    id: 'customer-info',
    title: '👤 Customer Info',
    text: `Enter customer contact details here for accurate quotation records.`,
    attachTo: {
      element: '#customer-section',
      on: 'left'
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
    title: '⚙️ Settings',
    text: `Configure rates, wastage, and parameters applied to all quotations.`,
    attachTo: {
      element: '#settings-section',
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

  // Step 5: Items & Calculations
  tour.addStep({
    id: 'items',
    title: '📋 Add Items',
    text: `Build your quotation by adding items with specs and quantities.`,
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
    title: '📊 Summary',
    text: `Real-time view of glass area, frame weight, and grand total calculations.`,
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
    title: '🚀 Actions',
    text: `Generate PDFs, export to Excel, or share via WhatsApp. Auto-saved.`,
    attachTo: {
      element: '#actions-section',
      on: 'left'
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
    title: '🎉 Ready to Go!',
    text: `You're all set! Click the 🧭 button anytime to replay this tour.`,
    attachTo: { element: '#summary-section', on: 'bottom' },
    buttons: [
      {
        text: 'Get Started',
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
