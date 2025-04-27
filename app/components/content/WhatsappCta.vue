<script setup lang="ts">
const route = useRoute()
const isHidden = computed(() => route.path === '/roteiros')
</script>

<template>
  <div class="px-4" :class="{ hidden: isHidden }">
    <div class="prose relative mx-auto max-w-prose border-t pt-14 underline-offset-4 dark:prose-invert prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
      <h2>
        ✨ Quer algo feito só pra você?
      </h2>
      <p>Se nenhum dos roteiros prontos for exatamente o que você precisa, eu posso montar um roteiro personalizado, do jeitinho que você quiser com passeios, restaurantes, dicas e cada detalhe pensado pra sua viagem ser incrível! </p>
      <p>
        Me chama no <a href="https://api.whatsapp.com/send?phone=5547933814178" target="_blank">WhatsApp</a> e vamos planejar juntos!
      </p>
    </div>
  </div>
</template>
