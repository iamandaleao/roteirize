<script setup lang="ts">
import type { PostCardProps } from '~~/types'

const { data: lastPosts } = await useAsyncData('lastest-posts', () =>
  queryCollection('blog')
    .where('published', '=', true)
    .order('date', 'DESC')
    .limit(4)
    .all())

const posts = computed(() => {
  return (lastPosts.value || [])
    .map(post => ({
      to: post.path,
      title: post.title,
      description: post.description,
      thumbnail: post.thumbnail,
      tags: post.tags,
    } as PostCardProps))
})
</script>

<template>
  <div v-if="posts.length > 0" class="mx-auto max-w-7xl px-4 py-24 lg:px-8">
    <h2 class="mb-6 text-center text-2xl font-semibold">
      Últimas postagens
    </h2>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-4">
      <PostHoverCard
        v-for="post in posts"
        :key="post.to"
        v-bind="post"
      />
    </div>
  </div>
</template>
