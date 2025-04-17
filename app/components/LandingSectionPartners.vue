<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const target = useTemplateRef<HTMLDivElement>('target')
const targetIsVisible = useElementVisibility(target, {
  rootMargin: '0px 0px 1000px 0px',
})
</script>

<template>
  <section class="relative w-full">
    <div class="prose mx-auto max-w-prose text-center dark:prose-invert">
      <h2 class="text-2xl tracking-tight md:text-4xl">
        Viaje com segurança!
      </h2>

      <p>
        Na Roteirize, eu trabalho com empresas confiáveis e reconhecidas no mercado de turismo, pra garantir que sua experiência seja ainda melhor 💚
      </p>
    </div>
    <div class="mx-auto mt-12 grid max-w-3xl grid-cols-2 bg-accent px-4 dark:bg-slate-100 lg:grid-cols-5 lg:rounded-md">
      <img class="mx-auto max-w-36 self-center object-contain" src="/assets/images/booking.png" alt="Booking.com">
      <img class="mx-auto max-w-36 self-center object-contain" src="/assets/images/getyourguide.png" alt="Get Your Guide">
      <img class="mx-auto max-w-36 self-center object-contain" src="/assets/images/latam.svg" alt="Latam Airlines">
      <img class="mx-auto max-w-36 self-center object-contain" src="/assets/images/omeuchip.png" alt="O Meu Chip">
      <img class="mx-auto max-w-36 self-center object-contain" src="/assets/images/realseguro.png" alt="Real Seguro">
      <img class="mx-auto max-w-36 self-center object-contain" src="/assets/images/rentcars.png" alt="Rent Cars">
      <img class="mx-auto max-w-36 self-center object-contain" src="/assets/images/seguropromo.png" alt="Seguro Promo">
      <img class="mx-auto max-w-36 self-center object-contain" src="/assets/images/tiqets-logo.png" alt="Tiqets">
      <img class="mx-auto max-w-36 self-center object-contain" src="/assets/images/unidas.png" alt="Unidas">
      <img class="mx-auto max-w-36 self-center object-contain" src="/assets/images/vaidepromo.png" alt="Vai de Promo">
    </div>
    <div
      class="relative flex size-full flex-col items-center justify-center overflow-hidden px-40 pb-40 pt-8 md:pb-60"
    >
      <ClientOnly>
        <div ref="target">
          <LazyGlobe v-if="targetIsVisible" />
        </div>
      </ClientOnly>
    </div>
  </section>
</template>
