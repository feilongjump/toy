<template>
  <div class="w-full h-screen bg-main-pattern px-12 py-8 font-mono">
    <div
      class="w-full h-full border border-white rounded-2xl p-4 flex justify-start shadow-2xl bg-white bg-opacity-25"
    >
      <Sidebar />

      <main class="ml-8 w-full flex flex-col">
        <Navbar />
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'

export default defineComponent({
  name: 'App',
  components: {
    Sidebar,
    Navbar,
  },
})
</script>
