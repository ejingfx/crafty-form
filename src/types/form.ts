import type { Audit } from './audit'
import type { Element } from './fields'

export type FormOptions = {
  status: string
}

export type FormBase = {
  key: string
  icon: string
  title: string
}

export interface FormRoot extends FormBase {
  element: null
  children: FormChild[] | []
}

export interface FormChild extends FormBase {
  element: Element
  children: FormChild[] | []
}

export interface FormChildren {
  children: FormChild[]
}

export type FormTreeData = {
  name: string
  data: (FormRoot | FormChild)[]
}

export type FormFieldList = {
  title: string
  expanded: boolean
  type: string
  value: boolean
  data: any
}

export interface Form extends FormTreeData {
  id: number | null
  workspace: number | null
  options?: FormOptions
  audit?: Audit
}
