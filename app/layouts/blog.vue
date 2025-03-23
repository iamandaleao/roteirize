<script setup lang="ts">
import ShareButtons from '~/components/ShareButtons.vue'

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
}, {
  watch: [route],
})
</script>

<template>
  <div>
    <NavHeader />
    <slot />
    <div class="space-y-6 py-20">
      <RelatedPosts v-if="page?.tags?.length" :key="`related-posts${route.path}`" :current-tags="page.tags" />
      <ShareButtons :key="`share-buttons-${route.path}`" />
      <WhatsappCta />
      <div class="flex justify-center px-4">
        <DisqusComments :identifier="route.fullPath" />
      </div>
    </div>
    <Footer />
  </div>
</template>
