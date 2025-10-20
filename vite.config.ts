import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  const base = isDev ? '/' : '/Estimatix/'
  
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
            // Large libraries get their own chunks
            if (id.includes('xlsx')) return 'vendor-xlsx'
            if (id.includes('jspdf')) return 'vendor-jspdf'
            // Let Vite handle React bundling automatically to avoid circular dependency issues
            // All other node_modules go into vendor chunk
            if (!id.includes('react')) {
              return 'vendor'
            }
            // React packages handled automatically by Vite
          }
        }
      }
    }
  }
  }
})
