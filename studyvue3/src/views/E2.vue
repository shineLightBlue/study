<!-- 属性绑定 -->
<script setup lang="ts">
import { ref } from "vue";
const path = ref("/src/assets/vue.svg");
</script>
<template>
  <img :src="path" alt="" />
</template>
