<script setup lang="ts">
import { useIntervalFn } from '@vueuse/core'
import { ref } from 'vue'

const heroIdx = ref(1)

useIntervalFn(() => {
  if (heroIdx.value < 3) {
    heroIdx.value += 1
  }
  else {
    heroIdx.value = 1
  }
}, 4000)
</script>

<template>
  <div class="relative isolate overflow-hidden pt-14">
    <img :key="`hero-${heroIdx}`" :src="`/assets/images/hero${heroIdx}.jpg`" alt="" class="absolute inset-0 -z-10 size-full object-cover object-center opacity-40">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-32">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full px-3 py-1 text-sm/6 text-secondary-foreground ring-1 ring-white/10 hover:ring-white/20">
            Roteiros para todo tipo de bolso. <a href="#" class="font-semibold text-white"><span class="absolute inset-0" aria-hidden="true" />Ler mais <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
        <div class="text-center">
          <h1 class="text-balance text-4xl font-semibold tracking-tight text-white sm:text-7xl">
            Viaje Mais, Planeje Menos.
          </h1>
          <h2 class="mt-8 text-pretty text-lg font-medium text-secondary-foreground sm:text-xl/8">
            Eu cuido dos detalhes,<br class="lg:hidden"> você aproveita a jornada.
          </h2>
          <div class="mt-10">
            <ContentSearch />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
