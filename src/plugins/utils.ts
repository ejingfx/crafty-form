import type { App } from 'vue'
import * as helper from '@/utils/helper'

export default {
  install (app: App) {
    app.config.globalProperties.$utils = helper
    app.provide('utils', helper)
  },
}
