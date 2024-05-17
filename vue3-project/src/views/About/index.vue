<script setup>
import { ref } from 'vue'
import axios from 'axios';
import {onMounted} from 'vue'
const brand = ref([])
const getBrand = ()=>{
  axios.get('http://110.41.153.53:3000/brand').then(res => {
    console.log(res);
    brand.value = res.data
  })
}
onMounted(() => getBrand())
</script>

<template>
  <div class="example">
    About
    About
    About
    About
    About
    <div v-for="brand in brand" :key="brand.id">
      品牌名称：{{brand.brand_name}}
      <p>公司名称：{{ brand.company_name }}</p>
      <p>简介：{{ brand.description }}</p>
      <p>订单数量：{{ brand.ordered }}</p>
    </div>
    <RouterLink to="/">home</RouterLink>
  </div>
</template>
<style scoped>
.example {
  color: red;
}
</style>