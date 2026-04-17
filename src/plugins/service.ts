import type { App } from 'vue'

export default {
  install (app: App) {
    const auth = {
      login: '/auth/login',
      logout: '/auth/logout',
      me: '/auth/me',
    }
    const pages = {}

    const services = {
      ...auth,
      ...pages,
      detailPages: [
        '/patients/:id',
        '/departments/:id',
      ],
    }

    app.config.globalProperties.$service = services
    app.provide('services', services)
  },
}
