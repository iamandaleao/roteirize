<script setup lang="ts">
import { templateRef } from '@vueuse/core'

interface Props {
  placeholders?: string[]
}

// props
const props = withDefaults(defineProps<Props>(), {
  placeholders: () => ['Placeholder 1', 'Placeholder 2', 'Placeholder 3'],
})
const emit = defineEmits(['submit', 'change'])
const vanishingText = defineModel<string>({
  default: '',
})
// template refs
const inputRef = templateRef<HTMLInputElement>('inputRef')

// normal refs
const currentPlaceholder = ref<number>(0)
const intervalRef = ref<number | null>(null)
const animationFrame = ref<number | null>(null)

function changePlaceholder(): void {
  intervalRef.value = window.setInterval(() => {
    currentPlaceholder.value = (currentPlaceholder.value + 1) % props.placeholders.length
  }, 3000)
}

function handleVisibilityChange(): void {
  if (document.visibilityState !== 'visible' && intervalRef.value) {
    clearInterval(intervalRef.value)
    intervalRef.value = null
  }
  else if (document.visibilityState === 'visible') {
    changePlaceholder()
  }
}

function vanishAndSubmit(): void {
  emit('submit', vanishingText.value)
}

function handleSubmit(): void {
  vanishAndSubmit()
}

// Watch for value changes
watch(vanishingText, (newVal: string) => {
  emit('change', { target: { value: newVal } })
})

onMounted(() => {
  changePlaceholder()
  document.addEventListener('visibilitychange', handleVisibilityChange)
})

onBeforeUnmount(() => {
  if (intervalRef.value) {
    clearInterval(intervalRef.value)
  }
  if (animationFrame.value) {
    cancelAnimationFrame(animationFrame.value)
  }
  document.removeEventListener('visibilitychange', handleVisibilityChange)
})
</script>

<template>
  <form
    class="relative mx-auto h-12 w-full max-w-xl overflow-hidden rounded-full bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200" :class="[
      vanishingText && 'bg-slate-50',
    ]"
    @submit.prevent="handleSubmit"
  >
    <!-- Text Input -->
    <input
      ref="inputRef"
      v-model="vanishingText"
      type="text"
      class="relative z-50 size-full rounded-full border-none bg-transparent pl-4 pr-20 text-sm !text-slate-500 focus:outline-none focus:ring-0 dark:text-white sm:pl-10 sm:text-base"
    >

    <!-- Submit Button -->
    <button
      v-if="vanishingText"
      type="submit"
      class="absolute right-0 top-1/2 z-50 flex h-full w-min -translate-y-1/2 cursor-pointer items-center justify-center rounded-r-full bg-primary px-4 text-primary-foreground hover:bg-primary/80"
    >
      <Icon name="ph:magnifying-glass" size="24" class="text-primary-foreground" />
    </button>

    <!-- Placeholder Text -->
    <div class="pointer-events-none absolute inset-0 flex items-center rounded-full">
      <Transition
        v-show="!vanishingText"
        mode="out-in"
        enter-active-class="transition duration-300 ease-out"
        leave-active-class="transition duration-300 ease-in"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <p
          :key="currentPlaceholder"
          class="w-[calc(100%-2rem)] truncate pl-4 text-left text-sm font-normal text-slate-500 dark:text-zinc-500 sm:pl-10 sm:text-base"
        >
          {{ placeholders[currentPlaceholder] }}
        </p>
      </Transition>
    </div>
  </form>
</template>
