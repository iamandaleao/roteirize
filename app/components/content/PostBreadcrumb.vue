<script setup lang="ts">
const route = useRoute()
const pathSegments = route.path.split('/').filter(Boolean)

const pages = computed(() => {
  return pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join('/')}`
    const name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    return {
      name,
      href,
      current: index === pathSegments.length - 1,
    }
  })
})
</script>

<template>
  <div class="w-full max-w-xs md:max-w-none">
    <nav class="relative" aria-label="Breadcrumb">
      <div class="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ol role="list" class="flex items-center space-x-3 pr-3">
          <li v-for="(page, idx) in pages" :key="page.name">
            <div class="flex items-center">
              <Icon v-if="idx > 0" name="ph:caret-right" class="shrink-0 text-white" aria-hidden="true" />
              <NuxtLink :to="page.href" class="whitespace-nowrap pl-3 text-sm font-medium text-slate-300 hover:text-white" :aria-current="page.current ? 'page' : undefined">
                {{ page.name }}
              </NuxtLink>
            </div>
          </li>
        </ol>
      </div>
    </nav>
  </div>
</template>
