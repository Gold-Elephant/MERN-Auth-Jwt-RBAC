import { createRouter, createWebHistory } from "vue-router";
import auth from "./auth.js";
import log from "./log.js";
import SideMenu from "../layouts/side-menu/Main.vue";
import church_info from "../views/wizard-layout-3/Main.vue";
import Login from "../views/login/Main.vue";
import Users_management from "../views/management/user.vue";
import Role_managemnent from "../views/management/role.vue";
import Access_managemnent from "../views/management/access.vue";
import ErrorPage from "../views/error-page/Main.vue";
import reset from "../views/reset-password/reset.vue";
require("dotenv").config();

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: reset
  },
  {
    path: "/",
    component: SideMenu,
    children: [
      {
        path: "/church_info",
        name: "church_info",
        component: church_info,
        meta: { middleware: [auth, log] }
      },
      {
        path: "/Users_management",
        name: "Users_management",
        component: Users_management,
        meta: { middleware: [auth, log] }
      },
      {
        path: "/Role_management",
        name: "Role Management",
        component: Role_managemnent,
        meta: { middleware: [auth, log] }
      },
      {
        path: "/Access_management",
        name: "Access Management",
        component: Access_managemnent,
        meta: { middleware: [auth, log] }
      }
    ]
  },
  {
    path: "/error-page",
    name: "error-page",
    component: ErrorPage
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
    meta: { middleware: [auth, log] }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  }
});
function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory(context, middleware, index);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];
    const context = {
      from,
      next,
      router,
      to
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});

export default router;
