import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from '@svgr/rollup';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
// https://vite.dev/config/
export default defineConfig({
  base: isGitHubPages ? '/cv/' : './',
  plugins: [react(), svgr()],
})
