import { RouteRecordRaw } from 'vue-router'

const todoRoute: Array<RouteRecordRaw> = [
  {
    name: 'Todo',
    path: '/todo',
    component: () => import('@/views/todo/Index.vue'),
    meta: {
      title: 'todo',
      auth: true,
    },
  },
]

export default todoRoute
