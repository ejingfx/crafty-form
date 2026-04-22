import type {
  BufferField,
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
    buffer: null,
  }),
  getters: {
    getBuffer: state => state.buffer,
    getElements: state => state.elements,
    getFilterGroup: state => state.filterGroup,
    getSearchFilterGroup: state => state.searchFilterGroup,
  },
  actions: {
    add (payload: Element) {
      const key: string = uuidv4()
      payload = { ...payload, key }
      this.elements.push(payload)
      this.clearBuffer()
    },
    remove (payload: number) {
      _.pullAt(this.elements, [payload])
    },
    clone (payload: Element, index: number) {
      const cloned = structuredClone(toRaw(payload))
      cloned.key = uuidv4()
      this.elements.splice(index + 1, 0, cloned)
    },
    clearBuffer () {
      this.buffer = null
    },
    insert (index: number, payload: Element) {
      console.log('store length, index...', this.elements.length, index)
      this.elements.splice(index, 0, payload)
      console.log('result', this.elements)
      this.clearBuffer()
    },
    setBuffer (payload: BufferField) {
      this.buffer = payload
    },
    setFilterGroup (payload: FieldGroup) {
      this.filterGroup = payload
    },
    setSearchFilterGroup (payload: string) {
      this.searchFilterGroup = payload
    },
  },
})
