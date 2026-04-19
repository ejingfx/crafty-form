<template>
  <v-card flat>
    <v-number-input
      control-variant="default"
      :label="props.data.properties.label"
      :placeholder="props.data.properties.placeholder"
    >
    </v-number-input>
  </v-card>
</template>

<script lang="ts" setup>
  const props = defineProps(['data'])
</script>
