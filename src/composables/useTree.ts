import type { ActiveTreeItem } from '@/types/tree'
import _ from 'lodash'
import { storeToRefs } from 'pinia'
import { useFormStore } from '../stores/form'
import { useTreeStore } from '../stores/tree'

export function useTree () {
  const treeStore = useTreeStore()
  const formStore = useFormStore()
  const {
    clear,
    setActiveTreeItem,
  } = treeStore
  const { data } = storeToRefs(formStore)
  const { activated } = storeToRefs(treeStore)

  const getIndex = (key: string) => {
    const root = data.value[0]

    return (!root || !('children' in root))
      ? -1
      : root.children.findIndex(el => el.key === key)
  }

  const handleClick = (data: Omit<ActiveTreeItem, 'activated'>) => {
    const { element, key, index } = data
    setActiveTreeItem({ activated: true, element, key, index })
  }

  const handleClickOutside = () => {
    if (activated) {
      clear()
    }
  }

  const includeClickOutside = () => {
    return Array.from(
      document.querySelectorAll('.include-outside-click'),
    ).filter(Boolean)
  }

  return {
    getIndex,
    handleClick,
    handleClickOutside,
    includeClickOutside,
  }
}
