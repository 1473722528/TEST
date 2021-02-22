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
            :tree-props="{children: 'children' ,hasChildren: 'hasChildren'}">
            <el-table-column v-for="item in tableKey" :key="item"
              :prop="item.prop"
              :label="item.label"
              :width="item.width">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
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
        }, 1000)
      }
    }
  }
</script>