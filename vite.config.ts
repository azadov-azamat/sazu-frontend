import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { config } from 'dotenv';
import svgr from '@svgr/rollup'

config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  define: {
    'process.env': process.env
  },
  optimizeDeps: {
    include: ['framer-motion'],
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
})
