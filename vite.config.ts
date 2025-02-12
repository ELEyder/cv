import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from '@svgr/rollup';

// https://vite.dev/config/
export default defineConfig({
  base: "/cv/",
  plugins: [react(), svgr()],
})
