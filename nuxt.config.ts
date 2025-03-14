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

  devtools: { enabled: false },

  eslint: {
    config: {
      standalone: false,
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/icon',
    'shadcn-nuxt',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
  ],

  vite: {
    optimizeDeps: {
      entries: [
        '@vueuse/core',
        'class-variance-authority',
        'reka-ui',
        'lucide-vue-next',
        'clsx',
        'tailwind-merge',
      ],
    },
  },
})
