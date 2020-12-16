<template>
  <nav
    class="h-12 w-80 px-2 fixed bottom-4 inset-x-1/2 transform -translate-x-1/2 rounded-full bg-white
      lg:hidden"
  >
    <div class="h-full flex justify-between items-center">
      <div class="w-full h-full">
        <div
          class="h-full flex flex-col items-center justify-center"
          @click="reserve"
        >
          <Icon href="#icon-reserve-1" />
          <span class="text-gray-500 mt-2 zoom-50">预留</span>
        </div>
      </div>
      <div class="w-full h-full">
        <div
          class="h-full flex flex-col items-center justify-center"
          @click="reserve"
        >
          <Icon href="#icon-reserve-2" />
          <span class="text-gray-500 mt-2 zoom-50">预留</span>
        </div>
      </div>
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
      <div class="w-full h-full">
        <div
          class="h-full flex flex-col items-center justify-center"
          @click="reserve"
        >
          <Icon href="#icon-reserve-3" />
          <span class="text-gray-500 mt-2 zoom-50">预留</span>
        </div>
      </div>
      <div class="w-full h-full">
        <div
          class="h-full flex flex-col items-center justify-center"
          @click="reserve"
        >
          <Icon href="#icon-reserve-4" />
          <span class="text-gray-500 mt-2 zoom-50">预留</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '@/components/Icon.vue'
import Message from '@/plugins/Message'

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
    }
  },
  components: {
    Icon,
  },
})
</script>
