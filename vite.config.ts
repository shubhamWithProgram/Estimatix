import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
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
