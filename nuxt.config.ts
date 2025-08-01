import { defineOrganization } from "nuxt-schema-org/schema"
import { defineNuxtConfig } from "nuxt/config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: "system",
    fallback: "light",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ThemeToggle",
    classPrefix: "",
    classSuffix: "",
    storage: "localStorage",
    storageKey: "nuxt-color-mode",
  },

  compatibilityDate: "2024-11-01",

  css: ["~/assets/css/app.css"],

  content: {
    experimental: {
      nativeSqlite: true,
    },
  },

  devtools: { enabled: false },

  eslint: {
    config: {
      standalone: false,
    },
  },

  experimental: {
    writeEarlyHints: true,
    headNext: true,
    viewTransition: true,
  },

  features: {
    inlineStyles: false,
  },

  future: {
    compatibilityVersion: 4,
  },

  hooks: {
    "content:file:afterParse": function ({ file, content }) {
      const { title, date } = content

      if (title && date) {
        if (file.id.startsWith("blog")) {
          content.schemaOrg = [
            {
              "@type": "BlogPosting",
              headline: title,
              datePublished: date,
              author: {
                type: "Person",
                name: "Amanda Leão",
              },
            },
          ]
        } else {
          content.schemaOrg = [
            {
              "@type": "WebPage",
              headline: title,
              datePublished: date,
              author: {
                type: "Person",
                name: "Amanda Leão",
              },
            },
          ]
        }
      }
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/seo",
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxthub/core",
    "shadcn-nuxt",
    "@stefanobartoletti/nuxt-social-share",
    "@nuxt/scripts",
  ],

  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
    experimental: {
      openAPI: true,
    },
  },


  routeRules: {
  "/blog/dicas/pizzaria-barra-velha-quintal606": { redirect: { to: "/blog/dicas/pizzaria-quintal606", statusCode: 301 } },
  "/blog/blog/dicas/medidas-de-roupas-e-sapatos-nos-eua": { redirect: { to: "/blog/dicas/medidas-de-roupas-e-sapatos-nos-eua", statusCode: 301 } },
  "/blog/dicas/melhor-epoca": { redirect: { to: "/", statusCode: 301 } },
  "/blog/lauterbrunnen-historia/": { redirect: { to: "/blog/roteiros/viagem-na-suica", statusCode: 301 } },
  "/blog/dicas/dicas-uruguaiana": { redirect: { to: "/blog/dicas/descubra-uruguaiana", statusCode: 301 } },
  "/blog/dicas/itens-essenciais": { redirect: { to: "/blog/dicas/fazendo-a-mala", statusCode: 301 } },
  "/blog/arte-e-cultura/": { redirect: { to: "/blog/america-do-sul/brasil/uruguaiana/gastronomia", statusCode: 301 } },
  "/blog/category/parcerias/": { redirect: { to: "/parceiros/hospedagem", statusCode: 301 } },
  "/blog/candeias-picarras/": { redirect: { to: "/blog/dicas/clube-candeias", statusCode: 301 } },
  "/blog/fazendo-as-malas-ny/?share=x&nb=1": { redirect: { to: "/blog/dicas/bagagem-essencial", statusCode: 301 } },
  "/blog/category/minhas-experiencies/": { redirect: { to: "/blog/dicas/descubra-itajai", statusCode: 301 } },
  "/blog/paris-turismo/": { redirect: { to: "/blog/dicas/visto-americano", statusCode: 301 } },
  "/blog/roteiro-economico/?share=linkedin&nb=1": { redirect: { to: "https://api.whatsapp.com/send?phone=5547933814178", statusCode: 301 } },
  "/blog/passagens-baratas/?share=telegram&nb=1": { redirect: { to: "/blog/dicas/passagens-aereas", statusCode: 301 } },
  "/blog/fazendo-as-malas-ny/?share=telegram&nb=1": { redirect: { to: "/blog/dicas/fazendo-a-mala", statusCode: 301 } },
  "/blog/dicas-para-aproveitar-ao-maximo-sua-viagem-a-paris/": { redirect: { to: "/blog/dicas/descubra-paris", statusCode: 301 } },
  "/blog/seguros-promo/?share=jetpack-whatsapp&nb=1": { redirect: { to: "/parceiros/seguros", statusCode: 301 } },
  "/blog/dicas/camboriu": { redirect: { to: "/blog/dicas/chale-camboriu", statusCode: 301 } },
  "/blog/passagens-baratas/?share=linkedin&nb=1": { redirect: { to: "/blog/america-do-sul", statusCode: 301 } },
  "/blog/unidas-aluguel-de-carros/": { redirect: { to: "/parceiros/passeios-e-tours", statusCode: 301 } },
  "/blog/paris-gastronomia/": { redirect: { to: "/blog/europa/franca/paris/gastronomia", statusCode: 301 } },
  "/peca-seu-roteiro/": { redirect: { to: "/roteiros", statusCode: 301 } },
  "/blog/uruguaiana-gastronomia/?share=twitter&nb=1": { redirect: { to: "/blog/america-do-sul/brasil/uruguaiana/gastronomia", statusCode: 301 } },
  "/blog/roteiro-romantico-para-casais": { redirect: { to: "/blog/tag/roteiros", statusCode: 301 } },
  "/blog/uruguaiana-turismo/?share=jetpack-whatsapp&nb=1": { redirect: { to: "/blog/america-do-sul/brasil/uruguaiana", statusCode: 301 } },
  "/blog/aluguel-de-carro-n-y-vale-a-pena-ou-nao/?share=x&nb=1": { redirect: { to: "/parceiros/passeios-e-tours", statusCode: 301 } },
  "/blog/roteiro-premium/": { redirect: { to: "https://api.whatsapp.com/send?phone=5547933814178", statusCode: 301 } },
  "/blog/apoie-a-roteirize/": { redirect: { to: "/sobre-mim", statusCode: 301 } },
  "/blog/experiencia-barra-velha-sc/": { redirect: { to: "/blog/dicas/pizzaria-quintal606", statusCode: 301 } },
  "/blog/lauterbrunnen-historia": { redirect: { to: "/blog/roteiros/viagem-na-suica", statusCode: 301 } },
  "/blog/roteiro-economico": { redirect: { to: "/roteiros", statusCode: 301 } },
  "/blog/category/dicas/page/2/": { redirect: { to: "/blog/tag/dicas", statusCode: 301 } },
  "/blog/latam-airlines-uma-parceria-que-te-leva-alem/": { redirect: { to: "/parceiros/passagens-e-transporte", statusCode: 301 } },
  "/blog/onde-se-hospedar-em-nova-york/": { redirect: { to: "/blog/america-do-norte/eua/nova-york/onde-ficar", statusCode: 301 } },
  "/blog/passagens-baratas/": { redirect: { to: "/blog/dicas/epoca-para-viajar", statusCode: 301 } },
  "/blog/hospedagem-ideal/": { redirect: { to: "/blog/dicas/hospedagem-ideal", statusCode: 301 } },
  "/blog/category/moda/": { redirect: { to: "/blog/tag/dicas", statusCode: 301 } },
  "/blog/roteiros-personalizados-descubra-o-mundo-ao-seu-ritmo/": { redirect: { to: "/roteiros", statusCode: 301 } },
  "/blog/roteiro-basico-de-viagem": { redirect: { to: "/roteiros", statusCode: 301 } },
  "/blog/como-chegar-em-paris/": { redirect: { to: "/blog/europa/franca/paris/como-chegar", statusCode: 301 } },
  "/blog/roteiro-economico/": { redirect: { to: "/roteiros", statusCode: 301 } },
  "/blog/roteiro-de-5-dias-para-casais-em-paris/": { redirect: { to: "/blog/europa/franca/paris/roteiros/5-dias", statusCode: 301 } },
  "/blog/page/5/": { redirect: { to: "/", statusCode: 301 } },
  "/blog/bagagem-essencial/": { redirect: { to: "/blog/tag/dicas", statusCode: 301 } },
  "/blog/category/parcerias/page/2/": { redirect: { to: "/", statusCode: 301 } },
  "/blog/latam-airlines/": { redirect: { to: "/", statusCode: 301 } },
  "/blog/uruguaiana-roteiro-5-dias/": { redirect: { to: "/blog/america-do-sul/brasil/uruguaiana/roteiros/5-dias", statusCode: 301 } },
  "/blog/uruguaiana-dicas/": { redirect: { to: "/blog/tag/dicas", statusCode: 301 } },
  "/blog/paris-transporte/": { redirect: { to: "/blog/europa/franca/paris/transporte", statusCode: 301 } },
  "/blog/get-your-guide/": { redirect: { to: "/parceiros/passeios-e-tours", statusCode: 301 } },
  "/blog/uruguaiana-historia/": { redirect: { to: "/blog/america-do-sul/brasil/uruguaiana/historia", statusCode: 301 } },
  "/sobre": { redirect: { to: "/sobre-mim", statusCode: 301 } },
  "/blog/passaporte-visto-e-imigracao/": { redirect: { to: "/blog/dicas/sobre-passaporte", statusCode: 301 } },
  "/blog/category/minhas-experiencias/": { redirect: { to: "/blog/dicas/chale-ararangua", statusCode: 301 } },
  "/colaborar/": { redirect: { to: "/sobre-mim", statusCode: 301 } },
  "/blog/uruguaiana-transporte/": { redirect: { to: "/blog/america-do-sul/brasil/uruguaiana/transporte", statusCode: 301 } },
  "/blog/paris-pontos-turisticos/": { redirect: { to: "/blog/tag/destinos", statusCode: 301 } },
  "/blog/category/internacionais/page/5/": { redirect: { to: "/blog/tag/destinos", statusCode: 301 } },
  "/blog/blog/dicas/melhor-epoca": { redirect: { to: "/blog/dicas/epoca-para-viajar", statusCode: 301 } },
  "/blog/quando-ir-a-paris/": { redirect: { to: "/blog/europa/franca/paris/quando-ir", statusCode: 301 } },
  "/blog/candeias-picarras": { redirect: { to: "/blog/dicas/clube-candeias", statusCode: 301 } },
 "/blog/category/internacionais/page/2/": { redirect: { to: "/blog/tag/destinos", statusCode: 301 } },
 "/blog/page/2/": { redirect: { to: "/", statusCode: 301 } },
 "/blog/category/brasil/": { redirect: { to: "/blog/america-do-sul/brasil", statusCode: 301 } },
 "/blog/dicas-experiencias-culturais-paris/": { redirect: { to: "/blog/europa/franca/paris/o-que-fazer", statusCode: 301 } },
 "/blog/gastronomia-em-paris/": { redirect: { to: "/blog/europa/franca/paris/gastronomia", statusCode: 301 } },

  },
  

  schemaOrg: {
    identity: defineOrganization({
      name: "Roteirize",
      alternateName: "Roteirize Viagens",
      description: "Eu cuido dos detalhes, você aproveita a jornada.",
      url: "https://roteirize.com.br",
      logo: "/assets/images/logo.svg",

      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Dom Duarte, 363, casa 02",
        addressLocality: "Quinta dos Açorianos",
        addressRegion: "SC",
        postalCode: "88390000",
        addressCountry: "BR",
      },

      email: "admroteirize@gmail.com",
      telephone: "+5547933814178",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+5547933814178",
        email: "admroteirize@gmail.com",
      },

      foundingDate: "2024-11-01",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 1,
        maxValue: 1,
      },

      sameAs: [
        "https://www.instagram.com/roteirizeoficial",
        "https://www.facebook.com/roteirizeoficial",
        "https://www.youtube.com/@roteirizeoficial",
        "https://www.tiktok.com/@roteirizeoficial",
        "https://api.whatsapp.com/send?phone=5547933814178",
      ],
    }),
  },

  site: {
    url: "https://roteirize.com.br",
    name: "Roteirize",
    description: "Eu cuido dos detalhes, você aproveita a jornada.",
    defaultLocale: "pt-BR",
  },

  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
  },

  socialShare: {
    baseUrl: "https://roteirize.com.br",
  },

  tailwindcss: {
    cssPath: "~/app/assets/css/app.css",
    config: {},
    viewer: false,
    exposeConfig: false,
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false,
    },
    optimizeDeps: {
      include: [
        "vaul-vue",
        "reka-ui",
        "clsx",
        "tailwind-merge",
        "@vueuse/core",
        "embla-carousel-vue",
        "lucide-vue-next",
        "class-variance-authority",
      ],
    },
  },
})
