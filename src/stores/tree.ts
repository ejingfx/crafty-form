import type { ActiveTreeItem } from '@/types/tree'
import { defineStore } from 'pinia'

export const useTreeStore = defineStore('tree', {
  state: (): ActiveTreeItem => ({
    activated: false,
    element: null,
    key: null,
    index: null,
  }),
  getters: {
    getActivated: state => state.activated,
    getElement: state => state.element,
  },
  actions: {
    clear () {
      this.activated = false
      this.element = null
      this.element = null
      this.key = null
      this.index = null
    },
    setActivated (payload: boolean) {
      this.activated = payload
    },
    setElement (payload: any) {
      this.element = payload
    },
    setIndex (payload: number) {
      this.index = payload
    },
    setKey (payload: string) {
      this.key = payload
    },
    setActiveTreeItem (payload: ActiveTreeItem) {
      this.setActivated(true)
      this.setElement(payload.element)
      this.setIndex(payload.index as number)
      this.setKey(payload.key as string)
    },
    toggleActivated () {
      this.activated = !this.activated
    },
  },
})
