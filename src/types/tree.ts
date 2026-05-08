import type { Element, GenericElement } from './fields'

export type FormTree = {
  activated: boolean
  element: Element | GenericElement
}

export interface ActiveTreeItem extends FormTree {
  key: (string | null)
  index: (number | null)
}
