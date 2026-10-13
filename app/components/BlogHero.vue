<template>
  <div class="relative isolate min-h-[300px] overflow-hidden bg-secondary pt-14">
    <NuxtImg
      src="/assets/images/hero/blog-hero-bg.webp"
      :srcset="useResponsiveImage('/assets/images/hero/blog-hero-bg.webp')"
      alt="Blog"
      width="1920"
      height="1080"
      sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
      class="absolute inset-0 -z-10 size-full object-cover object-center opacity-40"
      loading="eager"
      fetchpriority="high"
    />

    <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-8 2xl:py-20">
        <div class="text-center">
          <h1 class="text-balance text-4xl font-semibold tracking-tight text-white lg:text-5xl">
            Rumo ao destino
          </h1>
          <div class="mt-10">
            <ContentSearch />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
