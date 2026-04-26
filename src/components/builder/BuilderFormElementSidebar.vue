<template>
  <v-navigation-drawer
    v-model="getActivated"
    app
    color="mine-shaft"
    floating
    location="right"
    :scrim="false"
    temporary
    width="320"
  >
    <template #prepend>
      <v-btn
        icon="mdi-close"
        variant="plain"
        @click="setActivated(false); clear()"
      />
      <strong>{{ title }}</strong>
      <v-spacer />
    </template>
    <v-divider />
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia'
  import { onMounted, ref, watch } from 'vue'
  import { useTreeStore } from '../../stores/tree'

  const title = ref('')
  const treeStore = useTreeStore()
  const {
    activated,
    getActivated,
    element,
  } = storeToRefs(treeStore)
  const {
    clear,
    setActivated,
  } = treeStore

  onMounted(() => {
    // console.log('xx', element)
  })

  watch(activated, () => {
    console.log('watch activated')
    if (activated) {
      // title = element.title
    }
  })
</script>
