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
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const auth = () => {
  const user = ref<any>(localStorage.getItem('user'))
  if (user) {
    user.value = JSON.parse(user.value)

    // 已登录
    return {
      name: user.value.name,
      pathName: ''
    }
  }

  // 未登录
  return {
    name: 'Auth',
    pathName: 'Login'
  }
}

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
  auth(),
  {
    name: 'Todo',
    pathName: ''
  }
]

const alert = (msg = '') => {
  ElMessage.success(`Hello ${msg}!`)
}
</script>
