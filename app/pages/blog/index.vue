<script setup lang="ts">
const page = ref(1)
const postsPerPage = 6
const { data: paginatedData } = await useAsyncData('blog', async () => {
  const [posts, count] = await Promise.all([
    queryCollection('blog')
      .order('date', 'DESC')
      .skip((page.value - 1) * postsPerPage)
      .limit(postsPerPage)
      .all(),
    queryCollection('blog').count(),
  ])

  return { posts, count, totalPages: Math.ceil(count / postsPerPage) }
})

const posts = computed(() => paginatedData.value?.posts || [])
const totalPages = computed(() => paginatedData.value?.totalPages || 0)

function goToPage(newPage: number) {
  page.value = newPage
  refreshNuxtData('blog')
}

useSeoMeta({
  title: 'Blog',
  description: 'Eu cuido dos detalhes, você aproveita a jornada.',
})
</script>

<template>
  <div>
    <div class="bg-secondary">
      <NavHeader />
      <BlogHero />
    </div>

    <div class="mx-auto max-w-7xl py-20">
      <div class="grid grid-cols-1 gap-4 px-4 lg:grid-cols-2 lg:px-8">
        <div v-for="post in posts" :key="post.stem">
          <PostCard
            :to="post.stem"
            :title="post.title"
            :description="post.description"
            :thumbnail="post.thumbnail"
          />
        </div>
      </div>

      <!-- Pagination Controls -->
      <div v-if="totalPages > 1" class="mt-10 flex items-center justify-center gap-2">
        <button
          :disabled="page === 1"
          class="rounded-md border border-border px-4 py-2 disabled:opacity-50"
          title="Página anterior"
          aria-label="Página anterior"
          @click="goToPage(page - 1)"
        >
          &laquo;
        </button>

        <div class="flex gap-1">
          <button
            v-for="pageNum in totalPages"
            :key="pageNum"
            :title="`Página ${pageNum}`"
            :aria-label="`Página ${pageNum}`"
            class="rounded-md px-4 py-2" :class="[
              page === pageNum ? 'bg-primary text-white' : 'border border-border',
            ]"
            @click="goToPage(pageNum)"
          >
            {{ pageNum }}
          </button>
        </div>

        <button
          :disabled="page === totalPages"
          class="rounded-md border border-border px-4 py-2 disabled:opacity-50"
          title="Próxima página"
          aria-label="Próxima página"
          @click="goToPage(page + 1)"
        >
          &raquo;
        </button>
      </div>
    </div>

    <Footer />
  </div>
</template>
