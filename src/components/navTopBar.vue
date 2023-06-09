<!-- 
 * @description: 头部（搜索）组件
 * @fileName: searchTop.vue 
 * @author: caoxiuyuan
 * @date: 2023-06-08 16:13:54
!-->
<template>
  <div class="searchTop">
    <div class="left">
      <img :src="LOGO" class="logo" />
      <span class="name">考勤统计</span>
    </div>
    <div class="right">
      <van-icon name="search" size="22px" class="icon" @click="toSearch" />
      <van-image
        width="22"
        height="22"
        round
        fit="cover"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      />
    </div>
  </div>
</template>
<script setup>
  import {
    ref,
    toRefs,
    reactive,
    defineProps,
    defineEmits,
    computed,
    watch,
    onMounted,
    nextTick,
  } from "vue";
  import LOGO from "@/assets/img/logo.svg";
  const $emit = defineEmits(["toSearch"]);
  const toSearch = () => {
    $emit("toSearch");
  };
</script>
<style lang="scss" scoped>
  .searchTop {
    height: 40px;

    display: flex;
    justify-content: space-between;
    line-height: 40px;
    padding: 0 15px;
    .left {
      display: flex;
      height: 40px;
      display: flex;
      align-items: center;

      .logo {
        height: 20px;
      }
      .name {
        font-size: 16px;
        font-weight: 600;
      }
    }
    .right {
      display: flex;
      align-items: center;

      .icon {
        margin-right: 20px;
      }
    }
  }
</style>
