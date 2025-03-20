import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'pt-BR',
        class: 'scroll-smooth',
      },
      bodyAttrs: {
        class: 'antialiased',
      },
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
        {
          rel: 'shortcut icon',
          href: '/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          href: '/favicon.ico',
        },
      ],
    },
  },

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

  disqus: {
    shortname: 'roteirizeoficial',
  },

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

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/icon',
    'shadcn-nuxt',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@stefanobartoletti/nuxt-social-share',
    'nuxt-disqus',
  ],

  shadcn: {
    prefix: '',
    componentDir: './app/components/ui',
  },

  socialShare: {
    baseUrl: 'https://roteirize.com.br',
  },
})
