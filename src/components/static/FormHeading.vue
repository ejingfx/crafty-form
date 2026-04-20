<template>
  <v-card flat :rounded="false">
    <legend>
      <template v-if="props.data.properties.subtype === 'form'">
        <h1 class="my-0 heading-0 leading-0">{{ props.data.properties.label }}</h1>
      </template>
      <template v-else-if="props.data.properties.subtype === 'section'">
        <h2 class="my-0 heading-0 leading-0">{{ props.data.properties.label }}</h2>
      </template>
      <template v-else-if="props.data.properties.subtype === 'subsection'">
        <h3 class="my-0 heading-0 leading-0">{{ props.data.properties.label }}</h3>
      </template>
      <p class="my-0 text-raven">{{ props.data.properties.description }}</p>
    </legend>
  </v-card>
</template>

<script lang="ts" setup>
  const props = defineProps(['data'])
</script>
