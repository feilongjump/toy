import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    meta: {
      title: 'home',
    },
  },
  {
    name: 'Article',
    path: '/articles',
    component: () => import('@/views/article/Index.vue'),
    meta: {
      title: 'article',
    },
  },
  {
    name: 'Article.Create',
    path: '/articles/create',
    component: () => import('@/views/article/Create.vue'),
    meta: {
      title: 'article',
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
