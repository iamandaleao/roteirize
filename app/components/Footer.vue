<script setup lang="ts">
const { isEnglish } = useLocale()
const navigation = computed(() => isEnglish.value
  ? {
      pages: [
        { name: 'Home', href: '/en' },
        { name: 'About', href: '/en/about' },
      ],
      itineraries: [
        { name: 'Budget', href: 'https://wa.me/5547991611628' },
        { name: 'Family', href: 'https://wa.me/5547991611628' },
        { name: 'Romantic', href: 'https://wa.me/5547991611628' },
        { name: 'Premium', href: 'https://wa.me/5547991611628' },
      ],
      discounts: [
        { name: 'International SIM', href: '/en/partners/international-sim' },
      ],
      social: [
        { name: 'Facebook', href: 'https://www.facebook.com/roteirizeoficial', icon: 'ph:facebook-logo' },
        { name: 'Email', href: 'mailto:admroteirize@gmail.com', icon: 'ph:envelope' },
        { name: 'WhatsApp', href: 'https://wa.me/5547991611628', icon: 'ph:whatsapp-logo' },
      ],
    }
  : {
      pages: [
        { name: 'Home', href: '/' },
        { name: 'Sobre', href: '/sobre-mim' },
      ],
      itineraries: [
        { name: 'Econômico', href: 'https://wa.me/5547991611628' },
        { name: 'Família', href: 'https://wa.me/5547991611628' },
        { name: 'Romântico', href: 'https://wa.me/5547991611628' },
        { name: 'Premium', href: 'https://wa.me/5547991611628' },
      ],
      discounts: [
        { name: 'Chip Internacional', href: '/parceiros/omeuchip' },
      ],
      social: [
        {
          name: 'Facebook',
          href: 'https://www.facebook.com/roteirizeoficial',
          icon: 'ph:facebook-logo',
        },
        {
          name: 'Email',
          href: 'mailto:admroteirize@gmail.com',
          icon: 'ph:envelope',
        },
        {
          name: 'WhatsApp',
          href: 'https://wa.me/5547991611628',
          icon: 'ph:whatsapp-logo',
        },
      ],
    })
</script>

<template>
  <footer class="border-t">
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-6 xl:flex-col xl:items-center xl:justify-center">
          <div class="space-y-2">
            <NuxtLink :to="isEnglish ? '/en' : '/'">
              <span class="sr-only">Roteirize</span>
              <Logo class="mx-auto h-20 text-primary xl:mx-0 xl:-mt-2" />
            </NuxtLink>
            <p class="text-balance text-center text-sm/6  xl:text-left">
              {{ isEnglish ? 'Turning destinations into unforgettable experiences. Plan your trip with personalized itineraries and practical travel tips.' : 'Transformando destinos em experiências inesquecíveis. Planeje sua viagem com roteiros personalizados e dicas exclusivas.' }}
            </p>
          </div>
          <div class="flex items-center justify-center gap-x-6 xl:justify-start">
            <a
              v-for="item in navigation.social"
              :key="item.name"
              :title="item.name"
              :href="item.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="sr-only">{{ item.name }}</span>
              <Icon :name="item.icon" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h4 class="text-sm/6 font-semibold ">
                {{ isEnglish ? 'Useful links' : 'Links úteis' }}
              </h4>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.pages" :key="item.name" class="transition-all hover:scale-105 hover:font-medium">
                  <NuxtLink :href="item.href" class="text-sm/6">
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h4 class="text-sm/6 font-semibold">
                {{ isEnglish ? 'Travel itineraries' : 'Roteiros de Viagem' }}
              </h4>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.itineraries" :key="item.name" class="transition-all hover:scale-105 hover:font-medium">
                  <NuxtLink :to="item.href" class="text-sm/6">
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h4 class="text-sm/6 font-semibold">
                {{ isEnglish ? 'Offers' : 'Descontos' }}
              </h4>
              <ul role="list" class="mt-6 grid gap-y-4">
                <li v-for="item in navigation.discounts" :key="item.name" class="transition-all hover:scale-105 hover:font-medium">
                  <NuxtLink :to="item.href" class="text-sm/6 transition-all hover:scale-105">
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 border-t border-slate-900/10 pt-8 sm:mt-20 lg:mt-24">
        <p class="text-sm/6 text-slate-400">
          &copy; 2024 - {{ new Date().getFullYear() }} Roteirize.
        </p>
        <p class="mt-2 w-full text-center text-xs text-slate-400">
          {{ isEnglish ? 'Made by' : 'Feito por' }} <a href="https://github.com/ibrunotome" target="_blank" rel="noopener noreferrer" class="underline-offset-4 hover:underline">Bruno</a> {{ isEnglish ? 'and' : 'e' }} <a href="https://github.com/iamandaleao" target="_blank" rel="noopener noreferrer" class="underline-offset-4 hover:underline">Amanda</a>
        </p>
      </div>
    </div>
  </footer>
</template>
