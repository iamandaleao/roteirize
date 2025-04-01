<script lang="ts" setup>
const route = useRoute()
const { seo } = useAppConfig()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('page').path(route.path).first()
}, {
  watch: [route],
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

definePageMeta({
  layout: 'page',
})

useSeoMeta({
  title: page.value.seo.title,
  ogTitle: `${page.value.seo.title} - ${seo?.siteName}`,
  description: page.value.seo.description,
  ogDescription: page.value.seo.description,
})
</script>

<template>
  <div>
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
