import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    federation({
      name: 'sharedComponents', // Unique name for this remote
      filename: 'remoteEntry.js', // Standard manifest filename
      exposes: {
        './Button': './src/components/Button/index.jsx',
        './Input': './src/components/Input/index.jsx',
      },
    }),
    react(),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
