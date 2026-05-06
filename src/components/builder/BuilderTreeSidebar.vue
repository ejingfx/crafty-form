<template>
  <v-navigation-drawer
    app
    color="mine-shaft"
    floating
    location="right"
    permament
    width="320"
  >
    <template #prepend>
      <v-sheet class="w-100 bg-transparent d-flex space-between px-6 py-3">
        <div class="d-flex justify-center align-center bg-transparent" flat>
          Sample Form
        </div>
        <v-spacer />
        <v-btn icon="mdi-pencil" :ripple="false" size="small" variant="plain" />
      </v-sheet>
    </template>

    <v-divider />

    <v-sheet class="px-0 bg-transparent">
      <v-treeview
        v-model:activated="activatedKey"
        activatable
        class="py-4 px-0"
        color="pizazz"
        density="compact"
        :hide-actions="true"
        :indent-lines="true"
        indent-lines-color="white"
        item-value="key"
        :items="data"
        open-all
        return-object
        slim
        @update:activated="handleClick({
          element: getElements[getIndex(activatedKey[0]?.key as string)],
          index: getIndex(activatedKey[0]?.key as string),
          key: activatedKey[0]?.key as string
        }); activatedKey = []"
      >
        <template #prepend="{ item }">
          <v-icon
            class="pa-4 border-thin border-pizazz text-pizazz rounded"
            :icon="item.icon"
          />
        </template>
        <template #title="{ item }">{{ item.title }}</template>
      </v-treeview>
    </v-sheet>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
  import { onMounted, ref, watch } from 'vue'
  // import { useBuilder } from '../../composables/useBuilder'
  import { useTree } from '../../composables/useTree'
  import { useBuilderStore } from '../../stores/builder'
  import { useFormStore } from '../../stores/form'

  const builderStore = useBuilderStore()
  const formStore = useFormStore()

  const { getIndex, handleClick } = useTree()

  const { getElements } = builderStore
  const { data } = formStore
  const activatedKey = ref<any[]>([])

  // Initialize form
  onMounted(() => {
    formStore.init()
    watch(getElements, () => formStore.mapElementsToChildren())
  })
</script>
