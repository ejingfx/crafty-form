<template>
  <v-card flat>
    <v-checkbox
      hide-details
      :label="props.data.properties.label"
    >
    </v-checkbox>
  </v-card>
</template>

<script lang="ts" setup>
  const props = defineProps(['data'])
</script>
