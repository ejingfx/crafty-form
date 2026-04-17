<template>
  <div>
    <AppDataDrawer />
    <AppHeader />
    <v-main>
      <v-card
        class="pa-4 bg-transparent position-relative"
        flat
      >
        <router-view />
      </v-card>
    </v-main>
  </div>
</template>

<script setup>
</script>
