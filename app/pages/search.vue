<script setup lang="ts">
import type { PostCardProps } from '~~/types'
import MiniSearch from 'minisearch'
import { ref, watch } from 'vue'
import SearchHero from '~/components/SearchHero.vue'

const route = useRoute()
const router = useRouter()
const posts = ref<PostCardProps[]>([])
const query = ref(route.query.q as string)
const miniSearch = new MiniSearch({
  fields: ['title', 'content'],
  storeFields: ['title', 'content'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
  },
})

const { data, pending } = await useAsyncData(`search-${query.value}`, () => queryCollectionSearchSections('blog'), {
  lazy: false,
})

// Function to perform search and update results
async function performSearch(searchQuery: string) {
  posts.value = []

  if (!searchQuery || !data.value) {
    return
  }

  // Clear and re-add all data to minisearch
  miniSearch.removeAll()
  // @ts-ignore
  miniSearch.addAll(toValue(data.value))
  const results = miniSearch.search(searchQuery)

  for (const item of results) {
    const { data: page } = await useAsyncData(item.id, () => {
      // @ts-ignore - Ignoring type error for now
      return queryCollection('blog').path(item.id).select(['image']).first()
    })

    posts.value.push({
      title: item.title,
      excerpt: item.content,
      to: item.id,
      thumbnail: page.value?.image || '',
    })
  }
}

// Initial search with the query from URL
if (query.value) {
  performSearch(query.value)
}

// Watch for query changes from route
watch(() => route.query.q, (newQuery) => {
  if (newQuery && typeof newQuery === 'string') {
    query.value = newQuery
    performSearch(newQuery)
  }
}, { immediate: true })

async function updateSearch(q: string) {
  if (!q) {
    return
  }

  // Update URL first
  await router.push({
    path: '/search',
    query: { q },
  })

  // Update local query
  query.value = q

  // Perform search
  performSearch(q)
}

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
      <div v-if="pending" class="flex justify-center py-12">
        <div class="size-12 animate-spin rounded-full border-y-2 border-primary" />
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
