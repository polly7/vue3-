<template>
  <div class="navMenu">
    <div style="margin-bottom: 100px">我是导航1的子级1</div>
    <div class="num">数字：{{ num }}</div>
    <div class="btn">
      <el-button @click="add">增加</el-button>
      <el-button @click="subtraction">减少</el-button>
    </div>
  </div>
</template>
<script setup>
  import { reactive, onMounted } from "vue";
  import userComputed from "@/hooks/userComputed"; // 引入hook
  import { cloneNode } from "@babel/types";
  const { num, add, subtraction } = userComputed();
</script>
<style lang="scss" scoped>
  .btn {
    margin: 10px 0;

    .el-button {
      font-size: 20px !important;
    }
  }
  .num {
    font-size: 20px;
    font-weight: 600;
  }
</style>
