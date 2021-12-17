import { RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import { ElMessage } from 'element-plus'
import App from '@/App.vue'
import Layout from '@/layouts/index.vue'

const beforeEnter = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const isLogged = !!localStorage.getItem('user')

  if (to.meta.auth && !isLogged && to.name !== 'Login') {
    ElMessage.warning('先登录一下吧。')

    next({ name: 'Login' })
  } else {
    next()
  }
}

const backstage: Array<RouteRecordRaw> = [
  {
    path: '/backstage',
    name: 'Backstage',
    redirect: { name: 'Backstage.Overview' },
    component: Layout,
    beforeEnter,
    children: [
      {
        path: 'overview',
        name: 'Backstage.Overview',
        component: () => import('@/views/backstage/overview/index.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: 'articles',
        component: App,
        children: [
          {
            path: '',
            name: 'Backstage.Article',
            component: () => import('@/views/backstage/articles/index.vue'),
            meta: {
              auth: true
            }
          },
          {
            path: 'add',
            name: 'Backstage.Article.Add',
            component: () => import('@/views/backstage/articles/add.vue'),
            meta: {
              auth: true
            }
          },
          {
            path: ':id(\\d+)/edit',
            name: 'Backstage.Article.Edit',
            component: () => import('@/views/backstage/articles/edit.vue'),
            meta: {
              auth: true
            }
          }
        ]
      }
    ]
  }
]

export default backstage
