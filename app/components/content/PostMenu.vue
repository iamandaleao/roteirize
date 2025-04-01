<script setup lang="ts">
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

const route = useRoute()
const paths = route.path.split('/')
const continent = paths[2]
const country = paths[3]
const city = paths[4]
const isOpen = ref(false)

const items = [
  {
    name: 'História',
    icon: 'ph:globe-hemisphere-east',
    href: 'historia',
  },
  {
    name: 'Quando ir',
    icon: 'ph:calendar-dots',
    href: 'quando-ir',
  },
  {
    name: 'Passagens',
    icon: 'ph:airplane',
    href: 'passages',
  },
  {
    name: 'Como chegar',
    icon: 'ph:map-pin-simple-area',
    href: 'como-chegar',
  },
  {
    name: 'Onde ficar',
    icon: 'ph:building-apartment',
    href: 'onde-ficar',
  },
  {
    name: 'O que fazer',
    icon: 'ph:sailboat',
    href: 'o-que-fazer',
  },
  {
    name: 'Gastronomia',
    icon: 'ph:fork-knife',
    href: 'gastronomia',
  },
  {
    name: 'Transporte',
    icon: 'ph:taxi',
    href: 'transporte',
  },
  {
    name: 'Compras',
    icon: 'ph:handbag',
    href: 'compras',
  },
  {
    name: 'Roteiros',
    icon: 'ph:island',
    href: 'roteiros',
  },
]

function buildPath(path: string) {
  const segments = ['/blog', continent]
  if (country) {
    segments.push(country)
  }

  if (city) {
    segments.push(city)
  }

  segments.push(path)
  return segments.join('/')
}

function isActive(path: string) {
  const currentPath = route.path
  const itemPath = buildPath(path)

  return currentPath === itemPath
    || currentPath.startsWith(`${itemPath}/`)
    || currentPath.endsWith(`/${path}`)
    || currentPath.includes(`/${path}/`)
}
</script>

<template>
  <div class="bg-secondary/20 p-4 text-white lg:p-8">
    <div class="hidden grid-cols-2 gap-4 lg:grid lg:grid-cols-5">
      <NuxtLink
        v-for="(item, index) in items"
        :key="index"
        :to="buildPath(item.href)"
        class="flex cursor-pointer items-center justify-center space-x-2 rounded-sm border border-white px-4 py-2 text-center font-medium transition-all duration-300 hover:bg-black/50 hover:text-white"
        :class="[isActive(item.href) ? 'bg-white text-black' : '']"
      >
        <Icon :name="item.icon" />
        <span>{{ item.name }}</span>
      </NuxtLink>
    </div>
    <Collapsible
      v-model:open="isOpen"
      class="grid gap-2 lg:hidden"
    >
      <div class="grid grid-cols-2 gap-2">
        <NuxtLink
          :to="buildPath('historia')"
          class="flex cursor-pointer items-center justify-center space-x-2 rounded-sm border border-white px-4 py-2 text-center font-medium transition-all duration-300 hover:bg-black/50 hover:text-white"
          :class="[isActive('historia') ? 'bg-white text-black' : '']"
        >
          <Icon name="ph:globe-hemisphere-east" />
          <span>História</span>
        </NuxtLink>
        <NuxtLink
          v-if="isOpen"
          :to="buildPath('quando-ir')"
          class="flex cursor-pointer items-center justify-center space-x-2 rounded-sm border border-white px-4 py-2 text-center font-medium transition-all duration-300 hover:bg-black/50 hover:text-white"
          :class="[isActive('quando-ir') ? 'bg-white text-black' : '']"
        >
          <Icon name="ph:calendar-dots" />
          <span>Quando ir</span>
        </NuxtLink>
        <CollapsibleTrigger v-else as-child>
          <div class="flex cursor-pointer items-center justify-center space-x-2 rounded-sm border border-white px-4 py-2 text-center font-medium transition-all duration-300 hover:bg-black/50 hover:text-white">
            <Icon name="ph:caret-up-down" class="size-4" />
            <span>Ver mais</span>
          </div>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent class="collapsible-content">
        <div class="grid grid-cols-2 gap-2">
          <NuxtLink
            v-for="(item, index) in items.slice(2)"
            :key="index"
            :to="buildPath(item.href)"
            class="flex cursor-pointer items-center justify-center space-x-2 rounded-sm border border-white px-4 py-2 text-center font-medium transition-all duration-300 hover:bg-black/50 hover:text-white"
            :class="[isActive(item.href) ? 'bg-white text-black' : '']"
          >
            <Icon :name="item.icon" />
            <span>{{ item.name }}</span>
          </NuxtLink>
        </div>
      </CollapsibleContent>
    </Collapsible>
  </div>
</template>

<style scoped>
.collapsible-content {
  overflow: hidden;
}
.collapsible-content[data-state="open"] {
  animation: slideDown 300ms ease-out;
}
.collapsible-content[data-state="closed"] {
  animation: slideUp 300ms ease-out;
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--reka-collapsible-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--reka-collapsible-content-height);
  }
  to {
    height: 0;
  }
}
</style>
