/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

import type { App } from 'vue'
import { createPinia } from 'pinia'
import axios from '@/plugins/axios'
import i18n from '@/plugins/i18n'
import service from '@/plugins/service'
import utils from '../plugins/utils'
import vuetify from '../plugins/vuetify'
import router from '../router'

export function registerPlugins (app: App) {
  app.use(vuetify)
  app.use(createPinia())
  app.use(i18n)
  app.use(router)
  app.use(utils)
  app.use(axios, {})
  app.use(service)
}
