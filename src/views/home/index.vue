<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="flex flex-col justify-center items-center">
      <div>
        <span class="text-3xl">Toy</span>
        <span></span>
      </div>
      <div class="mt-4 text-gray-400">
        <span class="cursor-pointer m-4" v-for="(item, index) in module" :key="index">
          <router-link v-if="item.pathName" :to="{ name: item.pathName }">
            {{ item.name }}
          </router-link>
          <span v-else @click="alert(item.name)">{{ item.name }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'

const module = [
  {
    name: 'Home',
    pathName: ''
  },
  {
    name: 'Blog',
    pathName: 'Article'
  },
  {
    name: 'Shop',
    pathName: ''
  },
  {
    name: 'Auth',
    pathName: 'Login'
  },
  {
    name: 'Todo',
    pathName: ''
  }
]

const alert = (msg = '') => {
  ElMessage.success(`Hello ${msg}!`)
}
</script>
