<template>
  <input type="text" placeholder="请输入姓名" v-model="dto.name" />
  <select v-model="dto.sex">
    <option value="" selected>请选择性别</option>
    <option value="男">男</option>
    <option value="女">女</option>
  </select>
  <input type="text" placeholder="请输入年龄范围" v-model="dto.age" />
  <br />
  <input type="text" placeholder="请输入页码" v-model="dto.page" />
  <input type="text" placeholder="请输入页大小" v-model="dto.size" />
  <input type="button" value="搜索" @click="search" />
  <hr />
  <h3 v-if="students.length === 0">暂无数据</h3>
  <ul v-else>
    <li v-for="s of students" :key="s.id">
      <span>{{ s.name }}</span>
      <span>{{ s.sex }}</span>
      <span>{{ s.age }}</span>
    </li>
  </ul>
  <hr />
  总记录数{{ total }} 总页数{{ totalPage }}
</template>
<script setup lang="ts">
lll
import { computed, ref } from "vue";
import axios from "../api/request";
import { usePagination } from "vue-request";
const dto = ref({ name: "", sex: "", age: "", page: 1, size: 5 });
const { data, total, totalPage, run } = usePagination(
  (d) => axios.get("/api/students/q", { params: d }), // 箭头函数
  {
    defaultParams: [dto.value], // 默认参数, 会作为参数传递给上面的箭头函数
    pagination: {
      currentKey: "page", // 指明当前页属性
      pageSizeKey: "size", // 指明页大小属性
      totalKey: "data.data.total", // 指明总记录数属性
    },
  } // 选项
);
const students = computed(() => {
  return data?.value?.data.data.list || [];
});
function search() {
  run(dto.value); // 会作为参数传递给usePagination的箭头函数
}
</script>
<style scoped>
ul li {
  list-style: none;
  font-family: "华文行楷";
}

li span:nth-child(1) {
  font-size: 24px;
}
li span:nth-child(2) {
  font-size: 12px;
  color: crimson;
  vertical-align: bottom;
}
li span:nth-child(3) {
  font-size: 12px;
  color: darkblue;
  vertical-align: top;
}
input,
select {
  width: 100px;
}
</style>
