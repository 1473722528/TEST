<template>
    <div class="searchview">
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="12">
            <div>
                <el-container>
                    <el-header>
                        <h1><el-page-header @back="goBack" content="搜索详情页面">
                        </el-page-header></h1>
                    </el-header>
                    <el-main>Main</el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </div>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
  export default {
    methods: {
      goBack() {
        console.log('go back');
      }
    }
  }
</script>
<style>
.searchview{
    margin-top: 10px;
     box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;

  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;

  }

</style>