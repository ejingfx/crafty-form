import { getCurrentInstance } from 'vue'

export function useService () {
  const internalInstance = getCurrentInstance()
  return internalInstance?.proxy?.$service
}
