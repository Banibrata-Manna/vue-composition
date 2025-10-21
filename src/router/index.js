import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Users from '@/views/Users.vue'
import User from '@/views/User.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/users',
    props: true,
    name: 'users',
    component: Users
  },
  {
    path: '/users/:userId',
    props: true,
    name: 'user',
    component: User
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
