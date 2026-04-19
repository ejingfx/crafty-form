import type { BuilderElementData } from '../types/fields'

const fields: BuilderElementData[] = [
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

export default fields
