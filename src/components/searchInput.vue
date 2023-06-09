<!-- 
 * @description: 
 * @fileName: searchInput.vue 
 * @author: caoxiuyuan
 * @date: 2023-06-09 14:48:00
!-->
<template>
  <div class="searchInput">
    <van-nav-bar left-arrow @click-left="onBack" @focus="focus" fixed>
      <template #title>
        <van-search
          ref="search"
          v-model="data.value"
          shape="round"
          placeholder="搜索员工姓名"
          class="inputStyle"
        />
      </template>
    </van-nav-bar>
    <ul class="searchResult">
      <li v-for="item in data.list" :key="item">
        <span>
          <van-icon name="search" class="searchIcon" />
          <span class="searchContent">{{ item }}</span>
        </span>

        <van-icon name="down" class="down" />
      </li>
    </ul>
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
  const data = reactive({
    value: "",
    list: ["英大吉", "匹诺曹", "王花花"],
  });
  const search = ref();
  onMounted(() => {
    nextTick(() => {
      console.log(search, "search");
      search.value.focus();
    });
  });
  const onBack = () => {
    router.go(-1);
  };
  const focus = () => {
    console.log("focus");
  };
</script>
<style lang="scss" scoped>
  .searchInput {
    padding: 0 11px;
    .searchResult {
      margin-top: 46px;
      font-size: 20px;

      li {
        line-height: 53px;
        display: flex;
        justify-content: space-between;
        color: #0f0f0f;

        .searchIcon {
          padding-right: 24px;
        }
        .searchContent {
          font-size: 15px;
          color: #969696;
        }

        .down {
          transform: rotate(135deg);
          position: relative;
          right: 11px;
          top: -13px;
          font-size: 18px;
        }
      }
    }
  }

  //   ::v-deep .van-search__field {
  //     height: 30px;
  //     width: 264px;
  //   }
  //   ::v-deep .van-nav-bar__left,
  //   .van-nav-bar__right {
  //     padding: 0 9px;
  //   }
  //   ::v-deep .van-nav-bar__title {
  //     margin-left: 30px;
  //     max-width: initial;
  //   }
  //   ::v-deep .van-nav-bar .van-icon {
  //     color: #0f0f0f;
  //     font-size: 22px;
  //   }
  //   ::v-deep .van-search__field .van-field__left-icon {
  //     display: none;
  //   }

  //   ::v-deep .van-field__control {
  //     color: #969696 !important;
  //     // font-family: monospace;
  //     font-size: 15px;
  //   }
  //   ::v-deep .van-field__control::placeholder {
  //     color: #969696 !important;
  //     // font-family: monospace;
  //     font-size: 15px;
  //   }
  //   ::v-deep .van-search__content {
  //     background: #f2f2f2;
  //   }
  //   F2F2F2
</style>
