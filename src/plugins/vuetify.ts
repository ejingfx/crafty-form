/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          'athens-gray': '#f5f5f7',
          'bali-hai': '#8b97ab',
          'cadet-blue': '#a4aebd',
          'mine-shaft': '#363636',
          'pizazz': '#FB8C00',
          'raven': '#7a808d',
        },
      },
    },
  },
})
