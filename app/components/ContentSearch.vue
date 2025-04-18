<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { AnimatedPlaceholderInput } from '~/components/ui/animated-placeholder-input'

const { tag } = defineProps<{
  tag?: string
}>()

const emit = defineEmits<{
  search: [query: string]
}>()

const placeholders = [
  'Chip internacional...',
  'Seguro viagem...',
  'Roma...',
  'Paris...',
  'Suíça...',
  'Passaporte...',
  'Chile...',
  'Europa...',
  'Africa...',
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

  emit('search', query)

  try {
    await router.push({
      path: '/search',
      query: {
        q: query,
        ...(tag ? { tag } : {}),
      },
    })
  }
  finally {
    isSearching.value = false
  }
}
</script>

<template>
  <div class="content-search px-4 md:px-6 lg:px-8">
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
