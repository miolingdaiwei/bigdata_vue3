<template>
  <el-container>
    <el-input
      v-model="input3"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #prepend>
        <el-button :icon="Search" />
      </template>
      <template #append>
        <el-select v-model="select" placeholder="Select" style="width: 115px">
          <el-option label="Restaurant" value="1" />
          <el-option label="Order No." value="2" />
          <el-option label="Tel" value="3" />
        </el-select>
      </template>
    </el-input>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="Title" label="Title" width="60" />
      <el-table-column prop="DirectorList" label="DirectorList" width="60" />
      <el-table-column
        prop="ScriptWriterList"
        label="ScriptWriterList"
        width="60"
      />
      <el-table-column prop="ActorList" label="ActorList" width="60" />
      <el-table-column prop="TypeList" label="TypeList" width="60" />
      <el-table-column prop="Country" label="Country" width="60" />
      <el-table-column prop="Lang" label="Lang" width="60" />
      <el-table-column prop="Date" label="Date" width="60" />
      <el-table-column prop="RunTime" label="RunTime" wid6th="60" />
      <el-table-column prop="AnotherName" label="AnotherName" width="60" />
      <el-table-column prop="DouBanRate" label="DouBanRate" width="60" />
      <el-table-column fixed="RatePeopleNum" label="RatePeopleNum" width="60">
        <template #default>
          <el-button link type="primary" size="small" @click="handleClick"
            >详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-container>
</template>
<script setup lang="ts">
import axios from "axios";
import type { filmList } from "@/types/search";
import { onMounted, ref } from "vue";
import { Search } from "@element-plus/icons-vue";

let tableData = ref<filmList>();

const handleClick = () => {
  console.log("click");
};
let input3 = ref();
let select = ref();
let load = ref(false);
onMounted(() => {
  load.value = true;
  axios
    .get("/search", {
      params: {
        keyWord: input3,
      },
    })
    .then((res) => {
      tableData.value = res.data;
      load.value = false;
      console.log(res.data);
      console.log(tableData.value);
    });
});
</script>

<style lang="scss" scoped></style>
