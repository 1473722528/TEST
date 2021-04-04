<template>
    <el-dialog
        title="提示"
        :show-close='false'
        :close-on-press-escape='false'
        :close-on-click-modal='false'
        :visible.sync="openDialogVisible"
        center>
        <el-form :model="form" label-width="80px">
            <el-form-item label="活动名称"  label-width='120px'>
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域"  label-width='120px'>
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
        <el-button @click="fun">取 消</el-button>
        <el-button type="primary" @click="fun">确 定</el-button>
        </span>
</el-dialog>
</template>

<script>
  export default {
    props:{
        openDialogVisible:Boolean,
        fun:{
            type:Function
        }
    },
    data(){
        return{
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    }
  }
</script>