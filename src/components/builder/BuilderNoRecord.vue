<template>
  <v-list
    class="bg-raven rounded"
    density="compact"
    flat
    lines="one"
  >
    <v-list-item>
      <template #prepend>{{ props.text ?? 'No record found' }}</template>
      <template #append>
        <v-btn
          size="small"
          variant="tonal"
        >Edit</v-btn>
      </template>
    </v-list-item>
  </v-list>
</template>

<script lang="ts" setup>
  const props = defineProps(['text'])
</script>
