import { defineOrganization } from 'nuxt-schema-org/schema'
import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ThemeToggle',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage',
    storageKey: 'nuxt-color-mode',
  },

  compatibilityDate: '2024-11-01',

  content: {
    experimental: {
      nativeSqlite: true,
    },
  },

  devtools: { enabled: false },

  eslint: {
    config: {
      standalone: false,
    },
  },

  experimental: {
    writeEarlyHints: true,
    headNext: true,
    viewTransition: true,
  },

  features: {
    inlineStyles: false,
  },

  future: {
    compatibilityVersion: 4,
  },

  hooks: {
    'content:file:afterParse': function ({ file, content }) {
      const { title, date } = content

      if (title && date) {
        if (file.id.startsWith('blog')) {
          content.schemaOrg = [
            {
              '@type': 'BlogPosting',
              'headline': title,
              'datePublished': date,
              'author': {
                type: 'Person',
                name: 'Amanda Leão',
              },
            },
          ]
        }
        else {
          content.schemaOrg = [
            {
              '@type': 'WebPage',
              'headline': title,
              'datePublished': date,
              'author': {
                type: 'Person',
                name: 'Amanda Leão',
              },
            },
          ]
        }
      }
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxthub/core',
    'shadcn-nuxt',
    '@stefanobartoletti/nuxt-social-share',
    '@nuxt/scripts',
  ],

  schemaOrg: {
    identity: defineOrganization({
      name: 'Roteirize',
      alternateName: 'Roteirize Viagens',
      description: 'Eu cuido dos detalhes, você aproveita a jornada.',
      url: 'https://roteirize.com.br',
      logo: '/assets/images/logo.svg',

      address: {
        '@type': 'PostalAddress',
        'streetAddress': 'Rua Dom Duarte, 363, casa 02',
        'addressLocality': 'Quinta dos Açorianos',
        'addressRegion': 'SC',
        'postalCode': '88390000',
        'addressCountry': 'BR',
      },

      email: 'admroteirize@gmail.com',
      telephone: '+5547933814178',
      contactPoint: {
        '@type': 'ContactPoint',
        'telephone': '+5547933814178',
        'email': 'admroteirize@gmail.com',
      },

      foundingDate: '2024-11-01',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        'minValue': 1,
        'maxValue': 1,
      },

      sameAs: [
        'https://www.instagram.com/roteirizeoficial',
        'https://www.facebook.com/roteirizeoficial',
        'https://www.youtube.com/@roteirizeoficial',
        'https://www.tiktok.com/@roteirizeoficial',
        'https://api.whatsapp.com/send?phone=5547933814178',
      ],
    }),
  },

  site: {
    url: 'https://roteirize.com.br',
    name: 'Roteirize',
    description: 'Eu cuido dos detalhes, você aproveita a jornada.',
    defaultLocale: 'pt-BR',
  },

  shadcn: {
    prefix: '',
    componentDir: './app/components/ui',
  },

  socialShare: {
    baseUrl: 'https://roteirize.com.br',
  },
})
