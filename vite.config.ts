import { svelte } from '@sveltejs/vite-plugin-svelte'
import * as path from 'path'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  plugins: [
    svelte(),
    Icons({
      compiler: 'svelte',
    }),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Money Client',
        short_name: 'Money',
      },
    }),
  ],
})
