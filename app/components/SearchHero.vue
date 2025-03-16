<script setup lang="ts">
defineProps<{
  query: string
}>()

const emit = defineEmits<{
  search: [query: string]
}>()
</script>

<template>
  <div class="relative isolate overflow-hidden pt-14">
    <div class="absolute inset-0 -z-10 bg-cover opacity-10" style="background-image: url('/assets/images/search-hero-bg.png');" />
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-32">
        <div class="text-center">
          <h1 class="text-balance text-4xl font-semibold tracking-tight text-white sm:text-7xl">
            Resultados para a busca: "{{ query }}"
          </h1>
          <div class="mt-10">
            <ContentSearch @search="emit('search', $event)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
