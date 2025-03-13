<script lang="ts" setup>
const route = useRoute()
const { seo } = useAppConfig()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

definePageMeta({
  layout: 'blog',
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
    <ContentRenderer v-if="page" :key="route.path" :value="page" />
  </div>
</template>
