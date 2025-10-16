import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  const base = isDev ? '/' : '/estimatix/'
  
  return {
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'favicon.ico', 'logo.svg', 'robots.txt', 'apple-touch-icon.png'],
        manifest: {
          name: 'Estimatix - Professional Estimation Platform',
          short_name: 'Estimatix',
          description: 'Professional estimation and quotation platform for construction materials',
          theme_color: '#4f46e5',
          background_color: '#ffffff',
          display: 'standalone',
          scope: base,
          start_url: base,
        icons: [
          { src: 'logo192.png', sizes: '192x192', type: 'image/png' },
          { src: 'logo512.png', sizes: '512x512', type: 'image/png' },
          { src: 'logo.svg', sizes: 'any', type: 'image/svg+xml' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}'],
        runtimeCaching: [
          { urlPattern: new RegExp(base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '.*'), handler: 'NetworkFirst', options: { cacheName: 'app-shell' } },
          { urlPattern: /https:\/\/api\.qrserver\.com\/.*/, handler: 'StaleWhileRevalidate', options: { cacheName: 'qr-api' } }
        ]
      }
    })
  ],
  // Environment-dependent base path
  base: base,
  build: {
    outDir: 'build',        // <— create build/ instead of dist/
    emptyOutDir: true,      // <— clean build/ before each build
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('xlsx')) return 'vendor-xlsx'
            if (id.includes('jspdf')) return 'vendor-jspdf'
            if (id.match(/react|react-dom/)) return 'vendor-react'
            return 'vendor'
          }
        }
      }
    }
  }
  }
})
