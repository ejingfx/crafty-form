<template>
  <v-card class="d-flex flex-column justify-start align start bg-transparent" flat>
    <!-- GROUP FILTERED -->
    <v-list
      v-show="showSearchFilterGroup"
      density="compact"
      lines="two"
    >
      <draggable
        :animation="200"
        class="field-list"
        :clone="stage"
        :group="{ name: 'elements', pull: 'clone', put: true }"
        item-key="element.key"
        :list="getGroupFiltered"
        :sort="false"
        @end="end"
        @start="stage"
      >
        <template #item="{ element }">
          <v-list-item
            class="py-4 pl-6 pr-4"
          >
            <template v-slot:prepend>
              <v-icon class="bg-red pa-4">{{ element.icon }}</v-icon>
            </template>
            <v-list-item-title>{{ element.title }}</v-list-item-title>
            <v-list-item-subtitle class="text-[8px]">{{ element.subtitle }}</v-list-item-subtitle>
          </v-list-item>
        </template>
      </draggable>
    </v-list>
  </v-card>
</template>

<script lang="ts" setup>
  import draggable from 'vuedraggable'
  import { useBuilder } from '../../composables/useBuilder'
  const {
    end,
    stage,
    getGroupFiltered,
    getSearchFiltered,
    showSearchFilterGroup,
  } = useBuilder()
</script>
