<template>
  <div class="navMenu">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="zoomClose"
      :collapse-transition="false"
      @select="selectMenuItem"
    >
      <div v-for="(item, index) in data.routeList" :key="index">
        <!-- 有子级时，使用el-sub-menu标签 -->
        <el-sub-menu v-if="item.children" :index="index + 1">
          <template #title>
            <component
              :is="item.meta.icon"
              style="width: 16px; height: 16px; margin-right: 5px"
            ></component>
            <span>{{ item.meta.title }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="(groupItem, groupIndex) in item.children"
              :key="groupIndex"
              :index="groupItem.meta.index"
              >{{ groupItem.meta.title }}</el-menu-item
            >
          </el-menu-item-group>
        </el-sub-menu>
        <!-- 无子级时，使用el-menu-item标签 -->
        <el-menu-item v-else :index="index + 1">
          <template #title>
            <component
              :is="item.meta.icon"
              style="width: 16px; height: 16px; margin-right: 5px"
            ></component>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>
<script setup>
  import { reactive, defineProps, computed } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from "@element-plus/icons-vue";
  const router = useRouter();
  const data = {
    routeList: router.options.routes[0].children[0].children,
  };

  const props = defineProps({
    zoomClose: {
      type: Boolean,
      default: false,
    },
  });
  //  点击侧边导航
  const selectMenuItem = (index, indexPath) => {
    if (indexPath.length === 1) {
      router.push({ name: data.routeList[index - 1].name });
    } else {
      data.routeList.forEach((item) => {
        if (item.children) {
          item.children.forEach((item1) => {
            if (item1.meta.index === index) {
              router.push({ name: item1.name });
            }
          });
        }
      });
    }
  };
</script>
<style lang="scss" scoped>
  .navMenu {
    ::v-deep .el-menu {
      background-color: transparent;
      border: 0;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 210px;
    }
  }
</style>
