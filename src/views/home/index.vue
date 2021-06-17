<template>
  <div class="main-height flex flex-col justify-center items-center">
    <router-link
      class="w-96 cursor-pointer"
      v-for="(article, index) in articles"
      :key="index"
      :to="{ name: 'Article.Show', params: { id: article.id } }"
    >
      <h2 class="text-2xl font-medium mb-4">{{ article.title }}</h2>
      <p class="mb-2 tracking-wide text-left indent-4">
        {{ article.content }}
      </p>
      <div class="flex justify-end">
        <span class="text-gray-400 text-sm">{{ article.created_at }}</span>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
const articles = [
  {
    id: 1,
    title: 'Title.',
    content: 'This markdown content.',
    created_at: '2021.06.03'
  }
]
</script>
