<template>
  <a-table :columns="columns" :data-source="students" row-key="id" :pagination="pagination"
    @change="tableChange"></a-table>
</template>

<script setup lang="ts">
import axios from "../api/request";
import { usePagination } from "vue-request";
import { ref, computed } from "vue";
import { PaginationProps } from "ant-design-vue";
const dto = ref({ page: 1, size: 5 });
const { data, total, run } = usePagination(
  (d) => axios.get("/api/students/q", { params: d }),
  {
    defaultParams: [dto.value],
    pagination: {
      currentKey: "page",
      pageSizeKey: "size",
      totalKey: "data.data.total",
    },
  }
);
// 在页号或页大小改变时调用
function tableChange(pagination: PaginationProps) {
  console.log(pagination);
  dto.value.page = pagination.current ?? 1;
  dto.value.size = pagination.pageSize ?? 5;
  run(dto.value);
}
const pagination = computed<PaginationProps>(() => {
  return {
    current: dto.value.page, // 当前页
    pageSize: dto.value.size, // 页大小
    total: total.value, // 总记录数
    showSizeChanger: true, // 显示页大小的下拉列表
    pageSizeOptions: ["1", "2", "3", "4", "5"], // 自定义下拉列表内容
  };
});
const students = computed(() => {
  return data.value?.data.data.list || [];
});
const columns = ref([
  {
    title: "编号",
    dataIndex: "id",
  },
  {
    title: "姓名",
    dataIndex: "name",
  },
  {
    title: "性别",
    dataIndex: "sex",
  },
  {
    title: "年龄",
    dataIndex: "age",
  },
]);
</script>

<style></style>
