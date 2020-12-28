<template>
  <div class="w-full h-full">
    <div
      class="w-full flex bg-white py-2 px-8 rounded-lg shadow-lg"
      v-for="(article, index) in articles"
      :key="article.id"
      :class="index === 0 ? '' : 'mt-4'"
    >
      <div class="flex flex-col">
        <span class="flex content-center">
          <router-link
            :to="{ name: 'Article.Show', params: { id: article.id } }"
            class="font-semibold text-xl"
            >{{ article.title }}</router-link
          >
          <router-link
            v-if="isLogin"
            class="ml-2"
            :to="{ name: 'Article.Edit', params: { id: article.id } }"
          >
            <Icon href="#icon-edit" width="w-4" height="h-4" />
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import Icon from '@/components/Icon.vue'
import Articles from '@/api/articles'

export default defineComponent({
  name: 'Article',
  setup() {
    const data = reactive({
      articles: [
        {
          id: 0,
          title: '',
        },
      ],
    })
    const isLogin = localStorage.getItem('user') ? true : false

    new Articles().index().then(response => {
      data.articles = response.data
    })

    return {
      ...toRefs(data),
      isLogin,
    }
  },
  components: {
    Icon,
  },
})
</script>
