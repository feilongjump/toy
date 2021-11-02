<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="flex flex-col justify-center items-center">
      <div>
        <span class="text-3xl">Toy</span>
        <span></span>
      </div>
      <div class="mt-4 text-gray-400">
        <span class="cursor-pointer m-4" v-for="(item, index) in module" :key="index">
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const module = ['Home', 'Blog', 'Shop', 'Auth', 'Todo']
</script>
