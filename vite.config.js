import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from "path";

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: command === 'build' ? '/Portfolio/' : '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
}))
