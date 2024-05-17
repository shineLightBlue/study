<script setup>
import { ref } from 'vue'
import axios from 'axios';
import {onMounted} from 'vue'
import {useRouter} from 'vue-router'
import One from '../../components/One.vue'
const brand = ref([])
const getBrand = ()=>{
  axios.get('http://110.41.153.53:3000/brand').then(res => {
    console.log(res);
    brand.value = res.data
  })
}
const router = useRouter()
onMounted(() => getBrand())
</script>

<template>
  <div class="example">
    Home
    Home
    Home
    Home
    Home
    <div v-for="brand in brand" :key="brand.id">
      品牌名称：{{brand.brand_name}}
      <p>公司名称：{{ brand.company_name }}</p>
      <p>简介：{{ brand.description }}</p>
      <p>订单数量：{{ brand.ordered }}</p>
    </div>
    <RouterLink to="/about">about</RouterLink>
    <One></One>
  </div>
</template>
<style scoped>
.example {
  color: red;
}
.example .example2 {
  color: blue;
}
</style>