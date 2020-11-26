import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// styles
import './styles/tailwind.css'
import './styles/app.scss'

createApp(App)
  .use(router)
  .mount('#app')
