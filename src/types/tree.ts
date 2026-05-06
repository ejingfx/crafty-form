import type { Element } from './fields'
export type FormTree = {
  activated: boolean
  element: Element | undefined
}

export interface ActiveTreeItem extends FormTree {
  key: (string | null)
  index: (number | null)
}
