import { defineConfig } from 'vite'
import { dependencies } from './package.json'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

export default defineConfig({
  plugins: [
    federation({
      name: 'sharedComponents', // Unique name for this remote
      filename: 'remoteEntry.js', // Standard manifest filename
      exposes: {
        './Button': './src/components/Button/index.jsx',
        './Input': './src/components/Input/index.jsx',
      },
      shared: {
        'react': {
          requiredVersion: dependencies['react'],
          singleton: true,
        },
        'react-dom': {
          requiredVersion: dependencies['react-dom'],
          singleton: true,
        },
      },
    }),
    react(),
  ],
  build: {
    modulePreload: false,
    lib: {
      entry: './src/index.js',
      name: 'sharedComponents',
      formats: ['es'],
      fileName: 'index',
    },
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
