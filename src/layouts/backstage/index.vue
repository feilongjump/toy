<template>
  <div class="w-full min-h-screen bg-blue-100 pt-4">
    <Sidebar />

    <div class="ml-0 sm:ml-28 px-4 sm:px-8 transition-all duration-500 ease-in-out">
      <Navbar />
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
</script>
