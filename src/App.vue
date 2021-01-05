<template>
  <div
    class="font-mono bg-gradient-to-tr from-lower-left via-precise-middle to-top-right"
  >
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore()
    const user = localStorage.getItem('user')
      ? localStorage.getItem('user')
      : {}
    store.dispatch('sign', user)
  },
})
</script>
