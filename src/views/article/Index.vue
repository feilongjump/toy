<template>
  <div class="w-full h-full overflow-y-scroll scrollbar-none">
    <div
      class="w-full flex bg-white py-2 px-8 rounded-lg mb-4 shadow-lg"
      v-for="article in articles"
      :key="article.id"
    >
      <div class="flex flex-col">
        <router-link
          :to="{ name: 'Article.Show', params: { id: article.id } }"
          class="font-semibold text-xl"
          >{{ article.title }}</router-link
        >
        <div class="mb-4 ">
          <span class="text-xs text-gray-500">
            阅读次数 999
          </span>
          <router-link
            :to="{ name: 'Article.Edit', params: { id: article.id } }"
          >
            <Icon href="#icon-edit" width="w-4" height="h-4" />
          </router-link>
        </div>
        <p>这里放个内容</p>
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

    new Articles().index().then(response => {
      data.articles = response.data
    })

    return {
      ...toRefs(data),
    }
  },
  components: {
    Icon,
  },
})
</script>
