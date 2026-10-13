<script setup lang="ts">
const route = useRoute()
const { pathForLocale } = useLocale()
const { data: page } = await useAsyncData(`en-page-${route.path}`, () => queryCollection('english').path(route.path).first(), { watch: [route] })
const portuguesePath = pathForLocale(route.path, 'pt')
const canonical = `https://roteirize.com.br${route.path}`

definePageMeta({ layout: 'page' })
useHead(() => ({
  htmlAttrs: { lang: 'en' },
  link: page.value
    ? [
        { rel: 'canonical', href: canonical },
        { rel: 'alternate', hreflang: 'en', href: canonical },
        { rel: 'alternate', hreflang: 'pt-BR', href: `https://roteirize.com.br${portuguesePath}` },
      ]
    : [{ rel: 'canonical', href: canonical }],
}))

if (page.value) {
  useSeoMeta({
    ...page.value.seo,
    ogLocale: 'en_US',
    ogImage: page.value.cover ? `https://roteirize.com.br/assets/images/${page.value.cover}` : undefined,
  })
}
else {
  useSeoMeta({
    title: 'Page not yet available in English',
    description: 'This page has not been translated into English yet.',
    robots: 'noindex, follow',
  })
}
</script>

<template>
  <div>
    <ContentRenderer v-if="page" :value="page" />
    <main v-else class="mx-auto min-h-[60vh] max-w-3xl px-5 pb-20 pt-36">
      <h1 class="text-3xl font-semibold tracking-tight">
        This page is not available in English yet
      </h1>
      <p class="mt-5 text-lg leading-8 text-muted-foreground">
        We are translating this page. You can read the Portuguese version or return to the English homepage.
      </p>
      <div class="mt-7 flex flex-wrap gap-4">
        <NuxtLink :to="portuguesePath" lang="pt-BR" class="rounded-full bg-primary px-5 py-3 font-medium text-primary-foreground">
          Read in Portuguese
        </NuxtLink>
        <NuxtLink to="/en" class="rounded-full border px-5 py-3 font-medium">
          English homepage
        </NuxtLink>
      </div>
    </main>
  </div>
</template>
