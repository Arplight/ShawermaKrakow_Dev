import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{port:6500},
  plugins: [react()],
  scripts:{
    build:"vite build",
    preview:"vite preview",
  }
})
