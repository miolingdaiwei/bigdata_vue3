import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    name: "Layout",
    path: "/",
    component: () => import("@/views/LayoutView.vue"),
    children: [
      {
        path: "",
        name: "default",
        component: () => import("@/views/views/HomeView.vue"),
      },
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/views/HomeView.vue"),
      },
      {
        name: "view1",
        path: "view1",
        component: () => import("@/views/views/View1View.vue"),
      },
      {
        name: "view2",
        path: "view2",
        component: () => import("@/views/views/View2View.vue"),
      },
      {
        name: "view3",
        path: "view3",
        component: () => import("@/views/views/View3View.vue"),
      },
      {
        name: "view4",
        path: "view4",
        component: () => import("@/views/views/View4View.vue"),
      },
      {
        name: "search",
        path: "search",
        component: () => import("@/views/views/SearchView.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

// 全局前置守卫;
router.beforeEach((to, from, next) => {
  //只能防止第一次进来时没有token
  // nprogress.start();
  // if (to.path == "/login") next();
  // else {
  //   if (!localGet("token"))
  //     next({
  //       path: "/login",
  //     });
  //   else {
  //     next();
  //   }
  // }
  next();
});
// 全局后置守卫;
// router.afterEach(() => nprogress.done());

export default router;
