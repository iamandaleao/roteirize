<script setup lang="ts">
useSeoMeta({
  title: 'Viaje Mais, Planeje Menos',
  description: 'Eu cuido dos detalhes, você aproveita a jornada.',
})
</script>

<template>
  <div>
    <NavHeader />
    <div class="space-y-16 lg:space-y-24">
      <LandingHero />
      <LandingSection1 />
      <LandingSectionAdvantages />
      <LandingSectionLatestPosts />
      <LandingSectionSpecialities />
      <LandingSectionMostPopularItineraries />
      <LandingSectionPartners />
    </div>
    <Footer />
  </div>
</template>
