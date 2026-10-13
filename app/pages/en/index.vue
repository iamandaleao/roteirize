<script setup lang="ts">
useSeoMeta({
  title: 'Personalized Travel Planning and Destination Guides',
  description: 'Explore travel guides, practical tips, and personalized itineraries with Roteirize.',
  ogTitle: 'Travel More, Plan Less | Roteirize',
  ogDescription: 'Explore travel guides, practical tips, and personalized itineraries with Roteirize.',
  ogLocale: 'en_US',
})
useHead({
  link: [
    { rel: 'canonical', href: 'https://roteirize.com.br/en' },
    { rel: 'alternate', hreflang: 'en', href: 'https://roteirize.com.br/en' },
    { rel: 'alternate', hreflang: 'pt-BR', href: 'https://roteirize.com.br/' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://roteirize.com.br/' },
  ],
})
</script>

<template>
  <div>
    <NavHeader />
    <main>
      <section class="relative isolate flex min-h-[560px] items-center overflow-hidden bg-slate-900 px-5 pb-16 pt-28 text-white md:min-h-[660px]">
        <NuxtImg src="/assets/images/hero/roteiros-hero-bg.webp" alt="" width="1920" height="1080" loading="eager" fetchpriority="high" class="absolute inset-0 -z-20 size-full object-cover opacity-40" />
        <div class="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/90 via-slate-900/55 to-slate-900/15" />
        <div class="mx-auto w-full max-w-7xl">
          <div class="max-w-2xl space-y-6">
            <p class="text-sm font-semibold uppercase tracking-[.22em] text-emerald-200">
              Roteirize Travel Planning
            </p>
            <h1 class="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              Travel More, Plan Less.
            </h1>
            <p class="max-w-xl text-lg leading-8 text-slate-100 md:text-xl">
              I take care of the details so you can enjoy the journey. Find destination guides, useful travel tips, and itineraries made around your plans.
            </p>
            <div class="flex flex-wrap gap-3 pt-2">
              <NuxtLink to="/en/itineraries" class="rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600">
                Explore itineraries
              </NuxtLink>
              <NuxtLink to="/en/destinations" class="rounded-full border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Browse destinations
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
      <section class="mx-auto grid max-w-7xl gap-6 px-5 py-16 md:grid-cols-3 md:py-24">
        <NuxtLink to="/en/blog" class="rounded-2xl border p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h2 class="text-xl font-semibold">
            Travel tips and stories
          </h2>
          <p class="mt-3 leading-7 text-muted-foreground">
            Read practical information to help you prepare for a trip.
          </p>
          <span class="mt-5 inline-block font-semibold text-primary">Visit the blog →</span>
        </NuxtLink>
        <NuxtLink to="/en/destinations" class="rounded-2xl border p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h2 class="text-xl font-semibold">
            Destination guides
          </h2>
          <p class="mt-3 leading-7 text-muted-foreground">
            Get to know places and explore the guides available on the site.
          </p>
          <span class="mt-5 inline-block font-semibold text-primary">Explore destinations →</span>
        </NuxtLink>
        <NuxtLink to="/en/itineraries" class="rounded-2xl border p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h2 class="text-xl font-semibold">
            Personalized itineraries
          </h2>
          <p class="mt-3 leading-7 text-muted-foreground">
            Tell us about your plans and get in touch to discuss your trip.
          </p>
          <span class="mt-5 inline-block font-semibold text-primary">See how it works →</span>
        </NuxtLink>
      </section>
    </main>
    <Footer />
  </div>
</template>
