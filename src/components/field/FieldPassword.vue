<template>
  <v-text-field
    :label="props.data.properties.label"
    :placeholder="props.data.properties.placeholder"
    type="password"
    variant="solo-filled"
  >
  </v-text-field>
</template>

<script lang="ts" setup>
  const props = defineProps(['data'])
</script>
