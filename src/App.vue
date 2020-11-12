<template>
  <div class="w-full h-screen bg-main-pattern p-8 font-mono">
    <Sidebar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from './components/Sidebar.vue'

export default defineComponent({
  name: 'App',
  components: {
    Sidebar,
  },
})
</script>
