<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const query = ref(route.query.q)
const isSearching = ref(false)

const { data: posts } = await useAsyncData(`search-${query.value}`, () => {
  return queryCollection('blog')
    .where('body', 'LIKE', `%${query.value}%`)
    .all()
}, {
  lazy: true,
  watch: [query],
})

async function updateSearch(q) {
  query.value = q
}
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <div class="mb-8">
      <h1 class="mb-4 text-3xl font-bold">
        Resultados da busca
      </h1>

      <div class="max-w-xl">
        <ContentSearch @search="updateSearch" />
      </div>
    </div>

    <div v-if="isSearching" class="flex justify-center py-12">
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

    <div v-else-if="posts.length > 0" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <NuxtLink v-for="post in posts" :key="post.id" :to="post.stem">
        {{ post.title }}
      </NuxtLink>
    </div>

    <code>
      {{ posts }}
    </code>
  </div>
</template>
