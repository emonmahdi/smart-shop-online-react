import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#F97316",
        accent: "#22C55E",
        bg: "#F8FAFC",
        text: "#334155",
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
