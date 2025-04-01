<script setup lang="ts">
import ShareButtons from '~/components/ShareButtons.vue'

const route = useRoute()
const { page } = useBlogPage()
</script>

<template>
  <div>
    <NavHeader />
    <slot />
    <div class="space-y-14">
      <ShareButtons :key="`share-buttons-${route.path}`" />
      <WhatsappCta class="mt-6" />
      <RelatedPosts
        v-if="page?.tags?.length"
        :key="`related-posts-${route.path}`"
        :current-tags="page.tags"
      />
      <div class="flex justify-center px-4">
        <DisqusComments :identifier="route.fullPath" />
      </div>
    </div>
    <Footer />
  </div>
</template>
