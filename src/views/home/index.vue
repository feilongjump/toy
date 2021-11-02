<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="flex flex-col justify-center items-center">
      <div>
        <span class="text-3xl">Toy</span>
        <span></span>
      </div>
      <div class="mt-4 text-gray-400">
        <span
          class="cursor-pointer m-4"
          v-for="(item, index) in module"
          :key="index"
          @click="alert(item)"
        >
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'

const module = ['Home', 'Blog', 'Shop', 'Auth', 'Todo']

const alert = (msg = '') => {
  ElMessage.success(`Hello ${msg}!`)
}
</script>
