<script setup lang="ts">
defineProps<{
  currentPage: number
  totalPages: number
}>()

const emit = defineEmits<{
  pageChange: [page: number]
}>()

function goToPage(page: number) {
  emit('pageChange', page)
}

function getVisiblePages(current: number, total: number): (number | string)[] {
  const pages: (number | string)[] = []

  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i)
  } else {
    pages.push(1)

    if (current > 4) pages.push('...')

    const start = Math.max(2, current - 1)
    const end = Math.min(total - 1, current + 1)

    for (let i = start; i <= end; i++) pages.push(i)

    if (current < total - 3) pages.push('...')

    pages.push(total)
  }

  return pages
}
</script>

<template>
  <div v-if="totalPages > 1" class="mt-10 flex items-center justify-center gap-2">
    <button
      :disabled="currentPage === 1"
      class="aspect-square rounded-md border border-border px-4 py-2 hover:bg-muted disabled:opacity-50"
      title="Página anterior"
      aria-label="Página anterior"
      @click="goToPage(currentPage - 1)"
    >
      &laquo;
    </button>

    <div class="flex gap-1">
      <button
        v-for="page in getVisiblePages(currentPage, totalPages)"
        :key="page + ''"
        v-if="page !== '...'"
        :title="`Página ${page}`"
        :aria-label="`Página ${page}`"
        class="aspect-square rounded-md border border-border px-4 py-2"
        :class="[
          currentPage === page ? 'bg-primary text-white' : ' hover:bg-muted',
        ]"
        @click="goToPage(page as number)"
      >
        {{ page }}
      </button>
      <span
        v-else
        class="aspect-square px-2 py-2 text-muted-foreground select-none"
      >
        ...
      </span>
    </div>

    <button
      :disabled="currentPage === totalPages"
      class="aspect-square rounded-md border border-border px-4 py-2 hover:bg-muted disabled:opacity-50"
      title="Próxima página"
      aria-label="Próxima página"
      @click="goToPage(currentPage + 1)"
    >
      &raquo;
    </button>
  </div>
</template>
