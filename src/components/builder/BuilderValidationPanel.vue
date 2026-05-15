<template>
  <v-expansion-panel-text>
    <v-list
      density="compact"
      flat
      lines="one"
    >
      <v-list-item
        v-for="(item, i) in [
          ...props.data.validation.predefined_rules,
          ...props.data.validation.custom_rules
        ]"
        :key="i"
        class="pl-0"
      >
        <template #prepend>
          <span class="text-capitalize">{{ item.name }}</span>
        </template>
        <template #append>
          <v-switch
            v-model="item.status"
            color="success"
            density="compact"
            hide-details
          />
        </template>
      </v-list-item>
    </v-list>

    <v-divider />

    <v-list
      density="compact"
      flat
      lines="one"
    >
      <v-list-item class="pl-0">
        <template #prepend>
          Additional Rules
        </template>
        <template #append>
          <v-btn
            prepend-icon="mdi-plus"
            :ripple="false"
            variant="plain"
          >Add</v-btn>
        </template>
      </v-list-item>
    </v-list>
  </v-expansion-panel-text>
</template>

<script lang="ts" setup>
  const props = defineProps(['data'])
</script>
