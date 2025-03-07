<script setup lang="ts">
const items = [
  {
    name: 'História',
    icon: 'ph:globe-hemisphere-east',
  },
  {
    name: 'Quando ir',
    icon: 'ph:calendar-dots',
  },
  {
    name: 'Passagens',
    icon: 'ph:airplane',
  },
  {
    name: 'Como chegar',
    icon: 'ph:map-pin-simple-area',
  },
  {
    name: 'Onde ficar',
    icon: 'ph:building-apartment',
  },
  {
    name: 'O que fazer',
    icon: 'ph:sailboat',
  },
  {
    name: 'Alimentação',
    icon: 'ph:fork-knife',
  },
  {
    name: 'Transporte',
    icon: 'ph:taxi',
  },
  {
    name: 'Compras',
    icon: 'ph:handbag',
  },
  {
    name: 'Pacotes',
    icon: 'ph:island',
  },
]
</script>

<template>
  <div class="bg-black/20 p-2 text-white">
    <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
      <NuxtLink
        v-for="(item, index) in items"
        :key="index"
        class="m-2 flex cursor-pointer items-center justify-center space-x-2 rounded-sm border border-white px-4  py-2 text-center hover:opacity-75"
      >
        <Icon :name="item.icon" /> <span>{{ item.name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
