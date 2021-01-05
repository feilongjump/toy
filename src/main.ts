import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// styles
import './styles/tailwind.css'
import './styles/app.scss'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
