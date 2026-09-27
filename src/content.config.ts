import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({
    pattern: '**/index.{md,mdx}',
    base: './src/content/posts',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    published: z.boolean().default(true),
    tags: z.array(z.string()).default([]),
    path: z.string().optional(),
    toc: z.boolean().default(true),
    tocDepth: z.number().min(2).max(6).default(2),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { posts };
