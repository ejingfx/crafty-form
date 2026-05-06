<template>
  <v-card flat>
    <template v-if="props.data.properties.subtype === 'multiple'">
      <v-combobox
        :chips="props.data.options.chips"
        :choices="props.data.options.choices"
        class="pb-6"
        :clearable="props.data.options.clearable"
        hide-details
        :items="props.data.options.choices"
        :label="props.data.properties.label"
        :multiple="props.data.options.multiple"
        :readonly="props.data.attributes.readonly ?? false"
        variant="solo-filled"
      />
    </template>
    <template v-if="props.data.properties.subtype === 'single'">
      <v-select
        :choices="props.data.options.choices"
        class="pb-6"
        :clearable="props.data.options.clearable"
        hide-details
        :items="props.data.options.choices"
        :label="props.data.properties.label"
        :readonly="props.data.attributes.readonly ?? false"
        variant="solo-filled"
      />
    </template>
  </v-card>
</template>

<script lang="ts" setup>
  const props = defineProps(['data'])
</script>
