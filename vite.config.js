import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all local IPv4 and IPv6 addresses
    port: 3000,
    open: false
  }
})
