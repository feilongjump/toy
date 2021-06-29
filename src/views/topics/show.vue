<template>
  <div class="flex justify-center">
    <div id="content" class="prose w-full" v-html="content"></div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import Topics from '@/api/topics'
import markdown from '@/utils/markdown.js'
import { ref, onMounted } from 'vue'

const { id } = useRoute().params

const content = ref<any>(null)

onMounted(() => {
  new Topics().show(id).then(response => {
    const contentResult = markdown.marked(response.data.markdown)
    contentResult.then((contentResponse: any) => {
      content.value = contentResponse.content
    })
  })
})
</script>
