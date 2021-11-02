import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/about',
    name: 'About',
    component: import('@/views/about.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
