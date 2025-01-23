// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: {enabled: false},
  modules: ["@nuxtjs/i18n", "@pinia/nuxt"],
  i18n: {
    locales: [
      { code: "en", language: "en-US" },
      { code: "es", language: "es-ES" },
    ],
    defaultLocale: "en",
    strategy: "prefix",
    detectBrowserLanguage: false,
    vueI18n: "./i18n.config.ts",
  },
});