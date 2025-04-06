<script setup lang="ts">
const { seo } = useAppConfig()

const router = useRouter()
router.afterEach(() => {
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 500)
})

useHead({
  titleTemplate: '%s • Roteirize',
})

useSeoMeta({
  ogSiteName: seo?.siteName,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <NuxtLayout class="bg-background">
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <NuxtPage class="bg-background" vaul-drawer-wrapper />
  </NuxtLayout>
</template>
