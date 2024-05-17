<script setup lang="ts">
import { ref, computed } from "vue";
const firstName = ref("三");
const lastName = ref("张");

// 计算属性
const fullName = computed(() => {
  console.log("enter...");
  return lastName.value + firstName.value;
});
</script>

<template>
  <h2>{{ fullName }}</h2>
  <h2>{{ fullName }}</h2>
  <h2>{{ fullName }}</h2>
  <h2>{{ fullName }}</h2>
</template>
