import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const BLOG_PATH = 'src/data/blog';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: `./${BLOG_PATH}` }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    modDate: z.coerce.date().optional().nullable(),
    tags: z.array(z.string()),
    ogImage: z.string().optional(),
    externalUrl: z.string().url().optional(),
    canonicalURL: z.string().url().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  'blog': blogCollection,
};
