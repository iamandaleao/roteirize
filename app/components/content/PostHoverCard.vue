<script setup lang="ts">
import type { PostCardProps } from "~~/types"

defineProps<PostCardProps>()
</script>

<template>
  <div class="block rounded-lg border shadow-md lg:flex lg:flex-row">
    <div
      class="aspect-[9/12] w-full shrink-0 overflow-hidden rounded-lg relative"
    >
      <NuxtLink :to>
        <div class="relative size-full">
          <img
            :src="`/assets/images/${thumbnail}`"
            :alt="title"
            loading="lazy"
            decoding="async"
            fetchpriority="low"
            class="aspect-[9/12] scale-110 object-cover object-center transition-all duration-300 hover:-rotate-3 hover:scale-125 size-full"
          />
          <div
            class="absolute bottom-0 flex h-12 w-full items-center justify-center bg-secondary/80 font-medium text-white"
          >
            <h4 class="truncate px-4">{{ title }}</h4>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
