<script setup lang="ts">
const props = withDefaults(defineProps<{ lightSurface?: boolean }>(), { lightSurface: false })
const route = useRoute()
const { isEnglish, pathForLocale } = useLocale()
</script>

<template>
  <nav :aria-label="isEnglish ? 'Language' : 'Idioma'" class="inline-flex items-center rounded-full border p-1 text-xs font-semibold backdrop-blur-sm" :class="props.lightSurface ? 'border-border bg-background' : 'border-white/35 bg-black/10'">
    <NuxtLink
      :to="pathForLocale(route.path, 'pt')"
      lang="pt-BR"
      :aria-current="!isEnglish ? 'page' : undefined"
      :aria-label="!isEnglish ? 'Português selecionado' : 'Mudar idioma para português'"
      class="min-h-8 min-w-10 rounded-full px-2.5 py-1.5 text-center transition-colors"
      :class="!isEnglish ? 'bg-white text-primary' : props.lightSurface ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/15'"
    >
      PT
    </NuxtLink>
    <NuxtLink
      :to="pathForLocale(route.path, 'en')"
      lang="en"
      :aria-current="isEnglish ? 'page' : undefined"
      :aria-label="isEnglish ? 'English selected' : 'Switch language to English'"
      class="min-h-8 min-w-10 rounded-full px-2.5 py-1.5 text-center transition-colors"
      :class="isEnglish ? 'bg-white text-primary' : props.lightSurface ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/15'"
    >
      EN
    </NuxtLink>
  </nav>
</template>
