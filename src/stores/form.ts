import type { Form, FormChild, FormRoot } from '@/types/form'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { useBuilderStore } from './builder'

export const useFormStore = defineStore('form', {
  state: (): Form => ({
    id: null,
    data: [],
    name: '',
    workspace: null,
  }),
  getters: {
    getId: state => state.id,
    getData: state => state.data,
    getName: state => state.name,
    getWorkspace: state => state.workspace,
  },
  actions: {
    init () {
      const root: FormRoot = {
        key: uuidv4(),
        icon: 'mdi-poll',
        title: 'Sample Form',
        element: null,
        children: [],
      }
      if (this.data.length <= 0) {
        this.data.push(root)
      }
    },
    mapElementsToChildren () {
      const { elements } = useBuilderStore()

      const mapped = elements.map((element: any) => ({
        key: uuidv4(),
        icon: element.properties.icon,
        title: element.type,
        element,
        children: [],
      }))

      if (this.$state.data.length === 0) {
        return
      }

      this.$state.data[0].children = mapped
    },
    setId (payload: number) {
      this.$state.id = payload
    },
    setData (payload: FormChild[]) {
      this.$state.data = payload
    },
    setName (payload: string) {
      this.$state.name = payload
    },
    setWorkspace (payload: number) {
      this.$state.workspace = payload
    },
  },
})
