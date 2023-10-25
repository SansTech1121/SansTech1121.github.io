import '@mdi/font/css/materialdesignicons.css'
import { VDatePicker } from 'vuetify/labs/VDatePicker'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import PrimeVue from 'primevue/config';
export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    components: {
        VDatePicker
      },
  })
  app.vueApp.use(vuetify,PrimeVue)
})