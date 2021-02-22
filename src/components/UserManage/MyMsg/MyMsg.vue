<template>
    <div class="mymsg">
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="10">
                <el-container> 
                <el-header>Header</el-header>
                <el-main>Main</el-main>
                </el-container>
            </el-col>
        </el-row>
    </div>
</template>
<style>
.el-container{
  border-radius: 4px;
  background: aquamarine;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
</style>