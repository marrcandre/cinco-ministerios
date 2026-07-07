import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'cincoMinisteriosLight',
    themes: {
      cincoMinisteriosLight: {
        dark: false,
        colors: {
          primary: '#1B5438',
          secondary: '#C8A220',
          background: '#F8F8F5',
          surface: '#FFFFFF',
          error: '#D32F2F',
          success: '#388E3C',
          'on-primary': '#FFFFFF',
          'on-secondary': '#FFFFFF',
          'on-background': '#1A1A1A',
          'on-surface': '#1A1A1A',
          'on-error': '#FFFFFF',
          'on-success': '#FFFFFF',
        },
      },
      cincoMinisteriosDark: {
        dark: true,
        colors: {
          primary: '#2D8A5A',
          secondary: '#D4A82E',
          background: '#121212',
          surface: '#1E1E1E',
          error: '#EF5350',
          success: '#66BB6A',
          'on-primary': '#FFFFFF',
          'on-secondary': '#FFFFFF',
          'on-background': '#E8E8E8',
          'on-surface': '#E8E8E8',
          'on-error': '#FFFFFF',
          'on-success': '#FFFFFF',
        },
      },
    },
  },
  defaults: {
    VBtn: {
      variant: 'flat',
      rounded: 'lg',
    },
    VCard: {
      rounded: 'lg',
      elevation: 1,
    },
    VTextField: {
      variant: 'outlined',
      rounded: 'lg',
    },
  },
})
