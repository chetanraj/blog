import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './remark-reading-time.mjs';

export default defineConfig({
  base: '/blog/',
  output: 'static',
  integrations: [mdx(), tailwind()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: 'dracula',
    },
  },
});
