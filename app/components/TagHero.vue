<script setup lang="ts">
const { tag } = defineProps<{
  tag: string
  count: number
}>()

const heroImage = computed(() => {
  return {
    roteiros: 'roteiros-hero-bg.jpg',
    destinos: 'destinos-hero-bg.jpg',
    bagagem: 'dicas-hero-bg.jpg',
    direitos: 'dicas-hero-bg.jpg',
    dicas: 'capa-dicas-bg.jpg',
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
  <div class="relative isolate min-h-[300px] overflow-hidden bg-secondary pt-14">
    <img
      :src="`/assets/images/${heroImage}`"
      :alt="tag"
      class="absolute inset-0 -z-10 size-full object-cover object-center opacity-40"
      fetchpriority="high"
      decoding="async"
    >
    <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-8 2xl:py-20">
        <div class="text-center">
          <h1 class="text-balance text-4xl font-semibold tracking-tight text-white lg:text-5xl 2xl:text-7xl">
            Tag: {{ tag }}
          </h1>
          <p class="mx-auto mt-8 max-w-lg text-pretty text-lg font-medium text-slate-200 2xl:text-xl/8">
            {{ count }} {{ count === 1 ? 'postagem' : 'postagens' }}
          </p>
          <div class="mt-10">
            <ContentSearch :tag />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
