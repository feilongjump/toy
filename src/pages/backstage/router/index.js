import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "$backstage/layout";
import App from "$backstage/App.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/backstage",
    component: Layout,
    redirect: {
      name: "auth"
    },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("$backstage/views/dashboard/index")
      },
      {
        path: "articles",
        name: "article",
        component: App,
        children: [{
            path: "",
            name: "article",
            component: () => import("$backstage/views/article/index")
          },
          {
            path: 'create',
            name: 'article.create',
            component: () => import('$backstage/views/article/create')
          },
          {
            path: ":id(\\d+)/edit",
            name: "article.edit",
            component: () => import("$backstage/views/article/edit")
          }
        ]
      }
    ]
  },
  {
    path: "/backstage/auth",
    name: "auth",
    component: () => import("$backstage/views/auth/index")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
