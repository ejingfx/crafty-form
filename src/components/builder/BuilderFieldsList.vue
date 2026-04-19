<template>
  <v-card class="d-flex flex-column justify-start align start bg-transparent" flat>
    <!-- GROUP FILTERED -->
    <v-list
      v-show="showSearchFilterGroup"
      density="compact"
      lines="two"
    >
      <template v-for="(item, i) in getGroupFiltered" :key="i">
        <v-list-item
          class="py-4 pl-6 pr-4"
        >
          <template v-slot:prepend>
            <v-icon class="bg-red pa-4">{{ item.icon }}</v-icon>
          </template>
          <template v-slot:append>
            <v-btn
              density="compact"
              icon="mdi-plus"
              variant="plain"
              @click="builder.add(item.type)"
            ></v-btn>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle class="text-[8px]">{{ item.subtitle }}</v-list-item-subtitle>
        </v-list-item>
      </template>
    </v-list>

    <!-- SEARCH FILTERED -->
    <v-list
      v-show="!showSearchFilterGroup"
      density="compact"
      lines="two"
    >
      <template v-for="(item, i) in getSearchFiltered" :key="i">
        <v-list-item
          class="py-4 pl-6 pr-4"
        >
          <template v-slot:prepend>
            <v-icon class="bg-red pa-4">{{ item.icon }}</v-icon>
          </template>
          <template v-slot:append>
            <v-btn
              density="compact"
              icon="mdi-plus"
              variant="plain"
              @click="builder.add(item.type)"
            ></v-btn>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle class="text-[8px]">{{ item.subtitle }}</v-list-item-subtitle>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script lang="ts" setup>
  import { useBuilder } from '../../composables/useBuilder'

  const builder = useBuilder()
  const getGroupFiltered = builder.getGroupFiltered
  const getSearchFiltered = builder.getSearchFiltered
  const showSearchFilterGroup = builder.showSearchFilterGroup
</script>
