// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  nitro: {
    preset: 'static',
  },
  ssr: false, // Disable SSR
  app: {
    baseURL: '/KristinaWebPage/', // Replace with your repository name
  },
})