import { getCurrentInstance } from 'vue'

export function useAxios () {
  const internalInstance = getCurrentInstance()
  return internalInstance?.proxy?.$axios
}
