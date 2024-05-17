import { createRouter,createWebHistory } from "vue-router";
import Home from '@/views/Home/index.vue'
import About from '@/views/About/index.vue'
const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/about',
          name: 'About',
          component: About
        }
    ]
})
export default router