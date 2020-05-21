<template>
  <div>
    <el-row>
      <el-col>
        <h1>{{ title }}</h1>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <Base />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Base from "./components/Base";

export default {
  data () {
    return {
      title: "文章 / 修改"
    };
  },
  components: {
    Base
  }
};
</script>
