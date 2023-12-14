import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import { layoutMiddleware } from './layout.middleware'
import { Layouts } from '@/layouts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage,
      meta: {
        layout: Layouts.default
      }
    }
  ]
})

router.beforeEach(layoutMiddleware)

export default router
