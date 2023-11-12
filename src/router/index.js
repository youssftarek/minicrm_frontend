import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompanyView from '../views/Companies/View.vue'
import CompanyCreate from '../views/Companies/Create.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home', 
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/companies',
      name: 'companies',
      component: CompanyView
    },
    {
      path: '/companies/create',
      name: 'companiesCreate',
      component: CompanyCreate
    }
  ]
})

export default router
