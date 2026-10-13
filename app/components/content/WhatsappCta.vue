<script setup lang="ts">
const route = useRoute()
const { isEnglish } = useLocale()
const isHidden = computed(() => route.path === '/roteiros')
</script>

<template>
  <div class="px-4" :class="{ hidden: isHidden }">
    <div class="prose relative mx-auto max-w-prose border-t pt-14 underline-offset-4 dark:prose-invert prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
      <h2>
        {{ isEnglish ? '✨ Looking for a trip planned just for you?' : '✨ Quer algo feito só pra você?' }}
      </h2>
      <p>{{ isEnglish ? 'If none of the ready-made itineraries fit your plans, I can create a personalized trip plan with activities, restaurants, tips, and details tailored to your journey.' : 'Se nenhum dos roteiros prontos for exatamente o que você precisa, eu posso montar um roteiro personalizado, do jeitinho que você quiser com passeios, restaurantes, dicas e cada detalhe pensado pra sua viagem ser incrível!' }}</p>
      <p>
        {{ isEnglish ? 'Message me on' : 'Me chama no' }} <a href="https://wa.me/5547991611628" target="_blank" rel="noopener noreferrer">WhatsApp</a> {{ isEnglish ? 'and let’s plan it together!' : 'e vamos planejar juntos!' }}
      </p>
    </div>
  </div>
</template>
