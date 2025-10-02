import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Venkatesh Aluminium & Glass',
        short_name: 'VAG Estimator',
        description: 'Windows & Doors • Weight & Cost Estimator',
        theme_color: '#0d6efd',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/venkatesh_aluminium/',
        start_url: '/venkatesh_aluminium/',
        icons: [
          { src: 'logo192.png', sizes: '192x192', type: 'image/png' },
          { src: 'logo512.png', sizes: '512x512', type: 'image/png' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}'],
        runtimeCaching: [
          { urlPattern: /.*\/venkatesh_aluminium\/.*/, handler: 'NetworkFirst', options: { cacheName: 'app-shell' } },
          { urlPattern: /https:\/\/api\.qrserver\.com\/.*/, handler: 'StaleWhileRevalidate', options: { cacheName: 'qr-api' } }
        ]
      }
    })
  ],
  // GitHub Pages subpath for this repo
  base: '/venkatesh_aluminium/',
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
})
