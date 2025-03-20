import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    page: defineCollection({
      source: '*.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        cover: z.string(),
        date: z.string(),
      }),
    }),
    blog: defineCollection({
      source: 'blog/**/*.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        city: z.string().optional(),
        cover: z.string(),
        thumbnail: z.string(),
        date: z.string(),
        tags: z.array(z.string()),
      }),
    }),
  },
})
