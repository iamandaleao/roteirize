<script setup lang="ts">
import type { PostCardProps } from '~~/types'

defineProps<PostCardProps>()
const { isEnglish } = useLocale()
</script>

<template>
  <div class="block rounded-lg border shadow-md lg:flex lg:flex-row">
    <div class="aspect-video shrink-0 overflow-hidden rounded-t-lg lg:aspect-auto lg:h-36 lg:w-auto lg:rounded-l-lg lg:rounded-tr-none">
      <NuxtLink :to>
        <NuxtImg
          :src="`/assets/images/${thumbnail}`"
          :srcset="useResponsiveImage(`/assets/images/${thumbnail}`)"
          :alt="title"
          width="640"
          height="360"
          sizes="xs:100vw sm:50vw md:50vw lg:50vw"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
          class="aspect-video scale-110 object-cover object-center transition-all duration-300 hover:-rotate-3 hover:scale-125 lg:h-full lg:w-auto lg:rounded-l-lg lg:rounded-tr-none"
        />
      </NuxtLink>
    </div>
    <div class="relative flex h-32 w-full flex-col gap-2 p-4">
      <NuxtLink :to class="underline-offset-4 hover:underline">
        <h4 class="font-medium">
          {{ title }}
        </h4>
      </NuxtLink>

      <p class="line-clamp-1 text-sm">
        {{ description }}
      </p>

      <div class="absolute inset-x-4 bottom-2 text-xs lg:bottom-0">
        <div class="flex w-full items-center justify-between">
          <div v-if="tags" class="flex items-center space-x-1 text-muted-foreground">
            <NuxtLink v-for="tag in tags.slice(0, 2)" :key="tag" :to="`/blog/tag/${tag}`" class="rounded-full bg-accent px-2 py-1 text-accent-foreground">
              {{ tag }}
            </NuxtLink>
          </div>
          <div v-else class="px-2 py-1">
            &nbsp;
          </div>
          <NuxtLink :to class="text-primary underline-offset-4 hover:underline">
            {{ isEnglish ? 'Read more' : 'Ler mais' }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
