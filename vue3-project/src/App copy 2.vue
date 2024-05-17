<script setup>
import { ActionSheet } from "vant";
import { reactive, ref, computed, watch } from "vue";
const count = ref(0);
const proxy = reactive({});
const raw = { a: 123 };
console.log(proxy);
proxy.nested = raw;
console.log(proxy);
console.log(proxy.nested);
console.log(proxy.nested == raw);
proxy.nested["ccc"] = 555;
console.log(proxy.nested);
console.log(raw);
raw["bbb"] = 333;
console.log(proxy.nested);
console.log(raw);
</script>

<template>
  <ActionSheet></ActionSheet>
  {{ count }}
</template>

<style scoped>
</style>
