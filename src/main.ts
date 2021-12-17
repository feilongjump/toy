import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

// styles
import './styles/index.css'

createApp(App).use(router).mount('#app')
