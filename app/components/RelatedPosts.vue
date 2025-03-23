<script setup lang="ts">
import type { PostCardProps } from '~~/types'

const props = defineProps<{
  currentTags: string[]
}>()

const route = useRoute()

const { data: relatedPosts } = await useAsyncData(`related-posts-${props.currentTags.join('-')}`, () =>
  queryCollection('blog')
    .where('published', '=', true)
    .where('tags', 'LIKE', `%${props.currentTags.join('%')}%`)
    .order('date', 'DESC')
    .limit(3)
    .all())

const posts = computed(() => {
  return (relatedPosts.value || [])
    .filter(post => post.stem !== route.path)
    .map(post => ({
      to: post.stem,
      title: post.title,
      description: post.description,
      thumbnail: post.thumbnail,
      tags: post.tags,
    } as PostCardProps))
    .slice(0, 2)
})
</script>

<template>
  <div v-if="posts.length > 0" class="mx-auto max-w-7xl px-4 lg:px-8">
    <h2 class="mb-6 text-2xl font-semibold">
      Posts Relacionados
    </h2>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <PostCard
        v-for="post in posts"
        :key="post.to"
        v-bind="post"
      />
    </div>
  </div>
</template>
