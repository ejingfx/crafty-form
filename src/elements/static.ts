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
        subtype: 'section',
        label: 'Section heading',
        description: 'Some description',
        placeholder: '',
      },
      layout: {
        column: 12,
        size: 'small',
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
        subtype: 'subsection',
        label: 'Subsection heading',
        description: 'Some description',
        placeholder: '',
      },
      layout: {
        column: 12,
        size: 'x-small',
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
