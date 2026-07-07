import { createApp } from 'vue'
import App from './App.vue'
import router from '@/app/router'
import vuetify from '@/styles/theme/vuetify'
import './styles/main.css'

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
