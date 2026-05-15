<template>
  <v-expansion-panel-text props.value>
    <v-container
      v-if="activated && !isNullElement"
      class="pa-0"
      fluid
    >
      <v-row>
        <v-col cols="5" md="5" sm="">
          <v-list-subheader class="" color="athens-gray">Column</v-list-subheader>
        </v-col>
        <v-col cols="7" md="7" sm="">
          <v-number-input
            v-model="(element.layout as Record<string, unknown>).column as number"
            bg-color="dove-gray"
            class=""
            control-variant="stacked"
            density="compact"
            hide-details
            :max="12"
            :min="1"
            variant="solo"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          class="d-flex justify-space-between w-100"
          cols="12"
        >
          <v-list-subheader class="d-flex" color="athens-gray">Size</v-list-subheader>
          <v-btn-group
            class="d-flex"
            density="compact"
            divided
            slim
            variant="tonal"
          >
            <template v-for="item in layoutSize" :key="item">
              <v-btn
                class="d-flex space-evenly text-capitalize"
                :color="(element.layout as Record<string, unknown>).size === item ? 'pizazz' : 'white'"
                density="compact"
                :ripple="false"
                size="x-small"
                :text="item"
                @click="(element.layout as Record<string, unknown>).size = item"
              />
            </template>
          </v-btn-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          class="d-flex justify-space-between w-100"
          cols="12"
        >
          <v-list-subheader class="d-flex" color="athens-gray">Position</v-list-subheader>
          <v-btn-group
            class="d-flex"
            density="compact"
            divided
            mandatory
            slim
            variant="tonal"
          >
            <template v-for="item in horizontalPositionType" :key="item">
              <v-btn
                class="d-flex space-evenly text-capitalize"
                :color="(element.layout as Record<string, unknown>).position === item ? 'pizazz' : 'white'"
                :data-position="item"
                density="compact"
                :ripple="false"
                size="x-small"
                :text="item"
                @click="(element.layout as Record<string, unknown>).position = item"
              />
            </template>
          </v-btn-group>
        </v-col>
      </v-row>
    </v-container>
  </v-expansion-panel-text>
</template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia'
  import { ref, watch } from 'vue'
  import { useTreeStore } from '../../stores/tree'
  import { horizontalPositionType, layoutSize } from '../../types/fields'

  const treeStore = useTreeStore()
  const { activated, element } = storeToRefs(treeStore)
  const isNullElement = ref(false)

  watch([activated, element], (newValue: any) => {
    isNullElement.value = typeof newValue[1]?.layout === undefined
  })
</script>

<style lang="scss" scoped>
.layout-size--active {
  background-color: var(--v-theme-pizazz);
}
</style>
