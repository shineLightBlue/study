<!-- 事件绑定 -->
<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);

function dec() {
  count.value--;
}

function inc() {
  count.value++;
}
</script>
<template>
  <input type="button" value="-" @click="dec" />
  <h2>{{ count }}</h2>
  <input type="button" value="+" @click="inc" />
</template>
