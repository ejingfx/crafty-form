/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { loadLayoutMiddleware } from '@/middleware/layout'
import { loadNavGuardMiddleware } from '@/middleware/navigation'
import Dashboard from '@/pages/dashboard.vue'
import Error from '@/pages/error.vue'
import Index from '@/pages/index.vue'
import Login from '@/pages/login.vue'
import NotFound from '@/pages/not-found.vue'

const protectedRoutes = [
  {
    path: '/',
    component: Index,
    meta: {
      layout: 'default',
      requiresAuth: true,
      requiresGuest: false,
    },
  },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: {
      layout: 'default',
      requiresAuth: true,
      requiresGuest: false,
    },
  },
]

const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      layout: 'guest',
      requiresAuth: false,
      requiresGuest: true,
    },
  },
  {
    path: '/error',
    name: 'error',
    component: Error,
    meta: {
      layout: 'default',
      requiresAuth: false,
      requiresGuest: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
    meta: {
      layout: 'guest',
      requiresAuth: false,
      requiresGuest: true,
    },
  },
]

const allRoutes = [
  ...protectedRoutes,
  ...publicRoutes,
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(allRoutes),
})

// router.beforeEach(async (to, from) => {
//   // console.log('route', to, from)
//   // next(to.fullPath)
//   return
// })

router.beforeEach(loadLayoutMiddleware)
router.beforeEach(loadNavGuardMiddleware)

export default router
