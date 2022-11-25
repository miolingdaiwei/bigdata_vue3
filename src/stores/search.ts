import { ref } from "vue";
import { defineStore } from "pinia";
import type { filmList } from "@/types/search";
import request from "@/api/index";

export const useSearchStore = defineStore("search", () => {
  const tableData = ref<filmList>();
  const tableDataReal = ref<filmList>();
  const index = ref(0);

  const getSearch = async (keyWord: string) => {
    const res = await request<filmList>({
      url: "/search",
      method: "get",
      params: {
        keyWord: keyWord,
      },
    });
    tableData.value = res;
    tableDataReal.value = res;
    tableData.value?.forEach((item) => {
      item.actorList = item.actorList.slice(0, 2);
      item.scriptWriterList = item.scriptWriterList.slice(0, 2);
    });
  };

  const getDetail = (rowKey: string) => {
    tableDataReal.value?.forEach((item, ind) => {
      if (item.rowKey === rowKey + "") {
        index.value = ind;
      }
    });
  };
  return { tableData, getSearch, getDetail, index, tableDataReal };
});
