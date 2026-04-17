<template>
  <v-row>
    <v-navigation-drawer
      app
      color="mine-shaft"
      permanent
      width="300"
    >
      <BuilderSearchElement />
      <BuilderFieldsTab />
    </v-navigation-drawer>
    <v-container
      class="d-flex fill-height justify-center w-100"
      flat
      fluid
    >
      <BuilderContent />
    </v-container>
  </v-row>
</template>

<script lang="ts" setup>
</script>
