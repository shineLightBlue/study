<template>
  <input type="text" v-model="name" />
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
const name = useStorage("n");
function useStorage(n: string) {
  const name = ref(sessionStorage.getItem("n") ?? "");
  // 参数1：要监听的数据
  // 参数2：数据变化时要执行的箭头函数
  watch(name, (newValue) => {
    console.log(`数据发生变化了,newValue是${newValue}`);
    sessionStorage.setItem(n, newValue);
  });

  // localStorage    即使浏览器关闭，数据还在
  // sessionStorage  数据工作在浏览器活动期间
  return name;
}
</script>
