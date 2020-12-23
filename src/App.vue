<template>
  <div
    class="font-mono bg-gradient-to-tr from-lower-left via-precise-middle to-top-right"
  >
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>
