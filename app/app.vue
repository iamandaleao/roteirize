<script setup lang="ts">
const showWhatsApp = ref(false)
const router = useRouter()

router.afterEach(() => {
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 500)
})

onMounted(() => {
  setTimeout(() => showWhatsApp.value = true, 2000)
})

defineOgImageComponent('BlogPostOgImage')

useHead({
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
      rel: 'shortcut icon',
      href: '/favicon.ico',
    },
    {
      rel: 'icon',
      href: '/icon-512x512.png',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
    },
  ],
  titleTemplate: '%s • Roteirize',
})

useSeoMeta({
  ogSiteName: 'Roteirize',
  twitterCard: 'summary_large_image',
  twitterTitle: '%s • Roteirize',
  twitterDescription: '%s',
  ogLocale: 'pt-BR',
})
</script>

<template>
  <NuxtLayout class="bg-background">
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <NuxtPage class="bg-background" vaul-drawer-wrapper />
    <Transition
      enter-active-class="transition-all ease-out"
      enter-from-class="translate-y-full opacity-0"
    >
      <a v-if="showWhatsApp" href="https://api.whatsapp.com/send?phone=5547933814178" target="_blank" class="fixed bottom-2 right-4 flex size-12 animate-pulse items-center justify-center rounded-full bg-primary transition-all hover:scale-110">
        <Icon name="ph:whatsapp-logo" class="text-white" size="36" />
      </a>
    </Transition>
  </NuxtLayout>
</template>
