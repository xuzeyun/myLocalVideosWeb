<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="开始日期" prop="startDate">
      <el-date-picker
        v-model="form.startDate"
        value-format="yyyy/MM/dd"
        format="yyyy年MM月dd日"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptionsStart" @change="changeEnd">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="至" prop="endDate">
      <el-date-picker
        v-model="form.endDate"
        value-format="yyyy/MM/dd"
        format="yyyy年MM月dd日"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptionsEnd" @change="changeStart">
      </el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'TimeSelect',
  data () {
    return {
      form: {
        startDate: '',
        endDate: ''
      },
      pickerOptionsStart: {},
      pickerOptionsEnd:{},
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    changeStart (){
      this.pickerOptionsStart = Object.assign({},this.pickerOptionsStart,{
        disabledDate: (time) => {
          return time.getTime() > this.form.endDate;
        }
      })
    },
    changeEnd (){
      this.pickerOptionsEnd = Object.assign({},this.pickerOptionsEnd,{
        disabledDate: (time) => {
          return time.getTime() < this.form.startDate;
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

