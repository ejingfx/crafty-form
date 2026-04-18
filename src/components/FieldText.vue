<template>
  <v-card flat>
    <v-text-field
      :label="props.data.properties.label"
      :placeholder="props.data.properties.placeholder"
    >
    </v-text-field>
  </v-card>
</template>

<script lang="ts" setup>
  const props = defineProps(['data'])
</script>
