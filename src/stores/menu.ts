import type { MenuLists } from '@/types/menu'
import { defineStore } from 'pinia'

const list = [
  { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/dashboard' },
  { title: 'Users', icon: 'mdi-account', to: '/users' },
  { title: 'Forms', icon: 'mdi-list-box-outline', to: '/forms' },
]
const system = [
  { title: 'Account', icon: 'mdi-account-circle', to: '/account' },
  { title: 'Settings', icon: 'mdi-cog', to: '/settings' },
]

export const useMenuStore = defineStore('menuList', {
  state: (): MenuLists => ({
    menu: list,
    sidebar: list,
    system,
  }),

  getters: {
    getMenuList: (state: MenuLists) => state,
  },
})
