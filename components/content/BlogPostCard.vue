<script setup lang="ts">
defineProps<{
  title: string
  excerpt: string
}>()
</script>

<template>
  <div class="overflow-hidden rounded-lg border shadow">
    <div class="aspect-video overflow-hidden rounded-t-lg">
      <img
        src="/assets/images/paris-roteiro-1dia.jpg"
        alt="Paris roteiro 1 dia"
        class="aspect-video scale-110 rounded-t-lg object-cover object-center transition-all duration-300 hover:-rotate-3 hover:scale-125"
      >
    </div>

    <div class="p-2">
      <h4 class="font-medium">
        {{ title }}
      </h4>
      <p class="mt-1 line-clamp-3 text-sm text-slate-500 dark:text-slate-400">
        {{ excerpt }}
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>
