import type {
  FieldDraggable,
  FieldsData,
} from '@/types/fields'

export type DraggableComponent = {
  data: string[]
}

export type FieldGroup = 'fields' | 'static' | 'structure' | 'all'

export type FieldGroupLabel = 'Fields' | 'Structure' | 'Static'

export type FieldGroupFilter = {
  type: FieldGroup
  group: FieldGroupLabel
}

export type FieldGroupData = FieldGroupFilter[]
export type BufferField = | FieldDraggable | null
export type ResolveBufferField = | Element | null
export interface BuilderData extends FieldsData {
  filterGroup: FieldGroup
  searchFilterGroup: string
  buffer?: BufferField
}
