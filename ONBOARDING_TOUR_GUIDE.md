# 🧭 Estimatix Onboarding Tour - Complete Guide

## Overview

A professional guided tour system for Estimatix Premium Calculator using **Shepherd.js**. This onboarding experience helps first-time users understand the application flow and master quotation creation in under 60 seconds.

---

## 🎯 Features

### ✅ Smart Auto-Detection
- Automatically starts for first-time users
- Uses `localStorage` to track completion
- Never intrusive - users can skip anytime

### ✅ Professional UI
- Tailwind-inspired styling
- Smooth animations between steps
- Responsive on all devices
- Dark mode support

### ✅ Strategic Tour Steps
1. **Welcome** - Friendly introduction
2. **Company Info** - Branding setup
3. **Customer Details** - Client information
4. **Settings** - Default configurations
5. **Items** - Calculation management
6. **Summary** - Real-time analytics
7. **PDF Export** - Share & download
8. **Completion** - Pro tips & encouragement

### ✅ Floating Tour Button
- Fixed bottom-right corner
- Always accessible for manual restart
- Pulse animation for first-time visibility
- Violet gradient matching app theme

---

## 📦 Installation

### 1. Install Shepherd.js

```bash
npm install shepherd.js
```

### 2. Files Created

```
src/lib/
├── onboardingTour.js      # Main tour logic
└── onboardingTour.css     # Custom Tailwind-inspired styling
```

### 3. Integration

The tour is automatically integrated into `Calculator.jsx`:

```jsx
import { setupOnboarding } from '../lib/onboardingTour'
import '../lib/onboardingTour.css'

// In component
useEffect(() => {
  setupOnboarding()
}, [])
```

---

## 🎨 Tour Structure

### Step 1: Welcome
- **Title:** "👋 Welcome to Estimatix!"
- **Message:** Quick introduction and tour duration
- **Buttons:** Skip Tour | Start Tour
- **Position:** Center overlay

### Step 2: Company Information
- **Highlights:** `#company-section`
- **Explains:** Company name, phone, email fields
- **Purpose:** Professional quotation branding
- **Position:** Bottom of section

### Step 3: Customer Information
- **Highlights:** `#customer-section`
- **Explains:** Customer details for quotation
- **Purpose:** Email and WhatsApp sharing
- **Position:** Bottom of section

### Step 4: Default Settings & Rates
- **Highlights:** `#settings-section`
- **Explains:** Glass type, profile type, rate per kg
- **Purpose:** Time-saving defaults for all items
- **Position:** Bottom of section

### Step 5: Items & Calculations
- **Highlights:** `#items-section`
- **Explains:** Adding items with dimensions
- **Purpose:** Automatic weight calculation
- **Position:** Bottom of section

### Step 6: Project Summary & Analysis
- **Highlights:** `#summary-section`
- **Explains:** Real-time dashboard metrics
- **Purpose:** Total glass area, weight, grand total
- **Position:** Top of section

### Step 7: Generate PDF & Actions
- **Highlights:** `#actions-section`
- **Explains:** Export and sharing options
- **Purpose:** PDF, Excel, email, WhatsApp
- **Position:** Top of section

### Step 8: Completion
- **Title:** "🎉 You're All Set!"
- **Message:** Encouragement and tour restart info
- **Pro Tip:** AI suggestions and cloud saving
- **Button:** Start Using Estimatix

---

## 🛠️ API Reference

### Main Functions

#### `setupOnboarding()`
Initializes the complete onboarding system.
```javascript
import { setupOnboarding } from '../lib/onboardingTour'

// In your component
useEffect(() => {
  setupOnboarding()
}, [])
```

#### `createOnboardingTour()`
Creates and returns a Shepherd tour instance.
```javascript
import { createOnboardingTour } from '../lib/onboardingTour'

const tour = createOnboardingTour()
tour.start() // Manually start
```

#### `hasCompletedTour()`
Checks if user has completed the tour.
```javascript
import { hasCompletedTour } from '../lib/onboardingTour'

if (hasCompletedTour()) {
  console.log('User has seen the tour')
}
```

