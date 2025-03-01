<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image?: string
}>()
</script>

<template>
  <div class="relative isolate overflow-hidden bg-black pt-14">
    <img :src="`/assets/images/${image}`" :alt="title" class="absolute inset-0 -z-10 size-full object-cover opacity-40">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="text-center">
          <h1 class="text-balance text-4xl font-semibold tracking-tight text-white sm:text-7xl">
            {{ title }}
          </h1>
          <h2 class="mt-8 text-pretty text-lg font-medium text-slate-200 sm:text-xl/8">
            {{ description }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
