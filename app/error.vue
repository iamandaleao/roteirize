<script setup lang="ts">
defineOgImageComponent('Screenshot')
</script>

<template>
  <main class="relative inset-0 isolate flex min-h-screen w-full items-center justify-center">
    <img
      src="/assets/images/nao-encontrada.jpg"
      alt="" class="absolute inset-0 -z-10 size-full object-cover object-center"
      fetchpriority="high"
      decoding="async"
    >
    <div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
      <p class="text-base/8 font-semibold text-white">
        404
      </p>
      <h1 class="mt-4 text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
        Página não encontrada
      </h1>
      <p class="mt-6 text-pretty text-lg font-medium text-white/70 sm:text-xl/8">
        Desculpe, não encontramos o que procurava.
      </p>
      <div class="mt-10 flex justify-center">
        <NuxtLink to="/" class="text-sm/7 font-semibold text-white">
          <span aria-hidden="true">&larr;</span> Voltar ao início
        </NuxtLink>
      </div>
    </div>
  </main>
</template>
