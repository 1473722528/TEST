<template>
    <div class="pagination">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[1, 2, 3, 5]"
            :page-size="1"
            layout="total, sizes, prev, pager, next, jumper"
            :total="4">
        </el-pagination>
  </div>
</template>
<script>
  export default {
    props:{
      pagData:Number
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
</script>
<style>
.pagination{
    width: 100%
}
</style>