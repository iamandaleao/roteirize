<script setup lang="ts">
const tags = [
  'roteiros',
  'destinos',
  'bagagem',
  'voos',
  'passaporte',
  'historia',
  'cruzeiros',
  'natureza',
  'jardins',
  'praias',
  'parques',
  'romanticos',
  'termais',
]
</script>

<template>
  <div class="px-4 text-center">
    <h2 class="text-xl font-medium">
      Nenhum resultado encontrado
    </h2>
    <p class="mt-2 text-secondary dark:text-secondary-foreground">
      Tente buscar por outros termos ou explorar nossas tags.
    </p>

    <div class="mx-auto mt-6 w-full max-w-xl">
      <div class="flex flex-wrap items-center justify-center gap-1 text-xs text-muted-foreground">
        <NuxtLink v-for="tag in tags" :key="tag" :to="`/blog/tag/${tag}`" class="rounded-full bg-accent px-2 py-1 text-accent-foreground">
          {{ tag }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
