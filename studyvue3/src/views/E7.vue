<script setup lang="ts">
import axios from "../api/request";
import { ref, onMounted } from "vue";
const count = ref(0);

async function getStudents() {
  // const resp = await axios.get(`${import.meta.env.VITE_BACKEND_API_BASE_URL}/api/students`)
  //   console.log(import.meta);
  const resp = await axios.get("/api/students");
  console.log(resp.data.data.length);
  count.value = resp.data?.data.length;
}

onMounted(() => {
  // 页面组件加载完成后执行
  getStudents();
});
</script>
<template>
  <h2>学生人数为 {{ count }}</h2>
</template>
