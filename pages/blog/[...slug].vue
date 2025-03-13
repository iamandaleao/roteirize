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
    <ContentRenderer v-if="page" :value="page" />
    <div v-else class="empty-page">
      <h1>Page Not Found</h1>
      <p>Oops! The content you're looking for doesn't exist.</p>
      <NuxtLink to="/">
        Go back home
      </NuxtLink>
    </div>
  </div>
</template>
