import { ref } from 'vue'

const page = ref<any>(null)

export function useBlogPage() {
  return {
    page,
    setPage: (newPage: any) => {
      page.value = newPage
    },
  }
}
