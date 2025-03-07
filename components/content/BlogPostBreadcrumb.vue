<script setup lang="ts">
const pages = [
  { name: 'Europa', href: '#', current: false },
  { name: 'França', href: '#', current: false },
]
</script>

<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-4">
      <li v-for="(page, idx) in pages" :key="page.name">
        <div class="flex items-center">
          <Icon v-if="idx > 0" name="ph:caret-right" class="shrink-0 text-white" aria-hidden="true" />
          <a :href="page.href" class="ml-4 text-sm font-medium text-slate-300 hover:text-white" :aria-current="page.current ? 'page' : undefined">{{ page.name }}</a>
        </div>
      </li>
    </ol>
  </nav>
</template>
