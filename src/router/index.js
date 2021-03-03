import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/Login.vue')
  },
  {
    path: '/totalmanage',
    name: 'TotalManage',
    component:() => import('../views/TotalManage/TotalManage.vue')
  },
  {
    path: '/hotelview',
    name: 'HotelView',
    component:() => import('../views/HotelView/HotelView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
