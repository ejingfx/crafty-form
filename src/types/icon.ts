// headingSubtypes
// selectSubtypes

export type IconMap = {
  icon: string
  label: string
  type: string
}
export interface IconMapData extends IconMap {
  subgroup?: (string | null)
  alias?: (string | null)
}
