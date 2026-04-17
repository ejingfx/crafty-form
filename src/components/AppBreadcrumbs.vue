<template>
  <v-breadcrumbs
    class="pl-0 v-breadcrumbs--hover-no-underline"
    :items="crumbs"
  >
    <template v-slot:title="{ item }">
      <template v-if="item.title === 'Home'">
        <v-icon class="d-flex align-self-center" icon="mdi-home-outline" size="20"></v-icon>
      </template>
      <template v-else>
        {{ _.capitalize(item.title) }}
      </template>
    </template>
  </v-breadcrumbs>
</template>

<script lang="ts" setup>
  import type { RouteLocationNormalized } from 'vue-router'
  import _ from 'lodash'
  import { ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  // import { useService } from '../composables/useService'
  // import { getPage } from '../utils/pages'

  // const service = useService()
  const route = useRoute()
  // const router = useRouter()

  type Crumbs = string[]
  interface CrumbItem {
    title: string
    disabled: boolean
    href: string
  }

  const crumbs = ref<CrumbItem[]>([])
  const path = ref('')

  function transformItems (route: RouteLocationNormalized) {
    return route.fullPath
      .split('/')
      .filter(item => item !== '')
      .map((item: string) => item)
  }

  async function formatItems(items: Crumbs): Promise<CrumbItem[]> {
    // const isDetailPage = await service?.detailPages.includes(path.value)

    //  TODO
    // let displayFormat = ''
    // if (isDetailPage) {
    //   const { store, name, key, format } = await service.breadcrumbsMap[path.value]
    //   const module = await import(`@/stores/${name}.js`)
    //   const useStore = module[store]
    //   const storeInstance = useStore()
    //   displayFormat = storeInstance[format] ?? ''
    // }

    const mapped = items.map((item, i) => ({
      title: item,
      disabled: i === items.length - 1,
      href: `/${item}`,
    }))
    const formatted: CrumbItem[] = [
      {
        title: 'Home',
        disabled: route.path === '/dashboard' || false,
        href: '/dashboard',
      },
      ...mapped,
    ]

    return formatted
  }

  watch(
    () => route,
    async (page: any) => {
      path.value = route.matched[route.matched?.length - 1].path
      const items = transformItems(route)
      crumbs.value = await formatItems(items)
      console.log('watch', items)
    },
    { immediate: true, deep: true },
  )
  </script>

  <style lang="scss">
  .v-breadcrumbs--hover-no-underline > li > a {
    text-transform: capitalize;
    &:hover {
      text-decoration: none;
    }
  }
</style>
