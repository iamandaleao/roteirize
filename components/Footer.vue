<script setup>
import EmailIcon from '~/components/EmailIcon.vue'
import FacebookIcon from '~/components/FacebookIcon.vue'
import InstagramIcon from '~/components/InstagramIcon.vue'
import TikTokIcon from '~/components/TikTokIcon.vue'
import WhatsAppIcon from '~/components/WhatsAppIcon.vue'
import YouTubeIcon from '~/components/YouTubeIcon.vue'

const navigation = {
  pages: [
    { name: 'Home', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Peça seu roteiro', href: '#' },
  ],
  blog: [
    { name: 'Posts', href: '/blog' },
    { name: 'Dicas', href: '/blog/dicas' },
    { name: 'Roteiros', href: '/blog/roteiros' },
  ],
  discounts: [
    { name: 'Hotel', href: '#' },
    { name: 'Chip', href: '#' },
    { name: 'Carro', href: '#' },
    { name: 'Seguros', href: '#' },
    { name: 'Passagem', href: '#' },
    { name: 'Ingressos', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/roteirizeoficial',
      icon: FacebookIcon,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/roteirizeoficial',
      icon: InstagramIcon,
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@roteirizeoficial',
      icon: YouTubeIcon,
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@roteirizeoficial',
      icon: TikTokIcon,
    },
    {
      name: 'Email',
      href: 'mailto:admroteirize@gmail.com',
      icon: EmailIcon,
    },
    {
      name: 'WhatsApp',
      href: 'https://api.whatsapp.com/send?phone=5547933814178&text=Oi%2C%20encontrei%20suas%20informa%C3%A7%C3%B5es%20do%20WhatsApp%20no%20seu%20site',
      icon: WhatsAppIcon,
    },
  ],
}
</script>

<template>
  <footer class="bg-background border-t">
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-6 xl:flex-col xl:items-center xl:justify-center">
          <div class="space-y-2">
            <Logo class="mx-auto h-16 text-black xl:mx-0 dark:!text-white" />
            <p class="text-balance text-center text-sm/6 text-slate-600 xl:text-left dark:text-slate-400">
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
              class="text-slate-600 hover:text-slate-900 dark:text-slate-400 hover:dark:text-slate-100"
            >
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="size-6" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm/6 font-semibold text-slate-900 dark:text-white">
                Links úteis
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.pages" :key="item.name">
                  <a :href="item.href" class="text-sm/6 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm/6 font-semibold text-slate-900 dark:text-white">
                Blog
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.blog" :key="item.name">
                  <a :href="item.href" class="text-sm/6 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm/6 font-semibold text-slate-900 dark:text-white">
                Descontos
              </h3>
              <ul role="list" class="mt-6 grid gap-y-4 lg:grid-cols-2 lg:gap-x-48">
                <li v-for="item in navigation.discounts" :key="item.name">
                  <a :href="item.href" class="text-sm/6 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 border-t border-slate-900/10 pt-8 sm:mt-20 lg:mt-24">
        <p class="text-sm/6 text-slate-600 dark:text-slate-400">
          &copy; 2024 - {{ new Date().getFullYear() }} Roteirize.
        </p>
      </div>
    </div>
  </footer>
</template>
