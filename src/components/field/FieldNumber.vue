<template>
  <v-card flat>
    <v-number-input
      control-variant="stacked"
      :label="props.data.properties.label"
      :placeholder="props.data.properties.placeholder"
      variant="solo-filled"
    >
    </v-number-input>
  </v-card>
</template>

<script lang="ts" setup>
  const props = defineProps(['data'])
</script>
