<script setup lang="ts">
const route = useRoute()
const { page } = useBlogPage()
</script>

<template>
  <div>
    <NavHeader />
    <slot />
    <div class="space-y-14">
      <ShareButtons :key="`share-buttons-${route.path}`" />
      <WhatsappCta />
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
