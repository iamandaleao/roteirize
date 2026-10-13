<script setup lang="ts">
import { tags } from '~/composables/useTags'

const route = useRoute()
const { isEnglish } = useLocale()
const pathSegments = route.path.split('/').filter(Boolean)
const englishNames: Record<string, string> = {
  'en': 'Home',
  'blog': 'Blog',
  'tips': 'Travel tips',
  'destinations': 'Destinations',
  'north-america': 'North America',
  'south-america': 'South America',
  'itineraries': 'Itineraries',
}

const pages = computed(() => {
  return pathSegments.map((segment, index) => {
    const isTag = isEnglish.value
      ? index === 2 && segment in englishNames
      : index === 1 && segment in tags
    const href = `/${pathSegments.slice(0, index + 1).join('/')}`
    const name = isEnglish.value && englishNames[segment]
      ? englishNames[segment]
      : segment
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')

    return {
      name,
      href: isTag ? (isEnglish.value ? '/en/blog' : `/blog/tag/${segment}`) : href,
      current: index === pathSegments.length - 1,
    }
  })
})
</script>

<template>
  <div class="relative rounded-full bg-secondary/40 px-3 py-1 text-sm/6 text-slate-200 ring-1 ring-white/20">
    <div class="w-full max-w-xs md:max-w-none">
      <nav class="relative overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-3 pr-3">
          <li v-for="(page, idx) in pages" :key="page.name">
            <div class="flex items-center">
              <Icon v-if="idx > 0" name="ph:caret-right" class="shrink-0 text-white" aria-hidden="true" />
              <NuxtLink :to="page.href" class="whitespace-nowrap pl-3 text-sm font-medium text-slate-200 hover:text-white" :aria-current="page.current ? 'page' : undefined">
                {{ page.name }}
              </NuxtLink>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>
