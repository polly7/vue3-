<!-- 
 * @description: 
 * @fileName: filter.vue 
 * @author: caoxiuyuan
 * @date: 2023-06-09 17:21:08
!-->
<template>
  <div class="filter">
    <van-nav-bar left-arrow @click-left="onBack">
      <template #title>
        <div>筛选</div>
        <!-- <van-search
       
          v-model="data.value"
          shape="round"
          placeholder="搜索员工姓名"
          class="inputStyle"
        /> -->
      </template>
    </van-nav-bar>
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
  import { useRoute, useRouter } from "vue-router";
  const router = useRouter();
  const onBack = () => {
    router.go(-1);
  };
</script>

<style lang="scss" scoped>
  .filter {
  }
</style>