#### `resetTour()`
Clears tour completion status (useful for testing).
```javascript
import { resetTour } from '../lib/onboardingTour'

resetTour() // Tour will show on next page load
```

#### `createTourButton()`
Manually inject the floating tour button.
```javascript
import { createTourButton } from '../lib/onboardingTour'

createTourButton() // Adds button to document.body
```

---

## 🎨 Customization

### Styling

The tour uses a custom theme in `onboardingTour.css`. Key classes:

```css
/* Floating button */
.tour-floating-button {
  background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
  /* Customize colors here */
}

/* Shepherd modal */
.shepherd-element {
  max-width: 420px;
  font-family: 'Inter', system-ui, sans-serif;
}

/* Primary button */
.shepherd-button-primary {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
}
```

### Adding New Steps

```javascript
tour.addStep({
  id: 'my-step',
  title: '🎯 My Custom Step',
  text: '<p>Custom HTML content here</p>',
  attachTo: {
    element: '#my-section',
    on: 'bottom' // top, bottom, left, right
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
```

### Changing Tour Trigger

```javascript
// Auto-start after 2 seconds
setTimeout(() => {
  if (!hasCompletedTour()) {
    const tour = createOnboardingTour()
    tour.start()
  }
}, 2000)

// Start on button click
<button onClick={() => createOnboardingTour().start()}>
  Take Tour
</button>
```

---

## 📱 Responsive Behavior

### Desktop (> 768px)
- Full-width modals (420px max)
- Two-column button layout
- Smooth animations

### Mobile (< 768px)
- Full-width modals with margins
- Stacked button layout
- Smaller floating button
- Adjusted font sizes

---

## ♿ Accessibility

### Keyboard Navigation
- **Esc** - Close tour
- **Arrow Keys** - Navigate steps
- **Tab** - Focus buttons
- **Enter** - Activate button

### Screen Readers
- Proper ARIA labels
- Semantic HTML
- Focus management

### Visual Indicators
- High contrast text
- Clear button states
- Focus outlines
- Color-independent cues

---

## 🧪 Testing

### Manual Testing

1. **First-Time Experience**
```javascript
// In browser console
localStorage.removeItem('estimatix_tour_completed')
// Reload page
```

2. **Skip Functionality**
- Click "Skip Tour" on welcome
- Verify localStorage is set
- Reload and confirm tour doesn't show

3. **Complete Journey**
- Go through all 8 steps
- Verify smooth transitions
- Check localStorage on completion

4. **Manual Restart**
- Complete tour once
- Click floating 🧭 Tour button
- Verify tour restarts from beginning

### Automated Testing

```javascript
import { hasCompletedTour, resetTour } from '../lib/onboardingTour'

describe('Onboarding Tour', () => {
  beforeEach(() => {
    resetTour()
  })

  test('should not show for returning users', () => {
    localStorage.setItem('estimatix_tour_completed', 'true')
    expect(hasCompletedTour()).toBe(true)
  })

  test('should show for first-time users', () => {
    expect(hasCompletedTour()).toBe(false)
  })
})
```

---

## 🐛 Troubleshooting

### Tour Not Starting

**Problem:** Tour doesn't appear on first load.

**Solutions:**
1. Check if sections have correct IDs:
   ```html
   <div id="company-section">
   <div id="customer-section">
   <div id="settings-section">
   <div id="items-section">
   <div id="summary-section">
   <div id="actions-section">
   ```

2. Verify localStorage:
   ```javascript
   localStorage.removeItem('estimatix_tour_completed')
   ```

3. Check console for errors:
   ```javascript
   import Shepherd from 'shepherd.js'
   console.log('Shepherd loaded:', Shepherd)
   ```

### Styling Issues

**Problem:** Tour looks unstyled or broken.

**Solutions:**
1. Ensure CSS is imported:
   ```jsx
   import '../lib/onboardingTour.css'
   import 'shepherd.js/dist/css/shepherd.css'
   ```

2. Check CSS load order in browser DevTools

