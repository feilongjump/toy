<template>
  <div class="text-white w-full md:w-4/5 lg:w-10/12 xl:w-8/12 mx-auto">
    <div class="py-2 flex items-center">
      <input
        class="w-96 bg-transparent border-b border-gray-400 outline-none"
        type="text"
        v-model="details.title"
      />
      <span
        class="text-sm px-4 py-1 border border-gray-400 rounded-lg cursor-pointer ml-4"
        @click="submit"
        >提交</span
      >
    </div>

    <div id="vditor" class="vditor mt-8"></div>
  </div>
</template>

<script lang="ts" setup>
import Vditor from 'vditor'
import { defineProps, onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import router from '@/router'
import type { Details } from './types'
import Todo from '@/api/todo'

const { id } = router.currentRoute.value.params

const props = defineProps({
  isEdit: {
    type: Boolean,
    default: true
  }
})

const details = ref<Details>({})
const contentEditor = ref<any>(null)

onMounted(() => {
  contentEditor.value = new Vditor('vditor', {
    after() {
      if (props.isEdit) {
        new Todo().show(id).then((response) => {
          if (response.content) {
            contentEditor.value.setValue(response.content.markdown)
          }

          details.value = response
        })
      }
    },
    height: 680,
    theme: 'classic',
    toolbarConfig: {
      pin: true
    },
    cache: {
      enable: false
    },
    resize: {
      enable: true
    },
    value: '# Hello toy'
  })
})

const store = (params: any) => {
  new Todo().store(params).then(() => {
    ElMessage.success('积累值 + 1')

    router.push({ name: 'Backstage.Todo' })
  })
}

const update = (params: any) => {
  new Todo().update(id, params).then(() => {
    ElMessage.success('修改值 + 1')
  })
}

const submit = () => {
  const params = {
    title: details.value.title,
    type: 'markdown',
    content: {
      markdown: contentEditor.value.getValue()
    }
  }

  if (props.isEdit) {
    update(params)
  } else {
    store(params)
  }
}
</script>

<style>
@import 'vditor/dist/index.css';
</style>
