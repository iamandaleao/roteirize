<script setup lang="ts">
import type { PostCardProps } from '~~/types'

defineProps<PostCardProps>()
</script>

<template>
  <NuxtLink :to class="block rounded-lg border shadow-md md:flex md:flex-row">
    <div class="aspect-video shrink-0 overflow-hidden rounded-t-lg md:aspect-auto md:h-36 md:w-auto md:rounded-l-lg md:rounded-tr-none">
      <img
        :src="`/assets/images/${thumbnail}`"
        :alt="title"
        class="aspect-video scale-110 object-cover object-center transition-all duration-300 hover:-rotate-3 hover:scale-125 md:h-full md:w-auto md:rounded-l-lg md:rounded-tr-none"
      >
    </div>
    <div class="flex flex-col gap-2 p-4">
      <h4 class="font-medium">
        {{ title }}
      </h4>
      <p class="line-clamp-3 text-sm text-muted-foreground">
        {{ excerpt }}
      </p>
    </div>
  </NuxtLink>
</template>
