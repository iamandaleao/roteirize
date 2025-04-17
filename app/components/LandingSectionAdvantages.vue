<script setup>
import { useIntervalFn } from '@vueuse/core'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card/index'

const activeHoverCard = ref(1)

const { pause, resume } = useIntervalFn(simulateHover, 4000)

function simulateHover() {
  activeHoverCard.value = (activeHoverCard.value % 3) + 1
}

function mouseEnterCard() {
  activeHoverCard.value = 0
  pause()
}

onMounted(() => resume)
</script>

<template>
  <section class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
    <div class="prose mx-auto dark:prose-invert">
      <h2 class="text-center text-2xl tracking-tight md:text-4xl">
        Vantagens de planejar sua viagem com a Roteirize <span class="animate-pulse">💚</span>
      </h2>
    </div>

    <div class="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
      <!-- Card 1 -->
      <Card
        class="transition-all duration-500" :class="[
          activeHoverCard === 1 ? 'scale-105' : 'hover:scale-105',
        ]"
        @mouseenter="mouseEnterCard"
        @mouseleave="resume"
      >
        <CardHeader>
          <CardTitle class="flex items-end gap-4">
            <div class="animate-bounce text-4xl">
              💳
            </div>
            <h4 class="text-xl font-semibold">
              Roteiro que realmente cabe no seu bolso
            </h4>
          </CardTitle>
        </CardHeader>
        <CardContent class="text-sm">
          Com opções acessíveis e flexíveis, você escolhe como prefere pagar e recebe um roteiro pensado pra te trazer o melhor custo-benefício sem abrir mão das experiências incríveis.
        </CardContent>
      </Card>

      <Card
        class="transition-all duration-500" :class="[
          activeHoverCard === 2 ? 'scale-105' : 'hover:scale-105',
        ]"
        @mouseenter="mouseEnterCard"
        @mouseleave="resume"
      >
        <CardHeader>
          <CardTitle class="flex items-end gap-4">
            <div class="animate-bounce text-4xl">
              💬
            </div>
            <h4 class="text-xl font-semibold">
              Atendimento de verdade, com carinho
            </h4>
          </CardTitle>
        </CardHeader>
        <CardContent class="text-sm">
          Nada de respostas automáticas! Aqui você fala comigo, direto pelo WhatsApp, com atenção total ao que você precisa — antes, durante e até depois da viagem.
        </CardContent>
      </Card>

      <Card
        class="transition-all duration-500" :class="[
          activeHoverCard === 3 ? 'scale-105' : 'hover:scale-105',
        ]"
        @mouseenter="mouseEnterCard"
        @mouseleave="resume"
      >
        <CardHeader>
          <CardTitle class="flex items-end gap-4">
            <div class="animate-bounce text-4xl">
              🎒
            </div>
            <h4 class="text-xl font-semibold">
              Experiências com alma e propósito
            </h4>
          </CardTitle>
        </CardHeader>
        <CardContent class="text-sm">
          Mais do que te mostrar onde ir, eu te ajudo a viver a viagem do seu jeitinho. Cada dica, cada sugestão tem um motivo pra estar ali: tornar seu roteiro único, do início ao fim.
        </CardContent>
      </Card>
    </div>
  </section>
</template>
