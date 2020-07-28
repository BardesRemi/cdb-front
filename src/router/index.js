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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */'../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "login" */'../views/Register.vue')
  },
  {
    path: '/addComputer',
    name: 'AddComputer',
    component: () => import(/* webpackChunkName: "addComputer" */'../views/AddComputer.vue')
  },
  {
    path: '/editComputer',
    name: 'EditComputer',
    component: () => import(/* webpackChunkName: "editComputer" */'../views/EditComputer.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
