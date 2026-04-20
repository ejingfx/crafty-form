<template>
  <!--  TODO: bind stepper to control-variant -->
  <v-card flat>
    <v-text-field
      control-variant="none"
      hide-spin-buttons
      :label="props.data.properties.label"
      :max="props.data.properties.max"
      :min="props.data.properties.min"
      :placeholder="props.data.properties.placeholder"
      type="number"
      variant="solo-filled"
    >
    </v-text-field>
  </v-card>
</template>

<script lang="ts" setup>
  const props = defineProps(['data'])
</script>
