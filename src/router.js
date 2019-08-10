import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Store from "./store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        requireAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(page => page.meta.requireAuth)) {
    if (Store.getters.loginCheck) {
      //trueの場合（ログイン済み）
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
