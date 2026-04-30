import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

export default defineConfig({
  base: '/',
  output: 'server',
  adapter: netlify(),
  integrations: [mdx(), tailwind()],
});
