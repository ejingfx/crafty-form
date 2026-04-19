<template>
  <v-card flat>
    <v-container
      class="d-flex flex-column justify-center align-center bg-athens-gray"
    >
      <v-icon icon="mdi-select-drag" size="large"></v-icon>
      <v-list class="bg-transparent" flat>
        <v-list-item-title>Drag an element here</v-list-item-title>
      </v-list>
    </v-container>
  </v-card>
</template>

<script lang="ts" setup>
  const props = defineProps(['data'])
</script>
