<template>
  <div class="sidebar-container">
    <!-- Top -->
    <div>
      <!-- Logo -->
      <div class="h-9">
        <span class="text-gray-300 text-3xl">Toy</span>
      </div>
      <!-- Menu -->
      <div class="mt-8">
        <div class="mb-4 px-2 text-gray-400">Admin Tools</div>
        <ul class="text-gray-300">
          <li v-for="(menu, index) in menus" :key="index">
            <router-link class="menu-li group hover:activate-menu" :to="{ name: menu.routeName }">
              <component
                :is="menu.icon"
                class="h-5 w-5 mr-0 lg:mr-3 group-hover:h-6 group-hover:w-6 group-hover:lg:mr-4"
              ></component>
              <span class="hidden lg:inline-block">{{ menu.title }}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- Information -->
      <div class="w-10/12 mx-auto mt-6 border-t border-gray-500 pt-4 lg:pt-8">
        <div class="mb-4 px-2 text-gray-400">
          <span class="hidden lg:block">Information</span>
          <ul>
            <li
              class="flex justify-center lg:justify-between items-center mt-6"
              v-for="(item, index) in information"
              :key="index"
            >
              <div class="flex items-center relative">
                <div class="remind"></div>
                <component :is="item.icon" class="h-6 w-6 mr-0 lg:mr-3"></component>
                <span class="hidden lg:block">{{ item.title }}</span>
              </div>
              <span
                class="w-5 h-5 rounded-xl bg-yellow-600 text-white text-center text-sm hidden lg:block"
              >
                {{ item.quantity }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- User -->
    <div class="h-16 mb-8 flex justify-center lg:justify-between items-center text-gray-400">
      <img class="w-12 h-12 rounded-full" :src="avatar" />
      <div class="mx-2 hidden lg:flex flex-col">
        <span class="text-white">Toy</span>
        <span class="text-sm">Toy@example.com</span>
      </div>
      <LogoutIcon class="w-6 h-6 cursor-pointer hidden lg:block" @click="logout" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  BellIcon,
  ChatIcon,
  ClipboardListIcon,
  FireIcon,
  LibraryIcon,
  LogoutIcon
} from '@heroicons/vue/outline'
import { ElMessage } from 'element-plus'
import avatar from '@/assets/avatar.jpg'
import router from '@/router'

const menus = [
  {
    title: 'Overview',
    icon: FireIcon,
    routeName: 'Backstage.Overview'
  },
  {
    title: 'Article',
    icon: LibraryIcon,
    routeName: 'Backstage.Article'
  }
]

const information = [
  {
    title: 'Todo',
    icon: ClipboardListIcon,
    quantity: 8
  },
  {
    title: 'Notice',
    icon: BellIcon,
    quantity: 18
  },
  {
    title: 'Comment',
    icon: ChatIcon,
    quantity: 28
  }
]

const logout = () => {
  ElMessage.success('Welcome to you next time!')
  router.push({ name: 'Login' })
}
</script>

<style scoped>
.sidebar-container {
  @apply h-screen w-0 md:w-24 lg:w-64
      fixed -left-24 md:left-0
      bg-transparent pt-8 px-4
      transition-all duration-500 ease-in-out
      border-r border-gray-500
      flex justify-between flex-col;
}
.menu-li {
  @apply my-2 py-3 px-2 lg:px-6
    flex justify-center lg:justify-start items-center
    transition-all duration-500 ease-in-out;
}

.remind::before {
  content: '';
  @apply w-2 h-2 rounded-full bg-red-500 absolute top-0 right-0 block lg:hidden;
}
</style>
