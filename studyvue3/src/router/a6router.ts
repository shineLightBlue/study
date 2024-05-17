import { createRouter, createWebHashHistory } from "vue-router";
import { useStorage } from "@vueuse/core";
const clientRoutes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/A6Login.vue"),
  },
  {
    path: "/",
    name: "main",
    component: () => import("../views/A6Main.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: clientRoutes,
});
router.beforeEach((to, from) => {
  if (to.name === "main" && !serverToken.value) {
    return "/login";
  }
});
router.afterEach((to, from) => {
  document.title = to.name?.toString() || "";
});
interface Route {
  path: string;
  component: string;
  name: string;
  parentName: string;
}
export const serverToken = useStorage<string>("serverToken", "");
export const serverUsername = useStorage<string>("serverUsername", "");
export const serverMenus = useStorage("serverMenus", []);
const serverRoutes = useStorage<Route[]>("serverRoutes", []);
addServerRoutes(serverRoutes.value);
export function addServerRoutes(routeList: Route[]) {
  for (const r of routeList) {
    router.addRoute(r.parentName, {
      path: r.path,
      name: r.name,
      component: () => import(r.component),
    });
  }
  serverRoutes.value = routeList;
}
export function resetRoutes() {
  for (const r of clientRoutes) {
    router.addRoute(r);
  }
  serverRoutes.value = null;
  serverMenus.value = null;
  serverUsername.value = null;
  serverToken.value = null;
}
export default router;
