<template>
  <div
    class="w-full h-screen flex flex-col justify-center items-center
      md:flex-row"
  >
    <input
      type="text"
      class="w-64 outline-none bg-transparent text-black pl-4 py-1 border-b-2 border-solid border-pink-500"
      placeholder="账号名还是邮箱？"
      ref="accountDom"
      @keyup.enter="keyup"
      v-model="username"
    />
    <input
      type="password"
      class="w-64 outline-none bg-transparent text-black pl-4 py-1 border-b-2 border-solid border-pink-500 mx-4 my-6"
      placeholder="密码是什么"
      ref="passwordDom"
      @keyup.enter="keyup"
      v-model="password"
    />
    <Icon href="#icon-login" :className="['cursor-pointer']" @click="keyup" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, onMounted, Ref } from 'vue'
import Icon from '@/components/Icon.vue'
import Auth from '@/api/auth'
import { useRouter } from 'vue-router'
import Message from '@/plugins/Message'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Login',
  setup() {
    const store = useStore()
    const router = useRouter()
    const accountDom = ref<HTMLElement>()
    const passwordDom = ref<HTMLElement>()
    const params = reactive({
      username: '',
      password: '',
    })

    // 用户登录
    const login = async () => {
      await new Auth().login(params).then((response: any) => {
        localStorage.setItem('token_type', response.token_type)
        localStorage.setItem('token', response.access_token)
      })

      await new Auth().me().then((response: any) => {
        localStorage.setItem('user', JSON.stringify(response))
        store.commit('login', response)
        Message(`Hello ${response.name}`)
        router.push({ name: 'Article' })
      })
    }

    // dom 元素选中
    const domFocus = (dom: Ref<HTMLElement | undefined>) => {
      if (dom.value) {
        dom.value.focus()
      }
    }

    // 回车键操作
    const keyup = () => {
      // 用户值为空时，选中用户输入框
      if (params.username.length == 0) domFocus(accountDom)

      // 密码值为空时，选中密码输入框
      if (params.username.length > 0 && params.password.length == 0)
        domFocus(passwordDom)

      // 都存在值，则进行登录
      if (params.username.length > 0 && params.password.length > 0) login()
    }

    onMounted(() => {
      // 页面渲染后默认选中 account dom
      domFocus(accountDom)
    })

    localStorage.clear()

    return {
      ...toRefs(params),
      keyup,
      accountDom,
      passwordDom,
    }
  },
  components: {
    Icon,
  },
})
</script>
