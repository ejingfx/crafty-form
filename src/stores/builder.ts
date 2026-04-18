import type {
  BuilderData,
  FieldGroup,
} from '@/types/builder'
import type { Element } from '@/types/fields'
import { defineStore } from 'pinia'

export const useBuilderStore = defineStore('builder', {
  state: (): BuilderData => ({
    elements: [],
    settings: [],
    filterGroup: 'fields',
    searchFilterGroup: '',
  }),
  getters: {
    getElements: state => state.elements,
    getFilterGroup: state => state.filterGroup,
    getSearchFilterGroup: state => state.searchFilterGroup,
  },
  actions: {
    add (payload: Element) {
      this.elements.push(payload)
    },
    setFilterGroup (payload: FieldGroup) {
      this.filterGroup = payload
    },
    setSearchFilterGroup (payload: string) {
      this.searchFilterGroup = payload
    },
  },
})
