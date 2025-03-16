<script setup lang="ts">
import MiniSearch from 'minisearch'
import { ref } from 'vue'
import SearchHero from '~/components/SearchHero.vue'

const route = useRoute()

const posts = ref([])

const query = ref(route.query.q as string)
const { data } = await useAsyncData(`search-${query.value}`, () => queryCollectionSearchSections('blog'), {
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
    return queryCollection('blog').path(item.id).first()
  })

  // @ts-ignore
  posts.value.push(page.value)
})

function updateSearch(q: string) {
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
    <Footer />
  </div>
</template>
