<template>
  <div class="homeView">
    <el-container>
      <el-container>
        <el-aside :style="{ width: !data.zoomClose ? '200px' : '63px' }">
          <div class="LogoPart">
            <div class="logo" v-if="!data.zoomClose">你的logo</div>
            <div class="zoom" @click="zoomClick">
              <el-icon>
                <Fold v-if="data.zoomClose" />
                <Expand v-else />
              </el-icon>
            </div>
          </div>
          <el-scrollbar style="height: calc(100vh - 53px)">
            <SideBar :zoomClose="data.zoomClose" />
          </el-scrollbar>
        </el-aside>
        <el-container>
          <el-header style="text-align: right; font-size: 15px">
            <div class="toolbar">
              <el-dropdown>
                <el-icon
                  style="margin-right: 8px; margin-top: 1px; font-size: 18px"
                  ><setting
                /></el-icon>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>View</el-dropdown-item>
                    <el-dropdown-item>Add</el-dropdown-item>
                    <el-dropdown-item>Delete</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
              <span>Tom</span>
            </div>
          </el-header>
          <el-main>
            <el-scrollbar>
              <router-view />
            </el-scrollbar>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
  import { ref, reactive, onMounted, nextTick } from "vue";
  import SideBar from "@/views/layout/sideBar.vue";
  import { useStore } from "vuex"; // 通过vuex获取数据
  const store = useStore();
  // 所有变量
  const data = reactive({
    zoomClose: false,
    goods: store.state.module1.goods, //获取vuex数据
  });
  // 导航折叠
  const zoomClick = () => {
    data.zoomClose = !data.zoomClose;
  };
</script>
<style lang="scss" scoped>
  .homeView {
    height: 100%;
    .LogoPart {
      display: flex;
      padding-top: 20px;
      padding-left: 20px;
      .logo {
        width: 110px;
        height: 25px;
        font-size: 20px;
        line-height: 25px;
        background: #ecf5ff;
        margin-right: 20px;
      }
      .zoom {
        font-size: 25px;

        &:hover {
          cursor: pointer;
        }
      }
    }
    .el-header {
      background: #c6e2ff;
      .toolbar {
        position: relative;
        top: 40%;
      }
    }
    .el-aside {
      height: 100vh !important;

      background: #d9ecff;
      transition: width 0.35s;
      overflow: hidden;
    }
    .el-main {
      height: calc(100vh - 60px);
      background: #ecf5ff;
    }
  }
</style>
