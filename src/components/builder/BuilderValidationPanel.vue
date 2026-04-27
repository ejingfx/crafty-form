<template>
  <v-expansion-panel-text>
    validation panel
    {{ props.data }}
  </v-expansion-panel-text>
</template>

<script lang="ts" setup>
  const props = defineProps(['data'])
</script>
