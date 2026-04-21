export type FieldDraggable = {
  icon: string
  title: string
  subtitle: string
  type: string
  subtype?: string
  group: string
  action?: {}
}

export type FieldDraggableList = FieldDraggable[]

// Element Group
export type FieldType = 'checkbox'
  | 'email'
  | 'number'
  | 'phone'
  | 'select'
  | 'text'
  | 'textarea'
  | 'password'
  | 'checkbox'
  | 'radio'
  | 'switch'
  | 'select'

export type StructureType = 'container'
  | 'tabs'

export type StaticType = 'button'
  | 'heading'

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
export interface HeadingLayout extends Layout {
  space_top: number | 0 | 1 | 2 | 3
  space_bottom: number | 0 | 1 | 2 | 3
}

export type CheckboxLayout = {
  position: Extract<Position, 'left' | 'right'>
}

export type RadioLayout = {
  position: Extract<Position, 'left' | 'right'>
}

export type SwitchLayout = {
  position: Extract<Position, 'left' | 'right'>
}

export type SelectLayout = {
  position: Extract<Position, 'left' | 'right'>
}

// Validation
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
  subtype?: string
  label: string
  description: string
  placeholder?: string
  disabled?: boolean
}
export interface Attributes {
  name: string
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
  stepper?: boolean
}

export interface EmailProperties extends BaseProperties {
  disabled?: boolean
  readonly?: boolean
}

export interface PasswordProperties extends BaseProperties {
}
export interface SelectProperties extends BaseProperties {
}

export interface ContainerProperties extends BaseProperties {
}

export const headingSubtypes = ['form', 'section', 'subsection'] as const
export const selectSubtypes = ['multiple'] as const

export type HeadingSubtype = typeof headingSubtypes[number]
export type SelectSubtype = typeof selectSubtypes[number]

export interface HeadingProperties extends BaseProperties {
  subtype: HeadingSubtype
}

export type ButtonOptionsType = 'primary' | 'secondary' | 'warning' | 'danger'
export type ButtonOptions = {
  label: string
  type: ButtonOptionsType
  submits: boolean
  resets: boolean
}

export interface CheckboxProperties extends BaseProperties {
  // type: 'container'
}
export interface CheckboxOptions {
  true_value: boolean | any
  false_value: boolean | any
}

export interface RadioProperties extends BaseProperties {
  inline: boolean
  hide_group_label: boolean
}

export type RadioOption = {
  label: string
  value: string
}
export type RadioOptions = {
  default_value: string
  choices: [RadioOption, RadioOption, ...RadioOption[]]
}

export interface SwitchProperties extends BaseProperties {
  inset: boolean
}

export type SwitchOption = {
  label: string
  value: boolean
}
export type SwitchOptions = {
  default_value: boolean
}

export type SelectOptions = {
  default_value: any
  clearable: boolean
  chips: boolean
  multiple: boolean
  choices: any[]
}
// Fields Group
export type TextElement = {
  type: 'text'
  key?: string
  properties: TextProperties
  layout: Layout
  validation?: Validation
  logic?: Logic
  attributes: Attributes
}

export type TextareaElement = {
  type: 'textarea'
  key?: string
  properties: TextProperties
  layout: Layout
  validation?: Validation
  logic?: Logic
  attributes: Attributes
}

export type NumberElement = {
  type: 'number'
  key?: string
  properties: NumberProperties
  layout: Layout
  validation?: Validation
  logic?: Logic
  attributes: Attributes
}

export type PhoneElement = {
  type: 'phone'
  key?: string
  properties: NumberProperties
  layout: Layout
  validation?: Validation
  logic?: Logic
  attributes: Attributes
}

export type EmailElement = {
  type: 'email'
  key?: string
  properties: EmailProperties
  layout: Layout
  validation?: Validation
  logic?: Logic
  attributes: Attributes
}

export type PasswordElement = {
  type: 'password'
  key?: string
  properties: PasswordProperties
  layout: Layout
  validation?: Validation
  logic?: Logic
  attributes: Attributes
}

export type CheckboxElement = {
  type: 'checkbox'
  key?: string
  properties: CheckboxProperties
  options: CheckboxOptions
  layout: CheckboxLayout
  validation?: Validation
  logic?: Logic
  attributes: Attributes
}

export type RadioElement = {
  type: 'radio'
  key?: string
  properties: RadioProperties
  options: RadioOptions
  layout: RadioLayout
  validation?: Validation
  logic?: Logic
  attributes: Attributes
}

export type SwitchElement = {
  type: 'switch'
  key?: string
  properties: SwitchProperties
  options: SwitchOptions
  layout: SwitchLayout
  validation?: Validation
  logic?: Logic
  attributes: Attributes
}

export type SelectElement = {
  type: 'select'
  key?: string
  properties: SelectProperties
  options: SelectOptions
  layout: SelectLayout
  validation?: Validation
  logic?: Logic
  attributes: Attributes
}

// Structure Group
export type ContainerElement = {
  type: 'container'
  key?: string
  properties: ContainerProperties
  layout: Layout
  validation?: Validation
  logic?: Logic
  attributes: Attributes
}

// Static Group
export type ButtonElement = {
  type: 'button'
  key?: string
  properties: TextProperties
  options: ButtonOptions
  layout: Layout
  validation?: Validation
  logic?: Logic
  attributes: Attributes
}
export type HeadingElement = {
  type: 'heading'
  key?: string
  properties: HeadingProperties
  layout: HeadingLayout
  validation?: Validation
  logic?: Logic
  attributes: Attributes
}

export const elementWithSubtypes = [
  'heading',
] as const
export type ElementsWithSubtypes = Extract<StaticType, 'heading'>

export type Element = | TextElement
  | TextareaElement
  | NumberElement
  | PhoneElement
  | SelectElement
  | EmailElement
  | PasswordElement
  | CheckboxElement
  | RadioElement
  | SwitchElement
  | SelectElement
  | ContainerElement // Structure
  | ButtonElement // Static
  | HeadingElement

export interface FieldsData {
  elements: Element[]
  settings: string[]
}

// For Builder Data
export type BuilderElementData = {
  type: FieldType | StructureType | StaticType
  element: Element
}
