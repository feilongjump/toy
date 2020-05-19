import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "auth"
    }
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
