<script setup lang="ts">
import type { PostCardProps } from '~~/types'

const props = defineProps<{
  currentTags: string[]
}>()

const route = useRoute()

const { data: relatedPosts } = await useAsyncData(`related-posts-${route.path}`, () =>
  queryCollection('blog')
    .where('published', '=', true)
    .where('path', '<>', route.path)
    .where('tags', 'LIKE', props.currentTags.map(tag => `%${tag}%`).join(' OR '))
    .order('date', 'DESC')
    .limit(2)
    .all())

const posts = computed(() => {
  return (relatedPosts.value || [])
    .map(post => ({
      to: post.path,
      title: post.title,
      description: post.description,
      thumbnail: post.thumbnail,
      tags: post.tags,
    } as PostCardProps))
    .slice(0, 2)
})
</script>

<template>
  <div v-if="posts.length > 0" class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
    <h4 class="mb-6 text-center text-2xl font-semibold">
      Conteúdos Relacionados
    </h4>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <PostCard
        v-for="post in posts"
        :key="post.to"
        v-bind="post"
      />
    </div>
  </div>
</template>
