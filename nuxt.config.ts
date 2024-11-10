// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: "ru",
      },
    },
  },

  devServer: {
    port: 3033,
  },

  css: ["~/assets/scss/index.scss"],

  build: {
    transpile: ["vue-toastification"],
  },

  modules: ["@nuxtjs/tailwindcss"],

  runtimeConfig: {
    public: {
      HOST: process.env.HOST,
      API_URL: `${process.env.API_URL}`,
      BACK_URL: `${process.env.BACK_URL}`,
    },
  },
});
