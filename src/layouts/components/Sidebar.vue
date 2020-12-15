<template>
  <div
    class="hidden h-full w-64 bg-white rounded-xl shadow-lg
      lg:flex lg:flex-shrink-0 lg:flex-col"
  >
    <div class="h-16 w-full px-6 py-4 text-xl text-pink-500 font-semibold">
      Hello Blog
    </div>
    <Menu></Menu>
    <div class="h-24 w-full px-6 py-4 border-t border-gray-300">
      <div class="w-full h-full flex items-center">
        <img
          class="h-12 w-12 rounded-full"
          src="https://cdn.learnku.com/uploads/images/201710/14/1/s5ehp11z6s.png"
        />
        <div class="w-full flex flex-col text-center">
          <router-link
            class="text-sm text-gray-600"
            :to="{ name: 'Auth.Login' }"
            >Account</router-link
          >
          <span class="font-semibold text-blue-400">Hello {{ username }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Menu from './Menu.vue'

export default defineComponent({
  name: 'Sidebar',
  setup() {
    let localUser = localStorage.getItem('user')

    let username = 'Guest'
    if (localUser) {
      const user = JSON.parse(localUser)
      username = user.name
    }

    return {
      username,
    }
  },
  components: {
    Menu,
  },
})
</script>

<style></style>
