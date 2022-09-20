import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL,
  },
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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  //main插件用于引入vue main.ts内容
  plugins: ['~/plugins/request','~/plugins/main'],
  // css: [
  //   '~/assets/style/common/index.less'
  // ],
  // nuxt3暂不支持style-resources
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
              additionalData: ['@import "@/assets/style/common/index.less";'],
            },
        },
    },
  }
})
