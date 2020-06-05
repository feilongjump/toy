<template>
  <el-row class="h-screen text-white py-4 px-4">
    <el-col :md="12" :lg="14" class="h-full overflow-y-scroll hide-scrollbar" v-infinite-scroll="getArticles">
      <i class="el-icon-more-outline text-2xl mt-4 mb-8"></i>
      <div class="px-8">
        <el-row class="ml-3 my-8">
          <el-col :xs="24" :sm="10" :md="12" :lg="8">
            <el-input class="index-search text-2xl" v-model="listQuery.keywords" placeholder="Search"></el-input>
          </el-col>
        </el-row>
        <el-row class="ml-3 mt-8">
          <h2>Articles</h2>
          <el-col v-for="article in articles" :key="article.id">
            <h3 class="cursor-pointer" @click="transmitDetailsId(article.id)">{{article.title}}</h3>
          </el-col>
        </el-row>
      </div>
    </el-col>
    <el-col class="h-full hidden-sm-and-down text-black" :md="12" :lg="10">
      <Details :id="id" />
    </el-col>
  </el-row>
</template>

<script>
import { index } from '@/api/article.js'
import Details from "./components/Details";
import { isEmpty } from 'lodash'

export default {
  data () {
    return {
      id: 0,
      articles: [],
      meta: {},
      listQuery: {
        keywords: '',
        page: 0,
        limit: 20
      }
    }
  },
  components: {
    Details
  },
  created () {
    this.getArticles()
  },
  methods: {
    /**
     * 文章列表
     */
    getArticles() {

      if (! isEmpty(this.meta) && this.meta.last_page === this.listQuery.page) {
        return true;
      }
      this.listQuery.page++

      index(this.listQuery).then(response => {
        this.articles = this.articles.concat(response.data)
        this.meta = response.meta
      })
    },
    /**
     * 传递文章 id
     */
    transmitDetailsId (id) {
      this.id = id
    },
    test() {
      console.info( this.listQuery)
    }
  }
}
</script>
