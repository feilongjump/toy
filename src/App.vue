<template>
  <div
    class="font-mono bg-gradient-to-tr from-lower-left via-precise-middle to-top-right"
  >
    <div class="pb-20">
      <Navbar />
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './layouts/components/Navbar.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
  },
})
</script>
