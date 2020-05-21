<template>
  <el-header>
    <el-row
      class="h-full"
      type="flex"
      align="middle"
    >
      <el-col class="show-xs-only hidden-sm-and-up">
        <img
          class="w-10"
          :src="logo"
        >
      </el-col>
      <el-col
        class="hidden-xs-only head-search-bar"
        :sm="12"
        :md="10"
        :lg="8"
        :xl="4"
      >
        <el-input
          placeholder="请输入内容"
          v-model="keywords"
        >
          <i
            slot="prefix"
            class="el-input__icon el-icon-search"
          ></i>
        </el-input>
      </el-col>
      <el-col>
        <div class="float-right">
          <el-row
            class="h-full"
            type="flex"
            justify="center"
            align="middle"
          >
            <div>
              <el-avatar
                :src="user.avatar"
                class="align-middle"
              ></el-avatar>
              <span class="hidden-xs-only ml-2 align-middle">{{user.name}}</span>
            </div>
            <el-badge
              class="item mx-6"
              is-dot
            >
              <i class="el-icon-chat-round text-xl"></i>
            </el-badge>
            <i
              class="el-icon-switch-button cursor-pointer text-xl"
              @click="logout"
            ></i>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
import logo from "@/assets/logo.png";

export default {
  data () {
    return {
      keywords: '',
      user: {},
      logo: logo
    }
  },
  methods: {
    /**
     * 退出登录
     */
    logout () {
      this.$router.push({ name: "auth" });
    }
  }
}
</script>

<style lang="scss">
.head-search-bar {
  input {
    border: none;
    border-bottom: 1px solid #dcdfe6;
    border-radius: 0;
  }
}
</style>
