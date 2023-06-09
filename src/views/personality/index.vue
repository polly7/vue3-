<!-- 
 * @description: 
 * @fileName: 个人考勤统计 
 * @author: caoxiuyuan 
 * @date: 2023-06-08 15:53:28
!-->
<template>
  <div class="personality">
    <div class="top">
      <navTopBar @toSearch="toSearch"></navTopBar>
    </div>
    <div class="main">
      <div class="title">
        <div>
          <span>5月工作时长排行</span>
          <van-icon name="info-o" class="tipsIcon" @click="showTips" />
        </div>
        <span class="filter" @click="filterClick">筛选</span>
        <!-- <van-icon name="filter-o" class="filter" /> -->
      </div>
      <ul>
        <li v-for="item in data.list" :key="item.name" class="listItem">
          <div class="personInfo">
            <van-image
              width="63"
              height="63"
              round
              fit="cover"
              src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
            />
            <div class="infoText">
              <div>
                <p class="name">{{ item.name }}</p>
                <p class="deptName">{{ item.dept }}</p>
              </div>
            </div>
          </div>

          <div class="workTime">{{ "18小时" }}</div>
        </li>
      </ul>
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
  import navTopBar from "@/components/navTopBar.vue";
  import { useRoute, useRouter } from "vue-router";
  import { showNotify } from "vant";
  const router = useRouter();
  const route = useRoute();
  const data = reactive({
    // isShowTips: false,
    list: [
      {
        photo: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
        name: "匹诺曹",
        dept: "效率工程组",
      },
      {
        photo: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
        name: "匹诺曹",
        dept: "效率工程组",
      },
      {
        photo: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
        name: "匹诺曹",
        dept: "效率工程组",
      },
      {
        photo: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
        name: "匹诺曹",
        dept: "效率工程组",
      },
      {
        photo: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
        name: "匹诺曹",
        dept: "效率工程组",
      },
      {
        photo: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
        name: "匹诺曹",
        dept: "效率工程组",
      },
      {
        photo: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
        name: "匹诺曹",
        dept: "效率工程组",
      },
      {
        photo: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
        name: "匹诺曹",
        dept: "效率工程组",
      },
      {
        photo: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
        name: "匹诺曹",
        dept: "效率工程组",
      },
    ],
  });
  const toSearch = () => {
    router.push({
      name: "searchInput",
    });
  };
  const showTips = () => {
    // data.isShowTips = true;
    showNotify({
      background: "#f2f2f2",
      color: "#969696",
      message: "跨天加班数据需要第二天才能查看!",
    });
  };
  const filterClick = () => {
    console.log("筛选");
    router.push({
      name: "filter",
    });
  };
</script>
<style lang="scss" scoped>
  .personality {
    padding: 0 15px;
    .top {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: #fff;
      z-index: 999;
    }
    .main {
      margin-top: 40px;
      .title {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        height: 50px;
        line-height: 50px;
        margin-bottom: 4px;
        .filter {
          line-height: 50px;
          color: #1989fa;
          font-size: 14px;
        }
        .tipsIcon {
          line-height: 50px;
          margin-left: 10px;
        }
      }
      .tips {
        margin-bottom: 20px;
      }
      .listItem {
        display: flex;
        justify-content: space-between;

        margin: 0 42px 20px 31px;
        .personInfo {
          display: flex;
          .infoText {
            line-height: 20px;
            text-align: start;
            margin-left: 15px;
            display: flex;
            align-items: center;
            div {
              .name {
                font-size: 14px;
              }
              .deptName {
                color: #9c9c9c;
                font-size: 12px;
              }
            }
          }
        }
        .workTime {
          line-height: 63px;
          font-size: 12px;
          color: #c74745;
          font-weight: 600;
        }
      }
    }
  }
</style>
