<template>
  <div>
    <el-row class="mb-30">
      <el-col>
        <h1>{{ title }}</h1>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <Base />
      </el-col>
      <el-col class="mt-8">
        <Content />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Base from "./components/Base";
import Content from "./components/Content";

export default {
  data () {
    return {
      title: "文章 / 添加"
    };
  },
  components: {
    Base,
    Content
  }
};
</script>
