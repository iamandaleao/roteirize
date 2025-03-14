<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const searchQuery = ref('')
const searchResults = ref([])
const isSearching = ref(false)
const noResults = ref(false)

// Perform search when the page loads or when the query parameter changes
const performSearch = async (query) => {
  if (!query) {
    searchResults.value = []
    return
  }

  searchQuery.value = query
  isSearching.value = true
  noResults.value = false

  try {
    // Using the Nuxt Content v3 search API
    const results = await queryCollection()
      .where({
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { description: { $regex: query, $options: 'i' } },
          { body: { $regex: query, $options: 'i' } },
        ],
      })
      .limit(20)
      .all()

    searchResults.value = results
    noResults.value = results.length === 0
  }
  catch (error) {
    console.error('Search error:', error)
    searchResults.value = []
    noResults.value = true
  }
  finally {
    isSearching.value = false
  }
}

// Handle new search submissions
const handleSearch = (query) => {
  performSearch(query)
}

// Watch for route query changes
watch(() => route.query.q, (newQuery) => {
  if (newQuery) {
    performSearch(newQuery)
  }
}, { immediate: true })

onMounted(() => {
  if (route.query.q) {
    searchQuery.value = route.query.q
    performSearch(route.query.q)
  }
})
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <div class="mb-8">
      <h1 class="mb-4 text-3xl font-bold">
        Resultados da busca
      </h1>

      <!-- Search input -->
      <div class="max-w-xl">
        <ContentSearch
          :placeholders="['Buscar por destinos, dicas...']"
          :redirect-to-results="false"
          @search="handleSearch"
        />
      </div>
    </div>

    <!-- Loading state -->
    <div v-if="isSearching" class="flex justify-center py-12">
      <div class="size-12 animate-spin rounded-full border-y-2 border-primary" />
    </div>

    <!-- No results -->
    <div v-else-if="noResults" class="py-12 text-center">
      <p class="text-xl text-gray-600 dark:text-gray-400">
        Nenhum resultado encontrado para "{{ searchQuery }}".
      </p>
      <p class="mt-2 text-gray-500 dark:text-gray-500">
        Tente buscar por outros termos ou explorar nossos destinos populares.
      </p>
    </div>

    <!-- Results list -->
    <div v-else-if="searchResults.length > 0" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="result in searchResults"
        :key="result._id"
        class="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-gray-800"
      >
        <NuxtLink :to="result._path" class="block">
          <img
            v-if="result.image"
            :src="result.image"
            :alt="result.title"
            class="h-48 w-full object-cover"
          >
          <div class="p-4">
            <h2 class="mb-2 text-xl font-semibold">
              {{ result.title }}
            </h2>
            <p v-if="result.description" class="mb-3 line-clamp-2 text-gray-600 dark:text-gray-300">
              {{ result.description }}
            </p>
            <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <span v-if="result.date">{{ new Date(result.date).toLocaleDateString('pt-BR') }}</span>
              <span v-if="result.category" class="ml-auto rounded bg-gray-100 px-2 py-1 dark:bg-gray-700">
                {{ result.category }}
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
