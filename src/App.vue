<template>
  <div class="w-full h-screen bg-main-pattern px-12 py-8 font-mono">
    <div
      class="w-full h-full border border-white rounded-2xl p-4 shadow-2xl bg-white bg-opacity-25"
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
