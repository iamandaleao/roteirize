<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'
import { AnimatedLogoCloud } from '~/components/ui/logo-cloud'

const sectionRef = ref(null)
const sectionIsVisible = useElementVisibility(sectionRef)

const logos = [
  {
    name: 'Latam',
    path: '/assets/images/latam.svg',
  },
  {
    name: 'Rent Cars',
    path: '/assets/images/rentcars.svg',
  },
  {
    name: 'Unidas',
    path: '/assets/images/unidas.svg',
  },
  {
    name: 'Seguros Promo',
    path: '/assets/images/segurospromo.svg',
  },
  {
    name: 'Vai de Promo',
    path: '/assets/images/vaidepromo.svg',
  },
  {
    name: 'Tiqets',
    path: '/assets/images/tiqets.svg',
  },
  {
    name: 'Real Seguros',
    path: '/assets/images/realseguros.svg',
  },
  {
    name: 'Get Your Guide',
    path: '/assets/images/getyourguide.svg',
  },
  {
    name: 'O meu chip',
    path: '/assets/images/omeuchip.svg',
  },
]
</script>

<template>
  <section
    ref="sectionRef"
    class="relative w-full transition-all duration-1000"
    :class="sectionIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
  >
    <div class="prose mx-auto max-w-prose text-center dark:prose-invert">
      <h2 class="text-2xl tracking-tight md:text-4xl">
        Viaje com segurança!
      </h2>

      <p>
        Na Roteirize, eu trabalho com empresas confiáveis e reconhecidas no mercado de turismo, pra garantir que sua experiência seja ainda melhor 💚
      </p>
    </div>

    <AnimatedLogoCloud :logos class="dark:bg-secondary" />
  </section>
</template>
