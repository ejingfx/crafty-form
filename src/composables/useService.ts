import { getCurrentInstance } from 'vue'

export function useService () {
  const instance = getCurrentInstance()
  const service = (instance?.proxy as any)?.$service

  if (!service) {
    throw new Error('Service not found')
  }

  return service
}
