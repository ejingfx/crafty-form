import type { BuilderElementData } from '../types/fields'

const fields: BuilderElementData[] = [
  {
    type: 'number',
    element: {
      type: 'number',
      properties: {
        icon: 'mdi-numeric',
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
        icon: 'mdi-phone',
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
        icon: 'mdi-text-short',
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
        readonly: true,
      },
    },
  },
  {
    type: 'textarea',
    element: {
      type: 'textarea',
      properties: {
        icon: 'mdi-text-long',
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
        icon: 'mdi-email',
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
        icon: 'mdi-lock-outline',
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
        icon: 'mdi-check',
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
        icon: 'mdi-radiobox-marked',
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
  {
    type: 'switch',
    element: {
      type: 'switch',
      properties: {
        icon: 'mdi-toggle-switch-outline',
        label: 'Switch label',
        description: '',
        placeholder: '',
        inset: false,
      },
      options: {
        default_value: false,
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
    type: 'select',
    element: {
      type: 'select',
      properties: {
        icon: 'mdi-select',
        subtype: 'single',
        label: 'Select label',
        description: '',
        placeholder: '',
      },
      options: {
        default_value: 'Option 1',
        clearable: true,
        chips: true,
        multiple: true,
        accept_input: true,
        choices: [
          'Option 1',
          'Option 2',
          'Option 3',
          'Option 4',
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
  {
    type: 'select',
    element: {
      type: 'select',
      properties: {
        icon: 'mdi-select-multiple',
        alias: 'Multiple Selection',
        subtype: 'multiple',
        label: 'Multiple selection label',
        description: '',
        placeholder: '',
      },
      options: {
        default_value: 'Option 1',
        clearable: true,
        chips: true,
        multiple: true,
        accept_input: true,
        choices: [
          'Option 1',
          'Option 2',
          'Option 3',
          'Option 4',
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
