<template>
  <div class="pa-4">
    <v-menu
      bottom
      content-class
      offset-y
    >

      <template v-slot:activator="{ props }">
        <v-avatar v-bind="props" size="small">
          <v-img src="@/assets/no-image.jpg"></v-img>
        </v-avatar>
      </template>

      <v-list
        class="pa-0"
        dense
        elevation="1"
        flat
        single-line
      >

        <v-list-item
          dense
          min-width="200"
        >
          <v-list-item-title class="font-weight-medium">Welcome {{ user?.username }}!</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <!-- TODO: LOOP HERE -->
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          class="justify-space-between"
          dense
          link
          :to="item.to"
        >
          <template v-slot:prepend>
            <v-icon icon="true">{{ item.icon }}</v-icon>
          </template>
          <v-list-item-title class="font-weight-regular">{{ item.title }}</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          dense
          link
          @click="handleLogout"
        >
          <template v-slot:prepend>
            <v-icon icon="true">mdi-logout</v-icon>
          </template>
          <v-list-item-title class="font-weight-regular">LOGOUT</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAxios } from '../../composables/useAxios'
  import { useService } from '../../composables/useService'
  import { useAuthStore } from '../../stores/auth'
  import { useMenuStore } from '../../stores/menu'
  const menuList = useMenuStore()
  const menuItems = ref(menuList.$state.menu)

  const router = useRouter()
  const service = useService()
  const { token, logout, user } = useAuthStore()
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const axios = useAxios()

  async function handleLogout () {
    try {
      const response = await axios.post(service?.logout, axiosConfig)

      if (response.status === 200 && response.data?.message === 'success') {
        logout()
        router.push('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }
</script>
