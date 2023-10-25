import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  ssr:false,
  //...
  build: {
    transpile:process.env.NODE_ENV === 'production'
    ? [
        'naive-ui',
        'vueuc',
        '@css-render/vue3-ssr',
        '@juggle/resize-observer'
      ]
    : ['@juggle/resize-observer'] && ['vuetify']
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },'nuxt-primevue'
    //...
  ],
  primevue: { 
    usePrimeVue: true,
    options: {},
    components: {
        prefix: '',
        name: undefined,
        include: undefined,
        exclude: undefined
    },
    directives: {
        prefix: '',
        name: undefined,
        include: undefined,
        exclude: undefined
    },
    composables: {
        prefix: '',
        name: undefined,
        include: undefined,
        exclude: undefined
    }
},
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/formatInTimeZone']
          : []
    },
    
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})