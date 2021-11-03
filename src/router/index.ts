import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import App from '@/App.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'Home' },
    component: App,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/auth/login.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
