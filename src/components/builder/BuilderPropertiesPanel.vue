<template>
  <v-expansion-panel-text props.value>
    <v-container
      v-if="activated && !isNullElement"
      class="pa-0"
      fluid
    >
      <v-row>
        <v-col cols="5" md="5" sm="">
          <v-list-subheader class="" color="athens-gray">Label</v-list-subheader>
        </v-col>
        <v-col cols="7" md="7" sm="">
          <v-text-field
            v-model="(element.properties as Record<string, unknown>).label"
            bg-color="dove-gray"
            class=""
            density="compact"
            hide-details
            variant="solo"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5" md="5" sm="">
          <v-list-subheader class="" color="athens-gray">Description</v-list-subheader>
        </v-col>
        <v-col cols="7" md="7" sm="">
          <v-text-field
            v-model="(element.properties as Record<string, unknown>).description"
            bg-color="dove-gray"
            class=""
            density="compact"
            hide-details
            variant="solo"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5" md="5" sm="">
          <v-list-subheader class="" color="athens-gray">Placeholder</v-list-subheader>
        </v-col>
        <v-col cols="7" md="7" sm="">
          <v-text-field
            v-model="(element.properties as Record<string, unknown>).placeholder"
            bg-color="dove-gray"
            class=""
            color="mine-shaft"
            density="compact"
            hide-details
            variant="solo"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-expansion-panel-text>
</template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia'
  import { ref, watch } from 'vue'
  import { useTreeStore } from '../../stores/tree'

  const treeStore = useTreeStore()
  const { activated, element } = storeToRefs(treeStore)
  const isNullElement = ref(false)

  watch([activated, element], (newValue: any) => {
    isNullElement.value = typeof newValue[1]?.properties === undefined
  })
</script>
