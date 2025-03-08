<script setup lang="ts">
import { onMounted, ref } from 'vue'

const { lat, lon } = await getCoords('Paris')
const temperature = ref<number | null>(null)
const localTime = ref<string | null>(null)
const population = ref<number | null>(null)
const currency = ref<string | null>(null)

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

async function getLocalTime() {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m&timezone=auto`
  const res = await fetch(url)
  const data = await res.json()
  return data.current.time.split('T')[1]
}

async function getWikidataId(city: string) {
  const url = `https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&search=${encodeURIComponent(city)}&language=en&origin=*`
  const res = await fetch(url)
  const data = await res.json()
  if (!data.search.length) {
    throw new Error('City not found')
  }
  return data.search[0].id // Retorna o primeiro QID encontrado
}

async function getPopulation(city: string) {
  const qid = await getWikidataId(city)
  const url = `https://www.wikidata.org/w/api.php?action=wbgetclaims&format=json&entity=${qid}&origin=*`
  const res = await fetch(url)
  const data = await res.json()
  const populationClaim = data.claims?.P1082?.[0]?.mainsnak?.datavalue?.value?.amount
  if (!populationClaim) {
    throw new Error('Population data not available')
  }
  return formatNumber(Number.parseInt(populationClaim))
}

async function convertCurrency(pair: string) {
  const res = await fetch(`https://economia.awesomeapi.com.br/json/${pair}`)
  const data = await res.json()

  if (data.error) {
    throw new Error('Cannot convert coin')
  }

  const rate = data[0].ask

  return Number.parseFloat(rate).toFixed(2)
}

function formatNumber(num: number): string {
  const million = 1000000
  if (num >= million) {
    return `${(num / million).toFixed(3)}M`
  }
  return num.toString()
}

onMounted(async () => {
  temperature.value = await getTemperature()
  localTime.value = await getLocalTime()
  population.value = await getPopulation('Paris')
  currency.value = await convertCurrency('EUR-BRL')
})
</script>

<template>
  <div class="dark:bg-background mx-auto mt-4 grid max-w-2xl grid-cols-2 gap-4 border bg-gray-50 p-4 text-2xl text-black lg:rounded-lg xl:grid-cols-4 dark:text-white">
    <div class="flex items-center justify-center gap-x-2 rounded-md p-2">
      <Icon name="ph:snowflake" />
      <span v-if="temperature !== null">
        {{ temperature }}°C
      </span>
      <Icon v-else name="ph:arrow-clockwise" class="animate-spin" />
    </div>

    <div class="flex items-center justify-center gap-x-2 rounded-md p-2">
      <Icon name="ph:alarm" />
      <span v-if="localTime !== null">
        {{ localTime }}
      </span>
      <Icon v-else name="ph:arrow-clockwise" class="animate-spin" />
    </div>

    <div class="flex items-center justify-center gap-x-2 rounded-md p-2">
      <Icon name="ph:users-three" class="shrink-0" />
      <span v-if="population !== null">
        {{ population }}
      </span>
      <Icon v-else name="ph:arrow-clockwise" class="animate-spin" />
    </div>

    <div class="flex items-center justify-center gap-x-2 rounded-md p-2">
      <Icon name="ph:currency-eur" />
      <span v-if="currency !== null">
        {{ currency }}
      </span>
      <Icon v-else name="ph:arrow-clockwise" class="animate-spin" />
    </div>
  </div>
</template>
