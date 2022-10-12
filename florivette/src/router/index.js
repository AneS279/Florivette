import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Menu.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/First_Page.vue')
    },
    {
      path: '/a_florivette',
      name: 'a_florivette',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/A_Florivete.vue')
    }
  ]
})

export default router
