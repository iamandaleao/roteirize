<script setup lang="ts">
import type { PostCardProps } from '~~/types'

defineProps<PostCardProps>()
</script>

<template>
  <div class="block rounded-lg border shadow-md lg:flex lg:flex-row">
    <div
      class="relative aspect-[9/12] w-full shrink-0 overflow-hidden rounded-lg"
    >
      <NuxtLink :to>
        <div class="relative size-full">
          <img
            :src="`/assets/images/${thumbnail}`"
            :alt="title"
            loading="lazy"
            decoding="async"
            fetchpriority="low"
            class="aspect-[9/12] size-full scale-110 object-cover object-center transition-all duration-300 hover:-rotate-3 hover:scale-125"
          >
          <div
            class="absolute bottom-0 flex h-12 w-full items-center justify-center bg-secondary/80 font-medium text-white"
          >
            <h4 class="truncate px-4">
              {{ title }}
            </h4>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
