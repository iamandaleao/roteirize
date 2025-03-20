<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { AnimatedPlaceholderInput } from '~/components/ui/animated-placeholder-input'

const emit = defineEmits<{
  search: [query: string]
}>()

const placeholders = [
  'Chip internacional...',
  'Seguro viagem...',
  'Roma...',
  'Paris...',
  'Suíça...',
]

const router = useRouter()
const searchQuery = ref('')
const isSearching = ref(false)

const handleSearch = async (query: string) => {
  if (!query) {
    return
  }

  searchQuery.value = query
  isSearching.value = true

  // Ensure any active element is blurred to hide the keyboard
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur()
  }

  emit('search', query)

  try {
    await router.push({
      path: '/search',
      query: { q: query },
    })
  }
  finally {
    isSearching.value = false
  }
}
</script>

<template>
  <div class="content-search">
    <AnimatedPlaceholderInput
      v-model="searchQuery"
      :placeholders="placeholders"
      @submit="handleSearch"
    />
    <div v-if="isSearching" class="mt-2 text-sm text-white">
      Buscando...
    </div>
  </div>
</template>
