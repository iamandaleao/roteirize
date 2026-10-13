<script setup lang="ts">
const { data: posts } = await useAsyncData('english-blog-posts', () => queryCollection('english')
  .where('published', '=', true)
  .where('path', 'LIKE', '/en/blog/%')
  .order('date', 'DESC')
  .all())

useSeoMeta({
  title: 'Travel Blog',
  description: 'Travel guides and practical tips from Roteirize.',
  ogTitle: 'Travel Blog | Roteirize',
  ogDescription: 'Travel guides and practical tips from Roteirize.',
  ogLocale: 'en_US',
})
useHead({
  link: [
    { rel: 'canonical', href: 'https://roteirize.com.br/en/blog' },
    { rel: 'alternate', hreflang: 'en', href: 'https://roteirize.com.br/en/blog' },
    { rel: 'alternate', hreflang: 'pt-BR', href: 'https://roteirize.com.br/blog' },
  ],
})
</script>

<template>
  <div>
    <NavHeader />
    <main class="mx-auto min-h-[60vh] max-w-7xl px-5 pb-20 pt-32">
      <h1 class="text-4xl font-semibold tracking-tight">
        Travel blog
      </h1>
      <p class="mt-4 max-w-2xl text-lg text-muted-foreground">
        Travel stories, destination guides, and practical information for planning a trip.
      </p>
      <div v-if="posts?.length" class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PostCard v-for="post in posts" :key="post.path" :to="post.path" :title="post.title" :description="post.description" :thumbnail="post.thumbnail || post.cover || ''" :tags="post.tags" />
      </div>
      <p v-else class="mt-12 rounded-xl border border-dashed p-8 text-muted-foreground">
        English articles are being prepared. In the meantime, you can browse the Portuguese travel blog.
      </p>
      <NuxtLink to="/blog" lang="pt-BR" class="mt-6 inline-block font-medium text-primary underline-offset-4 hover:underline">
        Browse the blog in Portuguese
      </NuxtLink>
    </main>
    <Footer />
  </div>
</template>
