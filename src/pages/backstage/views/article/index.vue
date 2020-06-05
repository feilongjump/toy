<template>
  <div>
    <h1>文章</h1>
    <el-row class="mb-4">
      <el-col>
        <el-autocomplete
          class="max-w-4xs mr-2"
          size="small"
          v-model="listQuery.keywords"
          prefix-icon="el-icon-search"
          placeholder="你想找点啥？"
          :fetch-suggestions="getInterfaceList"
          popper-class="display-none"
        ></el-autocomplete>
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
          prop="title"
          label="标题"
        >
        </el-table-column>
        <el-table-column
          prop="created_at"
          label="创建时间"
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
    <div class="float-right">
      <el-pagination
        background
        layout="prev, pager, next, jumper, sizes, total"
        :total="meta.total"
        :page-sizes="pageSizes"
        :page-size="meta.per_page"
        @current-change="getList"
        @prev-click="getList"
        @next-click="getList"
        @size-change="handleSizeChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { index, destroy } from '@/api/article.js'

export default {
  data () {
    return {
      listQuery: {
        keywords: '',
        page: 1,
        limit: 20
      },
      pageSizes: [20, 50, 100],
      list: [],
      meta: {}
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
     * 更改每页显示数量
     */
    handleSizeChange (limit = 20) {
      this.listQuery.limit = limit

      this.getList()
    },
    /**
     * 搜索
     */
    getInterfaceList (keywords, cb) {
      this.meta.keywords = keywords

      cb([keywords]);

      this.getList()
    },
    /**
     * 获取列表数据
     */
    getList (page = 1) {
      this.listQuery.page = page

      index(this.listQuery).then(response => {
        this.list = response.data
        response.meta.per_page = parseInt(response.meta.per_page)
        this.meta = response.meta
      })
    },
    /**
     * 删除数据
     */
    handleDelete (id) {
      destroy(id).then(() => {
        this.$message.success({
            message: '删除成功',
            showClose: true
          })
      })
    }
  }
}
</script>
