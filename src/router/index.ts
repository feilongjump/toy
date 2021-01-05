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
    name: 'Home',
    redirect: '/articles',
    children: [...articles, ...todo],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/error/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(to => {
  const isLogged = !!localStorage.getItem('user')

  if (to.meta.auth && !isLogged && to.name !== 'Auth.Login') {
    router.push({ name: 'Auth.Login' })
  }
})

export default router
