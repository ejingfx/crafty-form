import type { BuilderElementData } from '../types/fields'

const structure: BuilderElementData[] = [
  {
    type: 'container',
    element: {
      type: 'container',
      properties: {
        icon: '',
        label: 'Container',
        description: 'A container to group elements',
        placeholder: '',
      },
      layout: {
        column: 12,
        size: 'default',
        position: 'left',
      },
      attributes: {
        name: 'container',
      },
    },
  },
]

export default structure
