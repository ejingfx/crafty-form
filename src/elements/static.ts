import type { BuilderElementData } from '../types/fields'

const fixed: BuilderElementData[] = [
  {
    type: 'button',
    element: {
      type: 'button',
      properties: {
        label: '',
        description: '',
        placeholder: '',
      },
      options: {
        label: 'Submit',
        type: 'primary',
        submits: true,
        resets: false,
      },
      layout: {
        column: 12,
        size: 'default',
        position: 'left',
      },
    },
  },
]

export default fixed
