<template>
  <div class="w-full min-h-screen px-4 pt-8">
    <Scrollbar />
    <main class="lg:w-1/2 mx-auto flex flex-col">
      <div class="pb-20">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Scrollbar from './components/Scrollbar.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    Scrollbar,
  },
})
</script>
