<script setup lang="ts">
useSeoMeta({
  title: 'Viaje Mais, Planeje Menos',
  description: 'Eu cuido dos detalhes, você aproveita a jornada.',
})
useHead({
  link: [
    { rel: 'canonical', href: 'https://roteirize.com.br/' },
    { rel: 'alternate', hreflang: 'pt-BR', href: 'https://roteirize.com.br/' },
    { rel: 'alternate', hreflang: 'en', href: 'https://roteirize.com.br/en' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://roteirize.com.br/' },
  ],
})
</script>

<template>
  <div>
    <NavHeader />
    <div class="space-y-16 lg:space-y-24">
      <LandingHero />
      <LandingSectionStart />
      <LandingSectionAdvantages />
      <LandingSectionLatestPosts />
      <LandingSectionSpecialities />
      <LandingSectionPopularItineraries />
      <LandingSectionPartners />
    </div>
    <Footer />
  </div>
</template>
