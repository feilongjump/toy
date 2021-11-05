<template>
  <div class="w-full h-full min-h-screen bg-gray-100 flex items-center flex-col py-12">
    <div class="my-12 flex items-center flex-col">
      <router-link :to="{ name: 'Home' }">
        <img class="w-24 h-24 rounded-full" :src="avatar" />
      </router-link>
      <span class="mt-6 text-center font-serif text-xl font-semibold tracking-wide text-gray-500">
        生活从来就没有容易。
      </span>
    </div>
    <div class="w-full flex flex-col items-center">
      <div
        class="w-3/4 bg-white rounded-xl mb-12 shadow-md"
        v-for="(article, index) in articles"
        :key="index"
      >
        <div class="flex items-center border-b">
          <div class="w-3/4 p-12 text-2xl font-semibold tracking-widest">
            {{ article.title }}
          </div>
          <div class="w-1/4 p-12 border-l flex justify-end flex-col">
            <span class="w-full mb-4 text-right text-sm font-semibold text-gray-700">
              {{ article.created_at }}
            </span>
            <div class="flex items-center justify-end">
              <span class="text-gray-400 font-semibold tracking-widest mr-4">Toy</span>
              <img class="w-16 h-16 rounded-full" :src="avatar" />
            </div>
          </div>
        </div>
        <div class="p-12">
          <img
            class="
              w-full
              h-96
              mb-12
              object-none object-center
              cursor-pointer
              transition
              duration-500
              ease-in-out
              transform
              hover:-translate-y-1 hover:scale-105
            "
            :src="article.img"
          />
          <p class="text-gray-400 mb-12">{{ article.body }}</p>
          <div class="flex justify-between items-center">
            <div
              class="
                w-48
                h-14
                border
                flex
                justify-center
                items-center
                cursor-pointer
                rounded-xl
                font-semibold
              "
            >
              READ MORE
            </div>
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
import { ChatAltIcon, EyeIcon, HeartIcon } from '@heroicons/vue/solid'
import avatar from '@/assets/avatar.jpg'
import img1 from '@/assets/articles/1.jpg'
import img2 from '@/assets/articles/2.jpg'
import img3 from '@/assets/articles/3.jpg'
import img4 from '@/assets/articles/4.jpg'
import img5 from '@/assets/articles/5.jpg'
import img6 from '@/assets/articles/6.jpg'
import img7 from '@/assets/articles/7.jpg'

const images = [img1, img2, img3, img4, img5, img6, img7]

const articles = [
  {
    id: 1,
    title: '测试标题',
    img: images[Math.floor(Math.random() * images.length)],
    body: 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
    reply_count: 123,
    view_count: 321,
    like_count: 456,
    created_at: '2021-11-15 11:06'
  },
  {
    id: 2,
    title: '测试标题',
    img: images[Math.floor(Math.random() * images.length)],
    body: 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
    reply_count: 123,
    view_count: 321,
    like_count: 456,
    created_at: '2021-11-15 11:06'
  },
  {
    id: 3,
    title: '测试标题',
    img: images[Math.floor(Math.random() * images.length)],
    body: 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
    reply_count: 123,
    view_count: 321,
    like_count: 456,
    created_at: '2021-11-15 11:06'
  },
  {
    id: 4,
    title: '测试标题',
    img: images[Math.floor(Math.random() * images.length)],
    body: 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
    reply_count: 123,
    view_count: 321,
    like_count: 456,
    created_at: '2021-11-15 11:06'
  },
  {
    id: 5,
    title: '测试标题',
    img: images[Math.floor(Math.random() * images.length)],
    body: 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
    reply_count: 123,
    view_count: 321,
    like_count: 456,
    created_at: '2021-11-15 11:06'
  }
]
</script>
