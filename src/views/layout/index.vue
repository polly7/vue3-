<template>
  <div class="homeView">
    <el-container>
      <el-header>
        <img :src="data.logo" class="sidebar-logo" />
        <div class="menu">
          <el-menu
            :default-active="data.activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item
              v-for="item in data.navList"
              :key="item.id"
              :index="item.id"
              >{{ item.name }}</el-menu-item
            >
          </el-menu>
          <div class="userImg">{{ "秀媛" }}</div>
        </div>
      </el-header>
      <el-main>
        <router-view />
        <!-- <Main> </Main> -->
      </el-main>
    </el-container>
  </div>
</template>
<script setup>
  import { ref, reactive, onMounted, nextTick } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import { useStore } from "vuex"; // 通过vuex获取数据
  import logoImg from "../../assets/img/logo.png";
  // import Main from "@/views/layout/main.vue";
  const store = useStore();
  const router = useRouter();
  // 所有变量
  const data = reactive({
    logo: logoImg,
    activeIndex: 1,
    navList: [
      {
        id: 1,
        name: "导航1",
      },
      {
        id: 2,
        name: "导航2",
      },
      {
        id: 3,
        name: "导航3",
      },
      {
        id: 4,
        name: "导航4",
      },
    ],
  });
  const handleSelect = (key, keyPath) => {
    if (key === 1) {
      router.push({ name: "nav1" });
    }
  };
</script>
<style lang="scss" scoped>
  .homeView {
    .el-header {
      width: 100%;
      height: 80px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-content: center;
      overflow: hidden;
      padding: 10px 20px 10px 20px;
      background: #fff;
      box-shadow: 0 4px 6px 0 rgb(8 14 26 / 4%), 0 1px 10px 0 rgb(8 14 26 / 5%),
        0 2px 4px -1px rgb(8 14 26 / 6%);
      .menu {
        width: 100%;
        display: flex;
        justify-content: center;

        .userImg {
          width: 50px;
          height: 50px;

          background: #4c70b9;
          border-radius: 25px;
          font-size: 20px;
          border: 25%;
          line-height: 50px;
          color: #fff;
        }
      }

      ::v-deep .el-menu--horizontal {
        width: 100%;
        border-bottom: 0px;
        padding: 0 50px;
      }
      ::v-deep .el-menu--horizontal > .el-menu-item {
        font-size: 16px;
      }
    }

    .el-main {
      height: calc(100vh - 80px);
      background: #eff2f5;

      width: 100%;
    }
  }
</style>
