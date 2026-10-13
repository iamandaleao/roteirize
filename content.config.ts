import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { asSeoCollection } from '@nuxtjs/seo/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection(
      asSeoCollection({
        source: {
          include: 'blog/**/*.md',
          exclude: ['blog/dicas/labor-day-desconto-chip-internacional.md'],
        },
        type: 'page',
        schema: z.object({
          title: z.string(),
          description: z.string(),
          region: z.string().optional(),
          cover: z.string(),
          coverAlt: z.string().optional(),
          thumbnail: z.string(),
          date: z.date(),
          published: z.boolean().default(true),
          promotionStatus: z.enum(['pending-confirmation', 'confirmed']).optional(),
          tags: z.array(z.string()).optional(),
        }),
      }),
    ),
    page: defineCollection(
      asSeoCollection({
        source: {
          include: '**/*.md',
          exclude: [
            'blog/dicas/labor-day-desconto-chip-internacional.md',
            'en/blog/tips/labor-day-international-sim-discount.md',
          ],
        },
        type: 'page',
        schema: z.object({
          title: z.string(),
          description: z.string(),
          cover: z.string(),
          date: z.date(),
          menu: z
            .array(
              z.object({
                name: z.string(),
                icon: z.string(),
                href: z.string(),
              }),
            )
            .optional(),
        }),
      }),
    ),
    english: defineCollection(
      asSeoCollection({
        source: {
          include: 'en/**/*.md',
          exclude: ['en/blog/tips/labor-day-international-sim-discount.md'],
        },
        type: 'page',
        schema: z.object({
          title: z.string(),
          description: z.string(),
          cover: z.string().optional(),
          coverAlt: z.string().optional(),
          thumbnail: z.string().optional(),
          date: z.date().optional(),
          published: z.boolean().default(true),
          promotionStatus: z.enum(['pending-confirmation', 'confirmed']).optional(),
          tags: z.array(z.string()).optional(),
        }),
      }),
    ),
  },
})
