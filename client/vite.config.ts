import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
  build: {
    outDir: 'dist',
  },
  define: {
    'process.env.VITE_APP_URL': JSON.stringify(process.env.VITE_APP_URL),
    'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL),
  }
})