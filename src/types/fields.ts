// import type { FieldGroup, FieldGroupLabel } from '@/types/builder'

export type FieldDraggable = {
  icon: string
  title: string
  subtitle: string
  type: string
  group: string
  action?: {}
}

export type FieldDraggableList = FieldDraggable[]

export type FieldType = 'checkbox'
  | 'email'
  | 'number'
  | 'select'
  | 'text'
  | 'textarea'

export type Position = 'left' | 'top' | 'bottom' | 'right' | 'start' | 'end'

export type Size = 'x-small' | 'small' | 'default' | 'large' | 'x-large'

export type ValidationType = 'custom'
  | 'email'
  | 'min'
  | 'max'
  | 'number'
  | 'required'

export interface Layout {
  column: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  size: Size
  position: Extract<Position, 'left' | 'top'>
}

export interface ValidationRule {
  type: ValidationType
  value?: any
  message?: string
}

export type Validation = ValidationRule[]

export interface LogicCondition {
  field: string
  operator: 'equals'
    | 'not_equals'
    | 'greater_than'
    | 'less_than'
    | 'greater_than_or_equals'
    | 'less_than_or_equals'
  value: any
}

export interface Logic {
  conditions: LogicCondition[]
  action: 'show' | 'hide' | 'enable' | 'disable'
}

// Base
export interface BaseProperties {
  label: string
  description: string
  placeholder?: string
  disabled?: boolean
}
// Per Field
export interface TextProperties extends BaseProperties {
  maxLength?: number
}

export interface TextareaProperties extends BaseProperties {
  maxLength?: number
}

export interface NumberProperties extends BaseProperties {
  min?: number
  max?: number
}

export interface SelectProperties extends BaseProperties {
  type: 'select'
  options: {
    label: string
    value: string
  }[]
}

export interface ContainerProperties extends BaseProperties {
  type: 'container'
}

export type ContainerElement = {
  type: 'container'
  order?: number
  properties: ContainerProperties
  layout: Layout
  validation?: Validation
  logic?: Logic
}

export type TextElement = {
  type: 'text'
  order?: number
  properties: TextProperties
  layout: Layout
  validation?: Validation
  logic?: Logic
}

export type TextareaElement = {
  type: 'textarea'
  order?: number
  properties: TextProperties
  layout: Layout
  validation?: Validation
  logic?: Logic
}

export type NumberElement = {
  type: 'number'
  order?: number
  properties: NumberProperties
  layout: Layout
  validation?: Validation
  logic?: Logic
}

export type SelectElement = {
  type: 'select'
  order?: number
  properties: SelectProperties
  layout: Layout
  validation?: Validation
  logic?: Logic
}

export type Element = | ContainerElement
  | TextElement
  | TextareaElement
  | NumberElement
  | SelectElement

export interface FieldsData {
  elements: Element[]
  settings: string[]
}
