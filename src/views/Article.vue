<template>
  <div class="w-full h-full overflow-y-scroll article-box">
    <div
      class="w-full flex bg-white py-2 px-8 rounded-lg mb-4 shadow-lg"
      v-for="index of 20"
      :key="index"
    >
      <div class="flex flex-col">
        <span class="font-semibold text-xl">这是一个标题啊</span>
        <span class="my-4">这里就放阅读次数、点赞数、评论吧！</span>
        <p>这里放个内容</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Article',
})
</script>

<style>
.article-box::-webkit-scrollbar {
  display: none;
}
</style>
