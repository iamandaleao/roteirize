<script setup lang="ts">
import type { PostCardProps } from '~~/types'
import { useDateFormat } from '@vueuse/core'

const props = defineProps<PostCardProps>()
const formattedDate = useDateFormat(props.date, 'DD/MM/YYYY', { locales: 'pt-BR' })
</script>

<template>
  <NuxtLink :to class="block rounded-lg border shadow-md lg:flex lg:flex-row">
    <div class="aspect-video shrink-0 overflow-hidden rounded-t-lg lg:aspect-auto lg:h-36 lg:w-auto lg:rounded-l-lg lg:rounded-tr-none">
      <img
        :src="`/assets/images/${thumbnail}`"
        :alt="title"
        class="aspect-video scale-110 object-cover object-center transition-all duration-300 hover:-rotate-3 hover:scale-125 lg:h-full lg:w-auto lg:rounded-l-lg lg:rounded-tr-none"
      >
    </div>
    <div class="relative flex h-32 w-full flex-col gap-2 p-4">
      <h4 class="font-medium">
        {{ title }}
      </h4>

      <p class="line-clamp-3 pr-12 text-sm text-muted-foreground">
        {{ description }}
      </p>

      <div class="absolute inset-x-4 bottom-2 text-xs lg:bottom-0">
        <div class="flex w-full items-center justify-between">
          <time class="text-muted-foreground" :datetime="date">{{ formattedDate }}</time>
          <span class="text-primary underline-offset-4 hover:underline">
            Ler mais
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
