import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './remark-reading-time.mjs';

export default defineConfig({
  site: 'https://chetanraj.dev',
  base: '/blog/',
  output: 'static',
  integrations: [mdx(), react(), tailwind(), sitemap()],
  vite: {
    resolve: {
      dedupe: ['react', 'react-dom'],
    },
    ssr: {
      noExternal: ['@capper-ui/react', '@phosphor-icons/react'],
    },
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: 'dracula',
    },
  },
});
