<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const url = useRequestURL()

const { copy, copied } = useClipboard()
</script>

<template>
  <div class="flex items-center justify-center gap-x-8">
    <SocialShare
      v-for="network in ['facebook', 'x', 'linkedin', 'whatsapp', 'telegram']"
      :key="network"
      :network="network"
      :styled="false"
      :label="false"
      class="text-muted-foreground hover:text-[color:--color-brand] dark:hover:text-white"
    />
    <Icon
      v-if="copied"
      name="ph:check"
      class="text-muted-foreground hover:text-black dark:hover:text-white"
      size="24"
    />
    <Icon
      v-else
      name="ph:link"
      class="cursor-pointer text-muted-foreground hover:text-black dark:hover:text-white"
      size="24"
      @click="copy(url.href)"
    />
  </div>
</template>
