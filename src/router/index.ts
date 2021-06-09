import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/index.vue'
import BackstageLayout from '@/layouts/backstage/index.vue'

const backstage = [
  {
    path: '/backstage',
    component: BackstageLayout,
    children: [
      {
        path: '',
        name: 'Backstage.Home',
        component: () => import('@/views/backstage/home/index.vue')
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
