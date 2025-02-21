<script setup>
import { useIntervalFn } from '@vueuse/core'
import { ref } from 'vue'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Sobre', href: '#' },
  { name: 'Blog', href: '/blog' },
]

const mobileMenuOpen = ref(false)
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
  <div class="bg-primary dark:bg-black">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <NuxtLink href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Roteirize</span>
            <Logo class="h-12 text-white" />
          </NuxtLink>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-300" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <NuxtLink v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm/6 font-semibold text-white">
            {{ item.name }}
          </NuxtLink>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <ThemeToggle />
        </div>
      </nav>
    </header>

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
            <h1 class="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Viaje Mais, Planeje Menos.
            </h1>
            <p class="mt-8 text-lg font-medium text-pretty text-slate-300 sm:text-xl/8">
              Eu cuido dos detalhes, você aproveita a jornada.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" class="rounded-md bg-primary dark:bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Get started</a>
              <a href="#" class="text-sm/6 font-semibold text-white">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
