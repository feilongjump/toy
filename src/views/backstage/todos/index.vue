<template>
  <Header />

  <div class="flex w-full justify-between">
    <div class="h-96 w-72 bg-white py-4 rounded-lg">
      <div class="pb-4 px-2 font-semibold border-b border-black">Created</div>
      <draggable v-model="created" item-key="id" group="todo">
        <template #item="{ element }">
          <div class="bg-yellow-100 px-6 py-2 border-b-2 border-gray-300 last-of-type:border-b-0">
            {{ element.title }}
          </div>
        </template>
      </draggable>
    </div>

    <div class="h-96 w-72 bg-white py-4 rounded-lg">
      <div class="pb-4 px-2 font-semibold border-b border-black">Processing</div>
      <draggable v-model="processing" item-key="id" group="todo">
        <template #item="{ element }">
          <div class="bg-blue-100 px-6 py-2 border-b-2 border-gray-300 last-of-type:border-b-0">
            {{ element.title }}
          </div>
        </template>
      </draggable>
    </div>
    <div class="h-96 w-72 bg-white py-4 rounded-lg">
      <div class="pb-4 px-2 font-semibold border-b border-black">Success</div>
      <draggable v-model="success" item-key="id" group="todo">
        <template #item="{ element }">
          <div class="bg-green-100 px-6 py-2 border-b-2 border-gray-300 last-of-type:border-b-0">
            {{ element.title }}
          </div>
        </template>
      </draggable>
    </div>
    <div class="h-96 w-72 bg-white py-4 rounded-lg">
      <div class="pb-4 px-2 font-semibold border-b border-black">Failed</div>
      <draggable v-model="failed" item-key="id" group="todo">
        <template #item="{ element }">
          <div class="bg-red-100 px-6 py-2 border-b-2 last-of-type:border-b-0">
            {{ element.title }}
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import draggable from 'vuedraggable'
import Header from './components/Header.vue'
import Todo from '@/api/todo'

const created = ref<any>([])
const processing = ref<any>([])
const success = ref<any>([])
const failed = ref<any>([])

onMounted(() => {
  new Todo().index({}).then((response) => {
    response.forEach((item: any) => {
      switch (item.status) {
        case 'created':
          created.value.push(item)
          break
        case 'processing':
          created.value.push(item)
          break
        case 'success':
          created.value.push(item)
          break
        default:
          failed.value.push(item)
      }
    })
  })
})
</script>
