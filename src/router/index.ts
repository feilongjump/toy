import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/index.vue'
import BackstageLayout from '@/layouts/backstage/index.vue'

const backstage = [
  {
    path: '/backstage',
    component: BackstageLayout,
    redirect: { name: 'Backstage.Dashboard' },
    children: [
      {
        path: 'dashboard',
        name: 'Backstage.Dashboard',
        component: () => import('@/views/backstage/dashboard/index.vue')
      }
    ]
  }
]

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/articles/:id(\\d+)',
        name: 'Article.Show',
        component: () => import('@/views/articles/show.vue')
      }
    ]
  },
  ...backstage
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
