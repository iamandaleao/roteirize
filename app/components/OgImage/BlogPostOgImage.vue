<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(defineProps<{ title?: string, description?: string }>(), {
  title: 'title',
  description: 'description',
})

const title = computed(() => (props.title || '').slice(0, 60))
const description = computed(() => (props.description || '').slice(0, 200))
</script>

<template>
  <div class="flex size-full flex-col justify-center bg-[#020420]">
    <svg
      class="absolute right-0 top-0"
      width="629"
      height="593"
      viewBox="0 0 629 593"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_199_94966)">
        <path d="M628.5 -578L639.334 -94.4223L806.598 -548.281L659.827 -87.387L965.396 -462.344L676.925 -74.0787L1087.69 -329.501L688.776 -55.9396L1160.22 -164.149L694.095 -34.9354L1175.13 15.7948L692.306 -13.3422L1130.8 190.83L683.602 6.50012L1032.04 341.989L668.927 22.4412L889.557 452.891L649.872 32.7537L718.78 511.519L628.5 36.32L538.22 511.519L607.128 32.7537L367.443 452.891L588.073 22.4412L224.955 341.989L573.398 6.50012L126.198 190.83L564.694 -13.3422L81.8734 15.7948L562.905 -34.9354L96.7839 -164.149L568.224 -55.9396L169.314 -329.501L580.075 -74.0787L291.604 -462.344L597.173 -87.387L450.402 -548.281L617.666 -94.4223L628.5 -578Z" fill="#00DC82" />
      </g>
      <defs>
        <filter
          id="filter0_f_199_94966"
          x="0.873535"
          y="-659"
          width="1255.25"
          height="1251.52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="40.5" result="effect1_foregroundBlur_199_94966" />
        </filter>
      </defs>
    </svg>

    <div class="w-[600px] pl-[100px]">
      <p class="mb-4 text-[24px] font-semibold uppercase text-[#00DC82]">
        Roteirize
      </p>
      <h1 v-if="title" class="m-0 mb-4 flex w-[600px] items-center text-[75px] font-semibold text-white">
        <span>{{ title }}</span>
      </h1>
      <p v-if="description" class="text-[32px] leading-tight text-[#E4E4E7]">
        {{ description }}
      </p>
    </div>
    <svg
      class="absolute right-[90px] top-[160px]"
      width="340"
      height="340"
      viewBox="0 0 285 271"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m283.22 148.25-44.81-31.13c-.69-.51-1.53-.79-2.39-.78h-78.91v-14.53h32.79c1.15 0 2.25-.46 3.07-1.27.81-.81 1.27-1.92 1.27-3.07V36.55c0-1.15-.46-2.25-1.27-3.07a4.35 4.35 0 0 0-3.07-1.27h-32.79V4.34c0-1.15-.46-2.25-1.27-3.07A4.35 4.35 0 0 0 152.77 0h-26.5c-2.4 0-4.34 1.94-4.34 4.34v28.01H82.2a4.35 4.35 0 0 0-3.77.74c-1.07.82-1.7 2.09-1.7 3.45s.63 2.62 1.7 3.44a4.35 4.35 0 0 0 3.77.74h87.84v40.41c-.35 1.3-.08 2.7.74 3.77s2.1 1.7 3.45 1.7 2.62-.63 3.45-1.7a4.35 4.35 0 0 0 .74-3.77V40.72h7.46V93.4H50.32L11.63 66.47l38.61-25.76h16.74a4.334 4.334 0 0 0 5.47-4.18c0-1.35-.63-2.62-1.7-3.45a4.35 4.35 0 0 0-3.77-.74h-18c-.83 0-1.65.24-2.34.69L1.87 62.92A4.06 4.06 0 0 0 0 66.34c0 1.39.66 2.69 1.78 3.51l44.81 31.18c.69.51 1.53.79 2.39.78h73.14v14.53H89.5c-2.39 0-4.34 1.94-4.34 4.34v60.92c0 1.15.46 2.25 1.27 3.07.81.81 1.92 1.27 3.07 1.27h32.62v80.74c0 1.15.46 2.25 1.27 3.07.81.81 1.92 1.27 3.07 1.27h26.46c1.15 0 2.25-.46 3.07-1.27.81-.81 1.27-1.92 1.27-3.07v-80.87h43.77c1.31.35 2.7.08 3.77-.74s1.7-2.1 1.7-3.44-.63-2.62-1.7-3.44a4.35 4.35 0 0 0-3.77-.74H93.71v-52.68h8.07v40.06a4.34 4.34 0 0 0 4.21 5.39 4.34 4.34 0 0 0 4.21-5.39v-40.06h124.5l38.69 26.93-38.61 25.76h-19.65c-1.89.51-3.2 2.23-3.2 4.18s1.31 3.67 3.2 4.18h20.91c.83 0 1.65-.24 2.34-.69l44.77-29.88a4.09 4.09 0 0 0 1.87-3.43c.02-1.4-.65-2.73-1.78-3.56ZM148.75 32.17h-18.22V8.54h18.22zm-18.22 153.8h18.22v76.49h-18.22zm18.22-69.68h-18.22v-14.35h18.22z" fill="#00DC82" />
    </svg>
  </div>
</template>
