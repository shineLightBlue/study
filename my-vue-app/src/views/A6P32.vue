<template>
  <div class="a6p32">{{ userInfo.count }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>
<script setup lang="ts">
import { useUserInfo } from '../store/UserInfo'
const userInfo = useUserInfo();
const increment = () => {
  userInfo.increment()
}
const decrement = () => {
  userInfo.decrement()
}
</script>
<style scoped>
.a6p32 {
  height: 100%;
  background-color: rgb(255, 236, 220);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='24' y='12' font-size='14' font-family='system-ui, sans-serif' text-anchor='middle' dominant-baseline='middle'%3EA6P32%3C/text%3E%3C/svg%3E");
  padding: 20px;
  box-sizing: border-box;
}
</style>