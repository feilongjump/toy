<template>
  <Header />

  <div class="text-white w-full md:w-4/5 lg:w-10/12 xl:w-6/12 mx-auto">
    <router-link
      class="block w-full p-4 mt-8 group"
      v-for="article in articles"
      :key="article.id"
      :to="{ name: 'Backstage.Article.Edit', params: { id: article.id } }"
    >
      <span class="text-2xl font-semibold mb-4">{{ article.title }}</span>
      <div class="flex justify-end relative">
        <span class="text-sm text-gray-400">{{ article.created_at }}</span>
        <span class="split-line group-hover:w-full"></span>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import Header from './components/Header.vue'
import Article from '@/api/article'

const articles = ref<any>([])

onMounted(() => {
  new Article().index({}).then((response) => {
    articles.value = response
  })
})
</script>

<style scoped>
.split-line {
  content: '';
  @apply w-1/3 h-px bg-gray-500 absolute bottom-0 transition-all duration-500 ease-in-out;
}
</style>
