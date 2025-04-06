<script setup lang="ts">
import LandingLatestPosts from '~/components/LandingLatestPosts.vue'

useSeoMeta({
  title: 'Viaje Mais, Planeje Menos',
  description: 'Eu cuido dos detalhes, você aproveita a jornada.',
})
</script>

<template>
  <div>
    <NavHeader />
    <LandingHero />
    <LandingPresentation />
    <LandingLatestPosts />
    <LandingSpecialities />
    <LandingServices />
    <Footer />
  </div>
</template>
