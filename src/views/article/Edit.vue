<template>
  <div class="h-full">
    <div class="mb-8">
      <input
        type="text"
        class="w-64 outline-none bg-transparent text-black pl-4 py-1 border-b-2 border-solid border-pink-500"
        placeholder="给它起个名字吧"
        v-model="article.title"
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
import Message from '@/plugins/Message'

export default defineComponent({
  name: 'ArticleCreate',
  setup() {
    const route = useRoute()
    const id = route.params.id
    const vditorCacheId = `article-vditor-${id}`
    const data = reactive({
      article: {
        id: 0,
        title: '',
        content: {},
      },
    })

    onMounted(() => {
      // 由于不知道怎么去获取 contentEditor，暂时使用缓存的方式获取内容
      const contentEditor = new Vditor('vditor', {
        height: 580,
        theme: 'classic',
        cache: {
          enable: true,
          id: vditorCacheId,
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
    })

    const edit = () => {
      const params = {
        title: data.article.title,
        markdown: localStorage.getItem(vditorCacheId),
      }

      new Articles().patch(id, params).then(() => {
        localStorage.removeItem(vditorCacheId)

        Message('修改值 + 1')
      })
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
