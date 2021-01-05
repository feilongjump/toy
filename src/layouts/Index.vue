<template>
  <div class="w-full min-h-screen px-4 pt-8">
    <Navbar :username="username" :isLogged="isLogged" />
    <Scrollbar />
    <main class="lg:w-1/2 mx-auto flex flex-col">
      <div class="pb-20">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import Navbar from './components/Navbar.vue'
import Scrollbar from './components/Scrollbar.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    Scrollbar,
    Navbar,
  },
  setup() {
    const store = useStore()
    const username = ref(store.state.user.name)
    const isLogged = ref(store.state.isLogged)

    return {
      username,
      isLogged,
    }
  },
})
</script>
