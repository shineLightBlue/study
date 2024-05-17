<template>
  <div class="a6p31">
    <input type="text" v-model="user.name" />
    <input type="text" v-model="user.age" />
  </div>
</template>
<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import axios from "../api/request";

// const user = reactive({ name: "", age: 0 });
const user = ref({ name: "", age: 0 });
// watch(
//   () => user.name,
//   (newValue, oldValue) => {
//     console.log(newValue, oldValue);
//   }
// );
watch(
  user,
  async (newValue, oldValue) => {
    const res = await axios.get("/api/students");
    console.log(res);
    console.log(newValue, oldValue);
  },
  {
    deep: true,
    immediate: true,
  }
);
</script>
<style scoped>
.a6p31 {
  height: 100%;
  background-color: rgb(255, 236, 220);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='24' y='12' font-size='14' font-family='system-ui, sans-serif' text-anchor='middle' dominant-baseline='middle'%3EA6P31%3C/text%3E%3C/svg%3E");
  padding: 30px;
  box-sizing: border-box;
}
</style>
