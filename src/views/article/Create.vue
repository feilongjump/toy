<template>
  <div class="h-full">
    <div class="mb-8">
      <input
        type="text"
        class="w-64 outline-none bg-transparent text-black pl-4 py-1 border-b-2 border-solid border-pink-500"
        placeholder="给它起个名字吧"
      />
      <Icon href="#icon-publish" :className="['ml-4', 'cursor-pointer']" />
    </div>
    <div id="vditor" class="vditor"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import Icon from '@/components/Icon.vue'
import Vditor from 'vditor'
export default defineComponent({
  name: 'ArticleCreate',
  setup() {
    onMounted(() => {
      new Vditor('vditor', {
        height: 360,
        theme: 'classic',
        cache: {
          enable: false,
        },
        toolbarConfig: {
          pin: true,
        },
        resize: {
          enable: true,
        },
      })
    })
  },
  components: {
    Icon,
  },
})
</script>

<style lang="scss">
@import '~vditor/src/assets/scss/index';
</style>
