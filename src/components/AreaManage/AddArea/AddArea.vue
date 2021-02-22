<template>
  <div class="addarea">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="10">
        <div>
          <el-table
            :data="tableData"
            style="width: 100%"
            row-key="id"
            border
            lazy
            :load="load"
            :tree-props="{ hasChildren: 'hasChildren'}">
            <el-table-column
              prop="areaid"
              label="地区代码"
              width="180">
            </el-table-column>
            <el-table-column
              prop="areaname"
              label="地区名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id: 1,
          areaid: 1111,
          areaname: '广东',
          address: '上海市普陀区金沙江路 1518 弄',
          hasChildren: true,
          child:[{
            id:11,
            areaid:11111,
            areaname: '广州市'
          }]
        }, {
          id: 2,
          areaid: 2222,
          areaname: '广西',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          areaid: 3333,
          areaname: '河北',
          address: '上海市普陀区金沙江路 1519 弄',
          hasChildren: true
        }, {
          id: 4,
          areaid: 4444,
          areaname: '河南',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      } 
    },
    methods: {
      load(tree, treeNode, resolve) {
        setTimeout(() => {
          resolve(tree.child)
        }, 1000)
      }
    },
  }
</script>