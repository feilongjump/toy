<template>
  <div class="w-full px-6 flex-grow">
    <ul>
      <li
        v-for="(menu, index) in menus"
        :key="index"
        class="mb-2 text-blue-400 font-semibold"
      >
        <router-link
          class="w-full h-full px-4 py-2 flex items-center"
          :to="menu.path"
        >
          <Icon :href="menu.icon" />
          <span class="ml-2">{{ menu.name }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import Icon from '@/components/Icon.vue'

interface MenuArray {
  name: string
  path: object
  icon: string
}

export default defineComponent({
  name: 'Menu',
  setup() {
    const router = useRoute()
    const menus: Array<MenuArray> = [
      {
        name: 'Articles',
        path: { name: 'Article' },
        icon: '#icon-article',
      },
    ]

    return {
      menus,
      router,
    }
  },
  components: {
    Icon,
  },
})
</script>
