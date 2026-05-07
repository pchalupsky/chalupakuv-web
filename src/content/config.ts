import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    image: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional()
  })
});

export const collections = { posts };
