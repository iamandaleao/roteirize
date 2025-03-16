<script setup lang="ts">
import type { PostCardProps } from '~~/types'
import { ref } from 'vue'
import SearchHero from '~/components/SearchHero.vue'

const route = useRoute()
const router = useRouter()
const posts = ref<PostCardProps[]>([])
const query = ref(route.query.q as string)
const isSearching = ref(true)

// Fetch blog data only once
const { data: blogData, pending } = await useAsyncData('blog-data', () =>
  queryCollectionSearchSections('blog'), {
  lazy: false,
})

// Function to perform search and update results
async function performSearch(searchQuery: string) {
  if (isSearching.value || !searchQuery || !blogData.value) {
    return
  }
  isSearching.value = true
  posts.value = []

  try {
    // Normalize query and create word boundary regex patterns
    const normalizedTerms = searchQuery.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036F]/g, '') // Remove accents
      .split(/\s+/)
      .filter(term => term.length > 1)
      .flatMap((term) => {
        // Add singular/plural variations
        const variations = [term]
        if (term.endsWith('s')) {
          variations.push(term.slice(0, -1))
        }
        else {
          variations.push(`${term}s`)
        }
        return variations
      })
      .map(term => new RegExp(`\\b${term}\\b`, 'i'))

    // Filter data
    const results = toValue(blogData.value).filter((item) => {
      const normalizedText = (`${item.title} ${item.content}`)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036F]/g, '')

      return normalizedTerms.some(regex => regex.test(normalizedText))
    })

    // Process results
    const newPosts = []
    for (const item of results) {
      const { data: page } = await useAsyncData(`page-${item.id}-${Date.now()}`, () =>
        // @ts-ignore
        queryCollection('blog').path(item.id).select(['image']).first())

      newPosts.push({
        title: item.title,
        excerpt: item.content,
        to: item.id,
        thumbnail: page.value?.image || '',
      })
    }

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
  await router.push({ query: { q } })
  query.value = q
  await performSearch(q)
}

onMounted(async () => {
  setTimeout(async () => {
    isSearching.value = false
    if (query.value) {
      await performSearch(query.value)
    }
  }, 1000)
})

useSeoMeta({
  title: computed(() => `Resultados "${query.value}"`),
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
