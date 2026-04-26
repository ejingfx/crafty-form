<template>
  <v-card flat>
    <v-text-field
      :label="props.data.properties.label"
      :placeholder="props.data.properties.placeholder"
      :readonly="props.data.attributes.readonly ?? false"
      variant="solo-filled"
    >
    </v-text-field>
  </v-card>
</template>

<script lang="ts" setup>
  const props = defineProps(['data'])
</script>
