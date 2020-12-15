<template>
  <div
    class="w-full h-screen bg-main-pattern px-4 pt-8 font-mono
      lg:px-12 lg:py-8"
  >
    <div
      class="w-full h-full
      lg:border lg:border-white lg:rounded-2xl lg:p-4 lg:shadow-2xl lg:bg-white lg:bg-opacity-25"
    >
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>
