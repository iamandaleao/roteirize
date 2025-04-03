<script setup lang="ts">
const props = defineProps<{
  tag: string
}>()

const heroImage = computed(() => {
  return {
    roteiros: 'roteiros-hero-bg.jpg',
  }[props.tag] ?? 'blog-hero-bg.jpg'
})
</script>

<template>
  <div class="relative isolate min-h-[400px] overflow-hidden bg-secondary pt-14 lg:min-h-[500px]">
    <img
      :src="`/assets/images/${heroImage}`"
      :alt="tag"
      class="absolute inset-0 -z-10 size-full object-cover object-center opacity-40"
      fetchpriority="high"
      decoding="async"
    >
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-20">
        <div class="text-center">
          <h1 class="text-balance text-4xl font-semibold tracking-tight text-white sm:text-7xl">
            Tag: {{ tag }}
          </h1>
          <div class="mt-10">
            <ContentSearch />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
