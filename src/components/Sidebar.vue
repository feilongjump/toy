<template>
  <div class="h-full w-64 bg-white rounded-xl shadow-lg flex flex-col">
    <div class="h-16 w-full px-6 py-4 text-xl text-pink-500 font-semibold">
      Hello Blog
    </div>
    <div class="w-full px-6 py-2 flex-grow">
      <ul>
        <li v-for="(menu, index) in menus" :key="index">
          <span>{{ menu.title }}</span>
        </li>
      </ul>
    </div>
    <div class="h-24 w-full px-6 py-6 border-t border-gray-300">
      <div class="w-full h-full flex">
        <img
          class="h-12 w-12 rounded-full"
          src="https://cdn.learnku.com/uploads/images/201710/14/1/s5ehp11z6s.png"
        />
        <div class="flex flex-col ml-4">
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
}

export default defineComponent({
  name: 'Sidebar',
  setup() {
    const menus: Array<MenuArray> = [
      {
        title: 'Dashboard',
      },
    ]

    return {
      menus,
    }
  },
})
</script>

<style></style>
