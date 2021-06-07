<template>
  <div class="flex justify-center">
    <div id="content" class="prose w-full" v-html="content"></div>
  </div>
</template>

<script lang="ts" setup>
import markdown from '@/utils/markdown.js'
import { ref } from 'vue'

const content = ref()

const contentResult = markdown.marked('# Hello World!')
contentResult.then((response: any) => {
  content.value = response.content
})
</script>
