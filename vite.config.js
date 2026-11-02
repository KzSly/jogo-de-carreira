import { defineConfig } from 'vite';

// './' makes the built asset URLs relative, so the site works from the
// repository subpath GitHub Pages serves it under.
export default defineConfig({
  base: './',
});
