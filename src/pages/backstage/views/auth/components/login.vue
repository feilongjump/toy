<template>
  <div>
    <h1 class="text-center">Welcome Back</h1>
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      label-position="top"
      hide-required-asterisk
      class="auth-form"
    >
      <el-form-item label="用户名 | 邮箱" prop="username" class="font-blod tracking-widest">
        <el-input
          v-model="form.username"
          placeholder="example | example@gmail.com"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
        class="font-blod tracking-widest"
      >
        <el-input v-model="form.password" placeholder="******" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-row type="flex" justify="between" align="middle" class="mb-2">
          <el-col>
            <el-checkbox label="记住登录" v-model="form.remember"></el-checkbox>
          </el-col>
        </el-row>
      </el-form-item>
      <el-button class="w-full" type="primary" @click="onSubmit" >登录</el-button>
    </el-form>
    <el-divider></el-divider>
    <p class="text-center">
      <span class="text-center text-sm text-gray-600">暂未开放注册</span>
    </p>
  </div>
</template>

<script>
import localforage from "localforage";
import { login, me } from "@/api/auth";

export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        remember: false
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名或者邮箱", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "长度至少在 6 个字符以上", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    /**
     * 切换组件
     */
    authComponent(type) {
      this.$emit("authComponent", type);
    },
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.login();
        } else {
          return false;
        }
      });
    },
    /**
     * 登录
     */
    async login() {
      await login(this.form).then(({access_token}) => {
        localforage.setItem("token", access_token);
      });

      await me().then(user => {
        localforage.setItem("user", user);
      });


      this.$message.success("登录成功~");
      this.$router.push({ name: "dashboard" });
    }
  }
};
</script>
