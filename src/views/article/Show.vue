<template>
  <div class="h-full overflow-y-scroll">
    <div class="mb-8">
      <h1>{{ article.title }}</h1>
    </div>
    <div :ref="HTMLDivDom"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import Articles from '@/api/articles'
import { useRoute } from 'vue-router'
import Vditor from 'vditor'

export default defineComponent({
  name: 'ArticleShow',
  setup() {
    const route = useRoute()
    const id = route.params.id
    const data = reactive({
      article: {
        title: '',
      },
    })
    let vditorDom: HTMLDivElement
    const HTMLDivDom = (el: HTMLDivElement) => {
      vditorDom = el

      return el
    }

    onMounted(() => {
      new Articles().show(id).then((response: any) => {
        data.article.title = response.title

        Vditor.preview(vditorDom, response.content.markdown, {
          anchor: 1,
        })
      })
    })

    return {
      ...toRefs(data),
      HTMLDivDom,
    }
  },
})
</script>

<style lang="scss">
@import '~vditor/src/assets/scss/index';
</style>
