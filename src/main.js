// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index.js'
import 'bootstrap/dist/css/bootstrap.css'


// const pinia = createPinia();
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
