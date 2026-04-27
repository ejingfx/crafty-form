<template>
  <v-expansion-panel-text>
    layout panel
    {{ props.data }}
  </v-expansion-panel-text>
</template>

<script lang="ts" setup>
  const props = defineProps(['data'])
</script>
