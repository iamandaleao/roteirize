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
</script>

<template>
  <div v-if="totalPages > 1" class="mt-10 flex items-center justify-center gap-2">
    <button
      :disabled="currentPage === 1"
      class="aspect-square rounded-md border border-border px-4 py-2 disabled:opacity-50"
      title="Página anterior"
      aria-label="Página anterior"
      @click="goToPage(currentPage - 1)"
    >
      &laquo;
    </button>

    <div class="flex gap-1">
      <button
        v-for="pageNum in totalPages"
        :key="pageNum"
        :title="`Página ${pageNum}`"
        :aria-label="`Página ${pageNum}`"
        class="aspect-square rounded-md px-4 py-2"
        :class="[
          currentPage === pageNum ? 'bg-primary text-white' : 'border border-border',
        ]"
        @click="goToPage(pageNum)"
      >
        {{ pageNum }}
      </button>
    </div>

    <button
      :disabled="currentPage === totalPages"
      class="aspect-square rounded-md border border-border px-4 py-2 disabled:opacity-50"
      title="Próxima página"
      aria-label="Próxima página"
      @click="goToPage(currentPage + 1)"
    >
      &raquo;
    </button>
  </div>
</template>
