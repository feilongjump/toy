<template>
  <div class="w-full h-full min-h-screen flex items-center flex-col py-12">
    <Info />
    <div class="w-full flex flex-col items-center">
      <div
        class="max-w-lg h-20 w-full md:w-5/12 border rounded-xl shadow-md hover:shadow-lg px-6 py-2 mb-6 flex items-center justify-between cursor-pointer"
        v-for="(todo, index) in todos"
        :key="index"
      >
        <span class="w-10/12 truncate">{{ todo.title }}</span>
        <CheckCircleIcon class="h-6 w-6" :class="status[todo.status]" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { CheckCircleIcon } from '@heroicons/vue/outline'
import Info from '@/components/Info.vue'
import Todo from '@/api/todo'

const status = <any>{
  created: 'stroke-gray-400',
  success: 'stroke-green-400',
  failed: 'stroke-red-400'
}

const todos = ref<any>([])

onMounted(() => {
  const TodoRequest = new Todo()

  TodoRequest.index([]).then((response) => {
    todos.value = response
  })
})
</script>
