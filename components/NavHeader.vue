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

const components: { title: string, href: string, description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/components/alert-dialog',
    description:
        'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/components/hover-card',
    description:
        'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/components/progress',
    description:
        'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/components/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/components/tabs',
    description:
        'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/components/tooltip',
    description:
        'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
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
          <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            <li v-for="component in components" :key="component.title">
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
