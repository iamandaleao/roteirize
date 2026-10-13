const englishByPortuguesePath: Record<string, string> = {
  '/': '/en',
  '/blog': '/en/blog',
  '/sobre-mim': '/en/about',
  '/destinos': '/en/destinations',
  '/roteiros': '/en/itineraries',
  '/inspiracoes': '/en/inspirations',
  '/parceiros/omeuchip': '/en/partners/international-sim',
  '/blog/dicas/labor-day-desconto-chip-internacional': '/en/blog/tips/labor-day-international-sim-discount',
}

const portugueseByEnglishPath = Object.fromEntries(
  Object.entries(englishByPortuguesePath).map(([portuguese, english]) => [english, portuguese]),
)

export function hasEnglishTranslation(path: string) {
  return path in englishByPortuguesePath
}

export function useLocale() {
  const route = useRoute()
  const requestPath = import.meta.server ? useRequestURL().pathname : undefined
  const isEnglish = computed(() => {
    const path = requestPath || route.path
    return path === '/en' || path.startsWith('/en/')
  })

  function pathForLocale(path: string, target: 'pt' | 'en') {
    if (target === 'en') {
      if (path in englishByPortuguesePath) {
        return englishByPortuguesePath[path]!
      }
      return '/en'
    }

    if (path in portugueseByEnglishPath) {
      return portugueseByEnglishPath[path]!
    }

    if (path.startsWith('/en/blog/')) {
      return path.slice(3) || '/'
    }

    return '/'
  }

  return {
    isEnglish,
    language: computed(() => isEnglish.value ? 'en' as const : 'pt' as const),
    pathForLocale,
  }
}
