import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/Home.vue')
    },
    {
      path: '/utdanning',
      name: 'utdanning',
      component: () => import('../pages/Utdanning.vue')
    },
    {
      path: '/erfaring',
      name: 'erfaring',	
      component: () => import('../pages/Erfaring.vue')
    },
    {
      path: '/erfaring/lang',
      name: 'språk',
      component: () => import('../pages/Språk.vue')
    },
    {
      path: '/erfaring/jobb',
      name: 'jobb',
      component: () => import('../pages/Jobb.vue')
    },
    {
      path: '/prosjekter',
      name: 'prosjekter',
      component: () => import('../pages/Prosjekter.vue')
    },
    {
      path: '/:notfound(.*)',
      name: 'notfound',
      component: () => import('../pages/Error404.vue')
    }
  ]
})

export default router