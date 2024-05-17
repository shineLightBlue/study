<template>
  <div class="home">
    <!-- <HelloWorld msg="abc" v-model="test" @change="fun" v-model:name="active" v-model:age="menu" /> -->
    <div>{{ obj }}</div>
    <button @click="add">添加属性</button>
  </div>
</template>

<script setup>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { ref,watch } from 'vue'
const test = ref(100)
const abc = ref('abc')
const active = ref([1, 2, 3, 4, 5])
const menu = ref(['苹果', '西瓜'])
const obj = ref({
  name: 'ken',
  age: 20,
  address: {
    province: '广东',
    city: '深圳'
  }
})
function fun(v) {
  console.log(v)
}
function add() {
  obj.value.name = 'tom'
  obj.value.address.city='广州'
  obj.value.address.district='南山'
}
watch(obj,(newValue,oldValue)=>{
  console.log(newValue.address,oldValue.address)
},{
  deep:true
})
</script>
