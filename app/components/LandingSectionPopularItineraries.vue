<script setup lang="ts">
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { BentoGrid, BentoGridCard } from '~/components/ui/bento-grid'

const tabs = [
  {
    value: 'europe',
    label: 'Europa',
  },
  {
    value: 'south-america',
    label: 'América do Sul',
  },
  {
    value: 'north-america',
    label: 'América do Norte',
  },
  {
    value: 'africa',
    label: 'África',
  },
]

const features = [
  {
    name: 'Save your files',
    description: 'We automatically save your files as you type.',
    href: '/',
    image: '/assets/images/paris.jpg',
    cta: 'Learn more',
    class: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
  },
  {
    name: 'Full text search',
    description: 'Search through all your files in one place.',
    href: '/',
    image: '/assets/images/paris-roteiro-1-dia.jpg',
    cta: 'Learn more',
    class: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
  },
  {
    name: 'Multilingual',
    description: 'Supports 100+ languages and counting.',
    href: '/',
    image: '/assets/images/paris-roteiro-5-dias.jpg',
    cta: 'Learn more',
    class: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
  },
  {
    name: 'Calendar',
    description: 'Use the calendar to filter your files by date.',
    href: '/',
    image: '/assets/images/paris-roteiro-10-dias.jpg',
    cta: 'Learn more',
    class: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
  },
  {
    name: 'Notifications',
    description: 'Get notified when someone shares a file or mentions you in a comment.',
    href: '/',
    image: '/assets/images/paris-roteiro-1-dia.jpg',
    cta: 'Learn more',
    class: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
  },
]
</script>

<template>
  <div class="mx-auto max-w-7xl space-y-6 px-4 md:px-6 lg:px-8">
    <h2 class="text-center text-2xl tracking-tight md:text-4xl">
      Roteiros mais populares
    </h2>

    <Tabs default-value="europe">
      <TabsList class="grid w-full grid-cols-2 md:grid-cols-4">
        <TabsTrigger
          v-for="tab in tabs"
          :key="`trigger-${tab.value}`"
          class="h-10 data-[state=active]:border data-[state=active]:border-primary"
          :value="tab.value"
        >
          {{ tab.label }}
        </TabsTrigger>
      </TabsList>
      <TabsContent v-for="tab in tabs" :key="`trigger-${tab.value}`" :value="tab.value">
        <BentoGrid class="grid w-full auto-rows-[22rem] grid-cols-3 gap-4 lg:grid-rows-3">
          <BentoGridCard
            v-for="(feature, index) in features"
            :key="index"
            v-bind="feature"
            :class="feature.class"
          >
            <template
              v-if="feature.image"
              #background
            >
              <div
                class="absolute right-0 top-0 size-full bg-center transition duration-150 ease-in-out group-hover:opacity-20"
                :style="`background-image: url('${feature.image}')`"
              />
            </template>
          </BentoGridCard>
        </BentoGrid>
      </TabsContent>
    </Tabs>
  </div>
</template>
