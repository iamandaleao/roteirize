import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    page: defineCollection({
      source: '*.md',
      type: 'page',
    }),
    blog: defineCollection({
      source: 'blog/**/*.md',
      type: 'page',
    }),
  },
})
