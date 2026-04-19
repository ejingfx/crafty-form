<template>
  <v-card flat>
    <v-textarea
      :label="props.data.properties.label"
      :placeholder="props.data.properties.placeholder"
    >
    </v-textarea>
  </v-card>
</template>

<script lang="ts" setup>
  const props = defineProps(['data'])
</script>
