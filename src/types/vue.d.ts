declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: Record<string, any>
    $service: Record<string, any>
  }
}

// eslint-disable-next-line unicorn/require-module-specifiers
export {}
