<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    color="mine-shaft"
    permanent
  >
    <div class="d-flex justify-space-between flex-column h-100">
      <v-list flat>
        <v-list-item>
          <v-img src="@/assets/logo.png"></v-img>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          active-class="--active"
          color="warning"
          link
          :to="item.to"
        >
          <template v-slot:prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-spacer></v-spacer>

      <v-list flat>
        <v-list-item
          v-for="item in systemItems"
          :key="item.title"
          active-class="--active"
          color="warning"
          link
          :to="item.to"
        >
          <template v-slot:prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia'
  import { ref } from 'vue'
  import { useAppStore } from '../stores/app'

  const appStore = useAppStore()
  const { drawer } = storeToRefs(appStore)
  const menuItems = ref([
    { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/dashboard' },
    { title: 'Users', icon: 'mdi-account-group', to: '/users' },
  ])
  const systemItems = ref([
    { title: 'Account', icon: 'mdi-account-circle', to: '/account' },
    { title: 'Settings', icon: 'mdi-cog', to: '/settings' },
  ])
</script>
