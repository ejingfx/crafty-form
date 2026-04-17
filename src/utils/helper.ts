export function isEmpty (value: any) {
  return (
    value === null
    || value === undefined
    || value === ''
    || (Array.isArray(value) && value.length === 0)
  )
}
