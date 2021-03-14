import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../views/Users.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Users',
    component: Users
  },
  {
    path: '/user/:id',
    name: 'user-edit',
    component: () => import('../views/EditUser.vue')
  },
  {
    path: '/user',
    name: 'user-add',
    component: () => import('../views/AddUser.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
