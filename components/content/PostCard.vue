<script setup lang="ts">
defineProps<{
  title: string
  to: string
  image: string
}>()
</script>

<template>
  <NuxtLink :to class="overflow-hidden rounded-lg border shadow">
    <div class="aspect-video overflow-hidden rounded-t-lg">
      <img
        :src="`/assets/images/${image}`"
        alt="Paris roteiro 1 dia"
        class="aspect-video scale-110 rounded-t-lg object-cover object-center transition-all duration-300 hover:-rotate-3 hover:scale-125"
      >
    </div>

    <div class="p-2">
      <h4 class="font-medium">
        {{ title }}
      </h4>
      <div class="mt-1 line-clamp-3 text-sm text-slate-500 dark:text-slate-400">
        <slot />
      </div>
    </div>
  </NuxtLink>
</template>
