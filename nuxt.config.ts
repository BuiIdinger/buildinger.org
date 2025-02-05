export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  /* Enable dev tools */
  devtools: { enabled: true },

  /* Add modules */
  modules: [
    "@nuxtjs/tailwindcss",
  ],

  /* Disable auto imports */
  imports: {
    autoImport: false
  }
})
