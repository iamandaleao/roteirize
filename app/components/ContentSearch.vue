<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { AnimatedPlaceholderInput } from '~/components/ui/animated-placeholder-input'

const emit = defineEmits(['search', 'results'])

const placeholders = [
  'Chip Europa...',
  'Seguro Viagem...',
  'Roma...',
  'Paris...',
  'Suíça...',
]

const router = useRouter()
const searchQuery = ref('')
const isSearching = ref(false)

const handleSearch = async (query) => {
  if (!query) {
    return
  }

  searchQuery.value = query
  isSearching.value = true

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
    <div v-if="isSearching" class="mt-2 text-sm text-gray-500 dark:text-gray-400">
      Buscando...
    </div>
  </div>
</template>
