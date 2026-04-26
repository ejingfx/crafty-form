import type {
  BufferField,
  BuilderData,
  FieldGroup,
} from '@/types/builder'
import type { Element, Mode } from '@/types/fields'
import _ from 'lodash'
import { defineStore, storeToRefs } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { toRaw } from 'vue'
import { useTreeStore } from '../stores/tree'

export const useBuilderStore = defineStore('builder', {
  state: (): BuilderData => ({
    elements: [],
    settings: {
      mode: 'editor',
    },
    filterGroup: 'fields',
    searchFilterGroup: '',
    buffer: null,
  }),
  getters: {
    getBuffer: state => state.buffer,
    getElements: state => state.elements,
    getFilterGroup: state => state.filterGroup,
    getMode: state => state.settings.mode,
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
      const treeStore = useTreeStore()
      const { setActivated } = treeStore
      const { getActivated } = storeToRefs(treeStore)

      if (getActivated.value) {
        setActivated(false)
        console.log('setActivated?', getActivated.value)
      }
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
      this.elements.splice(index, 0, payload)
      this.clearBuffer()
    },
    setBuffer (payload: BufferField) {
      this.buffer = payload
    },
    setMode (payload: Mode) {
      this.settings.mode = payload
    },
    setFilterGroup (payload: FieldGroup) {
      this.filterGroup = payload
    },
    setSearchFilterGroup (payload: string) {
      this.searchFilterGroup = payload
    },
  },
})
