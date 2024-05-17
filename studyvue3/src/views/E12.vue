<script setup lang="ts">
import axios from "../api/request";
import { useRequest } from "vue-request";
import { computed } from "vue"; // data 代表就是 axios 的响应对象
const { data } = useRequest(() => axios.get("/api/students"));
console.log(data);
const students = computed(() => {
  return data?.value?.data.data || [];
});
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
</style>
<template>
  <h3 v-if="students.length === 0">暂无数据</h3>
  <ul v-else>
    <li v-for="s of students" :key="s.id">
      <span>{{ s.name }}</span>
      <span>{{ s.sex }}</span>
      <span>{{ s.age }}</span>
    </li>
  </ul>
</template>
