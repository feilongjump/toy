<template>
  <div class="w-full h-full flex justify-center items-center">
    <input
      type="text"
      class="w-64 outline-none bg-transparent text-black pl-4 py-1 border-b-2 border-solid border-pink-500"
      placeholder="账号名还是邮箱？"
    />
    <input
      type="text"
      class="w-64 outline-none bg-transparent text-black pl-4 py-1 border-b-2 border-solid border-pink-500 mx-4"
      placeholder="密码是什么"
    />
    <Icon href="#icon-login" :className="['cursor-pointer']" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '@/components/Icon.vue'
export default defineComponent({
  name: 'Login',
  components: {
    Icon,
  },
})
</script>

<style></style>
