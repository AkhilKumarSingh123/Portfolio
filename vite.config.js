import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   content: ['./src/**/*.{js,jsx,ts,tsx}'], 
  darkMode: 'class', 
  theme: {
    extend: {
      keyframes: {
        slideLTR: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        slideLTR: 'slideLTR 10s linear infinite',
      },
    },
  },
  plugins: [react(),
    tailwindcss()
  ],
   
})
