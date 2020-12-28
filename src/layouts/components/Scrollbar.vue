<template>
  <div
    id="scrollbar"
    class="w-5 h-16 hidden lg:block fixed top-0 right-2 border-4 border-white rounded-2xl cursor-pointer"
    style="z-index: 999;"
  ></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'Scrollbar',
  setup() {
    const handleScrollbar = () => {
      // 获取自定义的滚动条
      const scrollbar = document.getElementById('scrollbar')
      const documentElement = document.documentElement

      if (scrollbar && documentElement) {
        // 页面高度 - 自定义滚动条高度 = 自定义滚动条可位移高度
        // 获取内置滚动条的可位移高度
        // 相比后得到滚动的系数
        let ratio =
          (documentElement.clientHeight - scrollbar.offsetHeight) /
          (documentElement.offsetHeight - documentElement.clientHeight)

        // 将内置滚动条的位移高度 * 滚动系数 = 自定义的滚动条高度
        scrollbar.style.top = documentElement.scrollTop * ratio + 'px'
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScrollbar)
    })
  },
})
</script>
