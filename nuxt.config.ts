import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/icon',
    'shadcn-nuxt',
  ],
  devtools: { enabled: true },
  eslint: {
    config: {
      standalone: false,
    },
  },
})
