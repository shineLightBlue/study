import axios from "axios";
import { useStorage } from "@vueuse/core";
import { serverToken } from "../router/a6router";

// console.log(import.meta);
// console.log(import.meta.env.VITE_BACKEND_API_BASE_URL);

const _axios = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_BASE_URL,
  timeout: 5000,
});
_axios.interceptors.request.use(
  (config) => {
    // console.log(config);
    // console.log(serverToken.value);
    // 统一添加请求头
    if (serverToken.value) {
      config.headers = {
        Authorization: serverToken.value,
      };
    }
    return config;
  },
  (error) => {
    // 请求出错时的处理
    return Promise.reject(error);
  }
);
export default _axios;
