<script lang="ts" setup>
const route = useRoute()
const { pathForLocale } = useLocale()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
}, {
  watch: [route],
})

if (!page.value || page.value.published === false) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { setPage } = useBlogPage()
setPage(page.value)

definePageMeta({
  layout: 'blog',
})

useHead(page.value.head || {})
useHead({
  link: [
    { rel: 'canonical', href: `https://roteirize.com.br${route.path}` },
    ...(pathForLocale(route.path, 'en') !== '/en'
      ? [{ rel: 'alternate', hreflang: 'en', href: `https://roteirize.com.br${pathForLocale(route.path, 'en')}` }]
      : []),
  ],
})
useSeoMeta({
  ...page.value.seo,
  ogType: 'article',
  ogImage: `https://roteirize.com.br/assets/images/${page.value.cover}`,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
