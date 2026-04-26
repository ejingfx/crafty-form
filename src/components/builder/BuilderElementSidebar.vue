<template>
  <v-navigation-drawer
    app
    color="mine-shaft"
    permanent
    width="320"
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
</template>

<script lang="ts" setup></script>
