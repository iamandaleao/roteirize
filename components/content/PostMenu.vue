<script setup lang="ts">
const route = useRoute()
const city = route.path.split('/')[2]

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
    name: 'Alimentação',
    icon: 'ph:fork-knife',
    href: 'alimentacao',
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
</script>

<template>
  <div class="bg-black/20 p-2 text-white">
    <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
      <NuxtLink
        v-for="(item, index) in items"
        :key="index"
        :to="`/blog/${city}/${item.href}`"
        active-class="bg-white text-black"
        class="m-2 flex cursor-pointer items-center justify-center space-x-2 rounded-sm border border-white px-4 py-2 text-center transition-all duration-300 hover:bg-black/50 hover:text-white"
      >
        <Icon :name="item.icon" /> <span>{{ item.name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
