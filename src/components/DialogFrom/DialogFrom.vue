<template>
    <el-dialog
        :title="formTitle"
        :show-close='false'
        :close-on-press-escape='false'
        :close-on-click-modal='false'
        :visible.sync="openDialogVisible"
        width="30%"
        center>

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  label-position="top" v-for="item in formKey" :key="item.index">
          <el-form-item :label="item.label" >
            <el-input v-model="item.data" autocomplete="off" ></el-input>
          </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer">
        <el-button @click="fun">取 消</el-button>
        <el-button @click="resetForm('ruleForm')">重 置</el-button>
        <el-button type="primary" @click="fun">确 定</el-button>
        </span>

</el-dialog>
</template>

<script>
  export default {
    props:{
      formTitle:String,
      formKey:Array,
      openDialogVisible:Boolean,
      fun:{
        type:Function
      }
    },
    data(){
        return{
            ruleform: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
            },
  
        }
    }
  }
</script>
<style>
.el-button{
  font-size: 14px;
}
</style>