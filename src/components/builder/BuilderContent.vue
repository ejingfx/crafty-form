<template>
  <v-card
    class="rounded-md"
    flat
    :min-height="list.length > 0 ? 'auto' : 300"
    :min-width="500"
  >
    <v-list class="py-8 w-100 h-100 content-list">
      <draggable
        v-model="list"
        :animation="200"
        class="custom-draggable draggable"
        ghost-class="ghost"
        :group="{ name: 'elements', pull: true, put: true }"
        item-key="key"
        @add="addOrInsert"
        @start="start"
        @update="update"
      >
        <template #item="{ element, index }">
          <div
            :key="element.key"
            class="list-group-item"
          >
            <div class="custom-draggable">
              <div class="custom-draggable-inner">
                <v-list-item class="custom-draggable-component bg-transparent relative" dense>
                  <component
                    :is="resolve(element.type)"
                    :data="element"
                  />

                  <div class="custom-draggable-wrap">
                    <div class="custom-draggable-element bg-pizazz">
                      <span class="px-1 text-white text-capitalize">{{ element.properties?.alias ?? element.type }}</span>
                    </div>
                    <div class="custom-draggable-actions">
                      <v-btn
                        class="custom-draggable-btn"
                        color="pizazz"
                        icon="mdi-content-copy"
                        :rounded="false"
                        size="x-small"
                        variant="text"
                        @click="clone(element, index)"
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
                        @click="remove(index)"
                      />
                    </div>
                  </div>
                </v-list-item>
              </div>
            </div>
          </div>
        </template>
      </draggable>
    </v-list>
  </v-card>
</template>

<script lang="ts" setup>
  import draggable from 'vuedraggable'
  import { useBuilder } from '../../composables/useBuilder'
  import { useElementComponent } from '../../composables/useElementComponent'
  import { useBuilderStore } from '../../stores/builder'

  const { resolve } = useElementComponent()
  const {
    addOrInsert,
    clone,
    remove,
    start,
    update,
  } = useBuilder()
  const builderStore = useBuilderStore()
  const list = builderStore.$state.elements
</script>
