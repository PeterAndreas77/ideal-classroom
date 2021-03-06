import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: () => import("../components/Home/Home") },
  { path: "/register", component: () => import("../components/Auth/Register") },
  { path: "/login", component: () => import("../components/Auth/Login") }
];

const router = new VueRouter({routes});

export default router;
