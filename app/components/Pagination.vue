<script setup lang="ts">
defineProps<{
  currentPage: number
  totalPages: number
}>()

const emit = defineEmits<{
  pageChange: [page: number]
}>()

function goToPage(page: number) {
  emit("pageChange", page)
}

function getVisiblePages(current: number, total: number): (number | string)[] {
  const pages: (number | string)[] = []

  if (total <= 4) {
    for (let i = 1; i <= total; i++) pages.push(i)
  } else {
    if (current <= 2) {
      pages.push(1, 2, 3, "...", total)
    } else if (current >= total - 1) {
      pages.push(1, "...", total - 2, total - 1, total)
    } else {
      pages.push(1, "...", current, "...", total)
    }
  }

  // Remove duplicados e limita a 4 páginas numéricas (reticências não contam)
  const filtered = []
  let count = 0
  for (const p of pages) {
    if (p === "...") {
      filtered.push(p)
    } else if (count < 4) {
      filtered.push(p)
      count++
    }
  }
  return filtered
}
</script>

<template>
  <div
    v-if="totalPages > 1"
    class="mt-10 flex items-center justify-center gap-2"
  >
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
      <template
        v-for="page in getVisiblePages(currentPage, totalPages)"
        :key="page + ''"
      >
        <button
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
      </template>
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
