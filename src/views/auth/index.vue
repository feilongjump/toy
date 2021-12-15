<template>
  <!-- lamp -->
  <div class="w-52 h-52 fixed top-0 -left-32 bg-pink-500 filter blur-5xl"></div>
  <div
    class="w-52 h-52 fixed -right-32 inset-y-2/3 bg-blue-500 filter blur-5xl transition duration-500 ease-in-out opacity-0 md:opacity-100"
  ></div>
  <!-- star -->
  <Star />
  <!-- container -->
  <div class="auth-container h-screen text-white">
    <!-- Header -->
    <div class="w-full lg:w-8/12 h-16 px-4 mx-auto mb-10 flex justify-between items-center">
      <router-link :to="{ name: 'Home' }">Toy</router-link>
      <router-link v-show="routerName === 'Login'" :to="{ name: 'Register' }">Sign up</router-link>
      <router-link v-show="routerName === 'Register'" :to="{ name: 'Login' }">Sign in</router-link>
    </div>
    <!-- Main -->
    <component :is="routerName" />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, ref, watch } from 'vue'
import Star from '@/components/Star.vue'
import router from '@/router'

export default {
  components: {
    Star,
    Login: defineAsyncComponent(() => import('./components/Login.vue')),
    Register: defineAsyncComponent(() => import('./components/Register.vue'))
  },
  data() {
    const routerName = ref(router.currentRoute.value.name)

    watch(
      () => router.currentRoute.value,
      (val) => {
        routerName.value = val.name
      }
    )

    return {
      routerName
    }
  }
}
</script>

<!-- <script lang="ts" setup>
// TODO: 就是不知道为什么这种写法无法根据路由动态加载
import { defineAsyncComponent, ref, watch } from 'vue'
import Star from '@/components/Star.vue'
import router from '@/router'

const Login = defineAsyncComponent(() => import('./components/Login.vue'))
const Register = defineAsyncComponent(() => import('./components/Register.vue'))

const routerName = ref(router.currentRoute.value.name)
watch(router.currentRoute.value, (n) => {
  routerName.value = n.name
})
</script> -->

<style scoped>
.auth-container {
  background-color: #040d21;
}
</style>
