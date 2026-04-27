import { defineAsyncComponent, ref } from 'vue'

const panelComponentMap = {
  properties: defineAsyncComponent(() => import('@/components/builder/BuilderPropertiesPanel.vue')),
  layout: defineAsyncComponent(() => import('@/components/builder/BuilderLayoutPanel.vue')),
  validation: defineAsyncComponent(() => import('@/components/builder/BuilderValidationPanel.vue')),
  logic: defineAsyncComponent(() => import('@/components/builder/BuilderLogicPanel.vue')),
  attributes: defineAsyncComponent(() => import('@/components/builder/BuilderAttributesPanel.vue')),

  // TODO: FALLBACK
} as const

export function usePanel () {
  const resolve = (type: keyof typeof panelComponentMap) => {
    return panelComponentMap[type] ?? panelComponentMap[type]
  }

  const toggle = (length: number) => {
    return Array
      .from({ length })
      .reduce((acc: number[], _: any, index: number) => {
        acc.push(index)
        return acc
      }, [])
  }

  return {
    resolve,
    toggle,
  }
}
