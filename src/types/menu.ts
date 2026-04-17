export type MenuListItem = {
  title: string
  icon: string
  to: string
}

export interface MenuLists {
  menu: MenuListItem[]
  sidebar: MenuListItem[]
  system: MenuListItem[]
}
