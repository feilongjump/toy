<template>
  <div class="min-h-screen container mx-auto px-6 sm:px-0">
    <Header />

    <div class="main-height py-4">
      <router-view />
    </div>

    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
