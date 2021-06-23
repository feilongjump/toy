<template>
  <div class="h-screen w-full flex justify-center items-center flex-col">
    <input
      type="text"
      v-model="params.username"
      class="pl-4 mb-4 border rounded-xl shadow-2xl focus:outline-none"
    />
    <input
      type="password"
      v-model="params.password"
      class="pl-4 mb-4 border rounded-xl focus:outline-none"
    />
    <div
      class="border rounded-xl px-4 py-2 shadow-2xl focus:outline-none cursor-pointer"
      @click="go"
    >
      GO
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import router from '@/router'
import Auth from '@/api/auth'

const params = reactive({
  username: '',
  password: ''
})

const go = () => {
  const AuthRequest = new Auth()
  AuthRequest.login(params)
    .then(response => {
      localStorage.setItem('token_type', response.token_type)
      localStorage.setItem('token', response.access_token)
    })
    .then(() => {
      AuthRequest.me().then((response: any) => {
        localStorage.setItem('user', JSON.stringify(response))
        router.push({ name: 'Backstage.Dashboard' })
      })
    })
}
</script>
