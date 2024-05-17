import axios from "axios";
import { serverToken } from '../router/a6router'

const _axios = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API_BASE_URL,
    timeout: 5000,
});
// 请求拦截器
_axios.interceptors.request.use(
    (config) => { // 统一添加请求头
        if (serverToken.value) {
            config.headers = {
                Authorization: serverToken.value
            }
        }
        return config
    },
    (error) => { // 请求出错时的处理
        return Promise.reject(error)
    }
)
export default _axios;