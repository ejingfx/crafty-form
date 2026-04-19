<template>
  <v-card class="d-flex align-center elevation-0 w-100 pa-1 bg-transparent" flat>
    <v-card-text>
      <v-text-field
        v-model="builderStore.$state.searchFilterGroup"
        class="builder-search-el"
        clearable
        dark
        density="compact"
        hide-details
        placeholder="Search elements"
        prepend-inner-icon="mdi-magnify"
        single-line
      />
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
  import { useBuilderStore } from '../../stores/builder'

  const builderStore = useBuilderStore()
</script>
