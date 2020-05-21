<template>
  <el-row class="h-screen text-white">
    <el-col :md="12" :lg="14">
      <i class="el-icon-more-outline text-2xl mt-4 mb-8"></i>
      <div class="px-8">
        <el-row class="ml-3 my-8">
          <el-col :xs="24" :sm="10" :md="12" :lg="8">
            <el-input class="index-search text-2xl" v-model="keywords" placeholder="Search"></el-input>
          </el-col>
        </el-row>
        <el-row class="ml-3 mt-8">
          <h2>Articles</h2>
          <el-col>
            <h3>Title</h3>
            <p class="text-indent-4">
              Tailwind CSS 是一个高度可定制的基础层 CSS 框架，它为您提供了构建定制化设计所需的所有构建块，而无需重新覆盖任何内建于框架中的设计风格。
            </p>
            <el-row>
              <el-col :span="18">
                <span class="tag"><i class="el-icon-price-tag mr-1"></i>Tag</span>
              </el-col>
              <el-col :span="6">
                <span>2020-05-21 17:10</span>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </el-col>
    <el-col class="h-full hidden-sm-and-down text-black" :md="12" :lg="10">
      <Details />
    </el-col>
  </el-row>
</template>

<script>
import Details from "./components/Details";

export default {
  data () {
    return {
      keywords: ''
    }
  },
  components: {
    Details
  }
}
</script>
