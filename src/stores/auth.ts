import type { AuthState, User } from '@/types/auth'
import { defineStore } from 'pinia'
import {
  clearToken,
  removeUser,
  setToken,
  setUser,
} from '@/utils/auth'

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: null,
    user: null,
  }),

  getters: {
    isAuthenticated: (state): boolean => !!state.token && !!state.user,
    getToken: (state): string | null => state.token,
    getUser: (state): User | null => state.user,
  },

  actions: {
    loadAuth (): void {
      this.token = localStorage.getItem('token')

      const user = localStorage.getItem('user')
      this.user = user ? JSON.parse(user) as User : null
    },
    setAuth (payload: AuthState): void {
      this.token = payload.token
      this.user = payload.user

      if (payload.token) {
        localStorage.setItem('token', payload.token)
      } else {
        localStorage.removeItem('token')
      }

      if (payload.user) {
        localStorage.setItem('user', JSON.stringify(payload.user))
      } else {
        localStorage.removeItem('user')
      }
    },
    login (payload: AuthState) {
      this.token = payload.token
      this.user = payload.user
      setToken(payload.token as string)
      setUser(payload.user)
      // axios.defaults.headers.common.Authorization = `Bearer ${token}` // TODO:
      // this.isAuth = true
    },
    logout () {
      this.token = ''
      this.user = null
      clearToken()
      removeUser()
      // delete axios.defaults.headers.common.Authorization // TODO:
      // this.isAuth = false
    },
    clearAuth (): void {
      this.token = null
      this.user = null

      localStorage.removeItem('token')
      localStorage.removeItem('user')
    },
  },
})
