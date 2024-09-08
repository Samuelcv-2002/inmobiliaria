import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

// Rutas
import AuthRoutes from '../modules/Auth/routes/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  ...AuthRoutes.map((route) => route)
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
