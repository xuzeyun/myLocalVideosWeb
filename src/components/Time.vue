<template>
<!-- 如果想做日期过滤， 请不要设置format="yyyy年MM月dd日" 属性 -->
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="开始日期" prop="startDate">
      <el-date-picker
        v-model="form.startDate"
        format="yyyy年MM月dd日"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptionsStart" @change="changeEnd">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="至" prop="startDate">
      <el-date-picker
        v-model="form.endDate"
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
  data() {
    return {
      form: {
        startDate: '',
        endDate: '',
      },
      pickerOptionsStart: {},
      pickerOptionsEnd:{},
    };
  },
  methods:{
    onSubmit() {
      console.log('submit!');
      let startDate = this.form.startDate;
      let endDate = this.form.endDate;
      let newStartDate = this.convertTimeFormat(startDate);
      let newEndDate = this.convertTimeFormat(endDate);
      console.log(newStartDate);
      console.log(newEndDate);
    },
    changeStart (){
      this.pickerOptionsStart = Object.assign({},this.pickerOptionsStart,{
        disabledDate: (time) => {
          return time.getTime() > this.form.endDate
        }
      })
    },
    changeEnd (){
      this.pickerOptionsEnd = Object.assign({},this.pickerOptionsEnd,{
        disabledDate: (time) => {
          return time.getTime() < this.form.startDate
          }
      })
    },
    convertTimeFormat (dateObj) {
      console.log(new Date(dateObj));
      // let date = new Date(dateObj);
      // let year = date.getFullYear();
      // let month = date.getMonth()+1;
      // let day = date.getDate();
      // month = month < 10 ? "0"+month:month;
      // day = day < 10 ? "0"+day:day;
      // d.date = year+'-'+month+'-'+day;
      // return d
    },
  }
}
</script>
