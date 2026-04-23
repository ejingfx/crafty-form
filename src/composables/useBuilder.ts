import type {
  BufferField,
  FieldGroup,
  FieldGroupData,
  ResolveBufferField,
} from '@/types/builder'
import type {
  BuilderElementData,
  Element,
  ElementsWithSubtypes,
  FieldDraggable,
  FieldDraggableList,
} from '@/types/fields'
import { computed } from 'vue'
import { useBuilderStore } from '@/stores/builder'
import { headingSubtypes } from '@/types/fields'
import { useElement } from '../composables/useElement'
import { elementWithSubtypes } from '../types/fields'

export function useBuilder () {
  const builderStore = useBuilderStore()
  const elements = useElement()

  const loadElementInit = (type: string) => {
    const initElements = elements.initElements
    return initElements.filter((el: BuilderElementData) => el.type === type)
  }

  const loadElementInitWithSubtype = (type: string, subtype?: string) => {
    const initElements = elements.initElements
    return initElements
      .filter((el: BuilderElementData) => el.type === type && el.element.properties.subtype === subtype)
  }

  const isWithSubtype = (item: string) => {
    return elementWithSubtypes.includes(item as ElementsWithSubtypes)
  }

  const add = (type: string, subtype?: string) => {
    const element = subtype === undefined
      ? loadElementInit(type)[0].element
      : loadElementInitWithSubtype(type, subtype)[0].element
    builderStore.add(element)
  }

  const end = () => {
    console.log('end')
    builderStore.clearBuffer()
  }

  const remove = (index: number) => {
    builderStore.remove(index)
  }
  const clone = (element: Element, index: number) => {
    builderStore.clone(element, index)
  }
  const resolveBuffer = () => {
    const type: string = builderStore.$state.buffer?.type as string
    const subtype: string = builderStore.$state.buffer?.subtype as string

    return {
      type,
      subtype,
    }
  }
  const stage = (element: FieldDraggable) => {
    console.log('stage')
    if (builderStore.$state.buffer === null) {
      builderStore.$state.buffer = element
    }
  }
  const start = (element: FieldDraggable) => {
    if (builderStore.$state.buffer === null) {
      builderStore.$state.buffer = element
    }
  }
  const addOrInsert = (event: any) => {
    const { type, subtype } = resolveBuffer()
    const { newIndex } = event

    // Check if element push or insertion
    const length = builderStore.$state.elements.length
    // console.log('addOrInsert? length, newIndex...', length, newIndex)

    length === newIndex
      ? push(type, subtype)
      : insert(newIndex, type, subtype)
  }
  const insert = (index: number, type: string, subtype?: string) => {
    const element = subtype === undefined
      ? loadElementInit(type)[0]?.element
      : loadElementInitWithSubtype(type, subtype)[0].element
    const length = builderStore.$state.elements.length

    // console.log('insert? length, index, type, subtype...', length, index, type, subtype)
    builderStore.insert(index, element)
  }
  const push = (type: string, subtype?: string) => {
    isWithSubtype(type)
      ? add(type, subtype)
      : add(type)
    builderStore.clearBuffer()
  }
  const update = (event: any) => {
    const { oldIndex, newIndex } = event
    const element = builderStore.$state.elements[oldIndex]

    if (oldIndex !== newIndex) {
      builderStore.remove(oldIndex)
      builderStore.insert(newIndex, element)
    }
  }

  const setFilterGroup = (type: FieldGroup) => {
    builderStore.setFilterGroup(type)
  }
  const setSearchFilterGroup = (type: FieldGroup) => {
    builderStore.setSearchFilterGroup(type)
  }

  // Sidebar Field Filter Group
  const fieldElements: FieldDraggableList = [
    { icon: 'mdi-text-short', title: 'Short text', subtitle: 'Single line input', type: 'text', group: 'fields', actions: {}, options: {} },
    { icon: 'mdi-text-long', title: 'Long text', subtitle: 'Multi-line input', type: 'textarea', group: 'fields', actions: {}, options: {} },
    { icon: 'mdi-numeric', title: 'Number', subtitle: 'Input field that only allows numbers', type: 'number', group: 'fields', actions: {}, options: {} },
    { icon: 'mdi-phone', title: 'Phone', subtitle: 'Phone number', type: 'phone', group: 'fields', actions: {}, options: {} },
    { icon: 'mdi-email', title: 'Email', subtitle: 'Input field that only allows email', type: 'email', group: 'fields', actions: {}, options: {} },
    // { icon: 'mdi-check', title: 'Paragraph', subtitle: 'Formatted text', type: 'text', group: 'fields', actions: {}, options: {} },
    // { icon: 'mdi-check', title: 'Image', subtitle: 'Display an image', type: 'text', group: 'fields', actions: {}, options: {} },
    // { icon: 'mdi-check', title: 'Link', subtitle: 'Link to another website', type: 'text', group: 'fields', actions: {}, options: {} },
    { icon: 'mdi-radiobox-marked', title: 'Radio', subtitle: 'Select from set of options', type: 'radio', group: 'fields', actions: {}, options: {} },
    { icon: 'mdi-select', title: 'Select', subtitle: 'Select a value', type: 'select', subtype: 'single', group: 'fields', actions: {}, options: {} },
    { icon: 'mdi-select', title: 'Multiple Selection', subtitle: 'Select multiple or add more values', type: 'select', subtype: 'multiple', group: 'fields', actions: {}, options: {} },
    { icon: 'mdi-check', title: 'Checkbox', subtitle: '', type: 'checkbox', group: 'fields', actions: {}, options: {} },
    // { icon: 'mdi-check', title: 'Single Comparison', subtitle: '', type: 'text', group: 'fields', actions: {}, options: {} },
    // { icon: 'mdi-check', title: 'Multiple Comparison', subtitle: '', type: 'text', group: 'fields', actions: {}, options: {} },
    // { icon: 'mdi-check', title: 'Dropdown', subtitle: '', type: 'text', group: 'fields', actions: {}, options: {} },
    // { icon: 'mdi-check', title: 'Tags', subtitle: '', type: 'text', group: 'fields', actions: {}, options: {} },
    { icon: 'mdi-toggle-switch-outline', title: 'Switches', subtitle: '', type: 'switch', group: 'fields', actions: {}, options: {} },
    // { icon: 'mdi-check', title: 'Date', subtitle: '', type: 'text', group: 'fields', actions: {}, options: {} },
    // { icon: 'mdi-check', title: 'Time', subtitle: '', type: 'text', group: 'fields', actions: {}, options: {} },
    // { icon: 'mdi-check', title: 'Mulitple Dates', subtitle: '', type: 'text', group: 'fields', actions: {}, options: {} },
    // { icon: 'mdi-check', title: 'Data Range', subtitle: '', type: 'text', group: 'fields', actions: {}, options: {} },
    // { icon: 'mdi-check', title: 'Slider', subtitle: '', type: 'text', group: 'fields', actions: {}, options: {} },
    // { icon: 'mdi-check', title: 'Range Slider', subtitle: '', type: 'text', group: 'fields', actions: {}, options: {} },
    { icon: 'mdi-lock-outline', title: 'Password', subtitle: '', type: 'password', group: 'fields', actions: {}, options: {} },
    // { icon: 'mdi-check', title: 'URL', subtitle: '', type: 'text', group: 'fields', actions: {}, options: {} },
    // { icon: 'mdi-check', title: 'Location', subtitle: '', type: 'text', group: 'fields', actions: {}, options: {} },
    // { icon: 'mdi-check', title: 'File Upload', subtitle: '', type: 'text', group: 'fields', actions: {}, options: {} },
    // { icon: 'mdi-check', title: 'Image Upload', subtitle: '', type: 'text', group: 'fields', actions: {}, options: {} },
    // { icon: 'mdi-check', title: 'Multi-file Upload', subtitle: '', type: 'text', group: 'fields', actions: {}, options: {} },
    // { icon: 'mdi-check', title: 'Multi-image Upload', subtitle: '', type: 'text', group: 'fields', actions: {}, options: {} },
  ]
  const structureElements: FieldDraggableList = [
    { icon: 'mdi-text-short', title: 'Container', subtitle: 'A container to group elements', type: 'container', group: 'structure', actions: {}, options: {} },
  ]
  const staticElements: FieldDraggableList = [
    { icon: 'mdi-check-bold', title: 'Submit button', subtitle: 'Button that triggers submission', type: 'button', group: 'static', actions: {}, options: {} },
    { icon: 'mdi-format-header-1', title: 'Form heading', subtitle: 'Heading title for forms', type: 'heading', subtype: headingSubtypes[0], group: 'static', actions: {}, options: {} },
    { icon: 'mdi-format-header-2', title: 'Section heading', subtitle: 'Heading title for sections', type: 'heading', subtype: headingSubtypes[1], group: 'static', actions: {}, options: {} },
    { icon: 'mdi-format-header-3', title: 'Subheading', subtitle: 'Heading title for subsections', type: 'heading', subtype: headingSubtypes[2], group: 'static', actions: {}, options: {} },
  ]
  const allFieldGroup: FieldDraggableList = [
    ...fieldElements,
    ...structureElements,
    ...staticElements,
  ]
  const fieldGroupData: FieldGroupData = [
    { type: 'fields', group: 'Fields' },
    { type: 'structure', group: 'Structure' },
    { type: 'static', group: 'Static' },
  ]

  const getAllFieldGroup = () => allFieldGroup
  const getGroupFiltered = computed(() => {
    return allFieldGroup.filter(item => {
      const filter = builderStore.$state.filterGroup
      return item.group === filter
    })
  })

  // Sidebar Search Element Field Filter
  const getSearchFiltered = computed(() => {
    return allFieldGroup.filter(item => {
      const searchFilterGroup = builderStore.$state.searchFilterGroup
      const filter = searchFilterGroup ?? ''

      return item.title.toLowerCase().includes(filter.toLowerCase())
    })
  })

  // Toggle Sidebar Search and Group Elements
  const showSearchFilterGroup = computed(() => {
    if (!builderStore.$state.searchFilterGroup) {
      return true
    }
    return false
  })

  return {
    add,
    addOrInsert,
    allFieldGroup,
    clone,
    end,
    fieldGroupData,
    getAllFieldGroup,
    getGroupFiltered,
    getSearchFiltered,
    insert,
    isWithSubtype,
    push,
    setFilterGroup,
    setSearchFilterGroup,
    showSearchFilterGroup,
    stage,
    start,
    remove,
    resolveBuffer,
    update,
  }
}
