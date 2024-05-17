import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Main from '../views/Main.vue'
import Student from '../views/Student.vue'
import Book from '../views/Book.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      age: 20,
      name: 'deng'
    },
    redirect: {
      name: 'main'
    }
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
    children: [
      {
        path: "student",
        component: Student,
        meta: {
          age: 30,
          name: 'ye'
        }
      },
      {
        path: "book",
        component: Book,
        meta: {
          age: 30,
          name: 'ye'
        }
      }
    ]
  }

]



const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  // 需要登录的路由：地址是以 /member 开头
  console.log(to, from)
  // const { profile } = store.state.user
  // if (!profile.token && to.path.startsWith('/member')) {
  //   return next('/login?redirectUrl=' + encodeURIComponent(to.fullPath))
  // }
  next()
})

export default router
