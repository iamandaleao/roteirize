<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

interface NavItem {
  title: string
  href: string
  description: string
}

const blog: NavItem[] = [
  {
    title: 'Todos os posts',
    href: '/blog',
    description: 'Não quer perder nenhum post? Aqui você encontra todos.',
  },
  {
    title: 'Experiências',
    href: '#',
    description: 'Relatos e aventuras pessoais, com dicas e insights exclusivos.',
  },
  {
    title: 'Sobre',
    href: '/sobre',
    description: 'Conheça a história e a missão por trás do blog e da autora.',
  },
]

const tips: NavItem[] = [
  {
    title: 'Bagagem',
    href: '/docs/components/tooltip',
    description: 'Regras de peso, itens permitidos e dicas para arrumar sua mala.',
  },
  {
    title: 'Cultura',
    href: '/docs/components/tooltip',
    description: 'Descubra eventos, tradições e experiências culturais autênticas.',
  },
  {
    title: 'Chip',
    href: '/docs/components/tooltip',
    description: 'Opções de internet móvel e conectividade no exterior.',
  },
  {
    title: 'Compras',
    href: '/docs/components/tooltip',
    description: 'Guia de shoppings, feiras e souvenirs imperdíveis.',
  },
  {
    title: 'Gastronomia',
    href: '/docs/components/tooltip',
    description: 'Explore os melhores restaurantes e pratos típicos.',
  },
  {
    title: 'Hospedagens',
    href: '/docs/components/tooltip',
    description: 'Hotéis, pousadas e acomodações recomendadas para sua estadia.',
  },
  {
    title: 'Passaporte',
    href: '/docs/components/tooltip',
    description: 'Informações e requisitos para emissão e renovação.',
  },
  {
    title: 'Seguro Viagem',
    href: '/docs/components/tooltip',
    description: 'Proteja sua viagem com as melhores opções de seguro.',
  },
  {
    title: 'Transporte',
    href: '/docs/components/tooltip',
    description: 'Aluguel de carros, passes de trem e opções para se locomover com conforto.',
  },
  {
    title: 'Vistos',
    href: '/docs/components/tooltip',
    description: 'Regras, processos e dicas para obtenção de vistos.',
  },
  {
    title: 'Voos',
    href: '/docs/components/tooltip',
    description: 'Promoções, melhores rotas e dicas para economizar em passagens.',
  },
  {
    title: 'Vacina',
    href: '/docs/components/tooltip',
    description: 'Vacinas obrigatórias e recomendadas para cada destino.',
  },
]
</script>

<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <NuxtLink to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Roteirize</span>
          <Logo class="h-12 text-white" />
        </NuxtLink>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-300" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
        </button>
      </div>
      <NavigationMenu class="hidden lg:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger class="bg-transparent text-sm/6 font-semibold text-white hover:bg-transparent hover:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent">
              Blog
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid w-72 gap-3 p-4">
                <li v-for="item in blog" :key="item.title">
                  <NavigationMenuLink as-child>
                    <NuxtLink
                      :to="item.href"
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div class="text-sm font-medium leading-none">
                        {{ item.title }}
                      </div>
                      <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {{ item.description }}
                      </p>
                    </NuxtLink>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger class="bg-transparent text-sm/6 font-semibold text-white hover:bg-transparent hover:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent">
              Roteiros
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]">
                <li class="row-span-3">
                  <NavigationMenuLink as-child>
                    <a
                      class="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <img src="https://www.reka-ui.com/logo.svg" class="size-6">
                      <div class="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p class="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>

                <li>
                  <NavigationMenuLink as-child>
                    <NuxtLink
                      to="/docs/introduction"
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div class="text-sm font-medium leading-none">
                        Prontos
                      </div>
                      <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Roteiros já elaborados para diferentes estilos.
                      </p>
                    </NuxtLink>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink as-child>
                    <NuxtLink
                      to="/docs/installation"
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div class="text-sm font-medium leading-none">
                        Personalizados
                      </div>
                      <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Informações sobre como solicitar um roteiro personalizado.
                      </p>
                    </NuxtLink>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger class="bg-transparent text-sm/6 font-semibold text-white hover:bg-transparent hover:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent">
              Destinos
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]">
                <li class="row-span-3">
                  <div
                    class="h-full rounded-md bg-[url(/assets/images/menu-roteiros.jpg)] bg-center no-underline outline-none backdrop-blur focus:shadow-md"
                  >
                    <div class="backdrop-blur-xs flex h-full flex-col justify-end bg-black/10 p-4">
                      <div class="mb-2 mt-4 text-lg font-medium text-white">
                        Viver é viajar
                      </div>
                      <p class="text-balance text-sm  leading-tight text-slate-200">
                        Descubra destinos imperdíveis pra você explorar o mundo.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <NavigationMenuLink as-child>
                    <NuxtLink
                      to="/docs/installation"
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div class="text-sm font-medium leading-none">
                        Europa
                      </div>
                      <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Conheça a Suíça, França, Itália e todo o charme da Europa.
                      </p>
                    </NuxtLink>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink as-child>
                    <NuxtLink
                      to="/docs/installation"
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div class="text-sm font-medium leading-none">
                        América do Norte
                      </div>
                      <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Descubra as maravilhas dos Estados Unidos, Canadá e México.
                      </p>
                    </NuxtLink>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink as-child>
                    <NuxtLink
                      to="/docs/introduction"
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div class="text-sm font-medium leading-none">
                        América do Sul
                      </div>
                      <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Explore os melhores destinos do Brasil, Chile, Argentina e Uruguai.
                      </p>
                    </NuxtLink>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger class="bg-transparent text-sm/6 font-semibold text-white hover:bg-transparent hover:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent">
              Dicas de Viagem
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                <li v-for="component in tips" :key="component.title">
                  <NavigationMenuLink as-child>
                    <a
                      :href="component.href"
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div class="text-sm font-medium leading-none">{{ component.title }}</div>
                      <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {{ component.description }}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div class="flex flex-1 justify-end">
        <ThemeToggle />
      </div>
    </nav>
  </header>
</template>
