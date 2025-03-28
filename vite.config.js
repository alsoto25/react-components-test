import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  base: 'https://alsoto25.github.io/react-components-test/',
  plugins: [
    federation({
      name: 'sharedComponents',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button/index.jsx',
        './Input': './src/components/Input/index.jsx',
      },
      shared: ['react', 'react-dom'],
    }),
    react(),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
