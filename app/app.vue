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
