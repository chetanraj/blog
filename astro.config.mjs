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
      noExternal: ['@capper-ui/react'],
    },
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: 'dracula',
      transformers: [
        {
          name: 'blog-code-flags',
          pre(hast) {
            const raw = this.options.meta?.__raw ?? '';
            hast.properties ??= {};
            if (/(?:^|\s)preview(?:\s*=\s*true)?(?:\s|$)/.test(raw)) {
              hast.properties['data-preview'] = 'true';
            }
            if (/(?:^|\s)collapse(?:\s*=\s*true)?(?:\s|$)/.test(raw)) {
              hast.properties['data-collapse'] = 'true';
            }
            if (/(?:^|\s)tree(?:\s*=\s*true)?(?:\s|$)/.test(raw)) {
              hast.properties['data-tree'] = 'true';
            }
          },
        },
      ],
    },
  },
});
