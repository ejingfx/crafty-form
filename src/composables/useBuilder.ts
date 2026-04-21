import type {
  FieldGroup,
  FieldGroupData,
} from '@/types/builder'
import type {
  BuilderElementData,
  Element,
  ElementsWithSubtypes,
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
  const remove = (index: number) => {
    builderStore.remove(index)
  }
  const clone = (element: Element, index: number) => {
    builderStore.clone(element, index)
  }
  const setFilterGroup = (type: FieldGroup) => {
    builderStore.setFilterGroup(type)
  }
  const setSearchFilterGroup = (type: FieldGroup) => {
    builderStore.setSearchFilterGroup(type)
  }

  // Sidebar Field Filter Group
  const fieldElements: FieldDraggableList = [
    { icon: 'mdi-text-short', title: 'Short text', subtitle: 'Single line input', type: 'text', group: 'fields', action: {} },
    { icon: 'mdi-text-long', title: 'Long text', subtitle: 'Multi-line input', type: 'textarea', group: 'fields', action: {} },
    { icon: 'mdi-numeric', title: 'Number', subtitle: 'Input field that only allows numbers', type: 'number', group: 'fields', action: {} },
    { icon: 'mdi-phone', title: 'Phone', subtitle: 'Phone number', type: 'phone', group: 'fields', action: {} },
    { icon: 'mdi-email', title: 'Email', subtitle: 'Input field that only allows email', type: 'email', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Paragraph', subtitle: 'Formatted text', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Image', subtitle: 'Display an image', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Link', subtitle: 'Link to another website', type: 'text', group: 'fields', action: {} },
    { icon: 'mdi-radiobox-marked', title: 'Radio', subtitle: 'Select from set of options', type: 'radio', subtype: 'group', group: 'fields', action: {} },
    { icon: 'mdi-select', title: 'Select', subtitle: 'Select a single or multiple values', type: 'select', group: 'fields', action: {} },
    { icon: 'mdi-check', title: 'Checkbox', subtitle: '', type: 'checkbox', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Single Comparison', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Multiple Comparison', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Dropdown', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Tags', subtitle: '', type: 'text', group: 'fields', action: {} },
    { icon: 'mdi-toggle-switch-outline', title: 'Switches', subtitle: '', type: 'switch', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Date', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Time', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Mulitple Dates', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Data Range', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Slider', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Range Slider', subtitle: '', type: 'text', group: 'fields', action: {} },
    { icon: 'mdi-lock-outline', title: 'Password', subtitle: '', type: 'password', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'URL', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Location', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'File Upload', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Image Upload', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Multi-file Upload', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Multi-image Upload', subtitle: '', type: 'text', group: 'fields', action: {} },
  ]
  const structureElements: FieldDraggableList = [
    { icon: 'mdi-text-short', title: 'Container', subtitle: 'A container to group elements', type: 'container', group: 'structure', action: {} },
  ]
  const staticElements: FieldDraggableList = [
    { icon: 'mdi-check-bold', title: 'Submit button', subtitle: 'Button that triggers submission', type: 'button', group: 'static', action: {} },
    { icon: 'mdi-format-header-1', title: 'Form heading', subtitle: 'Heading title for forms', type: 'heading', subtype: headingSubtypes[0], group: 'static', action: {} },
    { icon: 'mdi-format-header-2', title: 'Section heading', subtitle: 'Heading title for sections', type: 'heading', subtype: headingSubtypes[1], group: 'static', action: {} },
    { icon: 'mdi-format-header-3', title: 'Subheading', subtitle: 'Heading title for subsections', type: 'heading', subtype: headingSubtypes[2], group: 'static', action: {} },
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
    remove,
    clone,
    allFieldGroup,
    fieldGroupData,
    isWithSubtype,
    setFilterGroup,
    setSearchFilterGroup,
    getAllFieldGroup,
    getGroupFiltered,
    getSearchFiltered,
    showSearchFilterGroup,
  }
}
