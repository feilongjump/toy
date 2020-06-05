<template>
  <el-row id="details" class="overflow-y-scroll hide-scrollbar">
    <el-col>
      <mavonEditor
        v-model="content.markdown"
        :subfield="false"
        :boxShadow="false"
        defaultOpen="preview"
        previewBackground="#fff"
        :toolbarsFlag="false"
      />
    </el-col>
  </el-row>
</template>

<script>
import { show } from '@/api/article.js'
import { mavonEditor } from "mavon-editor";
import 'mavon-editor/dist/css/index.css';

export default {
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      content: {
        markdown: '# 生命在于折腾'
      }
    }
  },
  components: {
    mavonEditor,
  },
  watch: {
    id () {
      show(this.id).then(response => {
        this.content = response.content
      })
    }
  }
}
</script>

<style lang="scss">
.v-note-wrapper,.v-note-panel {
  border: none !important;
}
</style>
