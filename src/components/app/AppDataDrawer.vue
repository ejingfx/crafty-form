<template>
  <v-navigation-drawer
    v-model="appStore.dataDrawer"
    app
    class="pa-0"
    color="white"
    fixed
    location="right"
    temporary
    width="480"
  >
    <template v-slot:prepend>
      <v-toolbar
        class="bg-transparent"
        flat
        tag="div"
      >
        <slot name="header">
          <v-toolbar-title>{{ appStore.dataDrawerAction }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn
            :ripple="false"
            variant="plain"
            @click.stop="appStore.closeDataDrawer()"
          >
            <v-icon icon="mdi-close"></v-icon>
          </v-btn>
        </slot>
      </v-toolbar>
      <v-divider></v-divider>
    </template>

    <slot name="default">
      <v-skeleton-loader v-if="appStore.dataDrawerLoader" boilerplate type="paragraph"></v-skeleton-loader>
      <template v-else>
        <slot name="content"></slot>
      </template>
    </slot>

    <template v-slot:append>
      <v-divider></v-divider>
      <v-toolbar
        class="bg-transparent px-2"
        flat
        tag="div"
      >
        <slot name="footer">
          <v-spacer></v-spacer>

          <v-btn
            :ripple="false"
            variant="tonal"
            @click.stop="appStore.closeDataDrawer()"
          >
            close
          </v-btn>
        </slot>
      </v-toolbar>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
  import { storeToRefs } from 'pinia'
  import { useDrawerStore } from '@/stores/drawer'

  const appStore = useDrawerStore()
  const { dataDrawer } = storeToRefs(appStore)
  </script>

<style lang="scss" scoped>
  .custom-overlay {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 64px;
    width: 100%;
  }
</style>
