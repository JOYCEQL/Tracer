
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import MarkDown from 'vite-plugin-md'

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": path.join(__dirname, "../src"),
    },
  },
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    MarkDown(
      {
        markdownItOptions: {
          html: true,
          linkify: true,
          typographer: true,
        },
    }
    )]
})
