<template>
  <el-row class="h-screen">
    <el-col class="h-full auth-background">
      <el-row
        class="h-full"
        type="flex"
        justify="center"
        align="middle"
      >
        <el-col
          :xs="20"
          :sm="11"
          :md="8"
          :lg="5"
          class="form-box"
        >
          <component
            :is="currentAuthComponent"
            @authComponent="authComponent"
          ></component>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import Login from './components/login'

export default {
  data () {
    return {
      currentAuthComponent: 'Login'
    }
  },
  components: {
    Login
  },
  methods: {
    authComponent (type) {
      this.currentAuthComponent = type
    }
  }
};
</script>

<style lang="scss">
.auth-background {
  background-image: url('~@/assets/auth-background.jpg');
  background-position: center center;
  background-size: cover;

  .form-box {
    padding: 1rem;
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.6);
  }
}

.auth-form {
  .el-form-item {
    .el-form-item__label {
      padding: 0;
    }
  }
}
</style>
