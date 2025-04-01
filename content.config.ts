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
        menu: z.array(z.object({
          name: z.string(),
          icon: z.string(),
          href: z.string(),
        })).optional(),
      }),
    }),
    blog: defineCollection({
      source: 'blog/**/*.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        region: z.string().optional(),
        cover: z.string(),
        thumbnail: z.string(),
        date: z.date().or(z.string()),
        published: z.boolean(),
        tags: z.array(z.string()).optional(),
      }),
    }),
  },
})
