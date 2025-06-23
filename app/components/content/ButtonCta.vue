<script setup lang="ts">
import RainbowButton from '../ui/rainbow-button/RainbowButton.vue'

defineProps<{
  text: string
  href: string
}>()
</script>

<template>
  <div class="flex justify-center">
    <NuxtLink :to="href" target="_blank">
      <RainbowButton>
        {{ text }}
      </RainbowButton>
    </NuxtLink>
  </div>
</template>
