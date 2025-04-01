<script setup lang="ts">
import type { PostCardProps } from '~~/types'

defineProps<PostCardProps>()
</script>

<template>
  <div class="block rounded-lg border shadow-md lg:flex lg:flex-row">
    <div class="aspect-video shrink-0 overflow-hidden rounded-t-lg lg:aspect-auto lg:h-36 lg:w-auto lg:rounded-l-lg lg:rounded-tr-none">
      <NuxtLink :to>
        <img
          :src="`/assets/images/${thumbnail}`"
          :alt="title"
          class="aspect-video scale-110 object-cover object-center transition-all duration-300 hover:-rotate-3 hover:scale-125 lg:h-full lg:w-auto lg:rounded-l-lg lg:rounded-tr-none"
        >
      </NuxtLink>
    </div>
    <div class="relative flex h-32 w-full flex-col gap-2 p-4">
      <NuxtLink :to class="underline-offset-4 hover:underline">
        <h4 class="font-medium">
          {{ title }}
        </h4>
      </NuxtLink>

      <p class="line-clamp-3 text-sm text-muted-foreground">
        {{ description }}
      </p>

      <div class="absolute inset-x-4 bottom-2 text-xs lg:bottom-0">
        <div class="flex w-full items-center justify-between">
          <div v-if="tags" class="flex items-center space-x-1 text-muted-foreground">
            <NuxtLink v-for="tag in tags.slice(0, 2)" :key="tag" :to="`/blog/tag/${tag}`" class="rounded-full bg-muted px-2 py-1">
              {{ tag }}
            </NuxtLink>
          </div>
          <div v-else class="px-2 py-1">
            &nbsp;
          </div>
          <NuxtLink :to class="text-primary underline-offset-4 hover:underline">
            Ler mais
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
