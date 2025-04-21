<script setup lang="ts">
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

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
    href: '/roteiros',
  },
  {
    title: 'Destinos',
    href: '/blog/tag/destinos',
  },
  {
    title: 'Dicas',
    href: '/blog/tag/dicas',
  },
  {
    title: 'Inspirações',
    href: '/inspiracoes',
  },
]

const isDrawerOpen = ref(false)

function closeDrawer() {
  isDrawerOpen.value = false
}

const route = useRoute()
watch(() => route.path, () => closeDrawer)
</script>

<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <NuxtLink to="/">
          <span class="sr-only">Roteirize</span>
          <Logo class="h-12 text-primary" />
        </NuxtLink>
      </div>
      <div class="flex space-x-3 lg:hidden">
        <ThemeToggle />
        <Drawer v-model:open="isDrawerOpen" @close="closeDrawer">
          <DrawerTrigger as-child>
            <button type="button" class="inline-flex items-center justify-center rounded-md text-white">
              <Icon name="ph:list" size="24" />
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Viaje Mais, Planeje Menos.</DrawerTitle>
              <DrawerDescription>Eu cuido dos detalhes, você aproveita a jornada.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/25">
                  <div class="space-y-2 py-6">
                    <NuxtLink v-for="item in navigation" :key="item.title" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-secondary dark:text-secondary-foreground" @click="closeDrawer">
                      {{ item.title }}
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <NuxtLink v-for="item in navigation" :key="item.title" :href="item.href" class="text-sm/6 font-semibold text-white transition-all hover:scale-110">
          {{ item.title }}
        </NuxtLink>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <ThemeToggle />
      </div>
    </nav>
  </header>
</template>
