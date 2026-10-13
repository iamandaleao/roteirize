<script setup lang="ts">
import type { MenuItem } from '~~/types'

defineProps<{
  title: string
  description: string
  cover: string
  menu?: MenuItem[]
}>()
</script>

<template>
  <div class="relative isolate min-h-[300px] overflow-hidden bg-secondary pt-14">
    <NuxtImg
      :src="`/assets/images/${cover}`"
      :srcset="useResponsiveImage(`/assets/images/${cover}`)"
      :alt="title"
      width="1920"
      height="1080"
      sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
      class="absolute inset-0 -z-10 size-full object-cover opacity-40"
      loading="eager"
      fetchpriority="high"
    />
    <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-8 2xl:py-20">
        <div class="text-center">
          <h1 class="text-balance text-4xl font-semibold tracking-tight text-white lg:text-5xl">
            {{ title }}
          </h1>
          <p class="mx-auto mt-8 max-w-lg text-pretty text-lg font-medium text-slate-200 2xl:text-xl/8">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
    <PageMenu v-if="menu" :items="menu" />
  </div>
</template>
