import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CounterComponent from '../components/CounterComponent.vue'
import EmplyoeeComponent from '../components/EmplyoeeComponent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/counter',
    name: 'counter',
    component: CounterComponent
  },
  {
    path: '/employee',
    name: 'emplyee',
    component: EmplyoeeComponent
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
