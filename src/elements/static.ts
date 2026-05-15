import type { BuilderElementData } from '../types/fields'

const fixed: BuilderElementData[] = [
  {
    type: 'button',
    element: {
      type: 'button',
      properties: {
        icon: 'mdi-check-bold',
        label: 'Submit',
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
        position: 'center',
      },
      attributes: {
        name: 'heading',
      },
    },
  },
  {
    type: 'heading',
    element: {
      type: 'heading',
      properties: {
        icon: 'mdi-format-header-1',
        alias: 'Form Heading',
        subtype: 'form',
        label: 'Form Heading',
        description: 'Some description',
        placeholder: '',
      },
      layout: {
        column: 12,
        size: 'default',
        position: 'left',
        space_top: 0,
        space_bottom: 0,
      },
      attributes: {
        name: 'heading',
      },
    },
  },
  {
    type: 'heading',
    element: {
      type: 'heading',
      properties: {
        icon: 'mdi-format-header-2',
        alias: 'Section Heading',
        subtype: 'section',
        label: 'Section heading',
        description: 'Some description',
        placeholder: '',
      },
      layout: {
        column: 12,
        size: 'default',
        position: 'left',
        space_top: 0,
        space_bottom: 0,
      },
      attributes: {
        name: 'heading',
      },
    },
  },
  {
    type: 'heading',
    element: {
      type: 'heading',
      properties: {
        icon: 'mdi-format-header-3',
        alias: 'Subsection Heading',
        subtype: 'subsection',
        label: 'Subsection heading',
        description: 'Some description',
        placeholder: '',
      },
      layout: {
        column: 12,
        size: 'default',
        position: 'left',
        space_top: 0,
        space_bottom: 0,
      },
      attributes: {
        name: 'heading',
      },
    },
  },
]

export default fixed
