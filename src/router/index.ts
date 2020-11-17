import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/Index.vue'
import articles from './articles'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/auth/login',
    name: 'Auth.Login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        name: 'Home',
        path: '',
        component: () => import('@/views/Home.vue'),
        meta: {
          title: 'home',
        },
      },
      ...articles,
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
