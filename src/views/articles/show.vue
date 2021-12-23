<template>
  <div class="w-full h-full min-h-screen flex items-center flex-col py-12">
    <Info />
    <div class="w-full flex flex-col items-center px-2">
      <div class="w-full lg:w-3/6 mb-12 flex justify-center items-center">
        <article id="content" class="prose w-full" v-html="content"></article>
      </div>
      <div class="text-gray-400 text-sm flex">
        <span class="mr-8 flex cursor-pointer hover:text-red-400">
          <HeartIcon class="w-5 h-5 mr-1" />
          {{ article.like_count }}
        </span>
        <span class="mr-8 flex cursor-pointer">
          <EyeIcon class="w-5 h-5 mr-1" />
          {{ article.view_count }}
        </span>
        <span class="mr-8 flex cursor-pointer">
          <ChatAltIcon class="w-5 h-5 mr-1" />
          {{ article.reply_count }}
        </span>
        <span class="flex cursor-pointer" @click="router.back()">
          <ReplyIcon class="w-5 h-5" />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ChatAltIcon, EyeIcon, HeartIcon, ReplyIcon } from '@heroicons/vue/solid'
import router from '@/router'
import Info from '@/components/Info.vue'
import Article from '@/api/article'
import { Details } from './types'

const { id } = useRoute().params

const article = ref<Details>({})
const content = ref(null)

onMounted(() => {
  const ArticleRequest = new Article()

  ArticleRequest.show(id).then((response) => {
    article.value = response

    content.value = response.content.body
  })
})
</script>
