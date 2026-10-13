export default function useTagHeroImage(tag: string) {
  return computed(() => {
    return (
      {
        roteiros: 'roteiros-hero-bg.webp',
        destinos: 'destinos-hero-bg.webp',
        bagagem: 'capa-dicas-hero-bg.webp',
        direitos: 'capa-dicas-bg.webp',
        dicas: 'capa-dicas-hero-bg.webp',
        passaporte: 'capa-dicas-hero-bg.webp',
        historia: 'inspiracoes-hero-bg.webp',
        cruzeiros: 'inspiracoes-hero-bg.webp',
        natureza: 'inspiracoes-hero-bg.webp',
        jardins: 'inspiracoes-hero-bg.webp',
        praias: 'inspiracoes-hero-bg.webp',
        parques: 'inspiracoes-hero-bg.webp',
        romanticos: 'inspiracoes-hero-bg.webp',
        termais: 'inspiracoes-hero-bg.webp',
      }[tag ?? ''] ?? 'search-hero-bg.webp'
    )
  })
}
