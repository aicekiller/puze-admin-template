<template>
  <div class="table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-menu"></i> 表格</el-breadcrumb-item>
        <el-breadcrumb-item>基础表格</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名:">
        <el-input v-model="formInline.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item label="手机号码:">
        <el-input v-model="formInline.cellphone" placeholder="手机号码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="search" @click="search">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="list"
      v-loading="listLoading"
      element-loading-text="给我一点时间"
      border
      style="width: 100%"
      ref="multipleTable"
      @selection-change="handleSelectionChange">
      <el-table-column align="center" label="商户ID" width="65">
        <template scope="scope">
          <span>{{scope.row.merchantId}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="订单号">
        <template scope="scope">
          <span>{{scope.row.orderId}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="费用">
        <template scope="scope">
          <span>{{scope.row.totalPrice}}</span>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="listQuery.pageIndex"
        layout="prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import { merchantGetOrderList } from '@/api/BaseTable'

  export default {
    data () {
      return {
        formInline: {
          name: '',
          cellphone: ''
        },
        list: null,
        total: null,
        listLoading: true,
        listQuery: {
          status: -1,
          pageSize: 10,
          pageIndex: 1,
          orderType: 'all',
          number: '',
          name: '',
          phone: ''
        }
      }
    },
    created () {
      this.getData()
    },
    computed: {},
    methods: {
      getData () {
        merchantGetOrderList(this.listQuery).then(res => {
          console.log(res)
          this.list = res.data
          this.total = res.page.totalCount
          this.listLoading = false
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>

</style>
