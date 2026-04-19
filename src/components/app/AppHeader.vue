<template>
  <v-app-bar
    app
    class="pr-4"
    clipped-left
    clipped-right
    color="athens-gray"
    dense
    height="60"
  >
    <v-avatar
      v-if="!isBuilderPage"
      class="mx-5"
      size="small"
    >
      <v-img src="@/assets/logo.png"></v-img>
    </v-avatar>
    <v-divider class="mr-4" vertical />
    <v-app-bar-nav-icon
      v-if="isBuilderPage"
      class="mr-4"
      prepend-icon="mdi-user"
      @click="toggleDrawer"
    >
    </v-app-bar-nav-icon>
    <AppBreadcrumbs />
    <v-spacer></v-spacer>
    <v-btn
      v-if="isBuilderPage"
      color="warning"
      prepend-icon="mdi-palette-advanced"
      to="/builder"
      variant="tonal"
    >Builder</v-btn>
    <AppMenu />
  </v-app-bar>
</template>

<script lang="ts" setup>
  // import { storeToRefs } from 'pinia'
  import type { RouteLocationNormalized } from 'vue-router'
  import { ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import { useDrawerStore } from '../../stores/drawer'

  const appStore = useDrawerStore()
  const route = useRoute()
  const isBuilderPage = ref(false)
  // const { drawer } = storeToRefs(appStore)
  const { toggleDrawer } = appStore

  watch(
    () => route,
    async (page: RouteLocationNormalized) => {
      isBuilderPage.value = !'/builder'.includes(page.path)
    },
    { immediate: true, deep: true },
  )
</script>
