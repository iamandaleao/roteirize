<script setup lang="ts">
const navigation = {
  pages: [
    { name: 'Home', href: '/' },
    { name: 'Sobre', href: '/sobre' },
  ],
  itineraries: [
    { name: 'Econômico', href: 'https://api.whatsapp.com/send?phone=5547933814178' },
    { name: 'Família', href: 'https://api.whatsapp.com/send?phone=5547933814178' },
    { name: 'Romântico', href: 'https://api.whatsapp.com/send?phone=5547933814178' },
    { name: 'Premium', href: 'https://api.whatsapp.com/send?phone=5547933814178' },
  ],
  discounts: [
    { name: 'Chip Internacional', href: '/parceiros/omeuchip' },
    { name: 'Hospedagem', href: '/parceiros/hospedagem' },
    { name: 'Seguro Viagem', href: '/parceiros/seguros' },
    { name: 'Passeios & Tours', href: '/parceiros/passeios-e-tours' },
    { name: 'Passagens & Transporte', href: '/parceiros/passagens-e-transporte' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/roteirizeoficial',
      icon: 'ph:facebook-logo',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/roteirizeoficial',
      icon: 'ph:instagram-logo',
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@roteirizeoficial',
      icon: 'ph:youtube-logo',
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@roteirizeoficial',
      icon: 'ph:tiktok-logo',
    },
    {
      name: 'Email',
      href: 'mailto:admroteirize@gmail.com',
      icon: 'ph:envelope',
    },
    {
      name: 'WhatsApp',
      href: 'https://api.whatsapp.com/send?phone=5547933814178&text=Oi%2C%20encontrei%20suas%20informa%C3%A7%C3%B5es%20do%20WhatsApp%20no%20seu%20site',
      icon: 'ph:whatsapp-logo',
    },
  ],
}
</script>

<template>
  <footer class="border-t">
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-6 xl:flex-col xl:items-center xl:justify-center">
          <div class="space-y-2">
            <NuxtLink to="/">
              <span class="sr-only">Roteirize</span>
              <Logo class="mx-auto h-20 text-primary xl:mx-0 xl:-mt-2" />
            </NuxtLink>
            <p class="text-balance text-center text-sm/6  xl:text-left">
              Transformando destinos em experiências inesquecíveis. Planeje sua viagem com roteiros personalizados e dicas exclusivas.
            </p>
          </div>
          <div class="flex items-center justify-center gap-x-6 xl:justify-start">
            <a
              v-for="item in navigation.social"
              :key="item.name"
              :title="item.name"
              :href="item.href"
              target="_blank"
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
                Links úteis
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
                Roteiros de Viagem
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
                Descontos
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
      </div>
    </div>
  </footer>
</template>
