<template>
  <div
    class="fixed top-4 -left-24 sm:left-4 h-sidebar w-24 bg-white rounded-2xl px-2 transition-all duration-500 ease-in-out shadow-xl"
  >
    <div class="w-full h-full flex items-center justify-between flex-col">
      <div class="h-20 flex items-center flex-none">LOGO</div>
      <div class="h-full flex flex-col items-center justify-center flex-grow">
        <router-link
          class="my-4 p-2 rounded-xl hover:menu-active transition-all duration-500 ease-in-out"
          v-for="(menu, index) in menus"
          :key="index"
          :class="menu.name === activeMenuName ? 'menu-active' : ''"
          :to="{ name: menu.name }"
        >
          <component :is="menu.component" theme="outline" size="24"></component>
        </router-link>
      </div>
      <div class="h-20 flex items-center flex-none">
        <div class="cursor-pointer" @click="quit">
          <Logout theme="outline" size="24" fill="#000000"></Logout>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BookOpen, ChartStock, Dashboard, Logout, Puzzle, User } from '@icon-park/vue-next'
import router from '@/router'
import { computed } from 'vue'

// current route name
const activeMenuName = computed(() => {
  return router.currentRoute.value.name
})

const menus = [
  {
    name: 'Backstage.Dashboard',
    component: Dashboard
  },
  {
    name: 'Backstage.Article',
    component: BookOpen
  },
  {
    name: '',
    component: Puzzle
  },
  {
    name: '',
    component: ChartStock
  },
  {
    name: 'Backstage.User',
    component: User
  }
]

const quit = () => {
  router.push({ name: 'Login' })
}
</script>
