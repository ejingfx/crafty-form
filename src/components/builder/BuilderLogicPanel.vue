<template>
  <v-expansion-panel-text>
    logic panel
    {{ props.data }}
  </v-expansion-panel-text>
</template>

<script lang="ts" setup>
  const props = defineProps(['data'])
</script>
