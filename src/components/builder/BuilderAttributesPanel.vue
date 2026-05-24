<template>
  <v-expansion-panel-text props.value>
    <template v-if="Object.keys(props.data.attributes).length > 0">
      <v-container
        class="pa-0"
        fluid
      >
        <v-row>
          <v-col cols="5" md="5" sm="">
            <v-list-subheader class="" color="athens-gray">Name</v-list-subheader>
          </v-col>
          <v-col cols="7" md="7" sm="">
            <v-text-field
              bg-color="dove-gray"
              class=""
              density="compact"
              hide-details
              :value="props.data?.attributes?.name"
              variant="solo"
            />
          </v-col>
        </v-row>
      </v-container>
    </template>

    <builder-no-record v-else text="No attributes found" />
  </v-expansion-panel-text>
</template>

<script lang="ts" setup>
  const props = defineProps(['data'])
</script>
