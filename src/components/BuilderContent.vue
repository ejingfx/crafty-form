<template>
  <v-card
    class="pa-4 rounded-md"
    flat
    :min-height="list.length > 0 ? 'auto' : 300"
    :min-width="500"
  >
    <template v-if="list.length > 0">
      <v-list>
        <draggable
          class="list-group"
          :disabled="!enabled"
          ghost-class="ghost"
          item-key="name"
          :list="list"
          :move="checkMove"
          @end="checkOrder"
          @start="draggingInfo"
        >
          <template #item="{ element }">
            <div class="list-group-item" :class="{ 'not-draggable': !enabled }">
              <v-list-item class="bg-white" dense>
                <FieldNumber v-if="element.type === 'number'" :data="element" />
                <FieldTextarea v-else-if="element.type === 'textarea'" :data="element" />
                <FieldText v-else :data="element" />
              </v-list-item>
            </div>
          </template>
        </draggable>
      </v-list>
    </template>

    <template v-else>
      <div class="d-flex justify-center fill-height pa-4">
        <v-list class="d-flex justify-center align-center flex-column">
          <v-list-item-title>Drag elements here</v-list-item-title>
          <v-list-item-subtitle>Grab an element from the left and drop it here</v-list-item-subtitle>
        </v-list>
      </div>
    </template>
  </v-card>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import draggable from 'vuedraggable'
  import { useBuilderStore } from '../stores/builder'

  const builderStore = useBuilderStore()
  const enabled = ref(true)
  const dragging = ref(false)
  const list = builderStore.$state.elements
  function draggingInfo () {
    return dragging.value ? 'under drag' : ''
  }
  function checkMove () {
    // window.console.log(`Future index: ${e.draggedContext.futureIndex}`, list.value)
    // console.log('end', e.draggedContext)
  }
  function checkOrder () {
    dragging.value = false
    // console.log('end', list)
  }
</script>
