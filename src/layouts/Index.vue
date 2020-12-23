<template>
  <div class="w-full min-h-screen px-4 pt-8">
    <Navbar />
    <main class="w-full flex flex-col">
      <router-view />
    </main>
  </div>
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
