<script setup lang="ts">
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { useElementVisibility } from '@vueuse/core'
import { BentoGrid, BentoGridCard } from '~/components/ui/bento-grid'

const sectionRef = ref(null)
const isVisible = useElementVisibility(sectionRef)
const hasAnimated = ref(false)

type ContinentType = 'europe' | 'southamerica' | 'northamerica' | 'africa'

const tabs = [
  {
    value: 'europe',
    label: 'Europa',
  },
  {
    value: 'northamerica',
    label: 'América do Norte',
  },
  /*
    {
    value: 'southamerica',
    label: 'América do Sul',
  },
  {
    value: 'africa',
    label: 'África',
  },
  */

]

const posts = {
  europe: [
    {
      name: 'Paris: Como Chegar',
      description: 'Chegando com praticidade e estilo!',
      href: '/blog/europa/franca/paris/como-chegar',
      image: '/assets/images/paris/como-chegar.jpg',
      cta: 'Ler mais',
      class: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
    },
    {
      name: 'Paris: Quando ir',
      description: 'A melhor época para visitar a Cidade Luz',
      href: '/blog/europa/franca/paris/quando-ir',
      image: '/assets/images/paris/quando-ir.jpg',
      cta: 'Ler mais',
      class: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
    },
    {
      name: 'Paris: Gastronomia',
      description: 'Um Banquete para os Sentidos',
      href: '/blog/europa/franca/paris/gastronomia',
      image: '/assets/images/paris/gastronomia.jpg',
      cta: 'Ler mais',
      class: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
    },
    {
      name: 'Paris: Compras',
      description: 'Aproveitando sem Gastar Muito',
      href: '/blog/europa/franca/paris/compras',
      image: '/assets/images/paris/compras.jpg',
      cta: 'Ler mais',
      class: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
    },
    {
      name: 'Paris: Onde Ficar',
      description: 'Principais Bairros para se Hospedar',
      href: '/blog/europa/franca/paris/onde-ficar',
      image: '/assets/images/paris/hospedagem.jpg',
      cta: 'Ler mais',
      class: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
    },
  ],
  southamerica: [
    {
      name: 'Belo Horizonte',
      description: 'A Cidade dos Sonhos e Descobertas',
      href: '/blog/europa/franca/paris',
      image: '/assets/images/paris/paris-home.jpg',
      cta: 'Ler mais',
      class: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
    },
    {
      name: 'Formiga',
      description: 'A Cidade dos Sonhos e Descobertas',
      href: '/blog/europa/franca/paris',
      image: '/assets/images/paris/paris-home.jpg',
      cta: 'Ler mais',
      class: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
    },
    {
      name: 'Ouro Preto',
      description: 'A Cidade dos Sonhos e Descobertas',
      href: '/blog/europa/franca/paris',
      image: '/assets/images/paris/paris-home.jpg',
      cta: 'Ler mais',
      class: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
    },
    {
      name: 'São Tomé das Letras',
      description: 'A Cidade dos Sonhos e Descobertas',
      href: '/blog/europa/franca/paris',
      image: '/assets/images/paris/paris-home.jpg',
      cta: 'Ler mais',
      class: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
    },
    {
      name: 'Capitólio',
      description: 'A Cidade dos Sonhos e Descobertas',
      href: '/blog/europa/franca/paris',
      image: '/assets/images/paris/paris-home.jpg',
      cta: 'Ler mais',
      class: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
    },
  ],
  northamerica: [
    {
      name: 'Paris',
      description: 'A Cidade dos Sonhos e Descobertas',
      href: '/blog/europa/franca/paris',
      image: '/assets/images/paris/paris-home.jpg',
      cta: 'Ler mais',
      class: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
    },
    {
      name: 'Paris',
      description: 'A Cidade dos Sonhos e Descobertas',
      href: '/blog/europa/franca/paris',
      image: '/assets/images/paris/paris-home.jpg',
      cta: 'Ler mais',
      class: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
    },
    {
      name: 'Paris',
      description: 'A Cidade dos Sonhos e Descobertas',
      href: '/blog/europa/franca/paris',
      image: '/assets/images/paris/paris-home.jpg',
      cta: 'Ler mais',
      class: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
    },
    {
      name: 'Paris',
      description: 'A Cidade dos Sonhos e Descobertas',
      href: '/blog/europa/franca/paris',
      image: '/assets/images/paris/paris-home.jpg',
      cta: 'Ler mais',
      class: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
    },
    {
      name: 'Paris',
      description: 'A Cidade dos Sonhos e Descobertas',
      href: '/blog/europa/franca/paris',
      image: '/assets/images/paris/paris-home.jpg',
      cta: 'Ler mais',
      class: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
    },
  ],
  africa: [
    {
      name: 'Paris',
      description: 'A Cidade dos Sonhos e Descobertas',
      href: '/blog/europa/franca/paris',
      image: '/assets/images/paris/paris-home.jpg',
      cta: 'Ler mais',
      class: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
    },
    {
      name: 'Paris',
      description: 'A Cidade dos Sonhos e Descobertas',
      href: '/blog/europa/franca/paris',
      image: '/assets/images/paris/paris-home.jpg',
      cta: 'Ler mais',
      class: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
    },
    {
      name: 'Paris',
      description: 'A Cidade dos Sonhos e Descobertas',
      href: '/blog/europa/franca/paris',
      image: '/assets/images/paris/paris-home.jpg',
      cta: 'Ler mais',
      class: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
    },
    {
      name: 'Paris',
      description: 'A Cidade dos Sonhos e Descobertas',
      href: '/blog/europa/franca/paris',
      image: '/assets/images/paris/paris-home.jpg',
      cta: 'Ler mais',
      class: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
    },
    {
      name: 'Paris',
      description: 'A Cidade dos Sonhos e Descobertas',
      href: '/blog/europa/franca/paris',
      image: '/assets/images/paris/paris-home.jpg',
      cta: 'Ler mais',
      class: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
    },
  ],
}

watch(isVisible, (newValue) => {
  if (newValue && !hasAnimated.value) {
    hasAnimated.value = true
  }
})
</script>

<template>
  <div
    ref="sectionRef"
    class="mx-auto max-w-7xl space-y-6 px-4 transition-all duration-1000 md:px-6 lg:px-8"
    :class="hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
  >
    <h2 class="text-center text-2xl tracking-tight md:text-4xl">
      Roteiros mais populares
    </h2>

    <Tabs default-value="europe">
      <TabsList class="grid w-full grid-cols-1 gap-2 bg-accent md:grid-cols-2">
        <TabsTrigger
          v-for="tab in tabs"
          :key="`trigger-${tab.value}`"
          class="h-10 bg-secondary text-white data-[state=active]:bg-primary data-[state=active]:text-white"
          :value="tab.value"
        >
          {{ tab.label }}
        </TabsTrigger>
      </TabsList>
      <TabsContent v-for="tab in tabs" :key="`trigger-${tab.value}`" :value="tab.value">
        <BentoGrid class="grid w-full auto-rows-[22rem] grid-cols-3 gap-4 lg:grid-rows-3">
          <BentoGridCard
            v-for="(feature, index) in posts[tab.value as ContinentType]"
            :key="index"
            v-bind="feature"
            :class="feature.class"
          >
            <template v-if="feature.image" #background>
              <div
                class="absolute right-0 top-0 size-full bg-cover bg-center opacity-40 transition ease-in-out group-hover:opacity-20"
                :style="`background-image: url('${feature.image}')`"
              />
            </template>
          </BentoGridCard>
        </BentoGrid>
      </TabsContent>
    </Tabs>
  </div>
</template>
