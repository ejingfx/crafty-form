import type {
  BuilderElementData,
} from '@/types/fields'
import fields from '@/elements/fields'
import fixed from '@/elements/static'
import structure from '@/elements/structure'

export function useElement () {
  const initElements: BuilderElementData[] = [
    ...fields,
    ...fixed,
    ...structure,
  ]

  return {
    initElements,
  }
}
