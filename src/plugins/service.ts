import type { App } from 'vue'

export default {
  install (app: App) {
    const services = {
      login: '/auth/login',
      logout: '/auth/logout',
      me: '/auth/me',
    }

    app.config.globalProperties.$service = services
    app.provide('services', services)
  },
}
