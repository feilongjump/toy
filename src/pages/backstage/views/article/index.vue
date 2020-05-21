<template>
  <div>
    <h1>文章</h1>
    <el-row class="mb-4">
      <el-col>
        <el-input
          class="max-w-4xs mr-2"
          size="small"
          v-model="keywords"
          prefix-icon="el-icon-search"
          placeholder="你想找点啥？"
        ></el-input>
        <el-button
          size="small"
          type="primary"
          @click="jump()"
        >
          <i class="el-icon-plus"></i> 添加
        </el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-table
        :data="list"
        style="width: 100%"
      >
        <el-table-column
          prop="date"
          label="日期"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
        >
        </el-table-column>
        <el-table-column
          align="center"
          label="操作"
        >
          <template slot-scope="{row}">
            <el-button
              class="mr-2"
              size="mini"
              @click="jump(row.id)"
            >编辑</el-button>
            <template>
              <el-popconfirm
                confirmButtonText='删除'
                cancelButtonText='点错了'
                icon="el-icon-info"
                iconColor="red"
                title="是否删除？"
                @onConfirm="handleDelete(row.id)"
              >
                <el-button
                  size="mini"
                  type="danger"
                  slot="reference"
                >删除</el-button>
              </el-popconfirm>
            </template>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>

export default {
  data () {
    return {
      keywords: '',
      list: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    /**
     * 跳转
     */
    jump (id = 0) {
      if (id === 0) {
        this.$router.push({ name: 'article.create' })
      } else {
        this.$router.push({ name: 'article.edit', params: { id } })
      }
    },
    /**
     * 获取列表数据
     */
    getList () {
      this.list = [
        {
          name: '测试',
          address: '广州市',
          date: '2020-05-21'
        }
      ]
    },
    handleDelete () {
      this.$message.success({
          message: '删除成功',
          showClose: true
        })
    }
  }
}
</script>
