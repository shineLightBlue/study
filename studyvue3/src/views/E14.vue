<script lang="ts" setup>
import Child1 from "../components/Child1.vue";
</script>
<!-- 父组件 -->
<template>
  <Child1 name="张三" country="中国" avatar="/src/assets/vue.svg"></Child1>
  <Child1 name="李四" country="印度" avatar="/vite.svg"></Child1>
  <Child1 name="王五" country="韩国"></Child1>
</template>
