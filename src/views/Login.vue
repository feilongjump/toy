<template>
  <div class="w-full h-full flex justify-center items-center">
    <input
      type="text"
      class="w-64 outline-none bg-transparent text-black pl-4 py-1 border-b-2 border-solid border-pink-500"
      placeholder="账号名还是邮箱？"
      v-model="username"
    />
    <input
      type="password"
      class="w-64 outline-none bg-transparent text-black pl-4 py-1 border-b-2 border-solid border-pink-500 mx-4"
      placeholder="密码是什么"
      v-model="password"
    />
    <Icon href="#icon-login" :className="['cursor-pointer']" @click="login" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import Icon from '@/components/Icon.vue'
import Auth from '@/api/auth'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Login',
  setup() {
    const router = useRouter()
    const data = reactive({
      username: '',
      password: '',
    })
    const login = async () => {
      const params = {
        username: data.username,
        password: data.password,
      }

      await new Auth().login(params).then((response: any) => {
        localStorage.setItem('token_type', response.token_type)
        localStorage.setItem('token', response.access_token)
      })

      await new Auth().me().then((response: any) => {
        localStorage.setItem('user', JSON.stringify(response))
        router.push({ name: 'Article' })
      })
    }

    localStorage.clear()

    return {
      ...toRefs(data),
      login,
    }
  },
  components: {
    Icon,
  },
})
</script>

<style></style>
