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
        path: 'topics',
        name: 'Backstage.Topic',
        component: () => import('@/views/backstage/topics/index.vue')
      },
      {
        path: 'topics/:id(\\d+)',
        name: 'Backstage.Topic.Show',
        component: () => import('@/views/backstage/topics/form.vue'),
        meta: {
          parentName: 'Backstage.Topic'
        }
      },
      {
        path: 'topics/create',
        name: 'Backstage.Topic.Create',
        component: () => import('@/views/backstage/topics/form.vue'),
        meta: {
          parentName: 'Backstage.Topic'
        }
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
        path: '/topics/:id(\\d+)',
        name: 'Topic.Show',
        component: () => import('@/views/topics/show.vue')
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
