export type FieldDraggable = {
  icon: string
  title: string
  subtitle: string
  type: string
  subtype?: string
  group: string
  actions?: {}
  options?: {}
}

export type FieldDraggableList = FieldDraggable[]

// Element Group
export const fieldType = [
  'checkbox',
  'email',
  'number',
  'phone',
  'select',
  'text',
  'textarea',
  'password',
  'checkbox',
  'radio',
  'switch',
  'select',
] as const
export type FieldType = typeof fieldType[number]

export const structureType = ['container', 'tabs'] as const
export type StructureType = typeof structureType[number]

export const staticType = ['button', 'heading'] as const
export type StaticType = typeof staticType[number]

export const position = ['left', 'top', 'bottom', 'right', 'start', 'center', 'middle', 'end'] as const
export type Position = typeof position[number]

export const size = ['x-small', 'small', 'default', 'large', 'x-large'] as const
export type Size = typeof size[number]

export const actions = ['show', 'hide', 'enable', 'disable'] as const
export type Actions = typeof actions[number]

export const validationType = ['custom', 'email', 'min', 'max', 'number', 'required', 'text'] as const
export type ValidationType = typeof validationType[number]

export const columnType = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const
export type ColumnType = typeof columnType[number]

export const layoutSize = ['default', 'compact', 'comfortable'] as const
export type LayoutSize = typeof layoutSize[number]

export interface Layout {
  column: ColumnType
  size?: LayoutSize
  position: Position
}
export const spaceType = [0, 1, 2, 3, 4] as const
export type SpaceType = number | typeof spaceType[number]
export interface HeadingLayout extends Layout {
  space_top: SpaceType
  space_bottom: SpaceType
}

export const horizontalPositionType = ['left', 'center', 'right'] as const satisfies readonly Position[]
export const verticalPositionType = ['top', 'center', 'bottom'] as const satisfies readonly Position[]
export type HorizontalPositionType = typeof horizontalPositionType[number]
export type VerticalPositionType = typeof verticalPositionType[number]

export interface CheckboxLayout extends Omit<Layout, 'position' | 'column'> {
  position: HorizontalPositionType
}

export interface RadioLayout extends Omit<Layout, 'position' | 'column'> {
  position: HorizontalPositionType
}

export interface SwitchLayout extends Omit<Layout, 'position' | 'column'> {
  position: HorizontalPositionType
}

export interface SelectLayout extends Omit<Layout, 'position' | 'column'> {
  position: HorizontalPositionType
}

// Validation
export type ValidationRule = (name: string, value: any) => true | string

export type NamedRules = {
  name: string
  status: boolean
  fn: ValidationRule
}

export type Validation = {
  type: ValidationType
  predefined_rules: NamedRules[]
  rules?: ValidationRule[]
  custom_rules: ValidationRule[]
}

export const operatorType = [
  'equals',
  'not_equals',
  'greater_than',
  'less_than',
  'greater_than_or_equals',
  'less_than_or_equals',
] as const
export type OperationType = typeof operatorType[number]
export interface LogicCondition {
  field: string
  operator: OperationType
  value: any
}

export const logicAction = ['show', 'hide', 'enable', 'disable'] as const
export type LogicActionType = typeof logicAction[number]
export interface Logic {
  conditions: LogicCondition[]
  action: LogicActionType
}

// Base
export interface BaseProperties {
  value: any
  alias?: string
  subtype?: string
  icon: string
  label: string
  description: string
  placeholder?: string
  disabled?: boolean
}
export interface Attributes {
  name: string
  readonly?: boolean
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
export type HeadingSubtype = typeof headingSubtypes[number]

export const selectSubtypes = ['single', 'multiple'] as const
export type SelectSubtype = typeof selectSubtypes[number]

export interface HeadingProperties extends BaseProperties {
  subtype: HeadingSubtype
}

export const buttonOptions = ['primary', 'secondary', 'warning', 'danger'] as const
export type ButtonOptionsType = typeof buttonOptions[number]

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
  accept_input: boolean
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

export const elementWithSubtypes = ['heading', 'select'] as const
export type ElementsWithSubtypes = Extract<StaticType, 'heading'>
export interface GenericElement {
  [key: string]: unknown
}

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
  | GenericElement
export const modeValues = ['editor', 'preview'] as const
export type Mode = typeof modeValues[number]

export type FieldsSettings = {
  mode: Mode
}

export interface FieldsData {
  elements: Element[]
  settings: FieldsSettings
}

// For Builder Data
export type BuilderElementData = {
  type: | FieldType | StructureType | StaticType
  element: Element
}
