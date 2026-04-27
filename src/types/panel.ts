export const panelValues = ['properties', 'layout', 'validation', 'logic', 'attributes'] as const
export type PanelType = typeof panelValues[number]
