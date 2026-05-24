<template>
  <v-expansion-panel-text>
    <v-list
      density="compact"
      flat
      lines="one"
    >
      <template v-if="logic.length > 0">
        with logic
      </template>

      <builder-no-record v-else text="No logic found" />
    </v-list>
  </v-expansion-panel-text>
</template>

<script lang="ts" setup>
  const props = defineProps(['data'])
  const logic = props.data.logic ?? []
</script>
