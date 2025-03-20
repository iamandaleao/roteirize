<script setup lang="ts">
const route = useRoute()
const { seo } = useAppConfig()

const page = computed(() => Number.parseInt((route.query.page as string) ?? '1'))

watch(page, () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
  ],
  htmlAttrs: {
    lang: 'pt-BR',
  },
})

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <NuxtPage vaul-drawer-wrapper />
  </NuxtLayout>
</template>
