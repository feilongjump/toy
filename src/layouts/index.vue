<template>
  <!-- lamp -->
  <div
    class="w-24 h-4/5 fixed top-6 bg-pink-400 filter blur-3xl transition duration-500 ease-in-out opacity-0 lg:opacity-20"
  ></div>
  <div class="layout-container">
    <div class="z-100">
      <Sidebar />

      <div
        class="ml-0 md:ml-24 lg:ml-64 transition-all duration-500 ease-in-out px-2 md:px-6 lg:px-12"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from './components/Sidebar.vue'
</script>

<style>
.layout-container {
  background-color: #2b3452;
  @apply w-full min-h-screen;
}
</style>
