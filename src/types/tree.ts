export type FormTree = {
  activated: boolean
  element: any
}

export interface ActiveTreeItem extends FormTree {
  key: (string | null)
  index: (number | null)
}
