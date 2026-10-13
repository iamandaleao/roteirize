<script setup lang="ts">
const route = useRoute()
const { pathForLocale } = useLocale()
const { data: page } = await useAsyncData(`en-blog-${route.path}`, () => queryCollection('english').path(route.path).first(), { watch: [route] })

if (page.value?.published === false || route.path === '/en/blog/tips/labor-day-international-sim-discount') {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { setPage } = useBlogPage()
if (page.value) {
  setPage(page.value)
}
definePageMeta({ layout: 'blog' })
useHead(() => ({
  ...(page.value?.head || {}),
  htmlAttrs: { lang: 'en' },
  link: [
    { rel: 'canonical', href: `https://roteirize.com.br${route.path}` },
    { rel: 'alternate', hreflang: 'en', href: `https://roteirize.com.br${route.path}` },
  ],
}))
useSeoMeta({
  ogType: 'article',
  ogLocale: 'en_US',
  ogImage: computed(() => page.value?.cover ? `https://roteirize.com.br/assets/images/${page.value.cover}` : undefined),
  twitterCard: 'summary_large_image',
  title: computed(() => page.value?.seo?.title || 'Travel blog article not yet available in English'),
  description: computed(() => page.value?.seo?.description || 'This article has not been translated into English yet.'),
  robots: computed(() => page.value ? 'index, follow' : 'noindex, follow'),
})
useHead(() => ({
  meta: [{ name: 'robots', content: page.value ? 'index, follow' : 'noindex, follow' }],
}))
</script>

<template>
  <div>
    <ContentRenderer v-if="page" :value="page" />
    <main v-else class="mx-auto min-h-[50vh] max-w-3xl px-5 pb-16 pt-36">
      <h1 class="text-3xl font-semibold tracking-tight">
        This article is not available in English yet
      </h1>
      <p class="mt-5 text-lg leading-8 text-muted-foreground">
        We are translating this article. You can read the Portuguese version instead.
      </p>
      <NuxtLink :to="pathForLocale(route.path, 'pt')" lang="pt-BR" class="mt-6 inline-block font-medium text-primary underline-offset-4 hover:underline">
        Read in Portuguese
      </NuxtLink>
    </main>
  </div>
</template>
