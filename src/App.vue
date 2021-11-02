<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <img class="mx-auto" alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <p class="mt-4">
    <router-link class="mr-2 border-b border-blue-300" to="/">Go to Home</router-link>
    <router-link class="border-b border-blue-300" to="/about">Go to About</router-link>
  </p>
  <router-view></router-view>
</template>

<style>
#app {
  @apply font-sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
