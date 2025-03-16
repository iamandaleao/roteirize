<script setup lang="ts">
import ShareButtons from '~/components/ShareButtons.vue'
</script>

<template>
  <div>
    <NavHeader />
    <slot />
    <div class="space-y-6 py-20">
      <ShareButtons />
      <WhatsappCta />
    </div>
    <Footer />
  </div>
</template>
