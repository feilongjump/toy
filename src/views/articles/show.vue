<template>
  <div id="vditor">123</div>
</template>

<script lang="ts" setup>
import Vditor from 'vditor'
import 'vditor/dist/index.css'
import { onMounted, ref } from 'vue'

const contentEditor = ref()

onMounted(() => {
  contentEditor.value = new Vditor('vditor', {
    height: 360,
    toolbarConfig: {
      pin: true
    },
    cache: {
      enable: false
    },
    after: () => {
      contentEditor.value.setValue('hello, Vditor + Vue!')
    }
  })
})
</script>
