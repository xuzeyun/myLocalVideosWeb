<template>
  <el-main>
    <el-table
      :data="videoList.slice((currentPage-1)*pageSize, currentPage*pageSize)"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="videos"
        label="影片列表"
        width="">
        <!-- 遍历 tag 标签 -->
        <template slot-scope="scope">
          <el-tag
            :key="tag"
            v-for="tag in scope.row.videos"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
        </template>
        <!-- 遍历 tag 标签 -->
      </el-table-column>
      <el-table-column
        prop="num"
        label="影片数量"
        width="100">
      </el-table-column>
      <el-table-column
        prop="star"
        label="演员评级"
        width="100">
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-row align="center">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size="pageSize" 
        :page-sizes="pageSizes"
        :current-page="currentPage"
        :total="total"
        layout="prev, pager, next"
      >
      </el-pagination>
    </el-row>
    
  </el-main>
</template>

<script>
import asiaYesStr from '../../../data/getAsiaYes'
import { getArray } from '../../service/getDate'
export default {
  name: 'VideoTable',
  props: {
    videoList: Array,
    pageSize: Number,
    pageSizes: Array,
    currentPage: Number,
    total: Number   
  },
  data () {
    return {
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
     // 分页
    handleSizeChange (val) {
      this.PageSize = val
      this.currentPage = 1
    },
    handleCurrentChange (val) {
      this.currentPage = val
    },

    // tag 增加删除
    // 删除 tag
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    // 显示
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    }
  }
}
</script>

<style lang="stylus" scoped>
  .el-main
    background #fff
    height 100vh
    .el-tag
      margin 4px 0 4px 8px
    .el-input
      margin 4px 0 4px 8px
    .el-button
      margin 4px 0 4px 8px
    .el-pagination
      margin-top 10px
</style>
