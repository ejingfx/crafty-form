<template>
  <v-navigation-drawer
    v-model="getActivated"
    app
    color="mine-shaft"
    floating
    location="right"
    :scrim="false"
    temporary
    width="320"
  >
    <template #prepend>
      <v-sheet class="w-100 bg-transparent d-flex space-between">
        <v-btn
          icon="mdi-close"
          :ripple="false"
          variant="plain"
          @click="setActivated(false); clear()"
        />
        <strong>{{ title }}</strong>

        <v-spacer />

        <v-btn-group
          class="px-6"
        >
          <v-btn
            color="white"
            density="compact"
            icon="mdi-content-copy"
            :ripple="false"
            size="x-small"
            variant="plain"
          />
          <v-btn
            color="white"
            density="compact"
            icon="mdi-delete-outline"
            :ripple="false"
            size="small"
            variant="plain"
          />
          <v-btn
            color="white"
            density="compact"
            :icon="expand.length > 0 ? 'mdi-minus-box-outline' : 'mdi-plus-box-outline'"
            :ripple="false"
            size="small"
            variant="plain"
            @click="expand.length > 0 ? expand = [] : expand = toggle(list.length)"
          />
        </v-btn-group>
      </v-sheet>
    </template>

    <v-sheet class="h-100 rounded-0 pa-0 bg-transparent">
      <v-expansion-panels
        v-model="expand"
        multiple
      >
        <v-expansion-panel
          v-for="(item, i) in list"
          :key="i"
          bg-color="transparent"
          class="pa-0 elevation-0"
          collapse-icon="mdi-minus"
          elevation="0"
          expand-icon="mdi-plus"
        >
          <v-expansion-panel-title class="text-capitalize panel-title">{{ item.title }}</v-expansion-panel-title>
          <component :is="resolve(item.type as PanelType)" :data="item.data" />
        </v-expansion-panel>
      </v-expansion-panels>
    </v-sheet>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
  import type { PanelType } from '@/types/panel'
  import { storeToRefs } from 'pinia'
  import { onMounted, ref, watch } from 'vue'
  import { usePanel } from '../../composables/usePanel'
  import { useTreeStore } from '../../stores/tree'

  const treeStore = useTreeStore()
  const panel = usePanel()
  const title = ref('')
  const expand = ref([0])
  const list = ref([
    { title: 'properties', expanded: true, type: 'properties', value: true, data: {} },
    { title: 'layout', expanded: false, type: 'layout', value: false, data: {} },
    { title: 'validation', expanded: false, type: 'validation', value: false, data: {} },
    { title: 'logic', expanded: false, type: 'logic', value: false, data: {} },
    { title: 'attributes', expanded: false, type: 'attributes', value: false, data: {} },
  ])
  const {
    activated,
    getActivated,
  } = storeToRefs(treeStore)
  const {
    clear,
    setActivated,
  } = treeStore
  const {
    resolve,
    toggle,
  } = panel

  onMounted(() => {
    // console.log('xx', element)
  })

  watch(activated, () => {
    // console.log('watch activated')
    if (activated) {
      // title = element.title
    }
  })
</script>

<style lang="scss" scoped>
.panel-title {
  font-size: 12px;
  font-weight: 800;
}
</style>
