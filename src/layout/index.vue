<template>
  <el-container class="h-screen">
    <Aside />
    <el-container direction="vertical">
      <Header />
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from "./Aside.vue";
import Header from "./Header.vue";

export default {
  components: {
    Aside,
    Header
  }
};
</script>
