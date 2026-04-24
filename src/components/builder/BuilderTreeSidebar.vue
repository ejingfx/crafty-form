<template>
  <v-navigation-drawer
    app
    color="mine-shaft"
    floating
    location="right"
    permament
    width="320"
  >
    <v-sheet class="pa-4">
      <!-- <pre>{{ getData }}</pre> -->
      <v-treeview
        class="py-4 px-0"
        density="compact"
        :hide-actions="true"
        :indent-lines="true"
        item-value="key"
        :items="data"
        open-all
        open-on-click
      >
        <template #prepend>
          <v-icon class="mr-2" icon="mdi-folder" />
        </template>
        <template #title="{ item }">
          {{ item.title }}
        </template>
      </v-treeview>
    </v-sheet>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
  import type { Element } from '@/types/fields'
  import type { FormChild } from '@/types/form'
  import { onMounted, watch } from 'vue'
  import { useBuilder } from '../../composables/useBuilder'
  import { useBuilderStore } from '../../stores/builder'
  import { useFormStore } from '../../stores/form'

  const formStore = useFormStore()
  const builderStore = useBuilderStore()
  const { getElements } = builderStore
  const {
    data,
    getData,
  } = formStore

  // Initialize form
  onMounted(() => {
    formStore.init()
    watch(getElements, () => formStore.mapElementsToChildren())
    console.log('mounted')
  })

</script>
