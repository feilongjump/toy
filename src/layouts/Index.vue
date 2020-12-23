<template>
  <main class="w-full flex flex-col">
    <Navbar />
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './components/Navbar.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    Navbar,
  },
})
</script>
