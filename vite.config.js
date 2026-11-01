import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'

  return {
    plugins: [react()],
    // Use root base for custom domain (bhatiyaniai.com)
    base: '/',
    server: {
      // Serve index.html for all routes in dev mode (SPA fallback)
      historyApiFallback: true,
    },
    build: {
      // Prevent leaking source maps in production
      sourcemap: false,
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
            'vendor-motion': ['framer-motion'],
            'vendor-ui': ['@headlessui/react', '@heroicons/react']
          }
        }
      }
    },
    esbuild: {
      // Drop console and debugger in production to prevent information disclosure
      drop: isProd ? ['console', 'debugger'] : []
    }
  }
})
