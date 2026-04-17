// import type { AuthState, User } from '@/types/auth'
export interface AxiosRequestConfig {
  baseURL: string
  timeout: number
  headers?: {
    'Content-Type': string
    'Authorization'?: string
  }
}
