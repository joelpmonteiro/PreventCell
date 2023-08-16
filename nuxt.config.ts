
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  // alias: {
  //   "@": resolve(__dirname, "/"),
  // },
  modules: [
    // ...
    '@pinia/nuxt',
  ],
  build: {
    // vue-toastification - old commonjs module 
    transpile: ['vue-toastification'],
  },
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
