<template>
  <v-card flat>
    <v-select
      :chips="props.data.options.chips"
      :choices="props.data.options.choices"
      :clearable="props.data.options.clearable"
      hide-details
      :items="props.data.options.choices"
      :label="props.data.properties.label"
      :multiple="props.data.options.multiple"
      variant="solo-filled"
    ></v-select>
  </v-card>
</template>

<script lang="ts" setup>
  const props = defineProps(['data'])
</script>
