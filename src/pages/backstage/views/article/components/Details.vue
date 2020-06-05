<template>
  <div>
    <el-row class="mb-30">
      <el-col>
        <h1>{{ title }}</h1>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-card>
          <div slot="header" class="clearfix">
            <span>基本信息</span>
          </div>
          <el-row :gutter="30">
            <el-col :xs="24" :span="4" class="text-center">
              <el-image
                fit="cover"
                :src="image"
                :preview-src-list="[image]">
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
                  <el-button type="primary" @click="submit">保存</el-button>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col class="mt-8">
        <el-card class="markdown-box">
          <div slot="header" class="clearfix">
            <span>文章内容</span>
          </div>
          <el-row>
            <mavon-editor
              placeholder="随便写点东西吧。。。"
              codeStyle="atom-one-dark"
              v-model="form.markdown"
              ref="md"
            ></mavon-editor>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { isUndefined } from 'lodash'
import { show, store, update } from '@/api/article.js'
import logo from "@/assets/logo.png";
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data () {
    return {
      id: 0,
      image: logo,
      form: {
        title: "",
        markdown: ''
      }
    };
  },
  components: {
    mavonEditor,
  },
  created() {
    let id = this.$route.params && this.$route.params.id

    if (! isUndefined(id)) {
      this.id = id
      this.details()
    }
  },
  methods: {
    /**
     * 详情
     */
    details () {
      show(this.id).then(response => {
        this.form = response
        this.form.markdown = response.content.markdown ?? ''
      })
    },
    /**
     * 提交
     */
    submit() {
      if (this.id === 0) {
        this.submitStore()
      } else {
        this.submitUpdate()
      }
    },
    /**
     * 添加
     */
    submitStore() {
      store(this.form).then(() => {
        this.$message.success("添加成功！");
      })
    },
    /**
     * 更新
     */
    submitUpdate () {
      update(this.id, this.form).then(() => {
        this.$message.success("更新成功！");
      })
    }
  }
};
</script>

<style lang="scss">
.markdown-box {
  .el-card__body {
    padding: 0;

    .el-row > .markdown-body {
      box-shadow: none !important;
    }
  }
}
</style>
