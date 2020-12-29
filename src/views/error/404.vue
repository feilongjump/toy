<template>
  <div class="w-full h-screen flex flex-col justify-center items-center">
    <img class="w-4/5 lg:w-2/3" :src="image" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import image from '@/assets/404.png'

export default defineComponent({
  name: '404',
  setup() {
    return {
      image,
    }
  },
})
</script>
