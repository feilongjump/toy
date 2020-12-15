<template>
  <div class="w-full h-full flex justify-start">
    <Sidebar />

    <main
      class="w-full flex flex-col
        lg:ml-8"
    >
      <Navbar />
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    Sidebar,
    Navbar,
  },
})
</script>
