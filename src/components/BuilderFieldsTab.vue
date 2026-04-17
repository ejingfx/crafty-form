<template>
  <v-sheet clasas="elevation-0 pa-1" color="transparent">
    <v-tabs
      v-model="tab"
      grow
    >
      <v-tab size="small" value="fields">Fields</v-tab>
      <v-tab size="small" value="page">Page</v-tab>
    </v-tabs>

    <v-divider />

    <v-tabs-window
      v-model="tab"
      class="bg-transparent"
    >
      <v-tabs-window-item value="fields">
        <v-sheet class="pa-5 bg-transparent">Fields</v-sheet>
      </v-tabs-window-item>
      <v-tabs-window-item class="bg-transparent" value="page">
        <v-sheet class="pa-5 bg-transparent">Page</v-sheet>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-sheet>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const tab = ref('fields')
</script>
