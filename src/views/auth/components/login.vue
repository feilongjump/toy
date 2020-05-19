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
      <el-form-item label="邮箱" prop="email" class="font-blod tracking-widest">
        <el-input
          v-model="form.email"
          placeholder="example@gmail.com"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
        class="font-blod tracking-widest"
      >
        <el-input v-model="form.password" placeholder="******"></el-input>
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
      <span class="text-center text-sm text-gray-300">暂未开放注册</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "example@gamil.com",
        password: "123456",
        remember: false
      },
      rules: {
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { type: "email", message: "邮箱格式错误", trigger: "blur" }
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
      this.$message.success("登录成功~");
      this.$router.push({ name: "dashboard" });
    }
  }
};
</script>
