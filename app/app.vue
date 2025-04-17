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
    <a href="https://api.whatsapp.com/send?phone=5547933814178" target="_blank" class="fixed bottom-2 right-4 flex size-12 items-center justify-center rounded-full bg-primary transition-all hover:scale-110">
      <Icon name="ph:whatsapp-logo" class="text-white" size="32" />
    </a>
  </NuxtLayout>
</template>
