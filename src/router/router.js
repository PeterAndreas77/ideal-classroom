import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/signup", component: () => import("../components/Auth/SignUp") },
  { path: "/signin", component: () => import("../components/Auth/SignIn") }
];

const router = new VueRouter({routes});

export default router;
