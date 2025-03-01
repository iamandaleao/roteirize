<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

definePageMeta({
  layout: 'blog',
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
