import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import App from '@/App.vue'
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
      },
      {
        path: 'articles',
        name: 'Backstage.Article',
        component: () => import('@/views/backstage/articles/index.vue')
      },
      {
        path: 'users',
        name: 'Backstage.User',
        component: () => import('@/views/backstage/users/index.vue')
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
  {
    path: '/login',
    component: App,
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('@/views/auth/login.vue')
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
