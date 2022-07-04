import { createApp } from 'vue'
import App from './App.vue'
import Vue3Tour from 'vue3-tour'

import 'vue3-tour/dist/vue3-tour.css'

const app = createApp(App)
app.config.devtools = false
app.use(Vue3Tour).provide('tours', app.config.globalProperties.$tours)

app.mount('#app')