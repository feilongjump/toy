<template>
  <div class="w-full min-h-screen px-4 pt-8">
    <main class="lg:w-1/2 mx-auto flex flex-col">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Layout',
})
</script>
