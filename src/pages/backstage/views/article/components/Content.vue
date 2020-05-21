<template>
  <el-card class="markdown-box">
    <div slot="header" class="clearfix">
      <span>文章内容</span>
    </div>
    <el-row>
      <mavon-editor
        placeholder="随便写点东西吧。。。"
        codeStyle="atom-one-dark"
        v-model="form.body"
        ref="md"
      ></mavon-editor>
    </el-row>
  </el-card>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

export default {
  data () {
    return {
      form: {
        body: ''
      }
    }
  },
  components: {
    mavonEditor,
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
