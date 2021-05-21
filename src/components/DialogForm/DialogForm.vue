<template slot-scope="scope">
    <el-dialog
        :title="formTitle"
        :show-close='false'
        :close-on-press-escape='false'
        :close-on-click-modal='false'
        :visible.sync="openDialogVisible"
        width="30%"
        center>

        <el-form :model="ruleForm" :rules="rules" status-icon ref="ruleForm"  label-position="top" v-for="item in formKey" :key="item.index">
          <el-form-item :label="item.label" :prop="item.data" >
            <el-input v-model="ruleForm[item.data]"  autocomplete="off" :disabled="item.disable"></el-input>
          </el-form-item>
        </el-form>

        <el-upload
          v-if="this.dataKey=='hotel'||this.dataKey=='room'"
          class="upload-demo"
          ref="upload"
          action=""
          :file-list="fileList"
          list-type="picture"
          :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">{{uploadTitle}}</el-button>
          <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>

        <span slot="footer" class="dialog-footer" >
        <el-button @click="cancelDo('ruleForm')">取消提交</el-button>
        <el-button type="primary" @click="successDo('ruleForm')">确定提交</el-button>
        </span>

</el-dialog>
</template>

<script>
import {addHotelImage} from '@/api/authority.js'
  export default {
    props:{
      formKeyNum:Number,
      ruleForm:Object,
      rules:Object,
      formTitle:String,
      formKey:Array,
      formSign:String,
      dataKey:String,       //表示哪一个数据表
      openDialogVisible:Boolean,
      fileList:Array,
      editfun:{
        type:Function
      },
      closefun:{
        type:Function
      },
      addfun:{
        type:Function
      }
    },
    data(){
      return{
        uploadTitle:'选取酒店图片'
      }
    },
    created(){
        if(this.dataKey=='room'){
          this.uploadTitle='选取房间图片'
        }else if(this.dataKey=='hotel'){
          this.uploadTitle='选取酒店图片'
        }
    },
    methods:{
      submitUpload(){
        let file = this.$refs.upload.uploadFiles.pop().raw;//这里获取上传的文件对象
        let name = file.name;
        console.log(file)
        let formData = new FormData(); 
        formData.append("name",name)
        formData.append("file",file);
        console.log(formData)
        addHotelImage(formData).then((Response)=>{
          var data=Response;
          console.log(data)
        }).catch(error=>{
            console.log(error);
          })
      },
      successDo(formName){
        var x=0,y=this.formKeyNum;
        for(let i=0;i<y;i++){
          this.$refs[formName][i].validate((valid) => {
          if (valid) {  
            x++;
            console.log(x);
          } else {
            console.log('error submit!!');
            return false;
          }
        }); 
        }
        for (let key in this.ruleForm) {            //输出表单信息
          console.log(key, this.ruleForm[key]);
        }
        if(x==y){ 
          this.closefun();
          if(this.formSign=='add'){
            this.addfun();
            for(let i=0;i<y;i++){
            this.$refs[formName][i].resetFields()
            }
          }else{
            // if(this.dataKey=='hotel'||this.dataKey=='room'){
            //   this.submitUpload();
            // }
            this.editfun();
          }
          this.$notify({
          title: '提交成功',
          message: '已成功提交信息',
          type: 'success'
        });
        }
        
      },
      cancelDo(formName){
       // console.log(this.fileList[0]);
        var y=this.formKeyNum;
        this.closefun();
        for(let i=0;i<y;i++){
          this.$refs[formName][i].resetFields()
        }
        this.$notify({
          title: '取消提交',
          message: '已取消提交信息',
          type: 'warning'
        });
      },
    }
  }
</script>
<style>
.el-button{
  font-size: 14px;
}
</style>