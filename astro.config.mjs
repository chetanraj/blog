import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import stylex from '@stylexjs/unplugin';
import { remarkReadingTime } from './remark-reading-time.mjs';

export default defineConfig({
  base: '/blog/',
  output: 'static',
  integrations: [mdx(), react()],
  vite: {
    plugins: [
      stylex.vite({
        useCSSLayers: true,
        dev: true,
      }),
    ],
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: 'dracula',
    },
  },
});
