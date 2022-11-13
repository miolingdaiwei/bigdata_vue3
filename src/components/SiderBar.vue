<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        :unique-opened="true"
        router
      >
        <el-sub-menu index="/">
          <template #title>
            <el-icon><location /></el-icon>
            <span>view1</span>
          </template>
          <el-menu-item index="/view1">item one</el-menu-item>
          <el-menu-item index="/view2">item two</el-menu-item>
          <el-menu-item index="/view3">item three</el-menu-item>
          <el-menu-item index="/view4">item four</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { Location } from "@element-plus/icons-vue";
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
  height: 100vh;
}
.el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
