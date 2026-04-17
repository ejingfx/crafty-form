import type {
  RouteLocationNormalized,
} from 'vue-router'
import { useAuthStore } from '@/stores/auth'

export async function loadNavGuardMiddleware (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
) {
  const authStore = useAuthStore()
  // console.log('loadNavGuardMiddleware...', authStore, to.meta.requiresAuth, from.meta.requiresAuth)
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return '/login'
  }
  if (
    (to.meta.requiresAuth && authStore.isAuthenticated && to.path === '/')
    || (to.meta.requiresGuest && authStore.isAuthenticated)
  ) {
    return '/dashboard'
  }
}
