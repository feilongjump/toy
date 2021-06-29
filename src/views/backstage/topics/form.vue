<template>
  <div class="h-full">
    <div class="mb-8 flex items-center">
      <input
        type="text"
        class="w-64 outline-none bg-transparent text-black pl-4 py-1 border-b-2 border-solid border-pink-500 mr-4"
        placeholder="给它起个名字吧"
        v-model="topic.title"
      />
      <Edit theme="outline" size="24" fill="#000000" @click="submit"></Edit>
    </div>
    <div id="vditor" class="vditor"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import Vditor from 'vditor'
import Topics from '@/api/topics'
import { useRoute } from 'vue-router'
import { Edit } from '@icon-park/vue-next'

const id = useRoute().params.id ?? '0'

const vditorCacheId = `topic-vditor-${id}`
const topic = ref<any>({})

onMounted(() => {
  // 由于不知道怎么去获取 contentEditor，暂时使用缓存的方式获取内容
  const contentEditor = new Vditor('vditor', {
    height: 580,
    theme: 'classic',
    cache: {
      enable: true,
      id: vditorCacheId
    },
    toolbarConfig: {
      pin: true
    },
    resize: {
      enable: true
    }
  })
  if (id !== '0') {
    new Topics().show(id).then((response: any) => {
      if (response.data.markdown) {
        contentEditor.setValue(response.data.markdown)
      }
      topic.value = response.data
    })
  }
})

const store = (params: any) => {
  new Topics().store(params).then(() => {
    localStorage.removeItem(vditorCacheId)

    console.info('积累值 + 1')
  })
}

const update = (params: any) => {
  new Topics().patch(id, params).then(() => {
    localStorage.removeItem(vditorCacheId)

    console.info('修改值 + 1')
  })
}

const submit = () => {
  const params = {
    title: topic.value.title,
    markdown: localStorage.getItem(vditorCacheId)
  }

  return id === '0' ? store(params) : update(params)
}
</script>

<style>
@import 'vditor/dist/index.css';
</style>
