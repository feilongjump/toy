import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import App from '@/App.vue'
import afterEach from './afterEach'
import backstage from './backstage'

const home = {
  path: '',
  name: 'Home',
  component: () => import('@/views/home/index.vue')
}

const auth = [
  {
    path: 'login',
    name: 'Login',
    component: () => import('@/views/auth/index.vue')
  },
  {
    path: 'register',
    name: 'Register',
    component: () => import('@/views/auth/index.vue')
  }
]

const articles = {
  path: 'articles',
  redirect: { name: 'Article' },
  component: App,
  children: [
    {
      path: '',
      name: 'Article',
      component: () => import('@/views/articles/index.vue')
    },
    {
      path: ':id(\\d+)',
      name: 'Article.Show',
      component: () => import('@/views/articles/show.vue')
    }
  ]
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'Home' },
    component: App,
    children: [home, ...auth, articles]
  },
  ...backstage
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'activate-menu',
  routes
})

router.afterEach(afterEach)

export default router
