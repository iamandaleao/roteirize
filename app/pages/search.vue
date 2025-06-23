<script setup lang="ts">
import type { PostCardProps } from '~~/types'
import { ref } from 'vue'
import Pagination from '~/components/Pagination.vue'
import SearchHero from '~/components/SearchHero.vue'
import useToday from '~/composables/useToday'

const route = useRoute()
const router = useRouter()
const allPosts = ref<PostCardProps[]>([])
const query = computed(() => route.query.q as string)
const tag = computed(() => route.query.tag as string)
const page = ref(Number.parseInt(route.query.page as string) || 1)
const postsPerPage = 6
const isSearching = ref(true)
const totalPages = ref(0)

const { data: blogData, pending } = await useAsyncData(`blog-search-${query.value}-${tag.value}`, () => {
  let query = queryCollectionSearchSections('blog', {
    extraFields: ['thumbnail', 'description', 'tags'],
  }).where('date', '<', useToday())

  if (tag.value) {
    query = query.where('tags', 'LIKE', `%${tag.value}%`)
  }

  query = query.order('date', 'DESC')

  return query
}, {
  lazy: true,
  watch: [query, tag],
})

// Function to perform search and update results
async function performSearch(searchQuery: string) {
  if (isSearching.value || !searchQuery || !blogData.value) {
    return
  }

  isSearching.value = true
  allPosts.value = []

  try {
    const normalizedTerms = searchQuery.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036F]/g, '') // Remove accents
      .split(/\s+/)
      .filter(term => term.length > 1)
      .flatMap((term) => {
        // Create variations including stem matches (for words like "passaport" to match "passaporte")
        const variations = [term]

        // Handle singular/plural variations
        if (term.endsWith('s')) {
          variations.push(term.slice(0, -1))
        }
        else {
          variations.push(`${term}s`)
        }

        // Add variation for words with 'e' endings (like passaporte/passaport)
        if (term.endsWith('e')) {
          variations.push(term.slice(0, -1))
        }
        else if (term.length > 4) {
          variations.push(`${term}e`)
        }

        return variations
      })
      .map((term) => {
        // Use word boundaries for shorter terms to avoid over-matching
        // (e.g., "roma" should not match "romance", "aromas", etc.)
        if (term.length <= 4) {
          return new RegExp(`\\b${term}\\b`, 'i')
        }
        // For longer terms, allow more flexible matching including partial matches
        return new RegExp(term, 'i')
      })

    const results = toValue(blogData.value).filter((item) => {
      const normalizedText = (`${item.title} ${item.content}`)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036F]/g, '')

      // For more precise matching, especially for short terms
      const words = normalizedText.split(/\s+|[.,;:!?()[\]{}'"«»]/)

      return normalizedTerms.some((regex) => {
        // Extract the search term more accurately from the regex
        const regexStr = regex.toString()
        // Remove the /\b and \b/i parts for words with boundaries
        const term = regexStr.includes('\\b')
          ? regexStr.replace(/^\/\\b|\\b\/i$/g, '')
          : regexStr.replace(/^\/|\/i$/g, '')

        if (term.length <= 4) {
          return words.includes(term)
        }
        return regex.test(normalizedText)
      })
    })

    // Process results
    const newPosts = []
    for (const item of results) {
      newPosts.push({
        to: item.id,
        title: item.title,
        tags: item.tags,
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

watch(pending, () => performSearch(query.value))

async function goToPage(newPage: number) {
  page.value = newPage
  await router.push({
    query: {
      q: query.value,
      tag: tag.value,
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
  <div>
    <div class="bg-secondary">
      <NavHeader />
      <SearchHero
        :is-searching="isSearching"
        :results-count="resultsCount"
        :query
        :tag
      />
    </div>

    <div class="mx-auto max-w-7xl py-20">
      <div v-if="pending || isSearching" class="flex justify-center py-12">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g><circle cx="3" cy="12" r="2" fill="currentColor" /><circle cx="21" cy="12" r="2" fill="currentColor" /><circle cx="12" cy="21" r="2" fill="currentColor" /><circle cx="12" cy="3" r="2" fill="currentColor" /><circle cx="5.64" cy="5.64" r="2" fill="currentColor" /><circle cx="18.36" cy="18.36" r="2" fill="currentColor" /><circle cx="5.64" cy="18.36" r="2" fill="currentColor" /><circle cx="18.36" cy="5.64" r="2" fill="currentColor" /><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></g></svg>
      </div>

      <TagCloud v-else-if="allPosts.length === 0" />

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
