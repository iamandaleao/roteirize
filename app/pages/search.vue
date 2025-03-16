<script setup lang="ts">
import type { PostCardProps } from '~~/types'
import MiniSearch from 'minisearch'
import { ref } from 'vue'
import SearchHero from '~/components/SearchHero.vue'

const route = useRoute()
const router = useRouter()
const posts = ref<PostCardProps[]>([])
const query = ref(route.query.q as string)
const isSearching = ref(false)

// Fix TypeScript error
function createSearchIndex(data: any[]) {
  const miniSearch = new MiniSearch({
    fields: ['title', 'content'],
    storeFields: ['title', 'content', 'id'],
    searchOptions: {
      prefix: true,
      fuzzy: 0.2,
    },
  })

  miniSearch.addAll(data)
  return miniSearch
}

// Fetch blog data only once
const { data: blogData, pending } = await useAsyncData('blog-data', () =>
  queryCollectionSearchSections('blog'), {
  lazy: false,
})

// Function to perform search and update results
async function performSearch(searchQuery: string) {
  // Prevent concurrent searches
  if (isSearching.value) { return }
  isSearching.value = true

  try {
    // Clear previous results
    posts.value = []

    if (!searchQuery || !blogData.value) {
      return
    }

    // Create a fresh search index for each search
    const miniSearch = createSearchIndex(toValue(blogData.value))
    const results = miniSearch.search(searchQuery)

    // Get unique IDs from results
    const uniqueIds = [...new Set(results.map(item => item.id))]

    // Create a new array for results to avoid reactivity issues
    const newPosts: PostCardProps[] = []

    // Process each unique ID
    for (const id of uniqueIds) {
      // Find the corresponding result
      const result = results.find(item => item.id === id)
      if (!result) {
        continue
      }

      // Fetch image data
      const { data: page } = await useAsyncData(`page-${id}-${Date.now()}`, () => {
        // @ts-ignore - Ignoring type error for now
        return queryCollection('blog').path(id).select(['image']).first()
      })

      // Add to new posts array
      newPosts.push({
        title: result.title,
        excerpt: result.content,
        to: id,
        thumbnail: page.value?.image || '',
      })
    }

    // Update posts with the new array
    posts.value = newPosts
  }
  finally {
    isSearching.value = false
  }
}

async function updateSearch(q: string) {
  if (!q) {
    return
  }

  // Update URL first
  await router.push({
    path: '/search',
    query: { q },
  })

  // Update local query and perform search
  query.value = q
  await performSearch(q)
}

onMounted(async () => {
  if (query.value) {
    await performSearch(query.value)
  }
})

useSeoMeta({
  title: 'Resultados para a busca',
  description: 'Eu cuido dos detalhes, você aproveita a jornada.',
})
</script>

<template>
  <div>
    <div class="bg-secondary">
      <NavHeader />
      <SearchHero :query="query" @search="updateSearch" />
    </div>
    <div class="mx-auto max-w-7xl py-20">
      <div v-if="pending || isSearching" class="flex justify-center py-12">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g><circle cx="3" cy="12" r="2" fill="currentColor" /><circle cx="21" cy="12" r="2" fill="currentColor" /><circle cx="12" cy="21" r="2" fill="currentColor" /><circle cx="12" cy="3" r="2" fill="currentColor" /><circle cx="5.64" cy="5.64" r="2" fill="currentColor" /><circle cx="18.36" cy="18.36" r="2" fill="currentColor" /><circle cx="5.64" cy="18.36" r="2" fill="currentColor" /><circle cx="18.36" cy="5.64" r="2" fill="currentColor" /><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></g></svg>
      </div>

      <div v-else-if="posts.length === 0" class="py-12 text-center">
        <p class="text-xl text-gray-600 dark:text-gray-400">
          Nenhum resultado encontrado para "{{ query }}".
        </p>
        <p class="mt-2 text-gray-500 dark:text-gray-500">
          Tente buscar por outros termos ou explorar nossos destinos populares.
        </p>
      </div>

      <div v-else-if="posts.length > 0" class="grid grid-cols-1 gap-4 px-4 lg:grid-cols-2 lg:px-8">
        <div v-for="post in posts" :key="post.to">
          <PostCard v-bind="post" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
