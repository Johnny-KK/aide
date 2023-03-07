import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    proxy: {
      '/minio': {
        target: 'http://tiankk.iask.in:9000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/minio/, ''),
      },
    },
  },
})
