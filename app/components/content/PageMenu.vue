<script setup lang="ts">
import type { MenuItem } from '~~/types'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

const { items } = defineProps<{
  items: MenuItem[]
}>()

const route = useRoute()

const isOpen = ref(false)

const mobileMenuItems = computed(() => {
  const activeItem = items.find(item => isActive(item.href))
  if (!activeItem) {
    return items
  }

  const otherItems = items.filter(item => item.href !== activeItem.href)
  return [activeItem, ...otherItems]
})

function isActive(path: string) {
  const currentPath = route.path
  const itemPath = path

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
        :to="item.href"
        class="flex cursor-pointer items-center justify-center space-x-2 rounded-sm border border-white px-4 py-2 text-center font-medium transition-all duration-300 hover:bg-black/50 hover:text-white"
        :class="[isActive(item.href) ? 'bg-white text-black' : '']"
      >
        <Icon :name="item.icon" class="shrink-0" />
        <span>{{ item.name }}</span>
      </NuxtLink>
    </div>
    <Collapsible
      v-model:open="isOpen"
      class="grid gap-2 lg:hidden"
    >
      <div class="grid grid-cols-2 gap-2">
        <NuxtLink
          v-for="item in mobileMenuItems.slice(0, 1)"
          :key="item.href"
          :to="item.href"
          class="flex cursor-pointer items-center justify-center space-x-2 rounded-sm border border-white px-4 py-2 text-center font-medium transition-all duration-300 hover:bg-black/50 hover:text-white"
          :class="[isActive(item.href) ? 'bg-white text-black' : '']"
        >
          <Icon :name="item.icon" class="shrink-0" />
          <span>{{ item.name }}</span>
        </NuxtLink>
        <template v-if="!isOpen">
          <CollapsibleTrigger as-child>
            <div class="flex cursor-pointer items-center justify-center space-x-2 rounded-sm border border-white px-4 py-2 text-center font-medium transition-all duration-300 hover:bg-black/50 hover:text-white">
              <Icon name="ph:caret-up-down" class="size-4" />
              <span>Ver mais</span>
            </div>
          </CollapsibleTrigger>
        </template>
        <template v-else>
          <NuxtLink
            v-for="item in mobileMenuItems.slice(1, 2)"
            :key="item.href"
            :to="item.href"
            class="flex cursor-pointer items-center justify-center space-x-2 rounded-sm border border-white px-4 py-2 text-center font-medium transition-all duration-300 hover:bg-black/50 hover:text-white"
            :class="[isActive(item.href) ? 'bg-white text-black' : '']"
          >
            <Icon :name="item.icon" class="shrink-0" />
            <span>{{ item.name }}</span>
          </NuxtLink>
        </template>
      </div>
      <CollapsibleContent v-if="mobileMenuItems.length > 2" class="collapsible-content">
        <div class="grid grid-cols-2 gap-2">
          <NuxtLink
            v-for="item in mobileMenuItems.slice(2)"
            :key="item.href"
            :to="item.href"
            class="flex cursor-pointer items-center justify-center space-x-2 rounded-sm border border-white px-4 py-2 text-center font-medium transition-all duration-300 hover:bg-black/50 hover:text-white"
            :class="[isActive(item.href) ? 'bg-white text-black' : '']"
          >
            <Icon :name="item.icon" class="shrink-0" />
            <span>{{ item.name }}</span>
          </NuxtLink>
        </div>
      </CollapsibleContent>
    </Collapsible>
  </div>
</template>
