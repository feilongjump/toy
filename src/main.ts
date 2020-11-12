import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// styles
import './styles/tailwind.css'

createApp(App)
  .use(router)
  .mount('#app')
