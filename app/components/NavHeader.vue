<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

interface NavItem {
  title: string
  href: string
}

const navigation: NavItem[] = [
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Roteiros',
    href: '/blog',
  },
  {
    title: 'Destinos',
    href: '/blog',
  },
  {
    title: 'Dicas',
    href: '/blog',
  },
  {
    title: 'Inspirações',
    href: '/blog',
  },
]
</script>

<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <NuxtLink to="/">
          <span class="sr-only">Roteirize</span>
          <Logo class="h-12 text-primary" />
        </NuxtLink>
      </div>
      <div class="flex space-x-3 lg:hidden">
        <ThemeToggle />
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Icon name="ph:list" size="24" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <NuxtLink v-for="item in navigation" :key="item.title" :href="item.href" class="text-sm/6 font-semibold text-white">
          {{ item.title }}
        </NuxtLink>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <ThemeToggle />
      </div>
    </nav>
    <div v-if="mobileMenuOpen" class="lg:hidden" role="dialog" aria-modal="true">
      <div class="fixed inset-0 z-50" />
      <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
        <div class="flex items-center justify-between">
          <NuxtLink to="/">
            <span class="sr-only">Roteirize</span>
            <Logo class="h-12 text-primary" />
          </NuxtLink>
          <button type="button" class="inline-flex items-center justify-center rounded-md p-2.5 text-white" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <Icon name="ph:x" size="24" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/25">
            <div class="space-y-2 py-6">
              <NuxtLink v-for="item in navigation" :key="item.title" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800">
                {{ item.title }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
