<template>
  <v-navigation-drawer
    app
    color="mine-shaft"
    floating
    location="right"
    permament
    width="320"
  >
    <v-sheet class="pa-4 bg-transparent">
      <v-treeview
        v-model:activated="activatedKey"
        activatable
        class="py-4 px-0"
        color="pizazz"
        :data-index="getIndex(activatedKey[0]?.key as string)"
        :data-key="activatedKey[0]?.key"
        density="compact"
        :hide-actions="true"
        :indent-lines="true"
        item-value="key"
        :items="data"
        open-all
        return-object
        @update:activated="handleClick({
          element: activatedKey[0],
          index: getIndex(activatedKey[0]?.key as string),
          key: activatedKey[0]?.key as string
        })"
      >
        <template #prepend="{ item }">
          <v-icon class="pa-4 mr-2 border-thin border-pizazz text-pizazz rounded" :icon="item.icon" />
        </template>
        <template #title="{ item }">{{ item.title }}</template>
      </v-treeview>
    </v-sheet>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia'
  import { onMounted, ref, watch } from 'vue'
  import { useTree } from '../../composables/useTree'
  import { useBuilderStore } from '../../stores/builder'
  import { useFormStore } from '../../stores/form'
  import { useTreeStore } from '../../stores/tree'

  const builderStore = useBuilderStore()
  const formStore = useFormStore()
  const treeStore = useTreeStore()
  const { getElements } = builderStore
  const { data } = formStore
  const { getIndex, handleClick } = useTree()
  const activatedKey = ref<({ key?: string | undefined })[]>([])
  const { activated } = storeToRefs(treeStore)

  // Initialize form
  onMounted(() => {
    formStore.init()
    watch(getElements, () => formStore.mapElementsToChildren())
  })

  function test () {
    console.log('test')
  }
</script>
