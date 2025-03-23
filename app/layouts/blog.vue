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
    <ShareButtons :key="`share-buttons-${route.path}`" class="mt-20" />
    <WhatsappCta class="mt-6" />
    <RelatedPosts
      v-if="page?.tags?.length"
      :key="`related-posts${route.path}`"
      class="mt-20"
      :current-tags="page.tags"
    />
    <div class="mt-20 flex justify-center px-4">
      <DisqusComments :identifier="route.fullPath" />
    </div>
    <Footer />
  </div>
</template>
