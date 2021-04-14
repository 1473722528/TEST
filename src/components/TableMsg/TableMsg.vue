<template>
  <div class="tablemsg">
    <el-table
      :data="tableData"
      style="width: 100%;height:100%"
      row-key="id"
      border
      lazy
      :load="load"
      :tree-props="{children: 'children' ,hasChildren: 'hasChildren'}">
      <el-table-column v-for="item in tableKey" :key="item.index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    props:{
      tableData: Array,
      tableKey: Array
    },
    methods: {
      load(tree, treeNode, resolve) {
        setTimeout(() => {
          resolve(tree.child)
        }, 100)
      }
    }
  }
</script>

<style>
.tablemsg{
  margin: 0px;
  padding: 0px;
}
</style>
