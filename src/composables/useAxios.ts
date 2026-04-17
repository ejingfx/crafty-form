import type { AxiosRequestConfig } from 'axios'
import { getCurrentInstance } from 'vue'

export function useAxios (options?: AxiosRequestConfig) {
  const instance = getCurrentInstance()
  const axios = instance?.proxy?.$axios

  if (!axios) {
    throw new Error('Axios not found')
  }

  return {
    get: (url: string, config?: AxiosRequestConfig) =>
      axios.get(url, { ...options, ...config }),

    post: (url: string, data?: any, config?: AxiosRequestConfig) =>
      axios.post(url, data, { ...options, ...config }),

    put: (url: string, data?: any, config?: AxiosRequestConfig) =>
      axios.put(url, data, { ...options, ...config }),

    delete: (url: string, config?: AxiosRequestConfig) =>
      axios.delete(url, { ...options, ...config }),
  }
}
