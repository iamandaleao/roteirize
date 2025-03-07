<script setup lang="ts">
import { onMounted, ref } from 'vue'

const { lat, lon } = await getCoords('Paris')
const temperature = ref<number | null>(null)

async function getCoords(city: string) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`
  const res = await fetch(url)
  const data = await res.json()
  if (data.length === 0) {
    throw new Error('City not found')
  }

  return { lat: data[0].lat, lon: data[0].lon }
}

async function getTemperature() {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`
  const res = await fetch(url)
  const data = await res.json()
  return Math.ceil(data.current.temperature_2m)
}

onMounted(async () => {
  temperature.value = await getTemperature()
})
</script>

<template>
  <div class="rounded-lg p-8 shadow-xl">
    <div v-if="temperature !== null">
      {{ temperature }}°C
    </div>
    <div v-else>
      Carregando temperatura...
    </div>
  </div>
</template>
