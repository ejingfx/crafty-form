<template>
  <v-container
    class="d-flex fill-height justify-center align-center"
    fluid
  >
    <v-card
      class="d-flex flex-column justify-center align-center"
      flat
      style="background-color: transparent;"
    >
      <h1 class="text-warning">Error 500 | Something went wrong</h1>
      <v-btn
        v-ripple="false"
        link
        to="/"
        variant="text"
      >Go back home</v-btn>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
</script>
