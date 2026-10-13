<script setup lang="ts">
import useToday from '~/composables/useToday'

const route = useRoute()
const router = useRouter()
const page = ref(Number.parseInt(route.query.page as string) || 1)
const postsPerPage = 6
const tag = route.path.split('/')[3] ?? ''

const { data: paginatedData } = await useAsyncData(`tag-${tag}`, async () => {
  const [posts, count] = await Promise.all([
    queryCollection('blog')
      .where('published', '=', true)
      .where('date', '<', useToday())
      .where('tags', 'LIKE', `%${tag}%`)
      .order('date', 'DESC')
      .skip((page.value - 1) * postsPerPage)
      .limit(postsPerPage)
      .all(),
    queryCollection('blog')
      .where('published', '=', true)
      .where('date', '<', useToday())
      .where('tags', 'LIKE', `%${tag}%`)
      .count(),
  ])

  return { posts, count, totalPages: Math.ceil(count / postsPerPage) }
}, {
  watch: [page],
})

const posts = computed(() => paginatedData.value?.posts || [])
const postsCount = computed(() => paginatedData.value?.count || 0)
const totalPages = computed(() => paginatedData.value?.totalPages || 0)

async function goToPage(newPage: number) {
  page.value = newPage
  await router.push({ query: { page: newPage === 1 ? undefined : newPage } })
}

const tagTitle = computed(() => tags[tag] ?? 'Viagem')

useSeoMeta({
  title: () => `${tagTitle.value}: dicas e roteiros de viagem`,
  description: () => `Confira artigos de ${tagTitle.value.toLocaleLowerCase()} com dicas de viagem, destinos e planejamento no blog da Roteirize.`,
  ogType: 'website',
})
</script>

<template>
  <div>
    <div class="bg-secondary">
      <NavHeader />
      <TagHero :tag :count="postsCount" />
    </div>

    <div class="mx-auto max-w-7xl py-20">
      <TagCloud v-if="totalPages === 0" />

      <div class="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:px-8">
        <div v-for="post in posts" :key="post.stem">
          <PostCard
            :to="`/${post.stem}`"
            :title="post.title"
            :description="post.description"
            :thumbnail="post.thumbnail"
            :tags="post.tags"
          />
        </div>
      </div>

      <Pagination
        :current-page="page"
        :total-pages="totalPages"
        @page-change="goToPage"
      />
    </div>

    <Footer />
  </div>
</template>
