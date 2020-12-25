<template>
  <div class="w-full h-full pb-16">
    <div class="w-full h-full">
      <input
        type="text"
        class="w-64 outline-none bg-transparent text-black pl-2 py-1 border-b-2 border-solid border-pink-500 mx-4 mt-6 mb-2"
        placeholder="记录一下要做的，别忘记了"
        v-model="matter"
      />
      <span
        class="text-white flex items-center justify-center text-3xl mb-2"
        @click="addTodo"
        >+</span
      >
    </div>
    <div
      v-for="todo in todos"
      :key="todo.id"
      class="w-full h-auto max-h-20 px-2 py-4 bg-white border-l-8 border-yellow-200 rounded-md mb-2 truncate"
    >
      {{ todo.matter }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import Todo from '@/api/todo'
import Message from '@/plugins/Message'

export default defineComponent({
  name: 'Todo',
  setup() {
    const data = reactive({
      todos: [],
      matter: '',
    })
    const addTodo = () => {
      new Todo().store({ matter: data.matter }).then(() => {
        Message('积累值 + 1')
      })
    }

    new Todo().index().then(response => {
      data.todos = response.data
    })

    return {
      ...toRefs(data),
      addTodo,
    }
  },
})
</script>
