import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR',
        style: 'scroll-behavior: smooth',
      },
      bodyAttrs: {
        class: 'antialiased',
      },
      meta: [
        {
          name: 'charset',
          content: `utf-8`,
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1',
        },
      ],
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
