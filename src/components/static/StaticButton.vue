<template>
  <v-card flat>
    <v-btn
      block
      class=""
      :color="props.data.options.type"
      size="x-large"
      variant="flat"
    >
      {{ props.data.properties.label }}
    </v-btn>
  </v-card>
</template>

<script lang="ts" setup>
  const props = defineProps(['data'])
</script>
