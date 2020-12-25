import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/Index.vue'
import articles from './articles'
import todo from './todo'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/auth/login',
    name: 'Auth.Login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/',
    component: Layout,
    redirect: '/articles',
    children: [...articles, ...todo],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
