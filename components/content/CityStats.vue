<script setup lang="ts">
import { onMounted, ref } from 'vue'

// Default city
const city = ref('Canada')
const coords = ref<{ lat: string, lon: string } | null>(null)
const temperature = ref<number | null>(null)
const localTime = ref<string | null>(null)
const population = ref<string | null>(null)
const currency = ref<string | null>(null)
const currencyCode = ref<string | null>(null)

async function getCoords(cityName: string): Promise<{ lat: string, lon: string } | null> {
  try {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(cityName)}`
    const res = await fetch(url)
    const data = await res.json()
    if (data.length === 0) {
      console.error('City not found')
      return null
    }

    return { lat: data[0].lat, lon: data[0].lon }
  }
  catch (error) {
    console.error('Error fetching coordinates:', error)
    return null
  }
}

async function getWeatherData(latitude: string, longitude: string) {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&timezone=auto`
    const res = await fetch(url)
    const data = await res.json()
    return data
  }
  catch (error) {
    console.error('Error fetching weather data:', error)
    return null
  }
}

function getTemperatureFromData(data: any): number | null {
  if (!data || !data.current || data.current.temperature_2m === undefined) {
    return null
  }
  return Math.ceil(data.current.temperature_2m)
}

function getLocalTimeFromData(data: any): string | null {
  if (!data || !data.current || !data.current.time) {
    return null
  }
  return data.current.time.split('T')[1]
}

async function getWikidataInfo(cityName: string): Promise<{
  population: string | null
  currencyCode: string | null
}> {
  try {
    // First, get the Wikidata ID for the city
    const searchUrl = `https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&search=${encodeURIComponent(cityName)}&language=en&origin=*`
    const searchRes = await fetch(searchUrl)
    const searchData = await searchRes.json()

    if (!searchData.search || !searchData.search.length) {
      console.error('City not found in Wikidata')
      return { population: null, currencyCode: null }
    }

    const cityQid = searchData.search[0].id

    // Get the city data
    const cityDataUrl = `https://www.wikidata.org/w/api.php?action=wbgetclaims&format=json&entity=${cityQid}&origin=*`
    const cityDataRes = await fetch(cityDataUrl)
    const cityData = await cityDataRes.json()

    // Get population data
    const populationClaim = cityData.claims?.P1082?.[0]?.mainsnak?.datavalue?.value?.amount
    let population = null
    if (populationClaim) {
      population = formatNumber(Number.parseInt(populationClaim))
    }

    // Get country QID (P17 is "country" property in Wikidata)
    const countryQid = cityData.claims?.P17?.[0]?.mainsnak?.datavalue?.value?.id
    let currencyCode = null

    if (countryQid) {
      // Get country data to find currency
      const countryDataUrl = `https://www.wikidata.org/w/api.php?action=wbgetclaims&format=json&entity=${countryQid}&property=P38&origin=*`
      const countryDataRes = await fetch(countryDataUrl)
      const countryData = await countryDataRes.json()

      // P38 is "currency" property in Wikidata
      const currencyQid = countryData.claims?.P38?.[0]?.mainsnak?.datavalue?.value?.id

      if (currencyQid) {
        // Get currency data to find currency code
        const currencyDataUrl = `https://www.wikidata.org/w/api.php?action=wbgetclaims&format=json&entity=${currencyQid}&property=P498&origin=*`
        const currencyDataRes = await fetch(currencyDataUrl)
        const currencyData = await currencyDataRes.json()

        // P498 is "ISO 4217 code" property in Wikidata
        currencyCode = currencyData.claims?.P498?.[0]?.mainsnak?.datavalue?.value
      }
    }

    return {
      population,
      currencyCode,
    }
  }
  catch (error) {
    console.error('Error fetching Wikidata info:', error)
    return { population: null, currencyCode: null }
  }
}

async function convertCurrency(fromCurrency: string, toCurrency: string = 'BRL'): Promise<string | null> {
  try {
    if (!fromCurrency) {
      console.error('Source currency code not available')
      return null
    }

    const pair = `${fromCurrency}-${toCurrency}`
    const res = await fetch(`https://economia.awesomeapi.com.br/json/${pair}`)
    const data = await res.json()

    if (data.error) {
      console.error('Cannot convert currency')
      return null
    }

    const rate = data[0]?.ask
    if (!rate) {
      console.error('Currency rate not available')
      return null
    }

    return Number.parseFloat(rate).toFixed(2)
  }
  catch (error) {
    console.error('Error fetching currency data:', error)
    return null
  }
}

function formatNumber(num: number): string {
  const million = 1000000
  if (num >= million) {
    return `${(num / million).toFixed(3)}M`
  }
  return num.toString()
}

async function loadAllData() {
  // Get coordinates
  coords.value = await getCoords(city.value)

  // If coordinates are available, get weather data
  if (coords.value) {
    const weatherData = await getWeatherData(coords.value.lat, coords.value.lon)
    if (weatherData) {
      temperature.value = getTemperatureFromData(weatherData)
      localTime.value = getLocalTimeFromData(weatherData)
    }
  }

  // Get Wikidata info (population and currency code)
  const wikidataInfo = await getWikidataInfo(city.value)
  population.value = wikidataInfo.population
  currencyCode.value = wikidataInfo.currencyCode

  // Get currency conversion if currency code is available
  if (currencyCode.value) {
    currency.value = await convertCurrency(currencyCode.value)
  }
}

onMounted(() => {
  loadAllData()
})
</script>

<template>
  <div class="mx-auto mt-4 grid max-w-2xl grid-cols-2 gap-4 border bg-gray-50 p-4 text-2xl text-black dark:bg-background dark:text-white lg:rounded-lg">
    <div class="flex items-center justify-center gap-x-2 rounded-md p-2">
      <Icon name="ph:snowflake" class="shrink-0" />
      <span v-if="temperature !== null">
        {{ temperature }}°C
      </span>
      <Icon v-else name="ph:arrow-clockwise" class="animate-spin" />
    </div>

    <div class="flex items-center justify-center gap-x-2 rounded-md p-2">
      <Icon name="ph:alarm" class="shrink-0" />
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
      <Icon name="ph:currency-eur" class="shrink-0" />
      <span v-if="currency !== null">
        {{ currencyCode?.toUpperCase() }}: R${{ currency }}
      </span>
      <Icon v-else name="ph:arrow-clockwise" class="animate-spin" />
    </div>
  </div>
</template>
