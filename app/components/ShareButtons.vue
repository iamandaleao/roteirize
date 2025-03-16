<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const url = useRequestURL()

const { copy, copied } = useClipboard()
</script>

<template>
  <div class="flex flex-wrap justify-center gap-2">
    <SocialShare
      v-for="network in ['facebook', 'x', 'linkedin', 'whatsapp', 'telegram']"
      :key="network"
      :network="network"
      :styled="false"
      :label="false"
      class="px-4 py-2 text-muted-foreground hover:text-[color:--color-brand] dark:hover:text-white"
    />
    <Icon
      v-if="copied"
      name="ph:check"
      class="mt-2 px-6 text-muted-foreground hover:text-black dark:hover:text-white"
      size="24"
    />
    <Icon
      v-else
      name="ph:link"
      class="mt-2 px-6 text-muted-foreground hover:text-black dark:hover:text-white"
      size="24"
      @click="copy(url.href)"
    />
  </div>
</template>
