<template>
  <div class="main-height flex flex-col justify-center items-center">
    <router-link
      class="w-96 cursor-pointer my-6"
      v-for="(topic, index) in topics"
      :key="index"
      :to="{ name: 'Topic.Show', params: { id: topic.id } }"
    >
      <h2 class="text-2xl font-medium mb-4">{{ topic.title }}</h2>
      <div class="flex justify-end">
        <span class="text-gray-400 text-sm">{{ topic.created_at }}</span>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import Topics from '@/api/topics'
import { ref, onMounted } from 'vue'

const topics = ref<any>([])

onMounted(() => {
  new Topics().index().then(response => {
    topics.value = response.data
  })
})
</script>
