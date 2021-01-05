<template>
  <nav
    class="h-12 w-80 px-2 fixed rounded-full bg-white bottom-4 inset-x-1/2 transform -translate-x-1/2"
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
      <!-- user -->
      <div class="w-full h-full">
        <div
          class="h-full flex flex-col items-center justify-center"
          v-if="isLogged"
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
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '@/components/Icon.vue'
import Message from '@/plugins/Message'

export default defineComponent({
  name: 'Navbar',
  props: {
    username: {
      default: 'Guest',
      type: String,
    },
    isLogged: {
      default: false,
      type: Boolean,
    },
  },
  setup() {
    const reserve = () => {
      Message('留个坑位。')
    }

    return {
      reserve,
    }
  },
  components: {
    Icon,
  },
})
</script>
