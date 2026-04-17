import type { DrawerState } from '@/types/drawer'
import { defineStore } from 'pinia'

export const useDrawerStore = defineStore('drawer', {
  state: (): DrawerState => ({
    drawer: true,
    dataDetailActiveProps: {},
    dataDrawer: false,
    dataDrawerAction: '',
    dataDrawerLoader: true,
    dataDrawerActiveComponent: null,
    dataDrawerActiveProps: {},
  }),
  actions: {
    setDataDrawerActiveComponent (payload: any) {
      this.dataDrawerActiveComponent = payload
    },
    setDataDrawerActiveProps (payload: any) {
      this.dataDrawerActiveProps = { ...payload }
    },
    setDataDrawerLoader (payload: any) {
      this.dataDrawerLoader = payload
    },
    toggleDrawer () {
      this.drawer = !this.drawer
    },
    toggleDataDrawer () {
      this.dataDrawer = !this.dataDrawer

      if (this.dataDrawer) {
        this.dataDrawerLoader = true
      } else {
        this.dataDrawerAction = ''
        this.dataDrawerLoader = false
      }
    },
    openDrawer () {
      this.drawer = true
    },
    openDataDrawer (action: string) {
      this.dataDrawer = true
      this.dataDrawerAction = action
      this.dataDrawerLoader = true
    },
    closeDrawer () {
      this.drawer = false
    },
    closeDataDrawer () {
      this.dataDrawer = false
      this.dataDrawerActiveComponent = null
      this.dataDrawerActiveProps = {}
      this.dataDrawerAction = ''
      this.dataDrawerLoader = false
    },
  },
})
