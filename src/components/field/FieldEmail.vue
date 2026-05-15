<template>
  <v-card flat>
    <v-text-field
      v-model="value"
      clearable
      :label="props.data.properties.label"
      :placeholder="props.data.properties.placeholder"
      :readonly="props.data.attributes.readonly ?? false"
      :rules="active_rules"
      type="email"
      variant="solo-filled"
    />
  </v-card>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue'

  const props = defineProps(['data'])
  const value = ref(props.data.properties.value)

  const active_rules = computed(() => {
    const merged = [
      ...props.data.validation.predefined_rules,
      ...props.data.validation.custom_rules,
    ]
    return merged
      .filter((item: any) => item.status === true)
      .map((rule: any) => rule.fn)
  })
</script>
