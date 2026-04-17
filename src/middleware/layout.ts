export async function loadLayoutMiddleware (route: any) {
  // console.log('loadLayoutMiddleware', route)
  try {
    const layout = route.meta.layout
    const layoutComponent = await import(`@/layouts/${layout}.vue`)
    route.meta.layoutComponent = layoutComponent.default
  } catch (error) {
    console.error('Error occurred in processing of layouts:', error)
    console.log('Mounted default layout layouts/default.vue')
    const layout = 'default'
    const layoutComponent = await import(`@/layouts/${layout}.vue`)
    route.meta.layoutComponent = layoutComponent.default
  }
}
