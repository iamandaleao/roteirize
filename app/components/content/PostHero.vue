<script setup lang="ts">
defineProps<{
  title: string
  description: string
  cover: string
  region: string
}>()
</script>

<template>
  <div class="relative isolate min-h-[400px] overflow-hidden bg-secondary pt-14 lg:min-h-[500px]">
    <img
      :src="`/assets/images/${cover}`"
      :alt="title" class="absolute inset-0 -z-10 size-full object-cover object-center opacity-40"
      fetchpriority="high"
      decoding="async"
    >
    <div class="max-w-7xlpx-4 mx-auto md:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-20">
        <div class="mb-8 flex justify-center">
          <div class="relative rounded-full px-3 py-1 text-sm/6 text-slate-300 ring-1 ring-white/20">
            <PostBreadcrumb />
          </div>
        </div>
        <div class="text-center">
          <h1 class="text-balance text-4xl font-semibold tracking-tight text-white sm:text-7xl">
            {{ title }}
          </h1>
          <p class="mx-auto mt-8 max-w-lg text-pretty text-lg font-medium text-slate-200 sm:text-xl/8">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
    <PostMenu v-if="region" />
  </div>
</template>
