// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/apollo',
  ],

  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
  },

  apollo: {
    clients: {
      default: {
        tokenName: 'github-token',
        httpEndpoint: 'https://api.github.com/graphql',
      },
    },
  },

  content: {
    highlight: {
      theme: 'nord',
      preload: ['ts', 'js', 'css', 'json', 'bash', 'vue'],
    },
  },
})
