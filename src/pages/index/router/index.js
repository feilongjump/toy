import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import('$index/views/index/home'),
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
