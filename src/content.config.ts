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

const products = defineCollection({
  type: 'content',

  schema: z.object({
    title: z.string(),

    description: z.string(),

    price: z.string(),

    oldPrice: z.string().optional(),

    image: z.string(),

    gallery: z.array(z.string()).optional(),

    category: z.string(),

    tags: z.array(z.string()).optional(),

    featured: z.boolean().optional(),

    stock: z.number().optional(),

    sku: z.string().optional(),

    seoTitle: z.string().optional(),

    seoDescription: z.string().optional(),
  }),
});

export const collections = {
  blog,
  tools,
  products,
};
