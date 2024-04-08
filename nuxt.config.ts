// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false,
    tsConfig: {
      include: ["~/types/*.ts"],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
