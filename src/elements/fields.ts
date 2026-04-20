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
      attributes: {
        name: 'field',
      },
    },
  },
  {
    type: 'phone',
    element: {
      type: 'phone',
      properties: {
        label: 'Phone',
        description: '',
        placeholder: '',
        min: 7,
        max: 12,
      },
      layout: {
        column: 12,
        size: 'default',
        position: 'left',
      },
      attributes: {
        name: 'field',
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
      attributes: {
        name: 'field',
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
      attributes: {
        name: 'field',
      },
    },
  },
  {
    type: 'email',
    element: {
      type: 'email',
      properties: {
        label: 'Email',
        description: '',
        placeholder: '',
        disabled: false,
        readonly: false,
      },
      layout: {
        column: 12,
        size: 'default',
        position: 'left',
      },
      attributes: {
        name: 'field',
      },
    },
  },
  {
    type: 'password',
    element: {
      type: 'password',
      properties: {
        label: 'Password',
        description: '',
        placeholder: '',
      },
      layout: {
        column: 12,
        size: 'default',
        position: 'left',
      },
      attributes: {
        name: 'field',
      },
    },
  },
  {
    type: 'checkbox',
    element: {
      type: 'checkbox',
      properties: {
        label: 'Checkbox',
        description: 'test',
        placeholder: '',
      },
      options: {
        true_value: true,
        false_value: false,
      },
      layout: {
        position: 'left',
      },
      attributes: {
        name: 'field',
      },
    },
  },
  {
    type: 'radio',
    element: {
      type: 'radio',
      properties: {
        label: 'Radio group label',
        description: '',
        placeholder: '',
        inline: true,
        hide_group_label: false,
      },
      options: {
        default_value: '1',
        choices: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
        ],
      },
      layout: {
        position: 'left',
      },
      attributes: {
        name: 'field',
      },
    },
  },
]

export default fields
