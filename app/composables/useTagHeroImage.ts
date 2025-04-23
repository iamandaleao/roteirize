export default function useTagHeroImage(tag: string) {
  return computed(() => {
    return {
      roteiros: 'roteiros-hero-bg.jpg',
      destinos: 'destinos-hero-bg.jpg',
      bagagem: 'capa-dicas-bg.jpg',
      direitos: 'capa-dicas-bg.jpg',
      dicas: 'capa-dicas-bg.jpg',
      passaporte: 'capa-dicas-bg.jpg',
      historia: 'inspiracoes-hero-bg.jpg',
      cruzeiros: 'inspiracoes-hero-bg.jpg',
      natureza: 'inspiracoes-hero-bg.jpg',
      jardins: 'inspiracoes-hero-bg.jpg',
      praias: 'inspiracoes-hero-bg.jpg',
      parques: 'inspiracoes-hero-bg.jpg',
      romanticos: 'inspiracoes-hero-bg.jpg',
      termais: 'inspiracoes-hero-bg.jpg',
    }[tag ?? ''] ?? 'search-hero-bg.png'
  })
}
