<template>
  <v-app-bar
    app
    clipped-left
    clipped-right
    dense
    height="60"
  >
    <v-app-bar-nav-icon
      class="mr-4"
      prepend-icon="mdi-user"
    >APP BAR ICON
    </v-app-bar-nav-icon>

    <!-- <AppBreadcrumbs /> -->

    <v-spacer />
    <AppMenu />
  </v-app-bar>
</template>

<script setup>
</script>
