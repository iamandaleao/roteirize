<script lang="ts" setup>
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('page').path(route.path).first()
}, {
  watch: [route],
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

defineOgImageComponent('BlogPostOgImage')

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
