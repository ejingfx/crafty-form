import type { ComponentCustomProperties } from 'vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: Record<string, any>
    $service: Record<string, any>
  }
}

// export {}
