import { createApp } from "vue";
import "ant-design-vue/dist/antd.css";
import antdv from "ant-design-vue";
import "amfe-flexible";
// import E0 from "./views/E0.vue"; // 入门案例
// import E1 from "./views/E1.vue"; // ref 与 reactive
// import E2 from "./views/E2.vue"; // 属性绑定
// import E3 from "./views/E3.vue"; // 事件绑定
// import E4 from "./views/E4.vue"; // 表单绑定
// import E5 from "./views/E5.vue"; // 计算属性
// import E6 from "./views/E6.vue"; // xhr API
// import E7 from "./views/E7.vue"; // axios 获取数据
import Login from "./views/A6Login.vue";
// import E8 from "./views/E8.vue"; // axios 发送数据
// import E9 from "./views/E9.vue"; // 条件与列表
// import E10 from "./views/E10.vue"; // 监听器
// import E11 from "./views/E11.vue"; // usevue
// import E12 from "./views/E12.vue"; // vue-request useRequest
// import E13 from "./views/E13.vue"; // vue-request usePagination
// import E14 from "./views/E14.vue"; // 子组件 例1
// import E15 from "./views/E15.vue"; // 子组件 例2
// import A1 from "./views/A1.vue"; // antdv 入门
// import A2 from "./views/A2.vue"; // antdv 分页
// import A3 from "./views/A3.vue"; // antdv 搜索、删除、删除选中
// import A4 from "./views/A4.vue"; // antdv 搜索、删除、删除选中
// import A5 from "./views/A5.vue"; // vue-router、布局、菜单
// import router from "./router/a5router";
import A6 from "./views/A6.vue"; // vue-router、动态路由和菜单
import router from "./router/a6router";
// import "./style.css";
// import App from "./App.vue";
// import router from "./router/a6router";
import { createPinia } from "pinia"; // pinia 入门
createApp(A6).use(antdv).use(router).use(createPinia()).mount("#app");
