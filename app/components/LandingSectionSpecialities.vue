<script setup lang="ts">
const regions = [
  {
    name: 'Brazil',
    map: 'brazil.svg',
  },
  {
    name: 'Itália',
    map: 'italy.svg',
  },
  {
    name: 'França',
    map: 'france.svg',
  },
  {
    name: 'EUA',
    map: 'usa.svg',
  },
  {
    name: 'Alemanha',
    map: 'germany.svg',
  },
  {
    name: 'África',
    map: 'africa.svg',
  },
]
</script>

<template>
  <div class="border-t bg-secondary text-center font-medium text-secondary-foreground">
    <div class="mx-auto max-w-7xl space-y-8 px-4 py-16 lg:px-8">
      <div class="prose mx-auto max-w-prose text-center dark:prose-invert">
        <h2 class="text-2xl tracking-tight text-secondary-foreground md:text-4xl">
          Minhas especialidades
        </h2>
      </div>

      <div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
        <div v-for="region in regions" :key="region.name" class="flex flex-col items-center justify-center space-y-2 transition-all lg:hover:scale-125">
          <img :src="`/assets/images/${region.map}`" class="h-24" :alt="region.name">
          <h4 class="font-medium">
            {{ region.name }}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>
