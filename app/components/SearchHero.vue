<script setup lang="ts">
import { useRouter } from '#vue-router'

const { query, tag } = defineProps<{
  isSearching: boolean
  resultsCount: number
  query: string
  tag?: string
}>()

const router = useRouter()

const heroImage = useTagHeroImage(tag ?? '')

async function searchWithoutTag() {
  await router.push({
    path: '/search',
    query: {
      q: query,
    },
  })
}
</script>

<template>
  <div class="relative isolate min-h-[300px] overflow-hidden bg-secondary pt-14">
    <img
      :src="`/assets/images/${heroImage}`"
      alt="Pesquisa"
      class="absolute inset-0 -z-10 size-full object-cover object-center opacity-10"
      fetchpriority="high"
    >
    <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-8 2xl:py-20">
        <div class="text-center">
          <h1 class="text-balance text-4xl font-semibold tracking-tight text-white lg:text-5xl 2xl:text-7xl">
            <template v-if="isSearching">
              Pesquisando...
            </template>
            <template v-else>
              {{ resultsCount > 0 ? resultsCount : 'Nenhum' }} {{ resultsCount > 1 ? 'resultados' : 'resultado' }} para a busca: "{{ query }}"
            </template>
          </h1>
          <div class="mt-10">
            <ContentSearch :tag />
          </div>
        </div>
        <div v-if="tag" class="mt-4 flex items-center justify-center space-x-1 text-xs text-muted-foreground">
          <button
            type="button"
            class="flex items-center space-x-2 rounded-full bg-accent px-2 py-1 text-accent-foreground"
            @click="searchWithoutTag"
          >
            <span>{{ tag }}</span>
            <Icon name="ph:x" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
