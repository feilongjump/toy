<template>
  <div class="h-full w-64 bg-white rounded-xl shadow-lg flex flex-col">
    <div class="h-16 w-full px-6 py-4 text-xl text-pink-500 font-semibold">
      Hello Blog
    </div>
    <div class="w-full px-6 py-2 flex-grow">
      <ul>
        <li
          v-for="(menu, index) in menus"
          :key="index"
          class="px-4 py-2 mb-4 bg-gray-300 rounded-lg text-blue-400 font-semibold"
        >
          <router-link class="w-full h-full block" :to="menu.path">
            {{ menu.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="h-24 w-full px-6 py-4 border-t border-gray-300">
      <div class="w-full h-full flex items-center">
        <img
          class="h-12 w-12 rounded-full"
          src="https://cdn.learnku.com/uploads/images/201710/14/1/s5ehp11z6s.png"
        />
        <div class="w-full flex flex-col text-center">
          <span class="text-sm text-gray-600">Account</span>
          <span class="font-semibold text-blue-400">Pretend True</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface MenuArray {
  title: string
  path: object
}

export default defineComponent({
  name: 'Sidebar',
  setup() {
    const menus: Array<MenuArray> = [
      {
        title: 'Home',
        path: { name: 'Home' },
      },
      {
        title: 'Articles',
        path: { name: 'Article' },
      },
    ]

    return {
      menus,
    }
  },
})
</script>

<style></style>
