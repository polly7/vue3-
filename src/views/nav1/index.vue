<template>
  <div class="nav1">
    <div class="main-left">
      <el-menu
        :default-active="data.menuList[0].id"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu
          v-for="item in data.menuList"
          :key="item.id"
          :index="item.id"
          :class="data.activeId === item.id ? 'activeMenu' : ''"
          @click="menuClick(item.id)"
        >
          <template #title>
            <el-icon><Checked /></el-icon>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="item1 in item.list"
              :key="item1.id"
              :index="item1.id"
              >{{ item1.name }}</el-menu-item
            >
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="main-right">
      <div class="topSearch">
        <el-input
          v-model="data.inputSearch"
          placeholder="请输入搜索内容"
          style="width: 280px; margin-right: 20px"
        ></el-input>
        <el-button type="primary">搜索</el-button>
      </div>
      <el-table :data="data.tableData" style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
        <el-table-column label="操作">
          <template #default="scope">
            <span @click="editClick(scope.row)" class="editStyle">编辑</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog v-model="data.dialogVisible" title="获取密码">
      <el-form :model="data.form" label-width="120px">
        <el-form-item label="用户名">
          <el-input v-model="data.form.name" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="data.form.password" />
        </el-form-item>
        <el-form-item label="说明">
          <el-input v-model="data.form.password" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancel">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
  import { ref, reactive, onMounted, nextTick } from "vue";
  const data = reactive({
    activeId: 1,
    menuList: [
      {
        id: 1,
        name: "分组",
        list: [
          {
            id: 3,
            name: "分組1",
          },
          {
            id: 4,
            name: "分組2",
          },
        ],
      },
      {
        id: 2,
        name: "未分组",
        list: [
          {
            id: 5,
            name: "未分組1",
          },
          {
            id: 6,
            name: "未分組2",
          },
        ],
      },
    ],
    tableData: [
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
    ],
    form: {
      name: "caoxiuyuan",
      password: "7777",
    },
    inputSearch: "",
    dialogVisible: false,
  });
  const menuClick = (index) => {
    data.activeId = index;
  };
  const editClick = (row) => {
    console.log(row, "row");
    data.dialogVisible = true;
  };
  const cancel = () => {
    data.dialogVisible = false;
  };
</script>
<style lang="scss" scoped>
  .nav1 {
    display: flex;
    height: 100%;

    .main-left {
      width: 20%;
      // height: 100%;
      height: calc(100% - 40px);
      background: #fff;
      margin-right: 20px;
      border-radius: 8px;
      overflow: auto;
      padding: 20px;

      .el-menu {
        border-right: 0px;
      }
    }
    .main-right {
      width: 80%;
      // height: 100%;
      height: calc(100% - 40px);
      border-radius: 8px;
      background: #fff;
      overflow: auto;
      padding: 20px;

      .topSearch {
        margin-bottom: 20px;
        display: flex;
        justify-content: flex-end;
      }

      .editStyle {
        color: #409eff;
        &:hover {
          cursor: pointer;
        }
      }
    }

    // 穿刺
    ::v-deep .el-sub-menu__title {
      color: #606266;
    }
    // ::v-deep .el-sub-menu__title:hover {
    //   background: #d9ecff;
    // }
    ::v-deep .el-menu-item {
      color: #606266;
    }
  }
  .activeMenu {
    border-radius: 5px;
    background: #d9ecff;
    color: #409eff;
    ::v-deep .el-sub-menu__title {
      color: #409eff;
    }
  }
</style>
