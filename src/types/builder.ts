import type {
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

export interface BuilderData extends FieldsData {
  filterGroup: FieldGroup
  searchFilterGroup: string
}
