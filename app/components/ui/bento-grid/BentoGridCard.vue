<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  name: string
  class?: HTMLAttributes['class']
  description: string
  href: string
  cta: string
}

const props = defineProps<Props>()
</script>

<template>
  <NuxtLink
    :to="href"
    :class="
      cn(
        'group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-xl',
        'transform-gpu bg-black [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
        props.class,
      )
    "
  >
    <slot name="background" />

    <div
      class="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10"
    >
      <div class="size-12 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h4 class="text-xl font-semibold text-white">
        {{ name }}
      </h4>
      <p class="max-w-lg text-secondary-foreground">
        {{ description }}
      </p>
    </div>

    <div
      class="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
    >
      <span class="pointer-events-auto inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:text-primary">
        {{ cta }} →
      </span>
    </div>
    <div
      class="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-neutral-800/10"
    />
  </NuxtLink>
</template>
