<script setup lang="ts">
import Pagination from '~/components/Pagination.vue'

const route = useRoute()
const router = useRouter()
const page = ref(Number.parseInt(route.query.page as string) || 1)
const postsPerPage = 6
const { data: paginatedData } = await useAsyncData('blog', async () => {
  const [posts, count] = await Promise.all([
    queryCollection('blog')
      .where('published', '=', true)
      .order('date', 'DESC')
      .skip((page.value - 1) * postsPerPage)
      .limit(postsPerPage)
      .all(),
    queryCollection('blog').count(),
  ])

  return { posts, count, totalPages: Math.ceil(count / postsPerPage) }
}, {
  watch: [page],
})

const posts = computed(() => paginatedData.value?.posts || [])
const totalPages = computed(() => paginatedData.value?.totalPages || 0)

async function goToPage(newPage: number) {
  page.value = newPage
  await router.push({ query: { page: newPage === 1 ? undefined : newPage } })
}

useSeoMeta({
  title: 'Blog',
  description: 'Eu cuido dos detalhes, você aproveita a jornada.',
})
</script>

<template>
  <div class="bg-background">
    <div class="bg-secondary">
      <NavHeader />
      <BlogHero />
    </div>

    <div class="mx-auto max-w-7xl py-20">
      <div class="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:px-8">
        <div v-for="post in posts" :key="post.stem">
          <PostCard
            :to="post.stem"
            :title="post.title"
            :description="post.description"
            :thumbnail="post.thumbnail"
            :date="post.date"
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
