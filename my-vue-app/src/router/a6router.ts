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
// console.log('serverRoutes', serverRoutes)
const router = createRouter({
    history: createWebHashHistory(),
    routes: clientRoutes,
});
export function addServerRoutes(routeList: Route[]) {
    // console.log(routeList)
    for (const r of routeList) {
        // console.log(r)
        router.addRoute(r.parentName, {
            path: r.path,
            name: r.name,
            component: () => import(r.component),
        });
    }
    serverRoutes.value = routeList;
}
addServerRoutes(serverRoutes.value);
export default router;