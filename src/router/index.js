import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";

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
