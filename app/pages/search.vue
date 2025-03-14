<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const searchQuery = ref(route.query.q)
const searchResults = ref([])
const isSearching = ref(false)
const noResults = ref(false)

async function performSearch(query) {
  if (!query) {
    searchResults.value = []
    return
  }

  searchQuery.value = query
  isSearching.value = true
  noResults.value = false

  try {
    const { data: results } = await useAsyncData('search', () => {
      return queryCollection('blog')
        .where('title', 'LIKE', `%${query}%`)
        .limit(20)
        .all()
    })

    searchResults.value = results.value
    noResults.value = results.value.length === 0
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

watch(() => route.query.q, (newQuery) => {
  if (newQuery) {
    performSearch(newQuery)
  }
}, { immediate: true })
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <div class="mb-8">
      <h1 class="mb-4 text-3xl font-bold">
        Resultados da busca
      </h1>

      <div class="max-w-xl">
        <ContentSearch @search="performSearch" />
      </div>
    </div>

    <div v-if="isSearching" class="flex justify-center py-12">
      <div class="size-12 animate-spin rounded-full border-y-2 border-primary" />
    </div>

    <div v-else-if="noResults" class="py-12 text-center">
      <p class="text-xl text-gray-600 dark:text-gray-400">
        Nenhum resultado encontrado para "{{ searchQuery }}".
      </p>
      <p class="mt-2 text-gray-500 dark:text-gray-500">
        Tente buscar por outros termos ou explorar nossos destinos populares.
      </p>
    </div>

    <div v-else-if="searchResults.length > 0" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <NuxtLink v-for="post in searchResults" :key="post.id" :to="post.stem">
        {{ post.title }}
      </NuxtLink>
    </div>

    <code>
      {{ searchResults }}
    </code>
  </div>
</template>
