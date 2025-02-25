import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { componentTagger } from 'lovable-tagger'

import legacy from '@vitejs/plugin-legacy'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { imageminBuilder } from './imagemin.config.ts'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [  
    react(), mode === 'development' && componentTagger(),
    imageminBuilder(),
    ViteImageOptimizer({
      png: { quality: 50 },
      jpg: { quality: 50 }
    }),
    legacy({
      targets: [
        'defaults',
        'not IE 11',
        'firefox >= 8',
        'chrome >= 5',
        'safari >= 10',
      ],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  esbuild: {
    loader: 'tsx',
  },
  optimizeDeps: {
    include: ['@babel/polyfill'],
  },
}))
