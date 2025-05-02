<script setup lang="ts">
import { tags } from '~/composables/useTags'

const { tag } = defineProps<{
  tag: string
  count: number
}>()

const heroImage = useTagHeroImage(tag)

// @ts-ignore
const heading = computed(() => tags[tag] ?? 'Tag')
</script>

<template>
  <div class="relative isolate min-h-[300px] overflow-hidden bg-secondary pt-14">
    <img
      :src="`/assets/images/hero/${heroImage}`"
      :alt="tag"
      class="absolute inset-0 -z-10 size-full object-cover object-center opacity-40"
      fetchpriority="high"
    >
    <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-8 2xl:py-20">
        <div class="text-center">
          <h1 class="text-balance text-4xl font-semibold tracking-tight text-white lg:text-5xl 2xl:text-7xl">
            {{ heading }}
          </h1>
          <p class="mx-auto mt-8 max-w-lg text-pretty text-lg font-medium text-slate-200 2xl:text-xl/8">
            {{ count }} {{ count === 1 ? 'postagem' : 'postagens' }}
          </p>
          <div class="mt-10">
            <ContentSearch :tag />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
