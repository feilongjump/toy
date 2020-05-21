<template>
  <el-row
    type="flex"
    justify="center"
    align="middle"
    class="logo"
  >
    <img
      class="w-12"
      :src="logo"
    >
  </el-row>
</template>

<script>
import logo from "@/assets/logo.png";

export default {
  data () {
    return {
      logo: logo
    };
  }
};
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';

.logo {
  height: $headerHeight;
}
</style>
