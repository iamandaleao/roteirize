<script lang="ts" setup>
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
}, {
  watch: [route],
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { setPage } = useBlogPage()
setPage(page.value)

if (page.value?.ogImage) {
  defineOgImage(page.value?.ogImage) // <-- Nuxt OG Image
}

definePageMeta({
  layout: 'blog',
})

useHead(page.value.head || {}) // <-- Nuxt Schema.org
useSeoMeta(page.value.seo || {}) // <-- Nuxt Robots
</script>

<template>
  <div>
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
