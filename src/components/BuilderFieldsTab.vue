<template>
  <v-sheet clasas="elevation-0 pa-1" color="transparent">
    <div v-show="showSearchFilterGroup" class="d-flex align-center flex-column">
      <v-btn-group
        density="compact"
        divided
        variant="tonal"
      >
        <template v-for="(item, i) in builder.fieldGroupData" :key="i">
          <v-btn
            :class="builderStore.getFilterGroup === item.type ? 'text-pizazz' : ''"
            color="white"
            @click="builder.setFilterGroup(item.type)"
          >{{ item.group }}</v-btn>
        </template>
      </v-btn-group>
    </div>

    <BuilderFieldsList />
  </v-sheet>
</template>

<script lang="ts" setup>
  import type { FieldGroup } from '../types/builder'
  import { useBuilder } from '../composables/useBuilder'
  import { useBuilderStore } from '../stores/builder'

  const builderStore = useBuilderStore()
  const builder = useBuilder()
  const showSearchFilterGroup = builder.showSearchFilterGroup
</script>