3. Verify no conflicting CSS overrides

### Floating Button Not Visible

**Problem:** 🧭 Tour button doesn't appear.

**Solutions:**
1. Check z-index conflicts:
   ```css
   .tour-floating-button {
     z-index: 999 !important;
   }
   ```

2. Verify button is injected:
   ```javascript
   console.log(document.getElementById('tour-button'))
   ```

3. Check for Bootstrap Icons:
   ```html
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
   ```

---

## 📊 Analytics Integration

Track tour engagement with analytics:

```javascript
tour.on('complete', () => {
  // Google Analytics
  gtag('event', 'tour_completed', {
    event_category: 'onboarding'
  })

  // Custom analytics
  analyticsService.track('Onboarding Tour Completed')
})

tour.on('cancel', () => {
  // Track skips
  analyticsService.track('Onboarding Tour Skipped', {
    step: tour.getCurrentStep().id
  })
})
```

---

## 🚀 Performance

### Bundle Size
- Shepherd.js: ~20KB gzipped
- Custom code: ~5KB
- Total impact: ~25KB

### Optimization Tips
1. **Lazy Load:** Only load when needed
2. **Code Split:** Dynamic import for tour
3. **Cache:** Store in service worker

```javascript
// Lazy load example
const loadTour = async () => {
  const { setupOnboarding } = await import('../lib/onboardingTour')
  setupOnboarding()
}
```

---

## 🎯 Best Practices

### 1. Keep Steps Short
- Max 2-3 sentences per step
- Use emojis for visual appeal
- Highlight one concept per step

### 2. Strategic Timing
- Wait 1 second before starting
- Allow page to fully render
- Avoid interrupting user actions

### 3. Clear Navigation
- Always provide "Back" button
- Make "Skip" easily accessible
- Show progress (Step X of Y)

### 4. Mobile-First
- Test on small screens
- Ensure buttons are tappable
- Check text readability

### 5. User Control
- Never force-start on every visit
- Provide manual restart option
- Allow exit at any time

---

## 📚 Resources

### Official Docs
- [Shepherd.js Documentation](https://shepherdjs.dev/)
- [Shepherd.js Examples](https://shepherdjs.dev/demo/)

### Inspiration
- [Notion Onboarding](https://notion.so)
- [Linear Tour](https://linear.app)
- [Stripe Setup](https://stripe.com)

### Related Libraries
- [Intro.js](https://introjs.com/) - Alternative tour library
- [Driver.js](https://driverjs.com/) - Lightweight alternative
- [React Joyride](https://react-joyride.com/) - React-specific

---

## 📝 Changelog

### Version 1.0.0 (Current)
- ✅ Initial release
- ✅ 8-step guided tour
- ✅ Floating tour button
- ✅ LocalStorage persistence
- ✅ Responsive design
- ✅ Dark mode support
- ✅ Accessibility features

### Planned Features
- [ ] Progress indicator (1/8, 2/8, etc.)
- [ ] Video tutorials in steps
- [ ] Interactive demos
- [ ] Multi-language support
- [ ] Custom themes
- [ ] Analytics dashboard

---

## 🤝 Contributing

Want to improve the tour? Here's how:

1. **Add New Steps**
   - Edit `src/lib/onboardingTour.js`
   - Add section ID to component
   - Test thoroughly

2. **Improve Styling**
   - Edit `src/lib/onboardingTour.css`
   - Follow Tailwind conventions
   - Test in both themes

3. **Report Issues**
   - Include browser version
   - Provide screenshots
   - List steps to reproduce

---

## 📄 License

This onboarding tour implementation is part of the Estimatix project and follows the same license.

---

## 🎉 Success Metrics

After implementing the tour, track these KPIs:

- **Completion Rate:** % of users who finish tour
- **Skip Rate:** % of users who skip
- **Time to Complete:** Average duration
- **Feature Adoption:** Usage of explained features
- **User Satisfaction:** Post-tour survey

---

**Built with ❤️ for Estimatix**

*Professional quotations made simple.*
