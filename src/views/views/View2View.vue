<template>
  <div id="main"></div>
</template>

<script setup lang="ts">
import { option } from "@/untils/commen";
import * as echarts from "echarts";
import { onMounted, onUnmounted } from "vue";

let myChart: any = null;

onMounted(() => {
  myChart = echarts.init(document.getElementById("main") as HTMLElement);
  myChart.setOption(option);
});

onUnmounted(() => {
  myChart.dispose();
});
</script>

<style lang="scss" scoped>
#main {
  min-height: 800px;
}
</style>
