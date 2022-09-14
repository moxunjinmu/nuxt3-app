import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  head: {
    title: 'nuxt3 test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  plugins: ['~/plugins/request'],
  css: [
    '~/assets/style/index.less'
  ],
  // modules: [
  //   '@nuxtjs/style-resources'
  // ],
  // styleResources: {
  //   less: './assets/style/theme.less'
  // },
  vite: {
    css: {
        preprocessorOptions: {
            less: {
              charset: false,
              additionalData: '@import "@/assets/style/theme.less";',
            },

        },
    },
}
})
