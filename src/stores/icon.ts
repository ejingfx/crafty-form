// import type { IconMap } from '../stores/icon'
import { defineStore } from 'pinia'

export const useIconStore = defineStore('icon', {
  state: (): any => ({
    map: [],
  }),
  getters: {},
  actions: {},
})
