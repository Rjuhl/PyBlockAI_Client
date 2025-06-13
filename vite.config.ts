import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@route': path.resolve(__dirname, 'src/routes'),
      '@page': path.resolve(__dirname, 'src/pages')
    }
  }
})