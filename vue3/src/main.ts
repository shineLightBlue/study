import './assets/main.css'
import HelloWorld from './components/HelloWorld.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('Hello',HelloWorld)
app.use(createPinia())
app.use(router)

app.mount('#app')
