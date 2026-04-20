<template>
  <v-card
    class="rounded-md"
    flat
    :min-height="list.length > 0 ? 'auto' : 300"
    :min-width="500"
  >
    <template v-if="list.length > 0">
      <v-list class="py-8">
        <draggable
          v-bind="dragOptions"
          class="list-group draggable"
          :component-data="{ name: !enabled ? 'flip-list' : null }"
          :disabled="!enabled"
          ghost-class="ghost"
          item-key="element.key"
          :list="list"
          :move="checkMove"
          @end="checkOrder"
          @start="draggingInfo"
        >
          <template #item="{ element, index }">
            <div
              :key="element.key"
              class="list-group-item"
              :class="{ 'not-draggable': !enabled }"
            >
              <div class="custom-draggable">
                <div class="custom-draggable-inner">
                  <div class="custom-draggable-wrap">
                    <div class="custom-draggable-element bg-pizazz">
                      <span class="px-1 text-white text-capitalize">{{ element.type }}</span>
                    </div>
                    <div class="custom-draggable-actions">
                      <v-btn
                        class="custom-draggable-btn"
                        color="pizazz"
                        icon="mdi-content-copy"
                        :rounded="false"
                        size="x-small"
                        variant="text"
                        @click="builder.clone(element, index)"
                      />
                      <v-divider vertical />
                      <v-btn
                        class="custom-draggable-btn"
                        color="pizazz"
                        :data-index="index"
                        icon="mdi-trash-can-outline"
                        :rounded="false"
                        size="x-small"
                        variant="text"
                        @click="builder.remove(index)"
                      />
                    </div>
                  </div>

                  <v-list-item class="bg-transparent relative" dense>
                    <FieldNumber v-if="element.type === 'number'" :data="element" />
                    <FieldPhone v-if="element.type === 'phone'" :data="element" />
                    <FieldText v-else-if="element.type === 'text'" :data="element" />
                    <FieldTextarea v-else-if="element.type === 'textarea'" :data="element" />
                    <FieldPassword v-else-if="element.type === 'password'" :data="element" />
                    <FieldCheckbox v-else-if="element.type === 'checkbox'" :data="element" />
                    <FieldRadio v-else-if="element.type === 'radio'" :data="element" />

                    <StructureContainer v-else-if="element.type === 'container'" :data="element" />

                    <StaticButton v-else-if="element.type === 'button'" :data="element" />
                    <FormHeading v-else-if="element.type === 'heading'" :data="element" />
                    <FieldEmail v-else-if="element.type === 'email'" :data="element" />
                  </v-list-item>
                </div>
              </div>
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
  import { computed, ref } from 'vue'
  import draggable from 'vuedraggable'
  import { useBuilder } from '../../composables/useBuilder'
  import { useBuilderStore } from '../../stores/builder'

  const builder = useBuilder()
  const builderStore = useBuilderStore()
  const enabled = ref(true)
  const dragging = ref(false)
  const list = builderStore.$state.elements

  const dragOptions = computed(() => {
    return {
      animation: 200,
      group: 'description',
      disabled: false,
      ghostClass: 'ghost',
    }
  })
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
