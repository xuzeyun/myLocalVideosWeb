<template>
  <el-main>
    <el-table
      :data="asiaList"
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
    <el-pagination
      layout="prev, pager, next"
      :page-size="this.pageSize"
      :total="this.total"
      :current-page="this.cur"
    >
    </el-pagination>
  </el-main>
</template>

<script>
export default {
  name: 'VideoTable',
  props: {
    asiaList: Array,
    total: Number,    // 总页数
    cur: Number,      // 当前页
    pageSize: Number,  // 每页数量
    pages: Number
  },
  data () {
    return {
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    // 删除标签
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
</style>
