import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";
import App from "@/App.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: {
      name: "auth"
    },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/index")
      },
      {
        path: "articles",
        name: "article",
        component: App,
        children: [{
            path: "",
            name: "article",
            component: () => import("@/views/article/index")
          },
          {
            path: 'create',
            name: 'article.create',
            component: () => import('@/views/article/create')
          },
          {
            path: ":id(\\d+)/edit",
            name: "article.edit",
            component: () => import("@/views/article/edit")
          }
        ]
      }
    ]
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/views/auth/index")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
