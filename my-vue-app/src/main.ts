import { createApp } from 'vue'
import App from './App.vue'
// import A1 from "./views/A1.vue"; // antdv 入门
// import A2 from "./views/A2.vue"; // antdv 分页
// import A3 from "./views/A3.vue"; // antdv 搜索、删除、删除选中
// import A4 from "./views/A4.vue"; // antdv 搜索、删除、删除选中
// import A5 from "./views/A5.vue"; // vue-router、布局、菜单
import A6 from "./views/A6.vue"; // vue-router、动态路由和菜单
import { createPinia } from "pinia"; // pinia 入门
// import router from "./router/a5router";
import router from "./router/a6router";


import antdv from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

createApp(A6).use(antdv).use(router).use(createPinia()).mount('#app')
