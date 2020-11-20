export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '家庭の味 だいこん家 | いわき駅前の居酒屋',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '福島いわき駅から徒歩５分。家庭料理を中心に日本酒や焼酎など、おいしいお酒を提供しております。身も心もほっとする温かい時間をどうぞ' }
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
  ],

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
