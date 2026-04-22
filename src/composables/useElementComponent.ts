import { defineAsyncComponent } from 'vue'

const elementComponentMap = {
  // FIELD
  checkbox: defineAsyncComponent(() => import('@/components/field/FieldCheckbox.vue')),
  email: defineAsyncComponent(() => import('@/components/field/FieldEmail.vue')),
  number: defineAsyncComponent(() => import('@/components/field/FieldNumber.vue')),
  password: defineAsyncComponent(() => import('@/components/field/FieldPassword.vue')),
  phone: defineAsyncComponent(() => import('@/components/field/FieldPhone.vue')),
  radio: defineAsyncComponent(() => import('@/components/field/FieldRadio.vue')),
  select: defineAsyncComponent(() => import('@/components/field/FieldSelect.vue')),
  switch: defineAsyncComponent(() => import('@/components/field/FieldSwitch.vue')),
  text: defineAsyncComponent(() => import('@/components/field/FieldText.vue')),
  textarea: defineAsyncComponent(() => import('@/components/field/FieldTextarea.vue')),

  // STRUCTURE
  container: defineAsyncComponent(() => import('@/components/structure/StructureContainer.vue')),

  // STATIC
  button: defineAsyncComponent(() => import('@/components/static/StaticButton.vue')),
  heading: defineAsyncComponent(() => import('@/components/static/FormHeading.vue')),

  // FALLBACK
  fallback: defineAsyncComponent(() => import('@/components/Fallback.vue')),
} as const

export function useElementComponent () {
  function resolve (type: keyof typeof elementComponentMap) {
    return elementComponentMap[type] ?? elementComponentMap['fallback']
  }

  return {
    resolve,
  }
}
