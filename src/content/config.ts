import { defineCollection, z } from 'astro:content';

const writingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: stringOrDate(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['ai-research', 'philosophy', 'poetry', 'memoirs']),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    featured: z.boolean().default(false),
    readingTime: z.string().optional(),
    audioUrl: z.string().optional(),
    language: z.enum(['en', 'hi', 'both']).default('en'),
    epigraph: z.string().optional(),
  }),
});

function stringOrDate() {
  return z.string();
}

export const collections = {
  writing: writingCollection,
};
