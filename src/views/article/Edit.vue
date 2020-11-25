<template>
  <div class="h-full">
    <div class="mb-8">
      <input
        type="text"
        class="w-64 outline-none bg-transparent text-black pl-4 py-1 border-b-2 border-solid border-pink-500"
        placeholder="给它起个名字吧"
        :value="article.title"
      />
      <Icon
        href="#icon-publish"
        :className="['ml-4', 'cursor-pointer']"
        @click="edit"
      />
    </div>
    <div id="vditor" class="vditor"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import Icon from '@/components/Icon.vue'
import Vditor from 'vditor'
import Articles from '@/api/articles'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'ArticleCreate',
  setup() {
    const route = useRoute()
    const id = route.params.id
    const data = reactive({
      article: {
        id: 0,
        title: '',
        content: {},
      },
      contentEditor: {},
    })

    onMounted(() => {
      const contentEditor = new Vditor('vditor', {
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
      new Articles().show(id).then((response: any) => {
        if (response.content) {
          contentEditor.setValue(response.content.markdown)
        }
        data.article = response
      })

      data.contentEditor = contentEditor
    })

    const edit = () => {
      console.info('你想修改什么？')
    }

    return {
      ...toRefs(data),
      edit,
    }
  },
  components: {
    Icon,
  },
})
</script>

<style lang="scss">
@import '~vditor/src/assets/scss/index';
</style>
