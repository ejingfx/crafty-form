// plugins/axios.js
import type { AxiosRequestConfig } from '@/types/axios'
import type { App } from 'vue'
import axios from 'axios'
import { getToken } from '@/utils/auth'

const apiUrl = 'http://localhost:3333/api/v1'
// const apiUrl = process.env.VUE_APP_API_URL || 'http://localhost:3333/api/v1'

const config: AxiosRequestConfig = {
  baseURL: apiUrl,
  // eslint-disable-next-line unicorn/numeric-separators-style
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
}

const axiosInstance = axios.create(config)

// Optional interceptor to dynamically add latest token
axiosInstance.interceptors.request.use ((config: any) => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export { axiosInstance }

export default {
  install (app: App, options: any) {
    app.config.globalProperties.$axios = axiosInstance
    app.provide('axios', options)
    // console.log('app', app)
  },
}
