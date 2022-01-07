<template>
  <Header />

  <div class="flex w-full justify-between">
    <div class="h-96 w-72 bg-white py-4 rounded-lg">
      <div class="pb-4 px-2 font-semibold border-b border-black">Created</div>
      <draggable :list="created" itemKey="id" group="todo" @change="handle($event, 'created')">
        <template #item="{ element }">
          <div
            class="bg-yellow-100 px-6 py-2 border-b-2 border-gray-300 last-of-type:border-b-0 cursor-pointer"
            @click="edit(element.id)"
          >
            {{ element.title }}
          </div>
        </template>
      </draggable>
    </div>

    <div class="h-96 w-72 bg-white py-4 rounded-lg">
      <div class="pb-4 px-2 font-semibold border-b border-black">Processing</div>
      <draggable
        :list="processing"
        itemKey="id"
        group="todo"
        @change="handle($event, 'processing')"
      >
        <template #item="{ element }">
          <div
            class="bg-blue-100 px-6 py-2 border-b-2 border-gray-300 last-of-type:border-b-0 cursor-pointer"
            @click="edit(element.id)"
          >
            {{ element.title }}
          </div>
        </template>
      </draggable>
    </div>
    <div class="h-96 w-72 bg-white py-4 rounded-lg">
      <div class="pb-4 px-2 font-semibold border-b border-black">Success</div>
      <draggable :list="success" itemKey="id" group="todo" @change="handle($event, 'success')">
        <template #item="{ element }">
          <div
            class="bg-green-100 px-6 py-2 border-b-2 border-gray-300 last-of-type:border-b-0 cursor-pointer"
            @click="edit(element.id)"
          >
            {{ element.title }}
          </div>
        </template>
      </draggable>
    </div>
    <div class="h-96 w-72 bg-white py-4 rounded-lg">
      <div class="pb-4 px-2 font-semibold border-b border-black">Failed</div>
      <draggable :list="failed" itemKey="id" group="todo" @change="handle($event, 'failed')">
        <template #item="{ element }">
          <div
            class="bg-red-100 px-6 py-2 border-b-2 last-of-type:border-b-0 cursor-pointer"
            @click="edit(element.id)"
          >
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
import router from '@/router'

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
          processing.value.push(item)
          break
        case 'success':
          success.value.push(item)
          break
        default:
          failed.value.push(item)
      }
    })
  })
})

const handle = (evt: any, status: string) => {
  if (status === 'created') return false

  if (evt.added) {
    new Todo().handleStatus(evt.added.element.id, status)
  }

  return true
}

const edit = (id: number) => {
  router.push({ name: 'Backstage.Todo.Edit', params: { id } })
}
</script>
