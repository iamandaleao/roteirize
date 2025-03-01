<script setup>
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
    <img :key="`hero-${heroIdx}`" :src="`/assets/images/hero${heroIdx}.jpg`" alt="" class="absolute inset-0 -z-10 size-full object-cover opacity-40">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full px-3 py-1 text-sm/6 text-slate-300 ring-1 ring-white/10 hover:ring-white/20">
            Roteiros para todo tipo de bolso. <a href="#" class="font-semibold text-white"><span class="absolute inset-0" aria-hidden="true" />Ler mais <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
        <div class="text-center">
          <h1 class="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Viaje Mais, Planeje Menos.
          </h1>
          <p class="mt-8 text-pretty text-lg font-medium text-slate-300 sm:text-xl/8">
            Eu cuido dos detalhes, você aproveita a jornada.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" class="shadow-xs bg-primary hover:bg-primary/80 rounded-md px-3.5 py-2.5 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 dark:bg-black">Get started</a>
            <a href="#" class="text-sm/6 font-semibold text-white">Learn more <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
