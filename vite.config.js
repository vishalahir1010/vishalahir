import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Modern, optimized production build
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
  },
})
