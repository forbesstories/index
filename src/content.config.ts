import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    popular: z.boolean().optional(),
  }),
});

const tools = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const product = defineCollection({
  type: 'content',

  schema: z.object({
    title: z.string(),

    description: z.string(),

    price: z.string(),

    oldPrice: z.string().optional(),

    image: z.string(),

    category: z.string(),

    featured: z.boolean().optional(),
  }),
});

export const collections = {
  blog,
  tools,
  product,
};
