<template>
  <v-app-bar
    app
    class="elevation-1 pr-4"
    clipped-left
    clipped-right
    color="athens-gray"
    dense
    height="60"
  >
    <v-app-bar-nav-icon
      class="mr-4"
      prepend-icon="mdi-user"
      @click="toggleDrawer"
    >
    </v-app-bar-nav-icon>
    <AppBreadcrumbs />
    <v-spacer></v-spacer>
    <AppMenu />
  </v-app-bar>
</template>

<script lang="ts" setup>
  // import { storeToRefs } from 'pinia'
  import { useAppStore } from '../stores/app'

  const appStore = useAppStore()
  // const { drawer } = storeToRefs(appStore)
  const { toggleDrawer } = appStore
</script>
