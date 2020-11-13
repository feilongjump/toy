<template>
  <div class="w-full px-6 py-2 flex-grow">
    <ul>
      <li
        v-for="(menu, index) in menus"
        :key="index"
        class="mb-2 text-blue-400 font-semibold"
        :class="[router.meta.title === menu.meta.title ? active : '']"
      >
        <router-link class="w-full h-full block px-4 py-2" :to="menu.path">
          {{ menu.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

interface MenuArray {
  name: string
  path: object
  meta: object
}

export default defineComponent({
  name: 'Menu',
  setup() {
    const active = 'bg-gray-300 rounded-lg'
    const router = useRoute()
    const menus: Array<MenuArray> = [
      {
        name: 'Home',
        path: { name: 'Home' },
        meta: {
          title: 'home',
        },
      },
      {
        name: 'Articles',
        path: { name: 'Article' },
        meta: {
          title: 'article',
        },
      },
    ]

    return {
      menus,
      router,
      active,
    }
  },
})
</script>
