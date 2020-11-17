<template>
  <div class="w-full h-full overflow-y-scroll article-box">
    <div
      class="w-full flex bg-white py-2 px-8 rounded-lg mb-4 shadow-lg"
      v-for="index of 20"
      :key="index"
    >
      <div class="flex flex-col">
        <router-link
          :to="{ name: 'Article.Show', params: { id: index } }"
          class="font-semibold text-xl"
          >这是一个标题啊</router-link
        >
        <div class="mb-4 ">
          <span class="text-xs text-gray-500">
            阅读次数 999
          </span>
          <router-link :to="{ name: 'Article.Edit', params: { id: index } }">
            <Icon href="#icon-edit" width="w-4" height="h-4" />
          </router-link>
        </div>
        <p>这里放个内容</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '@/components/Icon.vue'

export default defineComponent({
  name: 'Article',
  components: {
    Icon,
  },
})
</script>

<style>
.article-box::-webkit-scrollbar {
  display: none;
}
</style>
