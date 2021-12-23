<template>
  <div class="w-full h-full min-h-screen flex items-center flex-col py-12">
    <Info />
    <div class="w-full flex flex-col items-center">
      <div
        class="w-full lg:w-3/4 bg-white lg:rounded-xl mb-12 last:mb-0 lg:shadow-md"
        v-for="(article, index) in articles"
        :key="index"
      >
        <div class="flex flex-col lg:flex-row items-center border-b">
          <router-link
            class="w-full lg:w-3/4 pt-12 px-12 pb-0 lg:pb-12 text-2xl font-semibold tracking-widest text-center lg:text-left"
            :to="{ name: 'Article.Show', params: { id: article.id } }"
          >
            {{ article.title }}
          </router-link>
          <div
            class="lg:w-1/4 p-12 lg:border-l flex justify-center lg:justify-end flex-row lg:flex-col items-center lg:items-end"
          >
            <span
              class="lg:mb-4 pr-8 lg:pr-0 text-center lg:text-right text-sm font-semibold text-gray-700"
            >
              {{ article.created_at }}
            </span>
            <div
              class="flex flex-row-reverse lg:flex-row items-center justify-end pl-8 lg:pl-0 border-l lg:border-l-0"
            >
              <span class="text-gray-400 font-semibold tracking-widest mx-4">Toy</span>
              <img class="w-10 h-10 lg:w-16 lg:h-16 rounded-full" :src="avatar" />
            </div>
          </div>
        </div>
        <div class="pb-12 lg:p-12">
          <img
            class="w-full h-56 lg:h-96 mb-12 object-none object-center cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            :src="images[index % 7]"
          />
          <div class="flex flex-col-reverse lg:flex-row justify-between items-center">
            <router-link
              class="w-10/12 lg:w-48 h-14 border flex justify-center items-center cursor-pointer lg:rounded-xl font-semibold mt-10 lg:mt-0"
              :to="{ name: 'Article.Show', params: { id: article.id } }"
            >
              READ MORE
            </router-link>
            <div class="text-gray-400 text-sm flex">
              <span class="flex cursor-pointer hover:text-red-400">
                <HeartIcon class="w-5 h-5 mr-1" />
                {{ article.like_count }}
              </span>
              <span class="mx-8 flex cursor-pointer">
                <EyeIcon class="w-5 h-5 mr-1" />
                {{ article.view_count }}
              </span>
              <span class="flex cursor-pointer">
                <ChatAltIcon class="w-5 h-5 mr-1" />
                {{ article.reply_count }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ChatAltIcon, EyeIcon, HeartIcon } from '@heroicons/vue/solid'
import Info from '@/components/Info.vue'
import avatar from '@/assets/avatar.jpg'
import img1 from '@/assets/articles/1.jpg'
import img2 from '@/assets/articles/2.jpg'
import img3 from '@/assets/articles/3.jpg'
import img4 from '@/assets/articles/4.jpg'
import img5 from '@/assets/articles/5.jpg'
import img6 from '@/assets/articles/6.jpg'
import img7 from '@/assets/articles/7.jpg'
import type { Details } from './types'
import Article from '@/api/article'

const images = [img1, img2, img3, img4, img5, img6, img7]

const articles = ref<Details[]>([])

onMounted(() => {
  const ArticleRequest = new Article()

  ArticleRequest.index([]).then((response) => {
    articles.value = response
  })
})
</script>
