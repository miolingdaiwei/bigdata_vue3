<template>
  <el-container>
    <el-button @click="backSearch">返回 </el-button>
    <el-descriptions
      title="Vertical list with border"
      direction="vertical"
      :column="3"
      size="default"
      border
    >
      <el-descriptions-item label="title">{{
        detail?.title
      }}</el-descriptions-item>
      <el-descriptions-item label="directorList">{{
        detail?.directorList
      }}</el-descriptions-item>
      <el-descriptions-item label="actorList" :span="2">{{
        detail?.actorList
      }}</el-descriptions-item>
      <el-descriptions-item label="anotherName">
        {{ detail?.anotherName }}
      </el-descriptions-item>
      <el-descriptions-item label="country"
        >{{ detail?.country }}
      </el-descriptions-item>
      <el-descriptions-item label="date"
        >{{ detail?.date }}
      </el-descriptions-item>
      <el-descriptions-item label="douBanRate"
        >{{ detail?.douBanRate }}
      </el-descriptions-item>
      <el-descriptions-item label="lang"
        >{{ detail?.lang }}
      </el-descriptions-item>
      <el-descriptions-item label="ratePeopleNum"
        >{{ detail?.ratePeopleNum }}
      </el-descriptions-item>
      <el-descriptions-item label="TOP RANK"
        >{{ detail?.rowKey }}
      </el-descriptions-item>
      <el-descriptions-item label="runTime"
        >{{ detail?.runTime }}
      </el-descriptions-item>
      <el-descriptions-item label="scriptWriterList"
        >{{ detail?.scriptWriterList }}
      </el-descriptions-item>
    </el-descriptions>
    <el-image :src="ima"></el-image>
  </el-container>
  <div id="main"></div>
</template>

<script setup lang="ts">
import axios from "axios";
import { useRoute } from "vue-router";
import { option } from "@/untils/commen";
import * as echarts from "echarts";
import { onMounted, onUnmounted, ref } from "vue";
import router from "@/router";
import { useSearchStore } from "@/stores/search";
import type { film, filmList } from "@/types/search";

const route = useRoute();
let { rowKey = "1" } = route.query;
let word = ref([]);
let myChart: any = null;
const store = useSearchStore();
let detail = ref<film>();
const backSearch = () => {
  router.push({
    name: "search",
  });
};

onMounted(async () => {
  console.log("detail mount and rowkey is: " + rowKey);

  const res = await axios.get("/api/wordCloud", {
    params: {
      rowKey: rowKey,
    },
  });

  word.value = res.data;
  option.series[0].data.forEach((item, index) => {
    item.name = Object.keys(word.value[index])[0];
    item.value = word.value[index][Object.keys(word.value[index])[0]];
  });

  myChart = echarts.init(document.getElementById("main") as HTMLElement);
  myChart.setOption(option);
  store.getDetail(rowKey as string);
  detail.value = (store.tableDataReal as filmList)[store.index];
  console.log("get detail:" + detail.value);
});

onUnmounted(() => {
  myChart.dispose();
});
</script>

<style lang="scss" scoped>
#main {
  min-height: 800px;
}

.el-descriptions {
  margin-top: 40px;
}
</style>
