<script setup lang="ts">
import type { PostCardProps } from '~~/types'
import { ref } from 'vue'
import Pagination from '~/components/Pagination.vue'
import SearchHero from '~/components/SearchHero.vue'

const route = useRoute()
const router = useRouter()
const allPosts = ref<PostCardProps[]>([])
const query = ref(route.query.q as string)
const page = ref(Number.parseInt(route.query.page as string) || 1)
const postsPerPage = 6
const isSearching = ref(true)
const totalPages = ref(0)

const { data: blogData, pending } = await useAsyncData(`blog-search-${query.value}`, () =>
  queryCollectionSearchSections('blog', {
    extraFields: ['thumbnail', 'description', 'date'],
  }), {
  lazy: true,
  watch: [query],
})

// Function to perform search and update results
async function performSearch(searchQuery: string) {
  if (isSearching.value || !searchQuery || !blogData.value) {
    return
  }

  isSearching.value = true
  allPosts.value = []

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
      newPosts.push({
        to: item.id,
        title: item.title,
        date: item.date,
        description: item.description,
        thumbnail: item.thumbnail || '',
      })
    }

    allPosts.value = newPosts
    totalPages.value = Math.ceil(newPosts.length / postsPerPage)

    // Reset to page 1 if current page is out of bounds
    if (page.value > totalPages.value) {
      await goToPage(1)
    }
  }
  finally {
    isSearching.value = false
  }
}

// Get paginated posts for current page
const posts = computed(() => {
  const start = (page.value - 1) * postsPerPage
  const end = start + postsPerPage
  return allPosts.value.slice(start, end)
})

const resultsCount = computed(() => allPosts.value.length)

async function updateSearch(q: string) {
  if (!q) {
    return
  }

  await router.push({ query: { q } })
  query.value = q
  page.value = 1
  await performSearch(q)
}

async function goToPage(newPage: number) {
  page.value = newPage
  await router.push({
    query: {
      q: query.value,
      page: newPage === 1 ? undefined : newPage,
    },
  })
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
  <div class="bg-background">
    <div class="bg-secondary">
      <NavHeader />
      <SearchHero
        :is-searching="isSearching"
        :results-count="resultsCount"
        :query="query"
        @search="updateSearch"
      />
    </div>

    <div class="mx-auto max-w-7xl py-20">
      <div v-if="pending || isSearching" class="flex justify-center py-12">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g><circle cx="3" cy="12" r="2" fill="currentColor" /><circle cx="21" cy="12" r="2" fill="currentColor" /><circle cx="12" cy="21" r="2" fill="currentColor" /><circle cx="12" cy="3" r="2" fill="currentColor" /><circle cx="5.64" cy="5.64" r="2" fill="currentColor" /><circle cx="18.36" cy="18.36" r="2" fill="currentColor" /><circle cx="5.64" cy="18.36" r="2" fill="currentColor" /><circle cx="18.36" cy="5.64" r="2" fill="currentColor" /><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></g></svg>
      </div>

      <div v-else-if="allPosts.length === 0" class="px-4 py-12 text-center">
        <h2 class="text-xl font-medium">
          Nenhum resultado encontrado para "{{ query }}"
        </h2>
        <p class="mt-2 text-secondary dark:text-secondary-foreground">
          Tente buscar por outros termos ou explorar nossos destinos populares.
        </p>
      </div>

      <div v-else-if="allPosts.length > 0">
        <div class="grid grid-cols-1 gap-4 px-4 lg:grid-cols-2 lg:px-8">
          <div v-for="post in posts" :key="post.to">
            <PostCard v-bind="post" />
          </div>
        </div>

        <Pagination
          :current-page="page"
          :total-pages="totalPages"
          @page-change="goToPage"
        />
      </div>
    </div>

    <Footer />
  </div>
</template>
