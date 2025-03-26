import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'sharedComponents', // Unique name for this remote
      filename: 'remoteEntry.js', // Standard manifest filename
      exposes: {
        './Button': './src/components/Button/index.jsx',
        './Input': './src/components/Input/index.jsx',
      },
      shared: ['react', 'react-dom'] // List dependencies to share with hosts
    })
  ],
  build: {
    target: 'esnext',
  },
})
