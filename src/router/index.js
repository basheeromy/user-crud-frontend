import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create-users',
    name: 'create',
    component: () => import('../views/CreateUsers.vue')
  },
  {
    path: '/manage-users',
    name: 'manage',
    component: () => import('../views/ManageUsers.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
