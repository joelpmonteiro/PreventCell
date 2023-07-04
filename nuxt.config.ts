
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // alias: {
  //   "@": resolve(__dirname, "/"),
  // },
  modules: [
    // ...
    '@pinia/nuxt',
  ],

  css: ["~/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/color.scss"as *;',
        }
      }
    }
  }
})
