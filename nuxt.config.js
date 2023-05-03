export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'DwiiUnknown',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'DwiiUnknown Personal Website.' },
      { name: 'theme-color', content: '#222831' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://dwii.my.id/' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'DwiiUnknown' },
      { hid: 'og:title', property: 'og:title', content: 'DwiiUnknown' },
      { hid: 'og:description', property: 'og:description', content: 'DwiiUnknown Personal Website.' },
      { hid: 'og:image', property: 'og:image', content: '/icon.png' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary' },
      { hid: 'twitter:url', property: 'twitter:url', content: 'https://dwii.my.id/' },
      { hid: 'twitter:site', property: 'twitter:site', content: 'DwiiUnknown' },
      { hid: 'twitter:title', property: 'twitter:title', content: 'DwiiUnknown' },
      { hid: 'twitter:description', property: 'twitter:description', content: 'DwiiUnknown Personal Website.' },
      { hid: 'twitter:image', property: 'twitter:image', content: '/icon.png' },
      { hid: 'keywords', name: 'keywords', content: 'dwii, DwiiUnknown, Dwii, Discord, Satya Bagus Dwiatmaja, Satya' },
      { hid: 'robots', name: 'robots', content: 'all' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js', crossorigin: 'anonymous', defer: true, body: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/bootstrap.js', mode: 'client' },
    { src: '@/plugins/scroll.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['vue-scrollto/nuxt', { duration: 200 }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
