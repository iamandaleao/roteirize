import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    page: defineCollection({
      source: '*.md',
      type: 'page',
      schema: z.object({
        h1: z.string(),
        h2: z.string(),
        image: z.string(),
        date: z.string(),
      }),
    }),
    blog: defineCollection({
      source: 'blog/**/*.md',
      type: 'page',
      schema: z.object({
        h1: z.string(),
        h2: z.string(),
        image: z.string(),
        date: z.string(),
      }),
    }),
  },
})
