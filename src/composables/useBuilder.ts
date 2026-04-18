import type {
  FieldGroup,
  FieldGroupData,
} from '@/types/builder'
import type {
  Element,
  FieldDraggableList,
  FieldType,
} from '@/types/fields'
import { computed } from 'vue'
import { useBuilderStore } from '@/stores/builder'

export function useBuilder () {
  const builderStore = useBuilderStore()

  type fieldElement = {
    type: FieldType
    element: Element
  }
  type fieldElementData = fieldElement[]

  const initElements: fieldElementData = [
    {
      type: 'number',
      element: {
        type: 'number',
        properties: {
          label: 'Number',
          description: '',
          placeholder: '',
        },
        layout: {
          column: 12,
          size: 'default',
          position: 'left',
        },
      },
    },
    {
      type: 'text',
      element: {
        type: 'text',
        properties: {
          label: 'Short text',
          description: '',
          placeholder: '',
        },
        layout: {
          column: 12,
          size: 'default',
          position: 'left',
        },
      },
    },
    {
      type: 'textarea',
      element: {
        type: 'textarea',
        properties: {
          label: 'Long text',
          description: '',
          placeholder: '',
        },
        layout: {
          column: 12,
          size: 'default',
          position: 'left',
        },
      },
    },
  ]

  const loadElementInit = (type: string) => {
    return initElements.filter((el: fieldElement) => el.type === type)
  }

  const add = (type: string) => {
    const element = loadElementInit(type)[0].element
    builderStore.add(element)
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
    // { icon: 'mdi-check', title: 'Email', subtitle: 'Input field that only allows email', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Phone', subtitle: 'Phone number', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Paragraph', subtitle: 'Formatted text', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Image', subtitle: 'Display an image', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Link', subtitle: 'Link to another website', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Multiple Choice', subtitle: 'Accepts multiple options', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Single Choice', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Checkbox', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Single Comparison', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Multiple Comparison', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Dropdown', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Tags', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Switches', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Date', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Time', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Mulitple Dates', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Data Range', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Slider', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Range Slider', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Password', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'URL', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Location', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'File Upload', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Image Upload', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Multi-file Upload', subtitle: '', type: 'text', group: 'fields', action: {} },
    // { icon: 'mdi-check', title: 'Multi-image Upload', subtitle: '', type: 'text', group: 'fields', action: {} },
  ]
  const structureElements: FieldDraggableList = [
    { icon: 'mdi-text-short', title: 'Short text', subtitle: 'Single line input', type: 'heading', group: 'static', action: {} },
  ]
  const staticElements: FieldDraggableList = [
    { icon: 'mdi-check-bold', title: 'Submit button', subtitle: 'Button that triggers submission', type: 'button', group: 'static', action: {} },
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
    allFieldGroup,
    fieldGroupData,
    setFilterGroup,
    setSearchFilterGroup,
    getAllFieldGroup,
    getGroupFiltered,
    getSearchFiltered,
    showSearchFilterGroup,
  }
}
