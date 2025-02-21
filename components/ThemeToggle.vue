<script setup lang="ts">
import { useColorMode } from '@vueuse/core'

const colorMode = useColorMode()

function toggleDark() {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button type="button" class="group cursor-pointer rounded-xl p-2 hover:bg-primary/40 flex items-center justify-center" @click="toggleDark">
    <Icon name="lucide:sun" class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-white" size="18" />
    <Icon name="lucide:moon" class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-white" size="18" />
    <span class="sr-only">Toggle theme</span>
  </button>
</template>
