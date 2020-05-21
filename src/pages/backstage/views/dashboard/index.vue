<template>
  <el-row
    class="h-full"
    type="flex"
    justify="center"
    align="middle"
  >
    生命在于折腾
    <img class="w-20" :src="logo" />
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
