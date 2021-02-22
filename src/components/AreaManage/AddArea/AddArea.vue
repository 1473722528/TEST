<template>
  <div>
    <el-row  class="mymsg" type="flex"  justify="center" >
      <el-col :span="10">
        <h3>添加地区</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  label-position="top" label-width="100px" class="demo-ruleForm" >
          <el-form-item style="text-align:left" label="地区ID" prop="areaId">
            <el-input v-model="ruleForm.areaId"></el-input>
          </el-form-item>
          <el-form-item style="text-align:left" label="地区名称" prop="areaName">
            <el-input v-model="ruleForm.areaName"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">保存数据</el-button>
            <el-button style="text-align:right" @click="resetForm('ruleForm')">重置数据</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          areaId: '',
          areaName: '',
        },
        rules: {
          areaName: [
            { required: true, message: '请输入地区名称', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
          ],
          areaId: [
            { required: true, message: '请输入地区ID', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 5 个数字', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>