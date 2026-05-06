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
      <v-sheet class="w-100 d-flex space-between border-b-thin bg-dove-gray">
        <v-btn
          icon="mdi-close"
          :ripple="false"
          variant="plain"
          @click="setActivated(false); clear()"
        />
        <strong class="d-flex justify-center align-center" flat>{{ title }}</strong>

        <v-spacer />

        <v-btn-group
          class="px-6 rounded-0"
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
            variant="plain"
            @click="expand.length > 0 ? expand = [] : expand = generate(list.length)"
          />
        </v-btn-group>
      </v-sheet>
    </template>

    <v-sheet class="h-100 rounded-0 pa-0 bg-mine-shaft">
      <v-expansion-panels
        v-model="expand"
        multiple
      >
        <v-expansion-panel
          v-for="(item, i) in list"
          :key="i"
          class="pa-0 elevation-0 rounded-0 bg-mine-shaft"
          collapse-icon="mdi-minus"
          elevation="0"
          expand-icon="mdi-plus"
        >
          <v-expansion-panel-title class="text-capitalize rounded-0 panel-title bg-dove-gray">{{ item.title }}</v-expansion-panel-title>
          <component :is="resolve(item.type as PanelType)" :data="item.data" />
        </v-expansion-panel>
      </v-expansion-panels>
    </v-sheet>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
  import type { FormFieldList } from '@/types/form'
  import type { PanelType } from '@/types/panel'
  import { storeToRefs } from 'pinia'
  import { onMounted, ref, watch } from 'vue'
  import { usePanel } from '../../composables/usePanel'
  import { useTreeStore } from '../../stores/tree'

  const title = ref('')
  const treeStore = useTreeStore()
  const panel = usePanel()
  const expand = ref([0])
  const list = ref([
    { title: 'properties', expanded: true, type: 'properties', value: true, data: {} },
    { title: 'layout', expanded: false, type: 'layout', value: false, data: {} },
    { title: 'validation', expanded: false, type: 'validation', value: false, data: {} },
    { title: 'logic', expanded: false, type: 'logic', value: false, data: {} },
    { title: 'attributes', expanded: false, type: 'attributes', value: false, data: {} },
  ] satisfies FormFieldList[])
  const {
    activated,
    element,
    index,
    getActivated,
  } = storeToRefs(treeStore)
  const {
    clear,
    setActivated,
  } = treeStore
  const {
    resolve,
    generate,
  } = panel

  onMounted(() => {
    // console.log('xx', element)
  })

  function getMappedListData () {
    console.log('xxx', element.value)
    return list.value.map(item => {
      return {
        ...item,
        data: { [item.title]: element.value[item.title] ?? {} },
      }
    })
  }

  watch([activated, index, element], (newValue: any) => {
    const hasSubtype = newValue[2]?.properties?.subtype !== undefined

    if (!activated && !hasSubtype) return

    // Trigger only when it is not treeview root
    if (newValue[0] && newValue[1] as number !== null) {
      const type = newValue[2]?.type
      const subtype = newValue[2]?.properties?.subtype
      title.value = hasSubtype ? `${type} ${subtype}` : type
      list.value = getMappedListData()
    }
  })
</script>

<style lang="scss" scoped>
.panel-title {
  font-size: 12px;
  font-weight: 800;
}
.v-expansion-panel--active + .v-expansion-panel {
  margin-top: 0;
}
</style>
