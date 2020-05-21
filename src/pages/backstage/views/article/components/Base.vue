<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>基本信息</span>
    </div>
    <el-row :gutter="30">
      <el-col :xs="24" :span="4" class="text-center">
        <el-image
          fit="cover"
          :src="form.image"
          :preview-src-list="[form.image]">
        </el-image>
      </el-col>
      <el-col :xs="24" :span="19">
        <el-form ref="form" :model="form" label-position="top">
          <el-row :gutter="30">
            <el-col :xs="24" :sm="12" :lg="6">
              <el-form-item label="标题">
                <el-input v-model="form.title"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item>
            <el-button type="primary">保存</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import logo from "@/assets/logo.png";

export default {
  data() {
    return {
      form: {
        image: logo,
        title: "生命在于折腾",
      }
    };
  }
};
</script>
