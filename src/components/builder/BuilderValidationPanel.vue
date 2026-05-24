<template>
  <v-expansion-panel-text>
    <v-list
      density="compact"
      flat
      lines="one"
    >
      <template v-if="rules.length > 0">
        <v-list-item
          v-for="(item, i) in rules"
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
      </template>

      <builder-no-record v-else text="No validations found" />
    </v-list>
  </v-expansion-panel-text>
</template>

<script lang="ts" setup>
  const props = defineProps(['data'])
  const predefined = props.data.validation?.predefined_rules ?? []
  const custom = props.data.validation?.custom_rules ?? []
  const rules = [...predefined, ...custom]
</script>
