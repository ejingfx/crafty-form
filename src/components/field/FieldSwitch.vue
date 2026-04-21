<template>
  <v-card flat>
    <v-switch
      :color="'pizazz'"
      hide-details
      :inset="props.data.properties.inset ?? null"
      :label="props.data.properties.label"
    ></v-switch>
  </v-card>
</template>

<script lang="ts" setup>
  const props = defineProps(['data'])
</script>
