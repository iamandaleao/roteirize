<script setup lang="ts">
import type { PostCardProps } from '~~/types'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const { data: lastPosts } = await useAsyncData('lastest-posts', () =>
  queryCollection('blog')
    .where('published', '=', true)
    .order('date', 'DESC')
    .limit(6)
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
    <Carousel class="relative w-full">
      <CarouselContent>
        <CarouselItem v-for="post in posts" :key="post.to" class="basis-2/3 md:basis-2/5 lg:basis-1/4">
          <PostHoverCard v-bind="post" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious class="hidden lg:flex" />
      <CarouselNext class="hidden lg:flex" />
    </Carousel>
  </div>
</template>
