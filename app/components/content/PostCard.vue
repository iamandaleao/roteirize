<script setup lang="ts">
import type { PostCardProps } from '~~/types'

defineProps<PostCardProps>()
</script>

<template>
  <NuxtLink :to class="block rounded-lg border border-solid border-gray-200 shadow-md lg:flex lg:flex-row">
    <div class="aspect-video shrink-0 overflow-hidden rounded-t-lg lg:aspect-auto lg:h-36 lg:w-auto lg:rounded-l-lg lg:rounded-tr-none">
      <img
        :src="`/assets/images/${thumbnail}`"
        :alt="title"
        class="aspect-video scale-110 object-cover object-center transition-all duration-300 hover:-rotate-3 hover:scale-125 lg:h-full lg:w-auto lg:rounded-l-lg lg:rounded-tr-none"
      >
    </div>
    <div class="flex flex-col gap-2 p-4">
      <h4 class="font-medium">
        {{ title }}
      </h4>
      <p class="line-clamp-3 text-sm text-slate-600 dark:text-slate-300 lg:line-clamp-4">
        {{ excerpt }}
      </p>
    </div>
  </NuxtLink>
</template>
