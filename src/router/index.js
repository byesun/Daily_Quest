import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/modules/home/views/AppHome.vue'
import Login from '@/modules/user/login/views/LoginPage.vue'
import Register from '@/modules/user/register/views/RegisterPage.vue'
import FindId from '@/modules/user/auth/FindId.vue'
import FindPassword from '@/modules/user/auth/FindPassword.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/find-id',
    name: 'FindId',
    component: FindId,
  },
  {
    path: '/find-password',
    name: 'FindPassword',
    component: FindPassword,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
