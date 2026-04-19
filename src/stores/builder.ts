import type {
  BuilderData,
  FieldGroup,
} from '@/types/builder'
import type { Element } from '@/types/fields'
import _ from 'lodash'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { toRaw } from 'vue'

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
      const key: string = uuidv4()
      payload = { ...payload, key }
      this.elements.push(payload)
    },
    remove (payload: number) {
      _.pullAt(this.elements, [payload])
    },
    clone (payload: Element, index: number) {
      const cloned = structuredClone(toRaw(payload))
      cloned.key = uuidv4()
      this.elements.splice(index + 1, 0, cloned)
    },
    setFilterGroup (payload: FieldGroup) {
      this.filterGroup = payload
    },
    setSearchFilterGroup (payload: string) {
      this.searchFilterGroup = payload
    },
  },
})
