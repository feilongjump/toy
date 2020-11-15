<template>
  <div>
    <div id="vditor" class="vditor"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

import Vditor from 'vditor'
export default defineComponent({
  name: 'ArticleCreate',
  setup() {
    onMounted(() => {
      new Vditor('vditor', {
        height: 360,
        theme: 'material',
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
})
</script>

<style lang="scss">
@import '~vditor/src/assets/scss/index';
</style>
