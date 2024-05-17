<template>
  <h2 class="ref">{{ u1.name }}</h2>
  <h2 class="reactive">{{ u2.name }}</h2>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
const u1 = ref({ name: "李四" });
const u2 = reactive({ name: "张三" });
function test() {
  console.log(u1.value);
  console.log(u2);
}
test();
</script>

<style>
.ref {
  color: lightcoral;
}
.reactive {
  color: deepskyblue;
}
</style>
