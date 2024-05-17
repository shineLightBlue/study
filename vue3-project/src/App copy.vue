<script setup>
import { reactive, ref, computed, watch } from "vue";
const count = ref(0);
const name = ref("cp");
const state = ref({ count: 222 });
watch(
  state,
  () => {
    console.log("数据变化了");
  },
  {
    deep: true,
  }
);
const changeStateByCount = () => {
  state.value.count++;
};
const doubleCount = computed(() => count.value * 2);
const list = ref([1, 2, 3, 4, 5, 6, 7, 8]);
const filterList = computed(() => list.value.filter((item) => item > 2));
const setCount = () => {
  count.value++;
};
// const state = reactive({
//   msg:'this is msg'
// })
// const setState = ()=>{
//   state.msg = 'this is new msg'
// }
watch(count, (newValue, oldValue) => {
  console.log(`count发生了变化，老值为${oldValue},新值为${newValue}`);
});
watch(
  [count, name],
  ([newCount, newName], [oldCount, oldName]) => {
    console.log(
      `count或者name变化了,[${newCount},${newName}],[${oldCount},${oldName}]`
    );
  },
  {
    immediate: true,
  }
);
</script>

<template>
  {{ state.msg }}
  {{ doubleCount }}
  {{ list }}
  {{ filterList }}
  {{ state.count }}
  <!-- <button @click="setState">change msg</button> -->
  <button @click="setCount">{{ count }}</button>
  <button @click="changeStateByCount">{{ state.count }}</button>
</template>

<style scoped>
</style>
