import { RouteRecordRaw } from 'vue-router'

const articlesRoute: Array<RouteRecordRaw> = [
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
  {
    name: 'Article.Edit',
    path: '/articles/:id(\\d+)/edit',
    component: () => import('@/views/article/Edit.vue'),
    meta: {
      title: 'article',
    },
  },
  {
    name: 'Article.Show',
    path: '/articles/:id(\\d+)',
    component: () => import('@/views/article/Show.vue'),
    meta: {
      title: 'article',
    },
  },
]

export default articlesRoute
