export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ricettine',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/markdownit", "@nuxtjs/style-resources"],

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
    routes: function() {
      const fs = require("fs");
      const path = require("path");
      return fs.readdirSync("./assets/content/posts").map(file => {
        return {
          route: `/posts/${path.parse(file).name}`, // Return the slug
          payload: require(`./assets/content/posts/${file}`)
        };
      });
    }
  },
}
