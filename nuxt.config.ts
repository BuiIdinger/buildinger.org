export default defineNuxtConfig({
  compatibilityDate: "2025-02-05",

  /* Enable dev tools */
  devtools: { enabled: true },

  /* Add modules */
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image"
  ],

  /* Disable auto imports */
  imports: {
    autoImport: false
  }
})