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
  <div class="relative isolate min-h-[400px] overflow-hidden bg-secondary pt-14 lg:h-screen xl:h-auto">
    <video
      :key="`hero-${heroIdx}`"
      :src="`/assets/videos/hero${heroIdx}.mp4`"
      autoplay
      muted
      class="absolute inset-0 -z-10 size-full object-cover object-center opacity-40"
    />
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-24">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <NuxtLink to="/roteiros" class="relative rounded-full px-3 py-1 text-sm text-secondary-foreground ring-1 ring-white/10 hover:ring-white/20">
            Roteiros para todo tipo de bolso. <span class="font-semibold text-white">Ler mais <span aria-hidden="true">&rarr;</span></span>
          </NuxtLink>
        </div>
        <div class="text-center">
          <h1 class="text-balance text-4xl font-semibold tracking-tight text-white sm:text-7xl">
            Viaje Mais, Planeje Menos.
          </h1>
          <p class="mt-8 text-pretty text-lg font-medium text-secondary-foreground sm:text-xl/8">
            Eu cuido dos detalhes,<br class="lg:hidden"> você aproveita a jornada.
          </p>
          <div class="mt-10">
            <ContentSearch />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
