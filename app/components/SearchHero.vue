<script setup lang="ts">
defineProps<{
  isSearching: boolean
  resultsCount: number
  query: string
}>()

const emit = defineEmits<{
  search: [query: string]
}>()
</script>

<template>
  <div class="relative isolate min-h-[400px] overflow-hidden bg-secondary pt-14 lg:min-h-[500px]">
    <img
      src="/assets/images/search-hero-bg.png"
      alt="Pesquisa"
      class="absolute inset-0 -z-10 size-full object-cover object-center opacity-10"
      fetchpriority="high"
      decoding="async"
    >
    <div class="max-w-7xlpx-4 mx-auto md:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-20">
        <div class="text-center">
          <h1 class="text-balance text-4xl font-semibold tracking-tight text-white sm:text-7xl">
            <template v-if="isSearching">
              Pesquisando...
            </template>
            <template v-else>
              {{ resultsCount > 0 ? resultsCount : 'Nenhum' }} {{ resultsCount > 1 ? 'resultados' : 'resultado' }} para a busca: "{{ query }}"
            </template>
          </h1>
          <div class="mt-10">
            <ContentSearch @search="emit('search', $event)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
