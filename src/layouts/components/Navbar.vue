<template>
  <nav
    class="h-12 w-80 px-2 fixed bottom-4 inset-x-1/2 transform -translate-x-1/2 rounded-full bg-white
      lg:hidden"
  >
    <div class="h-full flex justify-between items-center">
      <router-link
        class="w-full h-full flex flex-col items-center justify-center"
        :to="{ name: 'Article' }"
      >
        <Icon href="#icon-article" />
        <span class="text-gray-500 mt-2 zoom-50">博客</span>
      </router-link>
      <router-link
        class="w-full h-full flex flex-col items-center justify-center"
        :to="{ name: 'Todo' }"
      >
        <Icon href="#icon-tomato" />
        <span class="text-gray-500 mt-2 zoom-50">Todo</span>
      </router-link>
      <!-- user -->
      <div class="w-full h-full">
        <div
          class="h-full flex flex-col items-center justify-center"
          v-if="isLogin"
        >
          <Icon href="#icon-user" />
          <span class="text-gray-500 mt-2 zoom-50">{{ username }}</span>
        </div>
        <router-link
          class="h-full flex flex-col items-center justify-center"
          :to="{ name: 'Auth.Login' }"
          v-else
        >
          <Icon href="#icon-user" />
          <span class="text-gray-500 mt-2 zoom-50">登录</span>
        </router-link>
      </div>
      <div
        class="w-full h-full flex flex-col items-center justify-center"
        @click="reserve"
      >
        <Icon href="#icon-reserve-3" />
        <span class="text-gray-500 mt-2 zoom-50">预留</span>
      </div>
      <div
        class="w-full h-full flex flex-col items-center justify-center"
        @click="reserve"
      >
        <Icon href="#icon-reserve-4" />
        <span class="text-gray-500 mt-2 zoom-50">预留</span>
      </div>
    </div>
  </nav>
  <nav class="hidden lg:block fixed bottom-8 right-44">
    <div class="relative">
      <div
        class="w-32 h-32 border-2 border-box-violet rounded-xl absolute left-39 bottom-2 transform-gpu rotate-55 -skew-y-25"
      ></div>
      <div
        class="w-32 h-32 border-r-2 border-b-2 border-box-violet rounded-xl absolute left-39 -bottom-1 transform-gpu rotate-55 -skew-y-25"
      ></div>
      <img :src="cloud" class="w-44" />
      <div class="relative">
        <router-link
          class="absolute -top-36 -right-14 cursor-pointer"
          :to="{ name: 'Auth.Login' }"
        >
          <Icon href="#icon-user" width="w-10" height="h-10" />
        </router-link>
        <router-link
          class="absolute -top-28 -right-30 cursor-pointer"
          :to="{ name: 'Article' }"
        >
          <Icon href="#icon-article" width="w-10" height="h-10" />
        </router-link>
        <router-link
          class="absolute -top-16 -right-24 cursor-pointer"
          :to="{ name: 'Todo' }"
        >
          <Icon href="#icon-tomato" width="w-10" height="h-10" />
        </router-link>
        <div class="absolute bottom-6 -right-8 cursor-pointer" @click="reserve">
          <Icon href="#icon-reserve-4" width="w-10" height="h-10" />
        </div>
        <div class="absolute -top-28 right-0 cursor-pointer" @click="reserve">
          <Icon href="#icon-reserve-5" width="w-10" height="h-10" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '@/components/Icon.vue'
import Message from '@/plugins/Message'
import cloud from '@/assets/cloud.png'

export default defineComponent({
  name: 'Navbar',
  setup() {
    const localUser = localStorage.getItem('user')
    const isLogin = localUser ? true : false
    let username = 'Guest'

    const reserve = () => {
      Message('留个坑位。')
    }

    if (localUser) {
      const user = JSON.parse(localUser)
      username = user.name
    }

    return {
      isLogin,
      reserve,
      username,
      cloud,
    }
  },
  components: {
    Icon,
  },
})
</script>
