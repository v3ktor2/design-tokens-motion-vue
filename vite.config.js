import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // optional: helps GitHub Pages know where your app lives
base: '/design-tokens-motion-vue/',
})