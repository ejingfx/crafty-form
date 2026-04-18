import type { FieldsData } from '@/types/fields'
import { defineStore } from 'pinia'

export const useFieldStore = defineStore('fieldStore', {
  state: (): FieldsData => ({
    elements: [],
    settings: [],
  }),
  getters: {
    getMenuList: (state: FieldsData) => state,
  },
})
