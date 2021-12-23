<template>
  <div class="my-12 flex items-center flex-col">
    <router-link :to="{ name: 'Home' }">
      <img class="w-24 h-24 rounded-full" :src="avatar" />
    </router-link>
    <span class="mt-6 text-center font-serif text-xl font-semibold tracking-wide text-gray-500">
      生活从来就没有容易。
    </span>
  </div>
</template>

<script setup>
import avatar from '@/assets/avatar.jpg'
</script>
