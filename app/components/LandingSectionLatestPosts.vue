<script setup lang="ts">
import type { PostCardProps } from '~~/types'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { useElementVisibility } from '@vueuse/core'

const sectionRef = ref(null)
const isVisible = useElementVisibility(sectionRef)

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
  <div
    v-if="posts.length > 0"
    ref="sectionRef"
    class="mx-auto max-w-7xl space-y-6 px-4 transition-all duration-1000 md:px-6 lg:px-8"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
  >
    <h2 class="text-center text-2xl tracking-tight md:text-4xl">
      Últimas postagens
    </h2>
    <Carousel class="relative w-full">
      <CarouselContent>
        <CarouselItem v-for="post in posts" :key="post.to" class="basis-4/5 md:basis-2/5 lg:basis-1/4">
          <PostHoverCard v-bind="post" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious class="hidden xl:flex" />
      <CarouselNext class="hidden xl:flex" />
    </Carousel>
  </div>
</template>
