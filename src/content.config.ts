import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    published: z.boolean().default(true),
    tags: z.array(z.string()).default([]),
    path: z.string().optional(),
    toc: z.boolean().default(false),
    tocDepth: z.number().min(2).max(6).default(2),
  }),
});

export const collections = { posts };
