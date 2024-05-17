import { createRouter, createWebHashHistory } from "vue-router";
import A51 from "../views/A51.vue";
import A52 from "../views/A52.vue";
const routes = [
  {
    path: "/a1",
    component: A51,
  },
  {
    path: "/a2",
    component: A52,
  },
  {
    path: "/a3",
    name: "main",
    component: () => import("../views/A53.vue"),
    redirect: "/a3/student", // 重定向到另外路径
    children: [
      {
        path: "student",
        component: () => import("../views/A531.vue"),
      },
      {
        path: "teacher",
        component: () => import("../views/A532.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(), // 路径格式
  routes: routes, // 路由数组
});

export default router;
