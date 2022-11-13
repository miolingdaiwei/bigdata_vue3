<template>
  <div><h1>this is home view</h1></div>
</template>

<script setup lang="ts">
import request from "@/api/index";
import { onMounted } from "vue";
onMounted(() => {
  request({
    method: "GET",
    url: "/post",
  }).then((res) => {
    console.log(res);
  });
});
</script>

<style lang="scss" scoped></style>
