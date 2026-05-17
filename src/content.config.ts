import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    category: z.enum(['Machine Learning', 'Astrophysics']),
    arxiv: z.string().optional(),
    doi: z.string().optional(),
  }),
});

export const collections = { publications };
