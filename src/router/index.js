import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/users",
    name: "Users",
    component: ()=> import("../views/Users.vue")
  },
  {
    path: "/userDetails/:id",
    name: "UserDetails",
    component: ()=> import("../views/UserDetails.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
