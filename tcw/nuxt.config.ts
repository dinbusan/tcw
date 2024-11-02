// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Tom Cleerdin Works",
      meta: [
        {
          name: "description",
          content:
            "Tom Cleerdin Works is gespecialiseerd in maatwerk houtbewerking en bouwoplossingen, waarbij unieke en hoogwaardige stukken voor woningen en bedrijven worden gecreëerd.",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
  },
});
