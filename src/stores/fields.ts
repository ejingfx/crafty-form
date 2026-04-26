import type { FieldsData } from '@/types/fields'
import { defineStore } from 'pinia'

export const useFieldStore = defineStore('fieldStore', {
  state: (): FieldsData => ({
    elements: [],
    settings: {
      mode: 'editor',
    },
  }),
  getters: {
    getMenuList: (state: FieldsData) => state,
  },
})
