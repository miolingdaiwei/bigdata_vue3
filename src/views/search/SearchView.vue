<template>
  <el-container>
    <el-header>
      <el-input
        v-model="input3"
        placeholder="Please input"
        class="input-with-select"
        @change="doSearch"
      >
        <template #prepend>
          <el-button :icon="Search" @click="doSearch" />
        </template>
      </el-input>
    </el-header>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="title" label="Title" width="120" />
      <el-table-column prop="directorList" label="DirectorList" width="120" />
      <el-table-column
        prop="scriptWriterList"
        label="ScriptWriterList"
        width="120"
      />
      <el-table-column prop="actorList" label="ActorList" width="120" />
      <el-table-column prop="typeList" label="TypeList" width="120" />
      <el-table-column prop="country" label="Country" width="120" />
      <el-table-column prop="lang" label="Lang" width="120" />
      <el-table-column prop="date" label="Date" width="120" />
      <el-table-column prop="douBanRate" label="DouBanRate" width="120" />
      <el-table-column prop="ratePeopleNum" label="RatePeopleNum" width="120" />
      <el-table-column fixed="right" label="Operations" width="120" column-key>
        <template v-slot="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click="handleClick(scope.row.rowKey)"
            >查看详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-container>
</template>
<script setup lang="ts">
// // import axios from "axios";
// import type { filmList } from "@/types/search";
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import router from "@/router";
import { useSearchStore } from "@/stores/search";
import { storeToRefs } from "pinia";

let load = ref(false);
let input3 = ref("");
// let tableData = ref<filmList>();

const store = useSearchStore();
let { tableData } = storeToRefs(store);

const handleClick = (rowKey: number) => {
  router.push({
    name: "detail",
    query: {
      rowKey: "" + rowKey,
    },
  });
};

const doSearch = async () => {
  load.value = true;
  await store.getSearch(input3.value);
  load.value = false;
};

// const searcher = async () => {
//   load.value = true;
//   let res = await axios.get("/api/search", {
//     params: {
//       keyWord: input3.value,
//     },
//   });
//   tableData.value = res.data;
//   console.log(tableData.value);
//   tableData.value?.forEach((item) => {
//     item.actorList = item.actorList.slice(0, 2);
//     item.scriptWriterList = item.scriptWriterList.slice(0, 2);
//   });
//   console.log(res);
// };
</script>

<style lang="scss" scoped></style>
