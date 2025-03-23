<script setup lang="ts">
const route = useRoute()
const paths = route.path.split('/')
const continent = paths[2]
const country = paths[3]
const city = paths[4]

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

function isActive(path: string) {
  const itemPath = `/blog/${city}/${path}`
  return route.path === itemPath || route.path.startsWith(`${itemPath}/`)
}
</script>

<template>
  <div class="bg-secondary/20 p-2 text-white">
    <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
      <NuxtLink
        v-for="(item, index) in items"
        :key="index"
        :to="`/blog/${continent}/${country}/${city}/${item.href}`"
        class="m-2 flex cursor-pointer items-center justify-center space-x-2 rounded-sm border border-white px-4 py-2 text-center transition-all duration-300 hover:bg-black/50 hover:text-white" :class="[
          isActive(item.href) ? 'bg-white text-black' : '',
        ]"
      >
        <Icon :name="item.icon" /> <span>{{ item.name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
