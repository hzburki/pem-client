import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/': path.join(__dirname, 'src/')
    }
  },
  server: {
    host: true,
    port: 3000, // This is the port which we will use in docker
  }
});
