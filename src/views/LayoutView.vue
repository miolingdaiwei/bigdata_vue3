<template>
  <div class="common-layout">
    <el-container>
      <el-aside><SiderBar></SiderBar></el-aside>
      <el-container>
        <el-main> <router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import SiderBar from "../components/SiderBar.vue";
import request from "@/api/index";
onMounted(() => {
  request({
    method: "GET",
    url: "/post",
  }).then((res) => {
    console.log(res);
  });
});
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
  flex-wrap: nowrap;
}

.el-aside {
  width: auto;
  // height: 100vh;
}
</style>
