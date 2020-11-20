export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '家庭の味 だいこん家 | いわき駅前の居酒屋',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: '%s - 家庭の味 だいこん家 | いわき駅前の居酒屋',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '福島いわき駅から徒歩５分。家庭料理を中心に日本酒や焼酎など、おいしいお酒を提供しております。身も心もほっとする温かい時間をどうぞ' },
      { hid: 'og:site_name', property: 'og:site_name', content: '家庭の味 だいこん家 | いわき駅前の居酒屋' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://daikon-ya.net' },
      { hid: 'og:title', property: 'og:title', content: '家庭の味 だいこん家 | いわき駅前の居酒屋' },
      { hid: 'og:description', property: 'og:description', content: '福島いわき駅から徒歩５分。家庭料理を中心に日本酒や焼酎など、おいしいお酒を提供しております。身も心もほっとする温かい時間をどうぞ' },
      { hid: 'og:image', property: 'og:image', content: 'https://daikon-ya.net/_nuxt/img/top_main.2228400.jpg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: "https://use.typekit.net/upr3sbd.js"}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/animate.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~plugins/vue-scrollto',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/google-analytics'
  ],googleAnalytics: {
    id: 'G-GX8X0R7XES' //自身のアナリティクスコード
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
      '@nuxtjs/sitemap'
  ],sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://daikon-ya.net',
    generate: true,
    exclude: ['/404'],
  },
  


  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['gsap']
  }
}
