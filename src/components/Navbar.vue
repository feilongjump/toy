<template>
  <header class="h-16 w-full py-4 flex justify-end items-center">
    <div>
      <router-link class="mr-4" :to="{ name: 'Article.Create' }">
        <Icon href="#icon-create" />
      </router-link>
      <Icon href="#icon-bell" :className="['animate-shaking']" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from './Icon.vue'

export default defineComponent({
  name: 'Navbar',
  components: {
    Icon,
  },
})
</script>
