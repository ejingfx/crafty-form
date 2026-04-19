<template>
  <v-card class="d-flex flex-column align-center elevation-0 w-100" flat>
    <v-form
      v-model="isValidForm"
      class="w-100"
      @submit.prevent="onSubmit"
    >
      <v-text-field
        v-model="email"
        class="mb-2"
        clearable
        label="Email"
        :readonly="loading"
        required
        :rules="[required]"
        type="email"
        validate-on="blur lazy"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        label="Password"
        :readonly="loading"
        required
        :rules="[required]"
        :type="showPassword ? 'text' : 'password'"
        validate-on="blur"
        @click:append-inner="showPassword = !showPassword"
      ></v-text-field>

      <br>

      <v-btn
        block
        color="success"
        :disabled="!isValidForm"
        :loading="loading"
        size="large"
        type="submit"
        variant="elevated"
      >
        Sign In
      </v-btn>

      <br>
      <div style="min-height: 64px;">
        <v-list dense flat>
          <template v-if="hasErrors">
            <v-list-item
              v-for="(item, i) in formMessage"
              :key="i"
              class="d-flex justify-center pb-20"
              dense
              single-line
              style="font-size: 14px;"
            >
              <span class="text-red">{{ item.message }}</span>
            </v-list-item>
          </template>
        </v-list>
      </div>
    </v-form>
  </v-card>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAxios } from '@/composables/useAxios'
  import { useService } from '@/composables/useService'
  import { useAuthStore } from '@/stores/auth'

  const axios = useAxios()
  const service = useService()
  const { login } = useAuthStore()
  const router = useRouter()
  const isValidForm = ref(false)
  const email = ref(null)
  const password = ref(null)
  const loading = ref(false)
  const showPassword = ref(false)
  const hasErrors = ref(false)
  const formMessage = ref([])

  async function persistState (token, user) {
    const { data } = await axios.get(service.me, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    login({ token, user: JSON.stringify(data.user) })
    console.log('persistState', data)
    router.push('/dashboard')
  }

  async function onSubmit () {
    if (!isValidForm.value) return

    loading.value = true

    try {
      const payload = { email: email.value, password: password.value }
      console.log('payload', payload)
      const response = await axios.post(service.login, payload)
      console.log('response', response)

      if (response.status === 200 && response.data) {
        persistState(response.data?.token, response.data?.user)
      }
    } catch (error) {
      hasErrors.value = true
      formMessage.value = error.response?.data?.errors ?? [error]
    } finally {
      loading.value = false
      setTimeout(() => {
        hasErrors.value = false
        formMessage.value = []
      }, 5000)
    }
  }

  const required = v => (!!v || 'Field is required')
</script>
