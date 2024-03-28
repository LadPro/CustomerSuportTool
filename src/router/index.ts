import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestsView from '@/views/TestsView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'test',
    component: TestsView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
