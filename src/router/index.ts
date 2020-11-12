import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Article',
    path: '/articles',
    component: () => import('@/views/Article.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
