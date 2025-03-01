<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const tips: { title: string, href: string, description: string }[] = [
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
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink
          as-child
          :class="navigationMenuTriggerStyle()"
          class="bg-transparent text-sm/6 font-semibold text-white hover:bg-transparent hover:text-white focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent"
        >
          <NuxtLink to="/">
            Home
          </NuxtLink>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger class="bg-transparent text-sm/6 font-semibold text-white hover:bg-transparent hover:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent">
          Roteiros
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]">
            <li class="row-span-3">
              <NavigationMenuLink as-child>
                <a
                  class="from-muted/50 to-muted flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <img src="https://www.reka-ui.com/logo.svg" class="size-6">
                  <div class="mb-2 mt-4 text-lg font-medium">
                    shadcn/ui
                  </div>
                  <p class="text-muted-foreground text-sm leading-tight">
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
                  class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                >
                  <div class="text-sm font-medium leading-none">
                    Prontos
                  </div>
                  <p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
                    Roteiros já elaborados para diferentes estilos.
                  </p>
                </NuxtLink>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink as-child>
                <NuxtLink
                  to="/docs/installation"
                  class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                >
                  <div class="text-sm font-medium leading-none">
                    Personalizados
                  </div>
                  <p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
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
          <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]">
            <li class="row-span-3">
              <NavigationMenuLink as-child>
                <a
                  class="from-muted/50 to-muted flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <img src="https://www.reka-ui.com/logo.svg" class="size-6">
                  <div class="mb-2 mt-4 text-lg font-medium">
                    shadcn/ui
                  </div>
                  <p class="text-muted-foreground text-sm leading-tight">
                    Beautifully designed components built with Radix UI and
                    Tailwind CSS.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>

            <li>
              <NavigationMenuLink as-child>
                <NuxtLink
                  to="/docs/installation"
                  class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                >
                  <div class="text-sm font-medium leading-none">
                    Europa
                  </div>
                  <p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
                    Conheça a Suíça, França, Itália e todo o charme da Europa.
                  </p>
                </NuxtLink>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink as-child>
                <NuxtLink
                  to="/docs/installation"
                  class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                >
                  <div class="text-sm font-medium leading-none">
                    América do Norte
                  </div>
                  <p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
                    Descubra as maravilhas dos Estados Unidos, Canadá e México.
                  </p>
                </NuxtLink>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink as-child>
                <NuxtLink
                  to="/docs/introduction"
                  class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                >
                  <div class="text-sm font-medium leading-none">
                    América do Sul
                  </div>
                  <p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
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
                  class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                >
                  <div class="text-sm font-medium leading-none">{{ component.title }}</div>
                  <p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
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
</template>
