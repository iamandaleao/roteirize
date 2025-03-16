<script setup lang="ts">
import type { PostCardProps } from '~~/types'
import MiniSearch from 'minisearch'
import { ref } from 'vue'
import SearchHero from '~/components/SearchHero.vue'

const route = useRoute()

const posts = ref<PostCardProps[]>([])

const query = ref(route.query.q as string)
const { data, pending } = await useAsyncData(`search-${query.value}`, () => queryCollectionSearchSections('blog'), {
  lazy: false,
  watch: [query],
})

const miniSearch = new MiniSearch({
  fields: ['title', 'content'],
  storeFields: ['title', 'content'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
  },
})

// @ts-ignore
miniSearch.addAll(toValue(data.value))
miniSearch.search(toValue(query)).map(async (item) => {
  const { data: page } = await useAsyncData(item.id, () => {
    return queryCollection('blog').path(item.id).select(['image']).first()
  })

  posts.value.push({
    title: item.title,
    excerpt: item.content,
    to: item.id,
    thumbnail: page.value?.image || '',
  })
})

function updateSearch(q: string) {
  posts.value = []
  query.value = q
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
      <SearchHero :query @search="updateSearch" />
    </div>
    <div class="mx-auto max-w-7xl py-20">
      <div v-if="pending" class="flex justify-center py-12">
        <div class="size-12 animate-spin rounded-full border-y-2 border-primary" />
      </div>

      <div v-else-if="!posts" class="py-12 text-center">
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
