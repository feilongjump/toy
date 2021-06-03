<template>
  <div class="min-h-screen container mx-auto px-4 sm:px-0">
    <Header />

    <div class="main-height flex justify-center items-center">
      <router-view />
    </div>

    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
