<script setup lang="ts">
import ShareButtons from '~/components/ShareButtons.vue'

const route = useRoute()
</script>

<template>
  <div>
    <NavHeader />
    <slot />
    <div class="space-y-6 py-20">
      <ShareButtons />
      <WhatsappCta />
      <div class="flex justify-center px-4">
        <DisqusComments :identifier="route.fullPath" />
      </div>
    </div>
    <Footer />
  </div>
</template>
