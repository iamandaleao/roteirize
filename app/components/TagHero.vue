<script setup lang="ts">
const { tag } = defineProps<{
  tag: string
}>()

const heroImage = computed(() => {
  return {
    roteiros: 'roteiros-hero-bg.jpg',
    destinos: 'destinos-hero-bg.jpg',
    bagagem: 'dicas-hero-bg.jpg',
    voos: 'dicas-hero-bg.jpg',
    passaporte: 'dicas-hero-bg.jpg',
    historia: 'inspiracoes-hero-bg.jpg',
    cruzeiros: 'inspiracoes-hero-bg.jpg',
    natureza: 'inspiracoes-hero-bg.jpg',
    jardins: 'inspiracoes-hero-bg.jpg',
    praias: 'inspiracoes-hero-bg.jpg',
    parques: 'inspiracoes-hero-bg.jpg',
    romanticos: 'inspiracoes-hero-bg.jpg',
    termais: 'inspiracoes-hero-bg.jpg',
  }[tag] ?? 'search-hero-bg.png'
})
</script>

<template>
  <div class="relative isolate min-h-[400px] overflow-hidden bg-secondary pt-14 lg:min-h-[500px]">
    <img
      :src="`/assets/images/${heroImage}`"
      :alt="tag"
      class="absolute inset-0 -z-10 size-full object-cover object-center opacity-40"
      fetchpriority="high"
      decoding="async"
    >
    <div class="max-w-7xlpx-4 mx-auto md:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-20">
        <div class="text-center">
          <h1 class="text-balance text-4xl font-semibold tracking-tight text-white sm:text-7xl">
            Tag: {{ tag }}
          </h1>
          <div class="mt-10">
            <ContentSearch :tag />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
