<template>
  <v-card flat>
    <v-radio-group
      hide-details
      :inline="data.properties.inline ?? null"
      :label="data.properties.hide_group_label ? null : data.properties.label"
    >
      <template v-for="(item, i) in data.options.choices" :key="i">
        <v-radio
          :label="item.label"
          :value="item.value"
        ></v-radio>
      </template>
    </v-radio-group>
  </v-card>
</template>

<script lang="ts" setup>
  const props = defineProps(['data'])
</script>
