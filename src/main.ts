import './style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Initialize theme once at startup
(() => {
  try {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const theme = stored === 'dark' || stored === 'light' ? stored : (prefersDark ? 'dark' : 'light')
    document.documentElement.setAttribute('data-bs-theme', theme === 'dark' ? 'dark' : 'light')
  } catch {}
})()

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  React.createElement(React.StrictMode, null, React.createElement(App, null))
)

// Register PWA service worker (vite-plugin-pwa)
if ('serviceWorker' in navigator) {
  import('virtual:pwa-register').then(({ registerSW }) => {
    registerSW({ immediate: true, onRegisteredSW: () => {}, onNeedRefresh() {}, onOfflineReady() {} })
  }).catch(() => {})
}