<template>
  <v-card flat>
    <template v-if="props.data.options.accept_input">
      <v-combobox
        :chips="props.data.options.chips"
        :choices="props.data.options.choices"
        :clearable="props.data.options.clearable"
        hide-details
        :items="props.data.options.choices"
        :label="props.data.properties.label"
        :multiple="props.data.options.multiple"
        variant="solo-filled"
      ></v-combobox>
    </template>
    <template v-else>
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
    </template>
  </v-card>
</template>

<script lang="ts" setup>
  const props = defineProps(['data'])
</script>
