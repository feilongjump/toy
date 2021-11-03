<template>
  <!-- lamp -->
  <div class="w-52 h-52 fixed top-0 -left-32 bg-pink-500 filter blur-5xl"></div>
  <div
    class="
      w-52
      h-52
      fixed
      -right-32
      inset-y-2/3
      bg-blue-500
      filter
      blur-5xl
      transition
      duration-500
      ease-in-out
      opacity-0
      md:opacity-100
    "
  ></div>
  <!-- star -->
  <Star />
  <!-- container -->
  <div class="login-container h-screen text-white">
    <!-- Header -->
    <div class="w-full lg:w-8/12 h-16 px-4 mx-auto mb-10 flex justify-between items-center">
      <router-link :to="{ name: 'Home' }">Toy</router-link>
      <span>Hello</span>
    </div>
    <!-- Main -->
    <div class="w-full pt-16 sm:pt-0 z-10">
      <div class="max-w-2xl mx-auto">
        <div class="mx-4 px-4 py-6 bg-gray-800 rounded-lg">
          <nav class="text-center mb-4 text-xl">Welcome to Toy.</nav>
          <div class="flex flex-col mb-4">
            <label class="flex flex-col text-purple-500">Enter your email or username</label>
            <div class="flex items-center">
              <ArrowNarrowRightIcon class="h-5 w-5 text-pink-500 mr-2" />
              <input
                class="w-full bg-transparent outline-none"
                type="text"
                v-model="params.username"
              />
            </div>
          </div>
          <div class="flex flex-col mb-4">
            <label class="flex flex-col text-purple-500">Password</label>
            <div class="flex items-center">
              <LockClosedIcon class="h-5 w-5 text-pink-500 mr-2" />
              <input
                class="w-full bg-transparent outline-none"
                type="password"
                v-model="params.password"
              />
            </div>
          </div>
          <div>
            <button
              class="w-full border border-gray-400 rounded-lg px-4 py-1 text-gray-400"
              @click="login"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <div class="w-full fixed bottom-10">
      <div class="w-full flex justify-center">
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          version="1.1"
          data-view-component="true"
          height="32"
          width="32"
          class="fill-current text-white"
        >
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { ArrowNarrowRightIcon, LockClosedIcon } from '@heroicons/vue/solid'
import Star from '@/components/Star.vue'

const params = reactive({
  username: '',
  password: ''
})

const login = () => {
  ElMessage.warning('TODO')
}
</script>

<style scoped>
.login-container {
  background-color: #040d21;
}
</style>
